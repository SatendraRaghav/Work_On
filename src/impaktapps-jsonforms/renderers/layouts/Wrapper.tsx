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
        width: "98%",
        margin: "15px auto ",
        background: "white",
        padding: "15px 1x",
        borderRadius: "20px",
        ...uischema?.config?.style?.wrapperStyle,
      }}
    >
      {uischema?.config?.main?.label && (
        <Box sx={{ padding: "20px", paddingBottom: "10px" }}>
          <Typography
            component={"div"}
            sx={{
              fontSize: { xs: "16px", sm: "20px" },
              fontFamily: "roboto",
              fontWeight: 500,
              paddingBottom: "20px",
              ...uischema?.config?.style?.labelStyle,
            }}
          >
            {uischema.config?.main?.label}
          </Typography>
          {uischema?.config?.main?.divider && <Divider></Divider>}
        </Box>
      )}
      <Box sx={{ padding: "20px", paddingBottom: "10px" }}>
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
                  // path={path}
                  path={composePaths(path, `${0}`)}
                  cells={cells}
                  renderers={renderers}
                />
              </Grid2>
            );
          })}
      </Box>
    </Box>
  );
};

export default Wrapper;
