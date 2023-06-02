import { JsonFormsStateContext, useJsonForms } from "@jsonforms/react";

import { UserMasterRecords } from "./Services/UserMasterRecords";

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
import Login from "./Services/Login";
import { error } from "./Services/Error";
import { ExternalData } from "./Services/ExternalData";
import { PayoutProcessing } from "./Services/PayoutProcessing";
import { PayoutReview } from "./Services/PayoutReview";
import { InvoiceGeneration } from "./Services/InvoiceGeneration";
import Profile from "./Services/Profile";

import { templateServiceFactory} from "./Services/Template/templateServiceFactory.";
import { GroupMasterRecords } from "./Services/GroupMasterRecords";
import { AgencyMasterRecords } from "./Services/AgencyMasterRecords";
import { AgencyMasterForm } from "./Services/AgencyMasterForm";
import { AgencyBranchRecords } from "./Services/AgencyBranchMasterRecords";
import { AgencyBranchForm } from "./Services/AgencyBranchMasterForm";
import { GroupMasterForm } from "./Services/GroupMasterForm";
import Home from "./Services/Home";
export let navigator: any;
export let myPageName:string;
export const objFunc = {
  getService:  async (
    pageName?: string,
    ctx?: any,
    setFormdata?: any,
    setUiSchema?: any,
    setSchema?: any,
    navigate?: any,
    otherData?: any,
    schema?:any,
    setConfig?:any,
    setAdditionalErrors?:any,
    setNotify?:any
  ) => {
    navigator = navigate;
    myPageName = pageName
    if(pageName==="Home"){
      return Home(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      )
    };
    if (pageName === "Profile") {
      return Profile(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "PositionTypeMaster") {
      return PositionTypeMasterForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "PositionMaster") {
      return PositionMasterForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    
      }
    if(pageName === "GroupMasterRecords"){
      return GroupMasterRecords( ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify)
     
    };
    if(pageName === "UserMaster"){
      return UserMasterForm( ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify)
     
    };
    if(pageName === "AgencyMasterRecords"){
      return AgencyMasterRecords( ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify)
     
    };
    if(pageName === "AgencyMaster"){
      return AgencyMasterForm( ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify)
     
    };
    if(pageName === "AgencyBranchRecords"){
      return AgencyBranchRecords( ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify)
     
    };
    if(pageName === "AgencyBranch"){
      return AgencyBranchForm( ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify)
     
    };
    if (pageName === "RoleMasterRecords") {
      return RoleMasterRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
      };
    if (pageName === "UserMaster") {
      return UserMasterForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
  if(pageName === "GroupMaster"){
      return GroupMasterForm( ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify)
     
    };
    if(pageName === "UserMasterRecords"){
      return UserMasterRecords( ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify)
     
    };
    if (pageName === "RoleMaster") {
      return RoleMasterForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
      };
    if (pageName === "UserMasterRecords") {
      return UserMasterRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "RolePermission") {
      return RolePermissionForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "RolePermissionRecords") {
      return RolePermissionRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "PositionTypeMasterRecords") {
      return PositionTypeMasterRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "PositionMasterRecords") {
      return PositionMasterRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "CycleRecords") {
      return CycleRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "CycleForm") {
      return CycleForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "ExternalData") {
      return ExternalData(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "PayoutReview") {
      return PayoutReview(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "PayoutProcessing") {
      return PayoutProcessing(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "InvoiceGeneration") {
      return InvoiceGeneration(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      );
    };
    if (pageName === "MasterForm") {
      return MasterForm(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify,
      );
    };
    if (pageName === "MasterRecords") {
      return MasterRecords(
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        otherData,
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify,
      
      );
     

    }
      if (pageName.startsWith("template")) {


        return await templateServiceFactory( pageName,
         ctx,
         setFormdata,
         setUiSchema,
         setSchema,
         navigate,
         otherData,
         schema,
         setConfig,
         setAdditionalErrors,
         setNotify,
         ).masterTemplate()
    
       
       }

    return error(  ctx,
      setFormdata,
      setUiSchema,
      setSchema,
      navigate,
      otherData,
      schema,
      setConfig,
      setAdditionalErrors,
      setNotify,);
  
}};
export const HomeObjFunc = {
  getService: async (
    pageName?: string,
    ctx?: any,
    setFormdata?: any,
    setUiSchema?: any,
    setSchema?: any,
    navigate?: any,
    otherData?: any,
    schema?:any,
    setConfig?:any,
    setAdditionalErrors?:any,
    setNotify?:any
  ) => {
    myPageName = pageName
    navigator = navigate;
    return Login(ctx, setFormdata, setUiSchema, setSchema, navigate, otherData,schema,
      setConfig,
      setAdditionalErrors,setNotify);
  },
}
