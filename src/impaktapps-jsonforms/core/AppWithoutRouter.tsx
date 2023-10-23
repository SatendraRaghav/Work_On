import React, { useState, useEffect } from "react";
import { JsonForms } from "@jsonforms/react";
import { materialCells } from "@jsonforms/material-renderers";
import renderers from "../renderers";
import { DataProvider } from "../renderers/context/Context";
import { Box } from "@mui/material";
import CommonSkeleton from "../renderers/common/Skeleton";
import { useImpaktAppsJsonFormsStore } from "../renderers/context/useImpaktappsJsonformsStore";
import {
  HomePropsType,
  impaktappsJsonformsPropsType,
} from "../renderers/interface/inputfieldProps";
import { useTheme } from "../styles/StyleFactory";

function AppWithoutRouter({
  serviceHolder,
  permissions,
  styleTheme,
  validationMode,
}: impaktappsJsonformsPropsType) {
  const theme = useTheme(styleTheme);
  const impaktappsJsonformsStore = useImpaktAppsJsonFormsStore(
    serviceHolder,
    validationMode,
    "RouterUnavailable",
    theme,
    permissions
  );
  const callService = () => {
    impaktappsJsonformsStore.uiSchema;
    serviceHolder.getService(impaktappsJsonformsStore).then((res: any) => {
      res.setPage().then(() => {
        window.scrollTo(0, 0);
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
              ...impaktappsJsonformsStore.uiSchema?.pageStyle,
            }}
          >
            <JsonForms
              data={impaktappsJsonformsStore.formData}
              schema={impaktappsJsonformsStore.schema}
              uischema={impaktappsJsonformsStore.uiSchema}
              renderers={renderers}
              cells={materialCells}
              onChange={({ data, errors }) => changeHandler(data, errors)}
              validationMode={impaktappsJsonformsStore.validationMode}
              additionalErrors={impaktappsJsonformsStore.additionalErrors}
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
