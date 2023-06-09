import { error } from "./Services/Error";
import Home from "./Services/Home";
import Login from "./Services/Login";
import { CycleForm } from "./Services/ProgramCycle/CycleForm";
import { CycleRecords } from "./Services/ProgramCycle/CycleRecords";
import { MasterForm } from "./Services/ProgramMaster/MasterForm";
import { MasterRecords } from "./Services/ProgramMaster/MasterRecords";
import { dynamicDataType } from "./utils/dynamicDataType";
export let navigator: any;


export const serviceHolder = {
  getService: async (store: any,
    dynamicData?: dynamicDataType) => {
      navigator = store.navigate
    if (store.pageName === "start")
      return Login(store, dynamicData);
    if (store.pageName === "Home")
      return Home(store, dynamicData);
    if (store.pageName === "MasterRecords")
      return MasterRecords(store, dynamicData);
    if (store.pageName === "MasterForm")
      return MasterForm(store, dynamicData);
    if (store.pageName === "CycleForm")
      return CycleForm(store, dynamicData);
      if (store.pageName === "CycleRecords")
      return CycleRecords(store, dynamicData);
    
      return error(store, dynamicData);
  },
};

export const loginServiceHolder = {
  getService: async (store: any,
    dynamicData?: any) => {
      navigator = store.navigate
      return Login(store, dynamicData);
}}











