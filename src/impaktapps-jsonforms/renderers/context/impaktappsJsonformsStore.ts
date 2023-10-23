import { ValidationMode } from "@jsonforms/core";
import _ from "lodash";
import { NavigateFunction } from "react-router"

export class ImpaktAppsJsonFormsStore {
  setFormdata: React.Dispatch<React.SetStateAction<{}>>
  setUiSchema: React.Dispatch<React.SetStateAction<{}>>
  setSchema: React.Dispatch<React.SetStateAction<{}>>
  setValidation: React.Dispatch<React.SetStateAction<ValidationMode>>
  setNotify: React.Dispatch<React.SetStateAction<{
    Fail: boolean;
    FailMessage: string;
    Success: boolean;
    SuccessMessage: string;
    Info: boolean;
    InfoMessage: string;
  }>>
  setSearchParams: any
  navigate: NavigateFunction|any
  formData: any
  uiSchema: any
  schema: any
  validationMode: ValidationMode
  openNotify: {
    Fail: boolean;
    FailMessage: string;
    Success: boolean;
    SuccessMessage: string;
    Info: boolean;
    InfoMessage: string;
  }
  theme: any
  permissions: any[]
  serviceHolder: any
  pageName: string
  searchParams: any
  newData: any
  setAdditionalErrors:any
  additionalErrors:any
  urlHistory:any
  constructor(
    updateFormdata: React.Dispatch<React.SetStateAction<{}>>,
    setUiSchema: React.Dispatch<React.SetStateAction<{}>>,
    setSchema: React.Dispatch<React.SetStateAction<{}>>,
    setValidation: React.Dispatch<React.SetStateAction<ValidationMode>>,
    setNotify: React.Dispatch<React.SetStateAction<{
      Fail: boolean;
      FailMessage: string;
      Success: boolean;
      SuccessMessage: string;
      Info: boolean;
      InfoMessage: string;
    }>>,
    setSearchParams: any,
    navigate: NavigateFunction,
    formData: any, uiSchema: any, schema: any, validationMode: ValidationMode, openNotify: {
      Fail: boolean;
      FailMessage: string;
      Success: boolean;
      SuccessMessage: string;
      Info: boolean;
      InfoMessage: string;
    }, theme: any, permissions: any[], serviceHolder: any, pageName: string, searchParams: any,
    setAdditionalErrors:any,
    additionalErrors:any,
 
  ) {
    this.setFormdata = updateFormdata;
    this.setUiSchema = setUiSchema;
    this.setSchema = setSchema;
    this.setValidation = setValidation;
    this.setNotify = setNotify;
    this.setSearchParams = setSearchParams;
    this.navigate = navigate;
    this.formData = formData;
    this.uiSchema = uiSchema;
    this.schema = schema;
    this.validationMode = validationMode;
    this.openNotify = openNotify;
    this.theme = theme;
    this.permissions = permissions;
    this.serviceHolder = serviceHolder;
    this.pageName = pageName;
    this.searchParams = searchParams;
    this.setAdditionalErrors = setAdditionalErrors
    this.additionalErrors = additionalErrors}

   updateFormdata(data: any) {

     this.newData = data;
     this.setFormdata(data);


   }



}