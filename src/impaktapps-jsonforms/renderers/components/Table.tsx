import {
  MRT_ColumnFiltersState,
  MRT_PaginationState,
  MRT_SortingState,
  useMaterialReactTable,
  MaterialReactTable,
} from "material-react-table";
import { Box, IconButton, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState, useContext, memo, useMemo } from "react";
import { composePaths } from "@jsonforms/core";
import {
  JsonFormsDispatch,
  useJsonForms,
  withJsonFormsControlProps,
} from "@jsonforms/react";
import { DataContext } from "../context/Context";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import { ExportToCsv } from "export-to-csv";
import { inputProps } from "../interface/inputfieldProps";
import _ from "lodash";
import ComponentWrapper from "../common/ComponentWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { getComponentProps } from "../common/getComponentProps";
import SelectAllIcon from "@mui/icons-material/PlaylistAddCheck";
let pevFormData = [];
let tableSelectedValue = {};
let selectActive: boolean = false;
export const Table = function ({
  data,
  uischema,
  path,
  schema,
  renderers,
  rootSchema,
}: inputProps) {
  const uischemaData = uischema.config.main;
  const ctx = useJsonForms();
  const {
    theme,
    pageName,
    permissions,
    serviceProvider,
    setFormdata,
    formData,
  } = useContext(DataContext);
  const fieldName = getFieldName(path);
  const [tableData, setTableData] = useState(data || []);
  const [tableLoading, setTableLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(50);
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  useEffect(() => {
    const updateTableData = () => {
      setIsRefetching(true);
      pevFormData = data;
      serviceProvider(
        ctx,
        {
          ...uischemaData,
          onClick: uischemaData.lazyLoadFunction || "onPaginationChange",
        },
        {
          event: { _reactName: "onClick" },
          path,
          ...uischemaData.additionalData,
          paramValue: {
            pagination,
            path,
            globalFilter,
            columnFilters,
            sorting,
          },
        }
      ).then((res: any) => {
        if (uischemaData.Selection) {
          pevFormData?.map((e) => {
            if (e?.[uischemaData.selectKey || "isSelect"]) {
              tableSelectedValue[e.id] = true;
            }
          });

          const updatedData = res?.data?.map((e) => {
            if (tableSelectedValue[e.id] || selectActive) {
              return { ...e, [uischemaData.selectKey || "isSelect"]: true };
            }
            return e;
          });
          setFormdata((pre) => {
            return {
              ...pre,
              [path]: updatedData,
            };
          });
          setTableData(updatedData || []);
          setIsRefetching(false);
          setTableLoading(false);
          setRowCount(res?.meta?.totalRowCount || 50);
        } else {
          setFormdata((pre) => {
            return {
              ...pre,
              [path]: res?.data || [],
            };
          });
          setTableData(res?.data || []);
          setIsRefetching(false);
          setTableLoading(false);
          setRowCount(res?.meta?.totalRowCount || 50);
        }
      });
    };
    if (uischemaData.lazyLoading) {
      updateTableData();
    }
  }, [
    pagination.pageIndex,
    pagination.pageSize,
    globalFilter,
    sorting,
    columnFilters,
  ]);
  useEffect(() => {
    // if (!uischemaData.lazyLoading) {
      setTableData(data || []);
    // }
  }, [data]);

  useEffect(() => {
    if (!uischemaData.lazyLoading) {
      setTableLoading(true);
      if (!!data) {
        setTableLoading(false);
      }
      setTimeout(() => {
        setTableLoading(false);
      }, 1000);
    }
  }, [path, pageName]);
  const csvOptions = getCSVoptions(uischemaData, uischema, pageName);
  const allowedField = uischema?.elements?.map((elem) => elem.accessorKey);
  // const csvExporter = new ExportToCsv(csvOptions);
  const handleExportRows = (rows: any[]) => {
    // csvExporter.generateCsv(
    //   rows.map((row) => {
    //     let finalObj = {};
    //     Object.keys(row.original).forEach((key) => {
    //       if (row.original[key] === undefined || row.original[key] === null) {
    //         row.original[key] = "";
    //       }
    //       if (allowedField.indexOf(key) > -1) {
    //         finalObj[key] = row.original[key];
    //       }
    //     });
    //     return finalObj;
    //   })
    // );
  };
  const tableTheme = useMemo(
    () => createTheme(tableStyle(theme)),
    [theme.myTheme]
  );

  const columns = createColums(uischema, path, schema, renderers);
  const SelectAllHandle = () => {
    let selectedData = [];
    if (selectActive) {
      selectActive = false;
      selectedData = data.map((e) => {
        return { ...e, [uischemaData.selectKey || "isSelect"]: false };
      });
    } else {
      selectActive = true;
      selectedData = data.map((e) => {
        return { ...e, [uischemaData.selectKey || "isSelect"]: true };
      });
    }
    setFormdata((pre) => {
      return { ...pre, [path]: selectedData };
    });
  };
  const commonTableProperties = {
    columns: uischema.elements ? columns : [],
    data: data ? tableData : [],
    enableColumnResizing: uischemaData?.disableColumnResizing ? false : true,
    state: uischemaData.lazyLoading
      ? {
          isLoading: tableLoading,
          pagination,
          columnFilters,
          globalFilter,
          showProgressBars: isRefetching,
          sorting,
        }
      : { isLoading: tableLoading },
    enableRowOrdering: uischemaData?.enableDrag ? true : false,
    //@ts-ignore
    muiTableBodyRowDragHandleProps: ({ table }) => ({
      onDragEnd: () => {
        const { draggingRow, hoveredRow } = table.getState();
        const draggableTableData = _.cloneDeep(tableData)
        if (hoveredRow && draggingRow) {
          draggableTableData.splice(
            hoveredRow.id,
            0,
            draggableTableData.splice(draggingRow.index, 1)[0]
          );
          setTableData(draggableTableData);
        }
      },
    }),
    enableGlobalFilter: true,
    enableStickyFooter: true,
    enableStickyHeader: true,
    displayColumnDefOptions: { "mrt-row-actions": { minSize: 150 } },

    renderTopToolbarCustomActions: ({ table }) => {
      return (
        <>
          {!uischemaData.disableAction && (
            <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {uischemaData.Selection && (
                <IconButton
                  disabled={table.getPrePaginationRowModel().rows.length === 0}
                  size="small"
                  color={selectActive ? "primary" : "inherit"}
                  title="Export All Rows"
                  sx={{
                    paddingTop: { sx: "45px", sm: "auto" },
                  }}
                  onClick={() => SelectAllHandle()}
                >
                  <SelectAllIcon />
                </IconButton>
              )}
              <IconButton
                disabled={table.getPrePaginationRowModel().rows.length === 0}
                size="small"
                title="Export All Rows"
                sx={{
                  paddingTop: { sx: "45px", sm: "auto" },
                }}
                onClick={() =>
                  handleExportRows(table.getPrePaginationRowModel().rows)
                }
              >
                <FileDownloadIcon />
              </IconButton>
            </Box>
          )}
        </>
      );
    },
    muiTableHeadCellProps: {
      sx: (uischema?.config.defaultStyle ||
        uischema?.config?.style?.tableHeadstyle) && {
        fontWeight: "normal",
        fontSize: "14px",
        background: "inherit",
        ...uischema?.config?.style?.tableHeadstyle,
      },
    },
    muiTableFooterCellProps: {
      sx: (uischema?.config.defaultStyle ||
        uischema?.config?.style?.tableFootertyle) && {
        fontWeight: "normal",
        fontSize: "14px",
        background: "green",
        color: "white",
        ...uischema?.config?.style?.tableFootertyle,
      },
    },
    muiTableBodyProps: {
      sx: (uischema?.config.defaultStyle ||
        uischema?.config?.style?.tableBodystyle) && {
        "& tr:nth-of-type(odd)": {
          backgroundColor: theme.myTheme.palette.primary.main,
        },
        "& tr:nth-of-type(even)": {
          backgroundColor: theme.myTheme.palette.background.iconButton,
        },
        ...uischema?.config?.style?.tableBodystyle,
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: (uischema?.config.defaultStyle ||
        uischema?.config?.style?.tablePaperstyle) && {
        borderRadius: "0",
        border: "10px dashed inherit",
        ...uischema?.config?.style?.tablePaperstyle,
      },
    },
  };
  const lazyLoadTable =  {
    ...commonTableProperties,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,

    manualPagination: true,

    manualSorting: true,
    manualFiltering: true,
    rowCount: rowCount,
  };
const renderTable = useMaterialReactTable( uischemaData.lazyLoading ?  lazyLoadTable:commonTableProperties)
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        overflowX: "auto",
        ...theme.DataGridStyle,
        ...uischema.config.style,
      }}
    >
      <ThemeProvider theme={tableTheme}>
        <ComponentWrapper
          {...getComponentProps(
            `${pageName}:${fieldName}`,
            permissions,
            schema,
            rootSchema
          )}
        >
          <MaterialReactTable
            table={
              renderTable
            }
          />
        </ComponentWrapper>
      </ThemeProvider>
    </Box>
  );
};

