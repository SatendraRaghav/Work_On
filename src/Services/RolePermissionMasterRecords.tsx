import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";

import { RolePermissionRecordsUISchema } from "../UiSchema/RolePermissionRecords/UISchema";
import { RolePermissionUISchema } from "../UiSchema/RolePermission/UISchema";
export const RolePermissionRecords = (
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
    const serviceApi =  myService(otherData.setLoading, otherData.setDialogBox, navigate);
    return {
        
        setPage: async function () {
            // setFormdata({})
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
                "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&status=A";
                const Api2 =
                "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&status=N";
                const Api3 =
                "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&status=R";    
                const data = await serviceApi
                .get(Api)
                .then((res) => {
                    approveData=res.data.payload;
                  formData["RolePermissionRecords.0.approveRecords"] = approveData;
                  return serviceApi.get(Api2);
                }).then((res1) => {
                  pendingData=res1.data.payload;
                  formData["RolePermissionRecords.1.pendingRecords"] = pendingData;
                  return serviceApi.get(Api3);
                }).then((res2) => {
                  rejectData=res2.data.payload;
                  formData["RolePermissionRecords.2.rejectRecords"] = rejectData;
                  return formData;
                }).catch((err) => {
                  console.log(`Error from Api : ${err}`)
                  formData["RolePermissionRecords.0.ApproveRecords"] = [];
                  formData["RolePermissionRecords.1.PendingRecords"] =  [];
                  formData["RolePermissionRecords.2.RejectRecords"] = [];
                
                  return formData;}
                );
                return data;
              },
                    getUiSchema: () => {

                      return  RolePermissionRecordsUISchema;
                    },
                    getSchema: () => {
                        return{};
                    },
                    RolePermissionApprover: function () {
                      serviceApi.post("/master/action", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.role.RolePermissionStaging",entityValue:otherData.rowData,action:"A"}}).then(async(res) => {
                            console.log("approved")
                            const data =   await this.getFormData();
                            setFormdata({
                              ...data
                            });
                            setNotify({SuccessMessage:"Approved successfully",Success:true,})
                        })
                    },
                    Reject_Records: function () {
                      serviceApi.post("/master/action", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.role.RolePermissionStaging",entityValue:otherData.rowData,action:"R"}}).then(async(res) => {
                            const data =   await this.getFormData();
                            setFormdata({
                              ...data
                            });
                            setNotify({SuccessMessage:"Rejected successfully",Success:true,})
                          });
                    },
                          
                    newRecord: () => {
                        navigate("/RolePermission")
                    },
                    Edit_Approve_Records: function () {
                        navigate(`/RolePermission?id=${otherData.rowData.id}`)
                      }
  };
    };
 