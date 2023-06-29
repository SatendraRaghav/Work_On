import { ControlProps, LayoutProps, OwnPropsOfEnum, ValidationMode } from "@jsonforms/core";
import { WithInput } from "@jsonforms/material-renderers";
import { ImpaktAppsJsonFormsStore } from "../context/impaktAppsJsonFormsStore";

export interface inputProps extends ControlProps,WithInput{
    uischema:any
   }

   export interface radioInputProps extends ControlProps,OwnPropsOfEnum{
    uischema:any
   }

   export interface layoutProps extends LayoutProps{
    uischema:any
   }
   export interface serviceHolderType {
    [key: string]: (...args: any[]) => any;
   }
   export interface impaktappsJsonformsPropsType  {
    serviceHolder: serviceHolderType
    permissions?: any[];
    styleTheme?: any;
    validationMode?:ValidationMode
   }

export interface HomePropsType {
    serviceHolder: serviceHolderType
    permissions?: any[];
    pageName:string
    validationMode?:ValidationMode
    theme:any
}
export interface additionalDataProps {
    path: string;
    event: any;
    paramValue?: unknown;
    componentUiSchema?: unknown;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>
    additionalData?:any,
  }