export default withJsonFormsControlProps(Table);

export function createColums(
  uischema: any,
  path: string,
  schema: any,
  renderers: any
) {
  const columns = uischema?.elements?.map((e: any, i: number) => {
    return {
      accessorKey: e.accessorKey,
      header: e.header,
      size: e.size,
      Cell: ({ cell, column }) => {
        if (e.widget) {
          const childPath = composePaths(path, `${cell.row.index}`);
          const widget = _.cloneDeep(e.widget);

          widget.config.main.additionalData = {
            ...widget?.config?.main?.additionalData,
            tableButtonPath: e.accessorKey,
            rowData: cell.row.original,
          };
          return (
            <Box   sx={{ justifyContent: "space-around", display: "flex" }} key={childPath+(Math.random()*100)}>
              <JsonFormsDispatch
                schema={schema}
                uischema={{ ...widget }}
                path={childPath}
                key={childPath}
                renderers={renderers}
              />
              {e?.widgetWithData && (
                <Box
                key={childPath}
                  sx={{
                    marginLeft: "10px",
                    display: "flex",
                    textAlign: "left",
                    alignItems: "center",
                  }}
                >
                  {cell.getValue()}
                </Box>
              )}
            </Box>
          );
        }

        return (
          <Box
            sx={{
              ...e.labelStyle,
            }}
          >
            {cell.getValue()}
          </Box>
        );
      },
    };
  });
  return columns;
}

