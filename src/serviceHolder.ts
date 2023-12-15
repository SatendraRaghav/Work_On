
import { AgencyBranchRecords } from "./Services/AgencyBranchMasterRecords";
import { AgencyMasterForm } from "./Services/AgencyMasterForm";
import { AgencyMasterRecords } from "./Services/AgencyMasterRecords";
import { error } from "./Services/Error";
import { ExternalData } from "./Services/ExternalData";
import { GroupMasterForm } from "./Services/GroupMasterForm";
import { GroupMasterRecords } from "./Services/GroupMasterRecords";
import Home from "./Services/Home";
import { PayoutProcessing } from "./Services/PayoutProcessing";
import { PositionMasterForm } from "./Services/PositionMasterForm";
import { PositionMasterRecords } from "./Services/PositionMasterRecords";
import { PositionTypeMasterForm } from "./Services/PositionTypeMasterForm";
import { PositionTypeMasterRecords } from "./Services/PositionTypeMasterRecords1";
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
import { UserMasterForm } from "./Services/UserMasterForm";
import { UserMasterRecords } from "./Services/UserMasterRecords";
import { dynamicDataType } from "./utils/dynamicDataType";
import { PayoutProcessingDetail } from "./Services/PayoutProcessingDetail";
import { Notification } from "./Services/Notification/Notification";
import { NotificationRecords } from "./Services/Notification/NortificationRecords";
import { userValue } from "./App";
import { myService } from "./service/service";
import { AgencyBranchForm } from "./Services/AgencyBranchMasterForm";
import { PageMasterRecords } from "./Services/PageMasterRecords/PageMasterRecords";
// import { pageMaster, pageMasterComponents, pageMasterEvents } from "impaktapps-ui-builder";
import {pageMaster, pageMasterComponents, pageMasterEvents} from "./impaktapps-ui-builder/lib"
import { submitHandler } from "./Services/PageMasterRecords/submitHandler";
import {  serviceMaster } from "./Services/serviceMaster";



export let navigator: any;
let previousPage = undefined;

export const serviceHolder = {
  getService: async (store: any, dynamicData?: dynamicDataType) => {
    navigator = store.navigate;
    // const AppService = myService(dynamicData?.setLoading, store.navigate,store)
    const pageName = store.pageName;

    let service = myService();
    if (userValue?.payload?.token && pageName !== previousPage) {
      const body = {
        payload: {
          userId: userValue?.payload?.userId,
          userName: userValue?.payload?.username,
          pageName: pageName,
          action: "visited",
        },
      };
      previousPage = pageName;
      service.post("/userActivity/save", body);
    }
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
    if (pageName === "UserMasterView") return UserMasterForm(store, dynamicData);
    if (pageName === "GroupMaster") return GroupMasterForm(store, dynamicData);
    if (pageName === "GroupMasterView") return GroupMasterForm(store, dynamicData);
    if (pageName === "UserMasterRecords") return UserMasterRecords(store, dynamicData);
    if (pageName === "RoleMaster") return RoleMasterForm(store, dynamicData);
    if (pageName === "RoleMasterView") return RoleMasterForm(store, dynamicData);
    if (pageName === "UserMasterRecords") return UserMasterRecords(store, dynamicData);
    if (pageName === "RolePermission") return RolePermissionForm(store, dynamicData);
    if (pageName === "RolePermissionView") return RolePermissionForm(store, dynamicData);
    if (pageName === "RolePermissionRecords") return RolePermissionRecords(store, dynamicData);
    if (pageName === "PositionTypeMasterRecords") return PositionTypeMasterRecords(store, dynamicData);
    if (pageName === "PositionMasterRecords") return PositionMasterRecords(store, dynamicData);
    if (pageName === "CycleRecords") return CycleRecords(store, dynamicData);
    if (pageName === "CycleForm") return CycleForm(store, dynamicData);
    if (pageName === "CycleFormView") return CycleForm(store, dynamicData);
    if (pageName === "ExternalData") return ExternalData(store, dynamicData);
    if (pageName === "PayoutProcessing") return PayoutProcessing(store, dynamicData);
    if (pageName === "MasterForm") return MasterForm(store, dynamicData);
    if (pageName === "MasterFormView") return MasterForm(store, dynamicData);
    if(pageName === "RuleMaster") return RuleMasterForm(store,dynamicData);
    if(pageName === "RuleMasterView") return RuleMasterForm(store,dynamicData);
    if(pageName === "RuleMasterRecords") return RuleMasterRecords(store,dynamicData);
    if (pageName === "MasterRecords") return MasterRecords(store, dynamicData);
    if (pageName.startsWith("page")) {
      return await serviceMaster(store, dynamicData).getPageService();
    }
    if(pageName === 'PageMaster') {
      const id = store.searchParams?.get("id");
      let config:any = {};
      if(id){
      await service
      .get(`/page/getById?id=${id}`)
      .then((res:any) => {
      
        config =  res.data?.payload?.config;
      })}
    return  pageMaster({store,dynamicData,config,submitHandler,service});
     }
    if (pageName === "PageMasterRecords")
      return PageMasterRecords(store, dynamicData);
    if (pageName === "Component") return pageMasterComponents(store, dynamicData);
    if(pageName === 'ComponentEvents') return pageMasterEvents(store,dynamicData);
    if (pageName === "PayoutProcessingDetail")
      return PayoutProcessingDetail(store, dynamicData);
    if (pageName === "Notification") return Notification(store, dynamicData);
    if (pageName === "NotificationRecords")
      return NotificationRecords(store, dynamicData);
    return error(store, dynamicData);
  },
};

