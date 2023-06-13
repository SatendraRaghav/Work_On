import React, { useEffect, useMemo, useState, useContext, memo } from "react";
import { ArrayControlProps, findUISchema, composePaths } from "@jsonforms/core";
import { JsonFormsDispatch } from "@jsonforms/react";
import { DataContext } from "../context/Context"; 
import { Typography, Paper, Box, Divider } from "@mui/material";


const Wrapper =  memo(function Wrapper ({
  path,
  schema,
  uischema,
  uischemas,
  renderers,
  rootSchema,
}: ArrayControlProps | any){
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
    <Box
      sx={{
        width:"98%",
        margin: "15px auto",
        background:"white",
         padding:"1x",
        borderRadius:"20px",
        ...uischema?.config?.style?.wrapperStyle,
        
      }}
    >
      {uischema.label &&
      <Box sx={{ 
        paddingTop:"20px",
      paddingLeft:"20px",}}>
      <Typography
        component={"div"}
        sx={{
          fontSize: { xs: "16px", sm: "20px" },
          fontFamily:"roboto",
          fontWeight:500,
            // paddingBottom:"20px",
          ...uischema?.config?.style?.labelStyle,
        }}
      >
        {uischema.label}
      </Typography>
       <Divider></Divider>
      </Box>
}
      <JsonFormsDispatch
        schema={schema}
        uischema={childUiSchema || uischema}
        path={composePaths(path, `${0}`)}
        key={composePaths(path, `${0}`)}
        renderers={renderers}
      />
    </Box>
  );
});

export default Wrapper;
