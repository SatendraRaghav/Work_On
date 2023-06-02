import { ControlProps, LayoutProps, OwnPropsOfEnum } from "@jsonforms/core";
import { WithInput } from "@jsonforms/material-renderers";

export interface inputProps extends ControlProps,WithInput{
    uischema:any
   }

   export interface radioInputProps extends ControlProps,OwnPropsOfEnum{
    uischema:any
   }

   export interface layoutProps extends LayoutProps{
    uischema:any
   }