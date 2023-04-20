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
    navigate?:any,
    otherData?: any
) => {
    const serviceApi = myService()
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
                  formData["agencyRecords.0.approveRecords"] = approveData;
                  return serviceApi.get(Api2);
                }).then((res1) => {
                  pendingData=res1.data.payload;
                  formData["agencyRecords.1.pendingRecords"] = pendingData;
                  return serviceApi.get(Api3);
                }).then((res2) => {
                  rejectData=res2.data.payload;
                  formData["agencyRecords.2.rejectRecords"] = rejectData;
                  return formData;
                }).catch((err) => {
                  console.log(`Error from Api : ${err}`)
                  formData["agencyRecords.0.ApproveRecords"] = [];
                  formData["agencyRecords.1.PendingRecords"] =  [];
                  formData["agencyRecords.2.RejectRecords"] = [];
                
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
                        serviceApi.post("/master/action", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.user.UserStaging",entityValue:otherData[0],action:"A"}}).then(async(res) => {
                            console.log("approved")
                            const data =   await this.getFormData();
                            setFormdata({
                              ...data,
                              notifyInfo: "Field Approved By You",
                            });
                        })
                    },
                    Reject_Records: function () {
                        serviceApi.post("/master/action",{id:1,payload:{entityName:"com.act21.hyperform3.entity.master.user.UserStaging",entityValue:otherData[0],action:"R"}}).then(async(res) => {
                            const data =   await this.getFormData();
                            setFormdata({
                              ...data,
                              notifyInfo: "Field Rejected By You",
                            });
                          });
                    },
                          
                    newRecord: () => {
                        navigate("/UserMaster")
                    },
                    Edit_Approve_Records: function () {
                        navigate(`/UserMaster?id=${otherData[0].id}`)
                      },
                   
  };
    };
 