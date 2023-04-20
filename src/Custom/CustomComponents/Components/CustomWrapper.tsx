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
        // boxShadow:"2px 2px 5px gray",
        // padding: "10px 10px",
        width: { xs: "98%", sm: "98%" },
        margin: "auto",
        // maxWidth: "1400px",
        // color: "white",
        background:"white",
        // margin: "auto 5% auto 0",
        // background:`url(${Grad})`,
        // backgroundSize: "100% 100%",
        marginBottom: "20px",
        borderRadius:"20px"
        // ...uischema.value.style.wrapperStyle,
        // background:"linear-gradient(to left, #16113a,#122142)",
        // boxShadow:"2px 2px 5px gray",
      }}
    >
      <Typography
        component={"div"}
        sx={{
          marginBottom: "20px",
          paddingLeft:"15px",
          fontSize: { xs: "16px", sm: "24px" },
          fontFamily:"inter",
          // fontWeight: "bold",
          // ...uischema.value.style.labelStyle,
        }}
      >
        {label}
      </Typography>
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
