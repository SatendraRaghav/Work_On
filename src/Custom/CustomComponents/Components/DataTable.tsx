import React, { useEffect, useMemo, useState, useContext } from "react";
import {
  ArrayControlProps,
  UISchemaElement,
  composePaths,
} from "@jsonforms/core";
import {
  JsonFormsDispatch,
  useJsonForms,
} from "@jsonforms/react";
import { DataContext, actions } from "../../../Context";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Paper } from "@mui/material";
import { useNavigate,useSearchParams } from "react-router-dom";
import { useStyles } from "../../../Styles/InputField";

const DataTable = ({
  path,
  schema,
  uischema,
  uischemas,
  renderers,
  rootSchema,
  data,
  updateValue
}: ArrayControlProps|any) => {
  const {id, dispatch, state, objFunc,setFormdata,setUiSchema,setSchema } = useContext(DataContext);
  const [loading, setLoading] = useState<boolean>(true);
  const ctx = useJsonForms();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(()=>{
    setLoading(true)
    if(ctx.core.data[path]){
      setLoading(false)
   
    }
  },[id, ctx.core.data[path]])
  const tempColumnComponents = uischema.options.columns.filter((elem:any)=>{
     return elem.widget !== "api"
  })
  const columnApi = uischema.options.columns.filter((elem:any)=>{
    return elem.widget === "api"
 })
  const columnComponents = tempColumnComponents.map(
    (elem: UISchemaElement|any, i: number) => {
      const childPath = composePaths(path, `${i}`);
      return {
        id: `${Math.floor(Math.random() * 100)}`,
        field: `${elem.field}`,
        headerName:`${elem.headerName}`,
        width: `${elem.width||120}`,
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
      }
    }
  );
  const handleSelectionChange = (selection) => {
    const data = JSON.parse(JSON.stringify(ctx.core.data));
    data[`${path}Selected`] = selection;

    const rowData = ctx.core.data[path].filter((elem)=>{
       return selection.indexOf(elem.id)  !== -1;
    })
    data[`${path}SelectedRowData`] = rowData;
    setFormdata(data);
  };
  const handleCellClick = (param: any, event: any) => {
    event.stopPropagation();
    const data:any = [param.row,param,searchParams,setSearchParams];
  
    if (event.target.type) {
      objFunc.getServices(id,ctx,setFormdata,setUiSchema,setSchema,navigate,data)[param.field]()
    }
    
  };
    //@ts-ignore
    const classes = useStyles();
  return (
    // <Paper
    //   elevation={0}
    //   sx={{
    //     height: 500,
    //     backgroundColor: "white",
    //     borderRadius:"20px",
    //     padding: "10px 10px",
    //     width: "95%",
    //     margin: "auto auto",
    //     fontFamily:"roboto",
    //     // ...  uischema.options.tableStyle
    //   }}
    // >
        <DataGrid
          rows={ctx.core.data[path]?ctx.core.data[path]:[]}
          columns={ uischema.options.buttonInStarting?[...columnComponents,...columnApi]:[...columnApi,...columnComponents]}
          pageSize={10}
          onCellClick={handleCellClick}
          sx={{fontFamily:"roboto",border:"1px solid #828f9f",borderRadius:"10px",  height: 500,}}
          classes={{
            root: classes.root,
            header: classes.header,
            row: classes.row,
          }}
          loading={loading}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Toolbar: GridToolbar,
          }}
          checkboxSelection
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          onSelectionModelChange={handleSelectionChange}
          //@ts-ignore
          onRowSelectionModelChange={handleSelectionChange}
          
        />
    
    // </Paper>
  );
};

export default DataTable;
