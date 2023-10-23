import React, { useState, useEffect } from "react";
import {
  JsonForms,
  useJsonForms,
} from "@jsonforms/react";
import { materialCells } from "@jsonforms/material-renderers";
import renderers from "../../renderers";
import { DataProvider } from "../../renderers/context/Context";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  Stack,
} from "@mui/material";
import CommonSkeleton from "../../renderers/common/Skeleton";
import { useImpaktAppsJsonFormsStore} from "../../renderers/context/useImpaktAppsJsonFormsStore"
import {
  HomePropsType,
} from "../../renderers/interface/inputfieldProps";
import { ErrorObject } from "ajv";

function Home({
  serviceHolder,
  theme,
  permissions,
  validationMode,
  pageName,
}: HomePropsType) {
  const [loading, setLoading] = useState(false);

  const impaktAppsJsonFormsStore = useImpaktAppsJsonFormsStore(
    serviceHolder,
    validationMode,
    pageName,
    theme,
    permissions
  );
  const pageSetter = () => {
    impaktAppsJsonFormsStore.uiSchema && setLoading(true);
    serviceHolder.getService(impaktAppsJsonFormsStore).then((res: any) => {
      res.setPage().then(() => {
        impaktAppsJsonFormsStore.setValidation("ValidateAndHide");
        window.scrollTo(0, 0);
        setTimeout(() => {
          setLoading(false);
        }, 100);
      });
    });
  };

  const ctx = useJsonForms();
  
  const changeHandler = (data: any, errors: any) => {
   
    console.log("data", data)
    impaktAppsJsonFormsStore.updateFormdata(data);
    impaktAppsJsonFormsStore.serviceHolder
      .getService({ ...impaktAppsJsonFormsStore, ctx })
      .then((res: any) => {
        return res?.onChange && res.onChange();
      });
  };
  useEffect(() => {
    pageSetter();
  }, [impaktAppsJsonFormsStore.pageName]);
  return (
    <div>
      {impaktAppsJsonFormsStore.uiSchema ? (
        <DataProvider impaktAppsJsonFormsStore={impaktAppsJsonFormsStore}>
          <Box
            sx={{
              ...theme.pageStyle, 
              ...impaktAppsJsonFormsStore.uiSchema?.pageStyle,
            }}
          >
            <JsonForms
              data={impaktAppsJsonFormsStore.formData}
              schema={impaktAppsJsonFormsStore.schema}
              uischema={impaktAppsJsonFormsStore.uiSchema}
              renderers={renderers}
              cells={materialCells}
              onChange={({ data, errors }) => changeHandler(data, errors)}
              validationMode={impaktAppsJsonFormsStore.validationMode}
              additionalErrors={impaktAppsJsonFormsStore.additionalErrors}
            />

            <Dialog open={loading}>
              <DialogContent>
                <DialogContentText>
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <CircularProgress color="inherit" />
                    <Box sx={{}}>Fetching Data ...</Box>
                  </Stack>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </Box>
        </DataProvider>
      ) : (
        <CommonSkeleton />
      )}
    </div>
  );
}

export default Home;
