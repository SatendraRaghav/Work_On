import range from "lodash/range";
import React, { useMemo, useState, useContext } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DataContext, actions } from "../../../Context";
import {  Button, Box, Paper } from "@mui/material";
import {
  ArrayControlProps,
  composePaths,
  findUISchema,
  Helpers,
  ControlElement,
} from "@jsonforms/core";
import { JsonFormsDispatch } from "@jsonforms/react";
import { withJsonFormsControlProps } from "@jsonforms/react";

export const ArrayControl = ({
  data,
  path,
  schema,
  uischema,
  uischemas,
  renderers,
  label,
  rootSchema,
}: ArrayControlProps & any) => {
  const childUiSchema = useMemo(
    () =>
      findUISchema(
        uischemas,
        schema,
        uischema.scope,
        path,
        undefined,
        uischema,
        rootSchema
      ),
    [uischemas, schema, uischema.scope, path, uischema, rootSchema]
  );
  const { dispatch, state } = useContext(DataContext);
  const colo = [{}]
  const data1:any =
    data &&
    range(0, data.length).map((index, i) => {
      const childPath = composePaths(path, `${index}`);
      
      return {
        id: `${Math.floor(Math.random() * 100)}`,
        field: `Column - ${i + 1}`,
        width: "320",
        renderCell: (cellValues: any) => {
          return (
            <div>
              <JsonFormsDispatch
                schema={schema}
                uischema={childUiSchema}
                path={childPath}
                key={childPath}
                renderers={renderers}
              />
              <Button
                color={"error"}
                variant="contained"
                fullWidth
                sx={{ marginBottom: "12px" }}
                onClick={() => {
                  const form = state.formData[`${path}`].filter(
                    (elem: any, ine: number) => {
                      return index !== ine;
                    }
                  );
                  if (window.confirm('Are you sure you wish to delete this item?')){
                  state.formData[path] = form;
                  dispatch({ type: actions.changeUrl })};
                }}
              >
                Delete
              </Button>
            </div>
          );
        },
      };
    });
    const tempData = data1&&data1.map((elem:any,i:number)=>{
     return {"field":elem.field,id:`${i}_${Math.random()*100}`}
    })
    // console.log(tempData)
  // const rowHeight = data && childUiSchema.elements.length;
  return (
    <Paper
      elevation={4}
      sx={{
        backgroundColor: "#DFEBF7",
        padding: "10px 10px",
        width: "90%",
        margin: "auto auto",
      }}
    >
      {data ? (
        <div style={{ height: "600", width: "100%" }}>
          <h1>{label}</h1>

          <Button
            onClick={() => {
              state.formData[`${path}`].push({});
              dispatch({ type: actions.dataChange });
            }}
          >
            Add
          </Button>
          <Box sx={{ height: 60 , width: "100%"}}>
            <DataGrid
              // rowHeight={65 * rowHeight}
              rows={[...data1]}
              columns={[...data1]}
              // columnBuffer={12}
              density={"comfortable"}
              hideFooter={true}
              disableColumnFilter
              components={{
                Toolbar: GridToolbar,
              }}
            />
          </Box>
        </div>
      ) : (
        <>
          <h1>{label}</h1>
          <div style={{ display: "flex" }}>
            <p>No Data Avialable</p>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Button
              onClick={() => {
                state.formData[`${path}`] = [{}];
                dispatch({ type: actions.dataChange });
              }}
            >
              Add
            </Button>
          </div>
        </>
      )}
    </Paper>
  );
};

export const ArrayControlRenderer = ({
  schema,
  uischema,
  data,
  path,
  rootSchema,
  uischemas,
  errors,
}: ArrayControlProps & any) => {
  const controlElement = uischema as ControlElement;
  const labelDescription = Helpers.createLabelDescriptionFrom(
    controlElement,
    schema
  );
  const label = labelDescription.show ? labelDescription.text : "";

  return (
    <ArrayControl
      data={data}
      label={label}
      path={path}
      schema={schema}
      errors={errors}
      uischema={uischema}
      uischemas={uischemas}
      rootSchema={rootSchema}
    />
  );
};

export default withJsonFormsControlProps(ArrayControlRenderer);
