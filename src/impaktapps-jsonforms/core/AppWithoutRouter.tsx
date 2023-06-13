import React, { useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import { materialCells } from "@jsonforms/material-renderers";
import renderers from "../renderers";
import { DataProvider } from "../../Reducer";
import {
  Box,
} from "@mui/material";
import CommonSkeleton from "../renderers/common/Skeleton";
import { useImpaktappsJsonformsStore } from "../renderers/context/useImpaktappsJsonformsStore";
import { HomePropsType, impaktappsJsonformsPropsType } from "../renderers/interface/inputfieldProps";
import { createStyleTheme } from "../styles/StyleFactory";

function AppWithoutRouter({
  serviceHolder,
  permissions,
  styleTheme,
  validationMode,
}: impaktappsJsonformsPropsType) {
  const theme = createStyleTheme(styleTheme);
  const impaktappsJsonformsStore = useImpaktappsJsonformsStore(
    serviceHolder,
    validationMode,
    "RouterUnavailable",
    theme,
    permissions
  );
  const callService = () => {
    impaktappsJsonformsStore.uiSchema 
    serviceHolder.getService(impaktappsJsonformsStore).then((res: any) => {
      res.setPage().then(() => {
        window.scrollTo(0, 0)
      });
    });
  };
  const changeHandler = (data: any, errors: any) => {
    impaktappsJsonformsStore.setFormdata(data);
  };
  useEffect(() => {
    callService();
  }, [impaktappsJsonformsStore.pageName]);
  return (
    <div>
      {impaktappsJsonformsStore.uiSchema ? (
        <DataProvider impaktappsJsonformsStore={impaktappsJsonformsStore}>
          <Box
            sx={{
              ...theme.pageStyle,
              ...impaktappsJsonformsStore.uiSchema?.stylePage,
            }}
          >
            <JsonForms
              data={impaktappsJsonformsStore.formData}
              schema={impaktappsJsonformsStore.schema}
              uischema={impaktappsJsonformsStore.uiSchema}
              renderers={renderers}
              cells={materialCells}
              onChange={({ data, errors }) => changeHandler(data, errors)}
              validationMode={impaktappsJsonformsStore.updatedValidation}
            />
          </Box>
        </DataProvider>
      ) : (
        <CommonSkeleton />
      )}
    </div>
  );
}

export default AppWithoutRouter;
