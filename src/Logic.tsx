import { JsonFormsStateContext, useJsonForms } from "@jsonforms/react";

import { UserMasterRecords } from "./Services/UserMasterLogic";

import { UserMasterForm } from "./Services/UserMasterForm";
import { RoleMasterForm } from "./Services/RoleMasterForm";
import { RoleMasterRecords } from "./Services/RoleMasterRecords";
import { CycleRecords } from "./Services/ProgramCycle/CycleRecords";
import { CycleForm } from "./Services/ProgramCycle/CycleForm";
import { MasterForm } from "./Services/ProgramMaster/MasterForm";
import { MasterRecords } from "./Services/ProgramMaster/MasterRecords";
import { PositionMasterForm } from "./Services/PositionMasterForm";
import { PositionMasterRecords } from "./Services/PositionMasterRecords";
import { PositionTypeMasterForm } from "./Services/PositionTypeMasterForm";
import { PositionTypeMasterRecords } from "./Services/PositionTypeMasterRecords1";
import { RolePermissionForm } from "./Services/RolePermissionMasterForm";
import { RolePermissionRecords } from "./Services/RolePermissionMasterRecords";
import Home from "./Services/Login";
import { error } from "./Services/Error";
import { ExternalData } from "./Services/ExternalData";
import { PayoutProcessing } from "./Services/PayoutProcessing";
import { PayoutReview } from "./Services/PayoutReview";
import { InvoiceGeneration } from "./Services/InvoiceGeneration";
// import { ReportTemplate } from "./Services/ReportTemplate/ReportTemplate";
import { myService } from "./service/service";
import { ReportTemplate1 } from "./Services/Template/ReportTemplate1";
import { TemplateMaster } from "./Services/Template/TemplateMaster";
import Profile from "./Services/Profile";
export let navigator :any ;

export const objFunc = {
  getServices:  (
    pageName?: string,
    ctx?: any,
    setFormdata?: any,
    setUiSchema?: any,
    setSchema?: any,
    navigate?: any,
    otherData?: any
  ) => {
    navigator = navigate;
    if (pageName === "Profile") {
      return Profile(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "PositionTypeMaster") {
      return PositionTypeMasterForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "PositionMaster") {
      return PositionMasterForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "RoleMasterRecords") {
      return RoleMasterRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "UserMaster") {
      return UserMasterForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "RoleMaster") {
      return RoleMasterForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "UserMasterRecords") {
      return UserMasterRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "RolePermission") {
      return RolePermissionForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "RolePermissionRecords") {
      return RolePermissionRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "PositionTypeMasterRecords") {
      return PositionTypeMasterRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "PositionMasterRecords") {
      return PositionMasterRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "CycleRecords") {
      return CycleRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "CycleForm") {
      return CycleForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "ExternalData") {
      return ExternalData(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "PayoutReview") {
      return PayoutReview(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "PayoutProcessing") {
      return PayoutProcessing(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "InvoiceGeneration") {
      return InvoiceGeneration(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "MasterForm") {
      return MasterForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    if (pageName === "MasterRecords") {
      return MasterRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData
      );
    }
    // console.log(pageName)
    if(pageName.startsWith('template')){
  
          return  ReportTemplate1(ctx,setFormdata,setUiSchema,setSchema,navigate,otherData);

        }
    
  }
  
    // return error(ctx, setFormdata, setUiSchema, setSchema, navigate, otherData);
  };
export const HomeObjFunc = {
  getServices: (
    pageName?: string,
    ctx?: any,
    setFormdata?: any,
    setUiSchema?: any,
    setSchema?: any,
    navigate?: any,
    otherData?: any
  ) => {
    navigator = navigate;
    return Home(ctx, setFormdata, setUiSchema, setSchema, navigate, otherData);
  },
};
   

