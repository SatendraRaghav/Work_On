import MaterialReactTable from "material-react-table";
import { Box, Button, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState, useContext, memo, useMemo } from "react";
import { composePaths } from "@jsonforms/core";
import { JsonFormsDispatch, useJsonForms } from "@jsonforms/react";
import { DataContext } from "../context/Context";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv";
import { inputProps } from "../interface/inputfieldProps";
import _ from "lodash";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";

export const DataTablePro = function DataTablePro({
  data,
  uischema,
  path,
  schema,
  renderers,
  handleChange,
}: inputProps) {
  const uischemaData = uischema.config.main;
  const [tableLoading, setTableLoading] = useState<boolean>(true);
  const [selection, setSelection] = useState({});
  const {  theme, formData, pageName, permissions,openNotify,serviceProvider } = useContext(DataContext);
  const fieldName = getFieldName(path);
  const [tableData, setTableData] = useState(data ? data : []);
  const initialpath = path.split(".")[0]
  useEffect(() => {
    setTableData(data ? data : []);
    setSelection({});
  }, [data,data?.length]);

  useEffect(() => {
    setTableLoading(true);
    if (!!data) {
      setTableLoading(false);
    }
    setTimeout(() => {
      setTableLoading(false);
    }, 1000);
  }, [path, pageName]);

  const csvOptions = {
    fieldSeparator: uischemaData?.csvOptions?.fieldSeparator || ",",
    quoteStrings: uischemaData?.csvOptions?.quoteStrings || '"',
    decimalSeparator: uischemaData?.csvOptions?.decimalSeparator || ".",
    showLabels: uischemaData?.csvOptions?.showLabels || true,
    useBom: uischemaData?.csvOptions?.useBom || true,
    useKeysAsHeaders: uischemaData?.csvOptions?.useKeysAsHeaders || false,
    headers:
      uischemaData?.csvOptions?.headers ||
      uischema?.elements?.map((c) => c.header),
    filename: uischemaData?.csvOptions?.filename  || pageName,
  };
  const allowedField = uischema?.elements?.map(
    (elem) => elem.accessorKey
  );
  useEffect(() => {
    const selectedRows = data && data?.filter((e, i) => {
      if (selection[i]) {
        return selection[i];
      }
      return false;
    });
   
    selectedRows &&
      handleChange(path.split(".").length>1?`${initialpath}.selected`:`${path}Selected`, {
        id: selection,
        data: selectedRows,
      });
  }, [selection]);
  const ctx = useJsonForms()

  const csvExporter = new ExportToCsv(csvOptions);
  const handleExportRows = (rows: any[]) => {
    csvExporter.generateCsv(
      rows.map((row) => {
        let finalObj = {};
        Object.keys(row.original).forEach((key) => {
          if (row.original[key] === undefined || row.original[key] === null) {
            row.original[key] = "";
          }
          if (allowedField.indexOf(key) > -1) {
            finalObj[key] = row.original[key];
          }
        });
        return finalObj;
      })
    );
  };
  const tableTheme = useMemo(
    () =>
      createTheme({
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
                color: "white", //change the color of the switch thumb in the columns show/hide menu to pink
              },
            },
          },
        },
      }),
    [theme.myTheme]
  );
  const columns = uischema?.elements?.map((e, i) => {
    return {
      accessorKey: e.accessorKey,
      header: e.header,
      size:e.size,
      Cell: ({ cell, column }) => {
        if (e.widget) {
          const childPath = composePaths(path, `${cell.row.index}`);
          const widget = _.cloneDeep(e.widget);
        
          widget.config.main.additionalData = {
            ...widget?.config?.main?.additionalData,
            tableButtonPath:e.accessorKey,
            rowData: cell.row.original,
          }
          return (
            <Box sx={{justifyContent:"space-around",display:"flex"}}>
              <JsonFormsDispatch
                schema={schema}
                uischema={{ ...widget }}
                path={childPath}
                key={childPath}
                renderers={renderers}
              />
              {e?.widgetWithData && (
                <Box
                  sx={{
                    marginLeft:"10px",
                    display:"flex",
                   textAlign:"left",
                    alignItems:"center"
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
             ...e.labelStyle
            }}
          >
            {cell.getValue()}
          </Box>
        );
      },
    };
  });
  return (
    <div style={{ width: "100%", overflowX: "auto", ...theme.DataGridStyle,...uischema.config.style }}>
      <ThemeProvider theme={tableTheme}>
      <PermissionWrapper path={`${pageName}:${fieldName}`} permissions={permissions}>
        <MaterialReactTable
          columns={uischema.elements? columns : []}
          data={data ? tableData : []}
          enableColumnResizing={uischemaData?.disableColumnResizing?false:true}
         
          state={{
            isLoading: tableLoading,
            rowSelection:
            //  selection,
            path.split(".").length>1?
            ctx.core.data?.[initialpath]?.selected?.id||[]:
            ctx.core.data?.[`${path}Selected`]?.id||[]
          }}
          enableRowOrdering={uischemaData?.enableDrag ? true : false}
          muiTableBodyRowDragHandleProps={({ table }) => ({
            onDragEnd: () => {
              const { draggingRow, hoveredRow } = table.getState();
              if (hoveredRow && draggingRow) {
                tableData.splice(
                  hoveredRow.id,
                  0,
                  tableData.splice(draggingRow.index, 1)[0]
                );
                setTableData([...tableData]);
              }
            },
          })}

          onRowSelectionChange={setSelection}
          enableRowSelection={uischemaData?.disableSelection?false:true}
          enableGlobalFilter
          enableStickyFooter
          enableStickyHeader
          displayColumnDefOptions={{ "mrt-row-actions": { minSize: 150 } }}
          renderTopToolbarCustomActions={({ table }) => {

            return (
              <>
              {

              !uischemaData.disableAction &&
            <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap"}}>
               <Button
                disabled={table.getPrePaginationRowModel().rows.length === 0}
                size="small"
                title="Export All Rows"
                sx={{
                  ...theme.Buttonstyle,
                  paddingTop: { sx: "45px", sm: "auto" },
                }}
                onClick={() =>
                  handleExportRows(table.getPrePaginationRowModel().rows)
                }
                startIcon={<FileDownloadIcon />}
                variant="contained"
              >
                All Rows
              </Button>
              <Button
                sx={{ ...theme.Buttonstyle, padding: "0 auto" }}
                size="small"
                title="Export All Selected Rows"
                disabled={
                  !table.getIsSomeRowsSelected() &&
                  !table.getIsAllRowsSelected()
                }
                onClick={() =>
                  handleExportRows(table.getSelectedRowModel().rows)
                }
                startIcon={<FileDownloadIcon />}
                variant="contained"
              >
                Selected
              </Button>
            </Box>
          }
            </>
          )}}
          muiTableHeadCellProps={{
            //simple styling with the `sx` prop, works just like a style prop in this example
            sx: (uischema?.config.defaultStyle||uischema?.config?.style?.tableHeadstyle) &&{
              fontWeight: 'normal',
              fontSize: '14px',
              background:"inherit",
              ...uischema?.config?.style?.tableHeadstyle
            },
          }}
          muiTableFooterCellProps={{
            //simple styling with the `sx` prop, works just like a style prop in this example
            sx: (uischema?.config.defaultStyle||uischema?.config?.style?.tableFootertyle) &&{
              fontWeight: 'normal',
              fontSize: '14px',
              background:"green",
              color:"white",
              ...uischema?.config?.style?.tableFootertyle
            },
          }}
          muiTableBodyProps={{
            sx: (uischema?.config.defaultStyle||uischema?.config?.style?.tableBodystyle) &&{

               
              '& tr:nth-of-type(odd)': {
                backgroundColor:  theme.myTheme.palette.primary.main,
              },
              '& tr:nth-of-type(even)': {
                backgroundColor: theme.myTheme.palette.background.iconButton,
              },
              ...uischema?.config?.style?.tableBodystyle
            },
          }}
          muiTablePaperProps={{
            elevation: 0, //change the mui box shado
            sx: (uischema?.config.defaultStyle||uischema?.config?.style?.tablePaperstyle) &&{
              borderRadius: '0',
              border: '10px dashed inherit',
              ...uischema?.config?.style?.tablePaperstyle
            },
          }}
        />
        </PermissionWrapper>
      </ThemeProvider>
    </div>
  );
};

export default DataTablePro;

