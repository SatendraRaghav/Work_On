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
import { useImpaktappsJsonformsStore } from "../../renderers/context/useImpaktappsJsonformsStore";
import {
  HomePropsType,
} from "../../renderers/interface/inputfieldProps";

function Home({
  serviceHolder,
  theme,
  permissions,
  validationMode,
  pageName,
}: HomePropsType) {
  const [loading, setLoading] = useState(false);
  const impaktappsJsonformsStore = useImpaktappsJsonformsStore(
    serviceHolder,
    validationMode,
    pageName,
    theme,
    permissions
  );
  const pageSetter = () => {
    impaktappsJsonformsStore.uiSchema && setLoading(true);
    serviceHolder.getService(impaktappsJsonformsStore).then((res: any) => {
      res.setPage().then(() => {
        impaktappsJsonformsStore.setValidation("ValidateAndHide");
        window.scrollTo(0, 0);
        setTimeout(() => {
          setLoading(false);
        }, 100);
      });
    });
  };

  const ctx = useJsonForms();
  const changeHandler = (data: any, errors: any) => {
    impaktappsJsonformsStore.updateFormdata(data);
    impaktappsJsonformsStore.serviceHolder
      .getService({ ...impaktappsJsonformsStore, ctx })
      .then((res: any) => {
        return res?.onChange && res.onChange();
      });
  };
  useEffect(() => {
    pageSetter();
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
