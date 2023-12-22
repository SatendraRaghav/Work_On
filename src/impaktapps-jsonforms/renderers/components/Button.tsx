import React, { memo, useState } from "react";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import { ButtonIcon } from "../common/ButtonIcon";
import { useJsonForms } from "@jsonforms/react";
import { CircularProgress, Tooltip } from "@mui/material";
import ComponentWrapper from "../common/ComponentWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { green } from "@mui/material/colors";
import { inputProps } from "../interface/inputfieldProps";
import LoaderInfo from "../common/LoaderInfo";
import { getComponentProps } from "../common/getComponentProps";
export const ProgressBar = (
  <CircularProgress
    size={24}
    sx={{
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: "-12px",
      marginLeft: "-12px",
    }}
  />
);
export const ImpaktAppsButton = memo(function ({ uischema, path,data ,schema,rootSchema}: inputProps) {
  const uischemaData = uischema?.config?.main;
  const [loading,setLoading] = useState(false)
  const {
    serviceProvider,
    pageName,
    permissions,
    theme,
  } = useContext(DataContext);
  const ctx = useJsonForms();
  const fieldName = getFieldName(path);
  const callServiceProvider=(event:any)=>{
  serviceProvider(ctx,uischemaData, 
    {event, path,...uischemaData.additionalData,setLoading});
  }
  return (
    <>
      <ComponentWrapper
      {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)}
       >
        <Button
         
          fullWidth={true}
          endIcon={
            uischemaData?.endIcon
              ? ButtonIcon(uischemaData?.endIcon, uischemaData)
              : false
          }
          title={uischemaData?.tooltipMessage}
          startIcon={
            uischemaData?.startIcon
              ? ButtonIcon(uischemaData?.startIcon, uischemaData)
              : false
          }
          color={uischemaData?.color}
          sx={ !uischemaData?.enableDefaultStyle ? { ...theme.Buttonstyle, ...uischema?.config?.style }:{}}
          variant={uischemaData?.variant || "contained"}
          size={uischemaData?.size || "medium"}
          disabled={loading || uischemaData?.disabled}
          onKeyDown={(e) => callServiceProvider(e)}
          onClick={(e) => callServiceProvider(e)}
          onPointerEnter={(event) => callServiceProvider(event)}
          onPointerLeave={(event) => callServiceProvider(event)}
          onFocus={(event) => callServiceProvider(event)}
          onBlur={(event) => callServiceProvider(event)}
          onMouseEnter={(event) => callServiceProvider(event)}
        >
          {uischemaData?.name}
          {loading && ProgressBar}
        </Button>
      </ComponentWrapper>
      <LoaderInfo id={path} loading={loading} />
    </>
  );
});
