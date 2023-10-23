
import { AgencyBranchRecords } from "./Services/AgencyBranchMasterRecords";
import { AgencyMasterForm } from "./Services/AgencyMasterForm";
import { AgencyMasterRecords } from "./Services/AgencyMasterRecords";
import { error } from "./Services/Error";
import { ExternalData } from "./Services/ExternalData";
import { GroupMasterForm } from "./Services/GroupMasterForm";
import { GroupMasterRecords } from "./Services/GroupMasterRecords";
import Home from "./Services/Home";
import { InvoiceGeneration } from "./Services/InvoiceGeneration";
import { PayoutProcessing } from "./Services/PayoutProcessing";
import { PositionMasterForm } from "./Services/PositionMasterForm";
import { PositionMasterRecords } from "./Services/PositionMasterRecords";
import { PositionTypeMasterForm } from "./Services/PositionTypeMasterForm";
import { PositionTypeMasterRecords } from "./Services/PositionTypeMasterRecords1";
import Profile from "./Services/Profile";
import { CycleForm } from "./Services/ProgramCycle/CycleForm";
import { CycleRecords } from "./Services/ProgramCycle/CycleRecords";
import { MasterForm } from "./Services/ProgramMaster/MasterForm";
import { MasterRecords } from "./Services/ProgramMaster/MasterRecords";
import { RoleMasterForm } from "./Services/RoleMasterForm";
import { RoleMasterRecords } from "./Services/RoleMasterRecords";
import { RolePermissionForm } from "./Services/RolePermissionMasterForm";
import { RolePermissionRecords } from "./Services/RolePermissionMasterRecords";
import { RuleMasterForm } from "./Services/RuleMasterForm";
import { RuleMasterRecords } from "./Services/RuleMasterRecords";
import { SimulationForm } from "./Services/Simulation/SimulationForm";
import { SimulationRecords } from "./Services/Simulation/SimulationRecords";
import { templateServiceFactory } from "./Services/Template/templateServiceFactory.";
import { UserMasterForm } from "./Services/UserMasterForm";
import { UserMasterRecords } from "./Services/UserMasterRecords";
import { dynamicDataType } from "./utils/dynamicDataType";
import { PageMaster } from "./Services/PageMaster/PageMaster";
import { PageMasterRecords } from "./Services/PageMaster/PageMasterRecords";
import { Component } from "./Services/PageMaster/Component";
import { AgencyBranchForm } from "./Services/AgencyBranchMasterForm";

export let navigator: any;

export const serviceHolder = {
  getService: async (store: any, dynamicData?: dynamicDataType) => {
    navigator = store.navigate;
    const pageName = store.pageName;
    if(pageName === "Profile") return Profile(store, dynamicData)
    if (pageName === "Home") return Home(store, dynamicData);
    if (pageName === "MasterRecords")
      return MasterRecords(store, dynamicData);
    if (pageName === "MasterForm") return MasterForm(store, dynamicData);
    if (pageName === "CycleForm") return CycleForm(store, dynamicData);
    if (pageName === "CycleRecords")
      return CycleRecords(store, dynamicData);
    if (pageName === "Simulation") return SimulationRecords(store, dynamicData);
    if (pageName === "SimulationForm") return SimulationForm(store, dynamicData);  
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
    if (pageName === "PayoutProcessing") return PayoutProcessing(store, dynamicData);
    if (pageName === "InvoiceGeneration") return InvoiceGeneration(store, dynamicData);
    if (pageName === "MasterForm") return MasterForm(store, dynamicData);
    if(pageName === "RuleMaster") return RuleMasterForm(store,dynamicData);
    if(pageName === "RuleMasterRecords") return RuleMasterRecords(store,dynamicData);
    if (pageName === "MasterRecords") return MasterRecords(store, dynamicData);
    if (pageName.startsWith("template")) {
       return await templateServiceFactory(  store, dynamicData ).masterTemplate()};
    if(pageName === 'PageMaster') return PageMaster(store,dynamicData);
    if(pageName === 'PageMasterRecords') return PageMasterRecords(store,dynamicData);
    if(pageName === 'Component') return Component(store,dynamicData);
    return error(store, dynamicData);
  },
};

