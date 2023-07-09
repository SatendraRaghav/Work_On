import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import { useEffect, useState, useContext, memo } from "react";
import {
  UISchemaElement,
  composePaths,
} from "@jsonforms/core";
import { JsonFormsDispatch, useJsonForms } from "@jsonforms/react";
import { DataContext } from "../context/Context";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv";
import { inputProps } from "../interface/inputfieldProps";
import _ from "lodash";

export const DataTablePro = function DataTablePro(props: inputProps) {
  const { data, uischema, path,schema,renderers, handleChange } =
  props;
  const uischemaData = uischema.config.main;
  const [tableLoading, setTableLoading] = useState<boolean>(true);
  const [selection, setSelection] = useState({});
  const { id,theme,formData,pageName } = useContext(DataContext);
  useEffect(() => {
    if (data) {
      setTableLoading(false);
    }
    setTimeout(()=>{setTableLoading(false)},1000)
  }, [data]);
  const csvOptions = {
    fieldSeparator: uischemaData?.csvOptions?.fieldSeparator || ",",
    quoteStrings: uischemaData?.csvOptions?.quoteStrings || '"',
    decimalSeparator: uischemaData?.csvOptions?.decimalSeparator || ".",
    showLabels: uischemaData?.csvOptions?.showLabels || true,
    useBom: uischemaData?.csvOptions?.useBom || true,
    useKeysAsHeaders: uischemaData?.csvOptions?.useKeysAsHeaders || false,
    headers:
      uischemaData?.csvOptions?.headers ||
      uischemaData?.columns?.dataColumns?.map((c) => c.header),
    filename: uischemaData?.csvOptions?.filename || id||pageName,
  };
  const allowedField = uischemaData?.columns?.dataColumns?.map(
    (elem) => elem.accessorKey
  );
  
  useEffect(() => {
    const selectedRows = data?.filter((e, i) => {
      if (selection[i]) {
        return selection[i];
      }
      return false;
    });
   data && selectedRows.length > 0 && handleChange(`${path}SelectedRowData`,{id:selection,data:selectedRows} );
  }, [selection]);
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
  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="myDiv">
      <MaterialReactTable
        columns={uischemaData?.columns?.dataColumns}
        data={data?data:[]}
        enableColumnResizing
        state={{
          isLoading: tableLoading,
          rowSelection:formData[`${path}SelectedRowData`]?.id?formData[`${path}SelectedRowData`].id:[],
        }}
        onRowSelectionChange={setSelection}
        enableRowActions={
          uischemaData?.columns?.actionColumns?.length > 0 ? true : false
        }
        enableRowSelection
        enableGlobalFilter
        enableStickyFooter
        enableStickyHeader
        displayColumnDefOptions={{ "mrt-row-actions": { minSize: 150 } }}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
            {uischemaData?.columns?.actionColumns?.map(
              (elem: UISchemaElement | any, i: number) => {
                const childPath = composePaths(path, `${i}`);
                const widget = _.cloneDeep(elem.widget);
                widget.config.main.additionalData = {
                  ...widget.config.main?.additionalData,
                  rowData: row.original,
                };
                return (
                  <JsonFormsDispatch
                    schema={schema}
                    uischema={{ ...widget }}
                    path={childPath}
                    key={childPath}
                    renderers={renderers}
                  />
                );
              }
            )}
          </Box>
        )}
        positionActionsColumn="last"
        renderTopToolbarCustomActions={({ table }) => (
          <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
                !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
              }
              onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
              startIcon={<FileDownloadIcon />}
              variant="contained"
            >
              Selected
            </Button>
          </Box>
        )}
      />
    </div>
  );
};

export default DataTablePro;