export function tableStyle(theme): any {
  return {
    palette: {
      mode: theme.myTheme.palette.mode,
      primary: {
        main: theme.myTheme.palette.action.focus,
      },
      secondary: {
        main: theme.myTheme.palette.action.focus,
      },
      info: {
        main: theme.myTheme.palette.action.focus, //add in a custom color for the toolbar alert background stuff
      },
      background: {
        default: theme.myTheme.palette.secondary.main,
      },
    },
    typography: {
      button: {
        textTransform: "none", //customize typography styles for all buttons in table by default
        fontSize: "1.2rem",
      },
    },
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "1.1rem",
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          thumb: {
            color: "white",
          },
        },
      },
    },
  };
}

export function getCSVoptions(
  uischemaData: any,
  uischema: any,
  pageName: string
) {
  return {
    fieldSeparator: uischemaData?.csvOptions?.fieldSeparator || ",",
    quoteStrings: uischemaData?.csvOptions?.quoteStrings || '"',
    decimalSeparator: uischemaData?.csvOptions?.decimalSeparator || ".",
    showLabels: uischemaData?.csvOptions?.showLabels || true,
    useBom: uischemaData?.csvOptions?.useBom || true,
    useKeysAsHeaders: uischemaData?.csvOptions?.useKeysAsHeaders || false,
    headers:
      uischemaData?.csvOptions?.headers ||
      uischema?.elements?.map((c) => c.header),
    filename: uischemaData?.csvOptions?.filename || pageName,
  };
}
