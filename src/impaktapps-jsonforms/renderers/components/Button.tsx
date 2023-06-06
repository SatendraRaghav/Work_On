import React, { memo, useState } from "react";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import { myIcon } from "../common/MyIcon";
import { useJsonForms } from "@jsonforms/react";
import { CircularProgress, Tooltip } from "@mui/material";
import PermissionWrapper from "../permissions/PermissionWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { green } from "@mui/material/colors";
import { inputProps } from "../interface/inputfieldProps";
import LoaderInfo from "../common/LoaderInfo";
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
export const ImpaktAppsButton = memo(function ({ uischema, path }: inputProps) {
  const uischemaData = uischema?.config?.main;
  const [loading,setLoading] = useState(false)
  const {
    serviceProvider,
    id,
    permissions,
    theme,
  } = useContext(DataContext);
  const ctx = useJsonForms();
  const fieldName = getFieldName(path);
  const callServiceProvider=(event:any)=>{
  serviceProvider(ctx, uischemaData, 
    {event, path,rowData:uischemaData.rowData,setLoading});
  }
  return (
    <>
      <PermissionWrapper path={`${id}:${fieldName}`} permissions={permissions}>
          <Button
            fullWidth={true}
            endIcon={
              uischemaData?.endIcon ? myIcon(uischemaData?.endIcon, uischemaData) : false
            }
            title={uischemaData?.tooltipMessage}
            startIcon={
              uischemaData?.startIcon
                ? myIcon(uischemaData?.startIcon, uischemaData)
                : false
            }
            sx={{ ...theme.Buttonstyle, ...uischema?.config?.style }}
            variant={uischemaData?.variant || "contained"}
            size={uischemaData?.size || "medium"}
            disabled={loading}
            onKeyPress={e =>callServiceProvider(e)}
            onClick={e =>callServiceProvider(e)}
            onPointerEnter={(event)=>  callServiceProvider(event)}
            onPointerLeave={(event)=>  callServiceProvider(event)}
            onFocus={(event)=>  callServiceProvider(event)}
            onBlur={(event)=>  callServiceProvider(event)}
            onMouseEnter={(event)=>  callServiceProvider(event)}
          >
            {uischemaData?.name}
            {loading && ProgressBar}
          </Button>
      </PermissionWrapper>
      <LoaderInfo id={path} loading={loading}/>
    </>
  );
});
