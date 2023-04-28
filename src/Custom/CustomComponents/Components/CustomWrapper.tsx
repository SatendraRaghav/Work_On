import React, { useEffect, useMemo, useState, useContext } from "react";
import { ArrayControlProps, findUISchema, composePaths } from "@jsonforms/core";
import { JsonFormsDispatch } from "@jsonforms/react";
import { DataContext } from "../../../Context";
import { Typography, Paper } from "@mui/material";


const Wrapper = ({
  label,
  path,
  schema,
  value,
  uischema,
  uischemas,
  renderers,
  rootSchema,
}: ArrayControlProps | any) => {
  const { dispatch, state } = useContext(DataContext);
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
  return (
    <Paper
      elevation={0}
      sx={{
        height: "auto",
        width:"98%",
        margin: "15px auto ",
        background:"white",
      //  background:"#091f3c",
        borderRadius:"20px",
        ...uischema.value?.style?.wrapperStyle,
     
      }}
    >
      {uischema.label &&
      <Typography
        component={"div"}
        sx={{
          marginBottom: "20px",
          paddingLeft:"20px",
          fontSize: { xs: "16px", sm: "22px" },
          fontFamily:"roboto",
          fontWeight:500,
          // fontWeight: "bold",
          ...uischema.value?.style?.labelStyle,
        }}
      >
        {uischema.label}
      </Typography>
}
      <JsonFormsDispatch
        schema={schema}
        uischema={childUiSchema || uischema}
        path={composePaths(path, `${0}`)}
        key={composePaths(path, `${0}`)}
        renderers={renderers}
      />
    </Paper>
  );
};

export default Wrapper;
