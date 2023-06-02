import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
//import service from "service";
import { myService } from "../service/service";

import { UserMasterRecordsUISchema } from "../UiSchema/UserMasterRecords/UISchema";
import { UserMasterUISchema } from "../UiSchema/UserMaster/UISchema";
// let selectOption:any[] = [];
// let selectParentData:any[]=[];
// let idData:any;
export const UserMasterRecords = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?:any
) => {
    const serviceApi =   myService(otherData.setLoading, otherData.setDialogBox, navigate);
    return {
        
        setPage: async function () {
            setFormdata({})
            const schema = this.getSchema();
            setSchema(schema);
            const UiSchema = this.getUiSchema();
            setUiSchema(UiSchema);
            const formData = await this.getFormData();
            setFormdata(formData);
          },
        getFormData: async () => {
            let approveData: any[] = [];
            let pendingData: any[] = [];
            let rejectData: any[] = [];
            const formData: any = {};
            const Api =
                "/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging&status=A";
            const Api2 =
                "/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging&status=N";
            const Api3 =
                "/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging&status=R";       
                const data = await serviceApi
                .get(Api)
                .then((res) => {
                    approveData=res.data.payload;
                  formData["UserMasterRecords.0.approveRecords"] = approveData;
                  return serviceApi.get(Api2);
                }).then((res1) => {
                  pendingData=res1.data.payload;
                  formData["UserMasterRecords.1.pendingRecords"] = pendingData;
                  return serviceApi.get(Api3);
                }).then((res2) => {
                  rejectData=res2.data.payload;
                  formData["UserMasterRecords.2.rejectRecords"] = rejectData;
                  return formData;
                }).catch((err) => {
                  console.log(`Error from Api : ${err}`)
                  formData["UserMasterRecords.0.ApproveRecords"] = [];
                  formData["UserMasterRecords.1.PendingRecords"] =  [];
                  formData["UserMasterRecords.2.RejectRecords"] = [];
                
                  return formData;}
                );
            //    const data1 = await serviceApi.get("/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging&status=N")
                
            //    const data2 = await serviceApi.get("/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging&status=R")
                
                
              return data;
            },
                    getUiSchema: () => {

                      return  UserMasterRecordsUISchema;
                    },
                    getSchema: () => {
                        return{};
                    },
                    UserApprover: function () {
                        serviceApi.post("/master/action", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.user.UserStaging",entityValue:otherData.rowData,action:"A"}}).then(async(res) => {
                            console.log("approved")
                            const data =   await this.getFormData();
                            setFormdata({
                              ...data
                            });
                            setNotify({SuccessMessage:"Approved successfully",Success:true,})
                        })
                    },
                    Reject_Records: function () {
                        serviceApi.post("/master/action",{id:1,payload:{entityName:"com.act21.hyperform3.entity.master.user.UserStaging",entityValue:otherData.rowData,action:"R"}}).then(async(res) => {
                            const data =   await this.getFormData();
                            setFormdata({
                              ...data
                            });
                            setNotify({SuccessMessage:"Rejected successfully",Success:true,})

                          });
                    },
                          
                    newRecord: () => {
                        navigate("/UserMaster")
                    },
                    Edit_Approve_Records: function () {
                        navigate(`/UserMaster?id=${otherData.rowData.id}`)
                      },
                   
  };
    };
 