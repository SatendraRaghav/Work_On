import MaterialReactTable from "material-react-table";
import { Box, Button } from "@mui/material";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
  memo,
} from "react";
import {
  ArrayControlProps,
  UISchemaElement,
  composePaths,
} from "@jsonforms/core";
import { JsonFormsDispatch, useJsonForms } from "@jsonforms/react";
import { DataContext } from "../context/Context";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { ExportToCsv } from "export-to-csv";
import { getCsvoptions } from "../common/tableComponents";
import { inputProps } from "../interface/inputfieldProps";

export const DataTablePro = memo(function DataTablePro({
  path,
  schema,
  uischema,
  renderers,
  handleChange,
  data,
}: inputProps) {
  const { id, openNotify, setFormdata, theme } = useContext(DataContext);
  const uischemaData = uischema.config.main;
  const [tableLoading, setTableLoading] = useState<boolean>(true);
  const ctx: any = useJsonForms();
  const [selection, setSelection] = useState({})
  useEffect(() => {
    if (uischemaData.allRowsData) {
      setTableLoading(false);
    }
  }, [uischemaData.allRowsData]);
  const csvOptions = getCsvoptions(uischemaData, id);
  const allowedField = uischemaData?.columns?.dataColumns?.map(
    (elem) => elem.accessorKey
  );
  useEffect(()=>{
    const selectedRows =uischemaData?.columns?.dataColumns?.filter((e, i) => {
      if (selection[i]) {
        return selection[i];
      }
      return false;
    });  
    handleChange(path,{id:selection,data:selectedRows})
  },[selection])
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
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      <MaterialReactTable
        columns={uischemaData?.columns?.dataColumns}
        data={uischemaData.allRowsData ? uischemaData.allRowsData : []}
        enableColumnResizing
        state={{ isLoading: tableLoading, rowSelection:data?.id?data.id:[]}}
        onRowSelectionChange={setSelection}
        enableRowActions={
          uischemaData?.columns?.actionColumns?.length > 0 ? true : false
        }
        enableRowSelection
        enableGlobalFilter
        enableStickyFooter
        enableStickyHeader
        displayColumnDefOptions={{ "mrt-row-actions": { minSize: 150 } }}
        positionActionsColumn={"last"}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
            {uischemaData?.columns?.actionColumns?.map(
              (elem: UISchemaElement | any, i: number) => {
                const childPath = composePaths(path, `${i}`);
                const widget = JSON.parse(JSON.stringify(elem.widget));
                widget.config.main.runTimeData  ={...widget.config.main?.runTimeData,rowData: row.original};
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
        renderTopToolbarCustomActions={({ table }) => (
          <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button
              disabled={table.getPrePaginationRowModel().rows.length === 0}
              size="small"
              sx={{ ...theme.Buttonstyle, padding: "0 auto" }}
              onClick={() =>
                handleExportRows(table.getPrePaginationRowModel().rows)
              }
              startIcon={<FileDownloadIcon />}
              variant="contained"
            >
              Export All Rows
            </Button>
            <Button
              sx={{ ...theme.Buttonstyle }}
              size="small"
              disabled={
                !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
              }
              onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
              startIcon={<FileDownloadIcon />}
              variant="contained"
            >
              Export Selected Rows
            </Button>
          </Box>
        )}
      />
    </Box>
  );
});

export default DataTablePro;
