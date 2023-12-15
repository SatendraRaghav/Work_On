import React, { memo, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import { ButtonIcon } from "../common/ButtonIcon";
import { useJsonForms } from "@jsonforms/react";
import { IconButton, Tooltip } from "@mui/material";
import ComponentWrapper from "../common/ComponentWrapper";
import { getFieldName } from "../permissions/getFieldName";
import { inputProps } from "../interface/inputfieldProps";
import LoaderInfo from "../common/LoaderInfo";
import { ProgressBar } from "./Button";
import { getComponentProps } from "../common/getComponentProps";

const IconsButton = memo(function ({ uischema, path ,schema,rootSchema}: inputProps) {
  const [loading,setLoading] = useState(false)
  const {
    serviceProvider,
    pageName,
    permissions,
    theme,
  } = useContext(DataContext);
  const uischemaData = uischema?.config?.main;
  const ctx = useJsonForms();
  const myIconComponent = ButtonIcon(uischemaData?.icon, uischema?.config);
  const myStyle = uischemaData?.styleDefault ? theme.IconStyle : {};
  const fieldName = getFieldName(path);
  const callServiceProvider=(event:any)=>{
    serviceProvider(ctx, uischemaData, 
      {event, path,...uischemaData.additionalData,setLoading});
    }
  return (
    <>
    <ComponentWrapper 
          {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)}
    >
      <IconButton
        sx={{ color: uischemaData?.color?"none":"#3949ab", ...myStyle, ...uischema?.config?.style }}
        size={uischemaData?.size || "medium"}
        color={uischemaData?.color}
        disabled={loading}
        
        title={uischemaData?.tooltipMessage}
        onKeyDown={e =>callServiceProvider(e)}
        onClick={e =>callServiceProvider(e)}
        onPointerEnter={(event)=>  callServiceProvider(event)}
        onPointerLeave={(event)=>  callServiceProvider(event)}
        onFocus={(event)=>  callServiceProvider(event)}
        onBlur={(event)=>  callServiceProvider(event)}
        onMouseEnter={(event)=>  callServiceProvider(event)}
      >
        {myIconComponent}
        {loading && ProgressBar}
      </IconButton>
    </ ComponentWrapper >
    <LoaderInfo id={path} loading={loading}/>
    </>
  );
});

export default IconsButton;
