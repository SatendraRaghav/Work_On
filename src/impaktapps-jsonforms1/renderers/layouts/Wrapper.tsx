import React, { useEffect, useMemo, useState, useContext, memo } from "react";
import {
  ArrayControlProps,
  findUISchema,
  composePaths,
  UISchemaElement,
} from "@jsonforms/core";
import { JsonFormsDispatch } from "@jsonforms/react";
import { DataContext } from "../context/Context";
import { Typography, Paper, Box, Divider } from "@mui/material";
import { isEmpty } from "lodash";
import Grid2 from "@mui/material/Unstable_Grid2";

const Wrapper = function Wrapper({
  path,
  schema,
  elements,
  uischema,
  uischemas,
  renderers,
  cells,
  rootSchema,
}: ArrayControlProps | any) {
 

  return (
 
      <>
    {uischema?.config?.main?.label && (
        <Box >
          <Typography
            component={"div"}
            sx={{
               padding:"10px",
              paddingLeft:"28px",
             
              fontSize: { xs: "16px", sm: "20px" },
              fontFamily: "roboto",
              fontWeight: 500,
              color:"inherit",

              ...uischema?.config?.style?.labelStyle,
            }}
          >
            {uischema.config?.main?.label}
          </Typography>
          {uischema?.config?.main?.divider && <Divider sx={{paddingTop:"8px",color:"white"}} variant="fullWidth"></Divider>}
        </Box>
      )}
    <Grid2
    container
    xs={uischema?.config?.layout||11}
    rowSpacing={uischema.config?.main?.rowSpacing||2}
    columnSpacing={uischema.config?.main?.columnSpacingSpacing||2}
    gap={uischema.config?.main?.gap}
    spacing={uischema.config?.main?.spacing||2}
    justifyContent="space-around"
      sx={{
        width: "98%",
        margin: "15px auto ",
        // background: "black",
        borderRadius: "20px",
        paddingBottom:uischema.config?.main?.label ?"10px":"auto",
        ...uischema?.config?.style?.wrapperStyle,
      }}
    >
        {!isEmpty(elements) &&
          elements.map((child: UISchemaElement | any, i: number) => {
            return (
              <Grid2
                key={i}
                xs={
                  child?.config?.layout
                    ? child?.config?.layout.xs
                      ? child?.config?.layout.xs
                      : child?.config?.layout
                    : 12
                }
                sm={
                  child?.config?.layout
                    ? child?.config?.layout.sm
                      ? child?.config?.layout.sm
                      : child?.config?.layout
                    : 12
                }
                md={
                  child?.config?.layout
                    ? child?.config?.layout.md
                      ? child?.config?.layout.md
                      : child?.config?.layout
                    : 12
                }
                lg={
                  child?.config?.layout
                    ? child?.config?.layout.lg
                      ? child?.config?.layout.lg
                      : child?.config?.layout
                    : 12
                }
              >
                <JsonFormsDispatch
                  schema={schema}
                  uischema={child}
                  path={path}
                  cells={cells}
                  renderers={renderers}
                />
              </Grid2>
            );
          })}
    </Grid2>
    </>
  );
};

export default Wrapper;
