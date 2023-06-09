import { ControlProps, LayoutProps, OwnPropsOfEnum, ValidationMode } from "@jsonforms/core";
import { WithInput } from "@jsonforms/material-renderers";
import { impaktappsJsonformsStore } from "../context/impaktappsJsonformsStore";

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
    objStyle?: any;
    validation?:ValidationMode
   }

export interface HomePropsType {
    serviceHolder: serviceHolderType
    permissions?: any[];
    pageName:string
    validation?:ValidationMode
    theme:any
}
export interface additionalDataProps {
    path: string;
    event: any;
    paramValue?: unknown;
    componentUiSchema?: unknown;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>

  }