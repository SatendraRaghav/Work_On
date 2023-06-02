import React, { useEffect, useMemo, useState, useContext, memo } from "react";
import {
  ArrayControlProps,
  UISchemaElement,
  composePaths,
} from "@jsonforms/core";
import { JsonFormsDispatch, useJsonForms } from "@jsonforms/react";
import { DataContext } from "../context/Context"; 
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const DataTable = memo(function DataTable({
  path,
  schema,
  uischema,
  renderers,
}: ArrayControlProps){
  const { id, setFormdata, theme, commonLogicfunction } =
    useContext(DataContext);
  const [loading, setLoading] = useState<boolean>(true);
  const ctx = useJsonForms();
  useEffect(() => {
    setLoading(true);
    if (ctx.core.data[path]) {
      setLoading(false);
    }
  }, [id, ctx.core.data[path]]);
  const tempColumnComponents = uischema.options.columns.filter((elem: any) => {
    return elem.widget !== "api";
  });
  const columnApi = uischema.options.columns.filter((elem: any) => {
    return elem.widget === "api";
  });
  const columnComponents = tempColumnComponents.map(
    (elem: UISchemaElement | any, i: number) => {
      const childPath = composePaths(path, `${i}`);
      return {
        id: `${Math.floor(Math.random() * 100)}`,
        field: `${elem.field}`,
        headerName: `${elem.headerName}`,
        width: `${elem.width || 120}`,
        renderCell: (cellValues: any) => {
          return (
            <JsonFormsDispatch
              schema={schema}
              uischema={{ ...elem.widget }}
              path={childPath}
              key={childPath}
              renderers={renderers}
            />
          );
        },
      };
    }
  );
  const handleSelectionChange = (selection: any) => {
    const data = JSON.parse(JSON.stringify(ctx.core.data));
    data[`${path}Selected`] = selection;

    const rowData = ctx.core.data[path].filter((elem) => {
      return selection.indexOf(elem.id) !== -1;
    });
    data[`${path}SelectedRowData`] = rowData;
    setFormdata(data);
  };
  const handleCellClick = (param: any, event: any) => {
    event.stopPropagation();

    commonLogicfunction(
      ctx,
      { content: { [param.field]: param.field } },
      {
        additionalData: { path, rowData: param.row, rowAllvalues: param },
        funcName: param.field,
      }
    );
  };
  const gridHeight =
    ctx.core.data[path] && ctx.core.data[path].length > 0
      ? theme.DataGridStyle.height
      : 250;
  return (
    <DataGrid
      rows={ctx.core.data[path] ? ctx.core.data[path] : []}
      columns={
        uischema.options.buttonInStarting
          ? [...columnComponents, ...columnApi]
          : [...columnApi, ...columnComponents]
      }
      pageSize={10}
      onCellClick={handleCellClick}
      sx={{ ...theme.DataGridStyle, height: gridHeight }}
      loading={loading}
      rowsPerPageOptions={[19]}
      pagination={true}
      autoPageSize
      hideFooter={
        ctx.core.data[path] && ctx.core.data[path].length > 0 ? false : true
      }
      experimentalFeatures={{ newEditingApi: true }}
      components={{
        Toolbar: GridToolbar,
      }}
      checkboxSelection={uischema.options.addCheckBoxRow || false}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
      }
      onSelectionModelChange={handleSelectionChange}
      //@ts-ignore
      onRowSelectionModelChange={handleSelectionChange}
    />
  );
});

export default DataTable;
