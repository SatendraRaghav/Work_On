import React, { useReducer, createContext, useMemo } from "react";
export const DataContext = createContext< any>({
  url:false,
  isDataChange:false,
  formData:{ 
  },
  graphData:null,
  accessPermissions: ["_Agency_Form:*:","_Agency_Records:*:R","_Agency_Form:venndorCode:W"],
  recordsApi:" ",
}); 
export const actions = {
    changeUrl:"changeUrl",
    resetFormData:"resetFormData",
    resetRecordsApi:"recordsApi",
    changeStatus:"changeStatus",
    dataChange:"dataChange",
    setAccessPermissions:"setPermission",
    setGraphData:"setGraphData",
    notifyChange:"notifyChange",
  }
 export const initialState = {
  url:false,
  isDataChange:false,
  notify:{success:false,fail:false,info:false,message:""},
  formData:{ 
  },
  graphData:null,
  accessPermissions: ["_Agency_Form:*:","_Agency_Records:*:R","_Agency_Form:venndorCode:W"],
  recordsApi:" ",
};
const reducer = (state:any, action:any) => {
    switch (action.type) {
        case actions.changeUrl:
          return {
           ...state,url:action.payload
          };
          case actions.notifyChange:
          return {
           ...state,notify:action.payload
          };
          case actions.dataChange:
          return {
           ...state,isDatachange:action.payload
          };
          case actions.resetFormData:
          return {
           ...state,formData:action.payload
          };
          case actions.setAccessPermissions:
          return {
           ...state,accessPermissions:action.payload
          };
          case actions.resetRecordsApi:
          return {
           ...state,recordsApi:action.payload
          };
          case actions.setGraphData:
            return {
             ...state,graphData:action.payload
            };
          case actions.changeStatus:
          return {
           ...state,status:action.payload
          };
        default:
          return state;
  }
};
export const DataProvider = ({ children,objFunc,setFormdata,setUiSchema,setSchema,id="Home"}:any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch};
  }, [state, dispatch]);
return (
    <DataContext.Provider value={{...contextValue, objFunc:objFunc,setFormdata:setFormdata,setUiSchema:setUiSchema,setSchema:setSchema,id:id}}>
      {children}
    </DataContext.Provider>
  );
};
export default initialState;
