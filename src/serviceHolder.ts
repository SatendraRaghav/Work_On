import { error } from "./Services/Error";
import Home from "./Services/Home";
import Login from "./Services/Login";
import { CycleForm } from "./Services/ProgramCycle/CycleForm";
import { CycleRecords } from "./Services/ProgramCycle/CycleRecords";
import { MasterForm } from "./Services/ProgramMaster/MasterForm";
import { MasterRecords } from "./Services/ProgramMaster/MasterRecords";
import { dynamicDataType } from "./utils/dynamicDataType";
import { JsonFormsStateContext, useJsonForms } from "@jsonforms/react";
import { UserMasterRecords } from "./Services/UserMasterRecords";
import { UserMasterForm } from "./Services/UserMasterForm";
import { RoleMasterForm } from "./Services/RoleMasterForm";
import { RoleMasterRecords } from "./Services/RoleMasterRecords";
import { PositionMasterForm } from "./Services/PositionMasterForm";
import { PositionMasterRecords } from "./Services/PositionMasterRecords";
import { PositionTypeMasterForm } from "./Services/PositionTypeMasterForm";
import { PositionTypeMasterRecords } from "./Services/PositionTypeMasterRecords1";
import { RolePermissionForm } from "./Services/RolePermissionMasterForm";
import { RolePermissionRecords } from "./Services/RolePermissionMasterRecords";
import { ExternalData } from "./Services/ExternalData";
import { PayoutProcessing } from "./Services/PayoutProcessing";
import { PayoutReview } from "./Services/PayoutReview";
import { InvoiceGeneration } from "./Services/InvoiceGeneration";
import Profile from "./Services/Profile";
import { templateServiceFactory } from "./Services/Template/templateServiceFactory.";
import { GroupMasterRecords } from "./Services/GroupMasterRecords";
import { AgencyMasterRecords } from "./Services/AgencyMasterRecords";
import { AgencyMasterForm } from "./Services/AgencyMasterForm";
import { AgencyBranchRecords } from "./Services/AgencyBranchMasterRecords";
import { AgencyBranchForm } from "./Services/AgencyBranchMasterForm";
import { GroupMasterForm } from "./Services/GroupMasterForm";
export let navigator: any;

export const serviceHolder = {
  getService: async (store: any, dynamicData?: dynamicDataType) => {
    navigator = store.navigate;
    const pageName = store.pageName;
    if (pageName === "start") return Login(store, dynamicData);
    if (pageName === "Home") return Home(store, dynamicData);
    if (pageName === "MasterRecords")
      return MasterRecords(store, dynamicData);
    if (pageName === "MasterForm") return MasterForm(store, dynamicData);
    if (pageName === "CycleForm") return CycleForm(store, dynamicData);
    if (pageName === "CycleRecords")
      return CycleRecords(store, dynamicData);
    if (pageName === "PositionTypeMaster") return PositionTypeMasterForm(store, dynamicData);
    if (pageName === "PositionMaster") return PositionMasterForm(store, dynamicData);
    if (pageName === "GroupMasterRecords") return GroupMasterRecords(store, dynamicData);
    if (pageName === "UserMaster") return UserMasterForm(store, dynamicData);
    if (pageName === "AgencyMasterRecords") return AgencyMasterRecords(store, dynamicData);
    if (pageName === "AgencyMaster") return AgencyMasterForm(store, dynamicData);
    if (pageName === "AgencyBranchRecords") return AgencyBranchRecords(store, dynamicData);
    if (pageName === "AgencyBranch") return AgencyBranchForm(store, dynamicData);
    if (pageName === "RoleMasterRecords") return RoleMasterRecords(store, dynamicData);
    if (pageName === "UserMaster") return UserMasterForm(store, dynamicData);
    if (pageName === "GroupMaster") return GroupMasterForm(store, dynamicData);
    if (pageName === "UserMasterRecords") return UserMasterRecords(store, dynamicData);
    if (pageName === "RoleMaster") return RoleMasterForm(store, dynamicData);
    if (pageName === "UserMasterRecords") return UserMasterRecords(store, dynamicData);
    if (pageName === "RolePermission") return RolePermissionForm(store, dynamicData);
    if (pageName === "RolePermissionRecords") return RolePermissionRecords(store, dynamicData);
    if (pageName === "PositionTypeMasterRecords") return PositionTypeMasterRecords(store, dynamicData);
    if (pageName === "PositionMasterRecords") return PositionMasterRecords(store, dynamicData);
    if (pageName === "CycleRecords") return CycleRecords(store, dynamicData);
    if (pageName === "CycleForm") return CycleForm(store, dynamicData);
    if (pageName === "ExternalData") return ExternalData(store, dynamicData);
    if (pageName === "PayoutReview") return PayoutReview(store, dynamicData);
    if (pageName === "PayoutProcessing") return PayoutProcessing(store, dynamicData);
    if (pageName === "InvoiceGeneration") return InvoiceGeneration(store, dynamicData);
    if (pageName === "MasterForm") return MasterForm(store, dynamicData);
    if (pageName === "MasterRecords") return MasterRecords(store, dynamicData);
    return error(store, dynamicData);
  },
};

export const loginServiceHolder = {
  getService: async (store: any, dynamicData?: any) => {
    navigator = store.navigate;
    return Login(store, dynamicData);
  },
};
