import React from "react";
import ComponentWrapper from "../common/ComponentWrapper";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { memo, useContext, useEffect, useState } from "react";
import { DataContext } from "../context/Context";
import { useJsonForms } from "@jsonforms/react";
import DownloadIcon from "@mui/icons-material/Download";
import { getFieldName } from "../permissions/getFieldName";
import { inputProps } from "../interface/inputfieldProps";
import LoaderInfo from "../common/LoaderInfo";
import { ProgressBar } from "./Button";
import { getComponentProps } from "../common/getComponentProps";
const DownloadFile = memo(function (props: inputProps) {
  const [loading, setLoading] = useState(false);
  const { data, uischema, path, errors, required,schema,rootSchema } = props;
  const uischemaData = uischema.config.main;
  const { serviceProvider, permissions, pageName, theme, setNotify } =
    useContext(DataContext);
  const ctx = useJsonForms();
  const myStyle = uischemaData?.iconStyleDefault ? theme.IconStyle : {};
  const fieldName = getFieldName(path);
  const callServiceProvider = (event: any, value?: unknown) => {
    serviceProvider(ctx, uischemaData, { event, path, setLoading,...uischemaData.additionalData });
  };
  return (
    <>
      <Stack
        direction={"row"}
        alignContent={"baseline"}
        spacing={4}
        sx={{
          ...uischema.config.style,
          width: "100%",
        }}
      >
        <ComponentWrapper
          {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)} >
          <Box
           
            sx={{ paddingTop: "10px", fontFamily: "inherit" }}
            color={errors && "red"}
          >
            {data ? data : `No file uploaded`} <sup>{required && "*"}</sup>
          </Box>
          <IconButton
            title="Download File"
            sx={{
              color: uischemaData?.color
                ? "none"
                : theme.myTheme.palette.text.iconButton || "#3949ab",
              ...myStyle,
              ...uischema?.config?.style,
            }}
            color={uischemaData?.color}
            disabled={data ? false : true}
            
            onClick={(event) => callServiceProvider(event)}
          >
            <DownloadIcon />
            {loading && ProgressBar}
          </IconButton>
        </ComponentWrapper>
      </Stack>
      <LoaderInfo id={path} loading={loading} />
    </>
  );
});

export default DownloadFile;
