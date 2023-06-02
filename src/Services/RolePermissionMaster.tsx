// import { getUiSchema } from "@jsonforms/core";
// import { JsonFormsStateContext } from "@jsonforms/react";
// //import service from "service";
// import { myService } from "../service/service";

// import { RolePermissionRecordsUISchema } from "../UiSchema/RolePermissionRecords/UISchema";
// import { RolePermissionUISchema } from "../UiSchema/RolePermission/UISchema";

// let selectOption:any[] = [];
// let selectParentData:any[]=[];
// export const RolePermissionRecords1 = (
//     ctx?: JsonFormsStateContext,
//     setFormdata?: any,
//     setUiSchema?: any,
//     setSchema?: any,
//     navigate?:any,
//     otherData?: any
// ) => {
//     const service = myService(otherData.setLoading, otherData.setDialog, navigate);
//     return {
//         setPage: function () {
//   this.getUiSchema();
//             this.getFormData();
//             this.getSchema();
          
//             },
//         getFormData: () => {
//             let approveData: any[] = [];
//             let pendingData: any[] = [];
//             let rejectData = [];
//             const Api =
//                 "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging";
//             const Api2 = "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNew";
//             const Api3 = "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNew";   
//             const Data1=service
//             .post(Api3,{ status: "A" })
//             .then((ress)=>{
//                 const result3 = ress.data.map((e: any) => {
//                     return { label: e.name, value: e }
//                 });
//                 selectParentData=result3;
//             }).catch((err) => console.log(`Error from Api : ${err}`));
//             const Data = service
//                 .post(Api, { status: "A" })
//                 .then((res) => {
//                     approveData = res.data;
//                     return service.post(Api, { status: "N" });
//                 })
//                 .then((res) => {
//                     pendingData = res.data;
//                     return service.post(Api, { status: "R" });
//                 })
//                 .then((res) => {
//                     rejectData = res.data;
//                     setFormdata({

//                         "agencyRecords.0.approveRecords": approveData,
//                         "agencyRecords.1.pendingRecords": pendingData,
//                         "agencyRecords.2.rejectRecords": rejectData
//                     })
//                     const data= { status: "A" };
//                     return  service
//                         .post('/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNew', data)

//                 }).then((response) => {
//                     const result2 = response.data.map((e: any) => {
//                         return { label: e.name, value: e }
//                     });
//                     selectOption = result2;
//                 }).catch((err) => console.log(`Error from Api : ${err}`));
//                 },
//                     getUiSchema: () => {

//                         setUiSchema(RolePermissionRecordsUISchema);
//                     },
//                     getSchema: () => {
//                         setSchema({})
//                     },
//                     RolePermissionApprover: function () {
//                         service.post("/master/approve?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging", otherData.rowData).then((res:any) => {
//                             console.log("approved")
//                             this.getFormData()
//                         })
//                     },
//                     Reject_Records: function () {
//                         service.post("/master/rejected?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging", otherData.rowData).then((res:any) => {
//                             this.getFormData();
//                         })
//                     },
//                     newRecord: () => {
//                         setFormdata({});
//                         setUiSchema(RolePermissionUISchema);
//                         setSchema({})
//                     },
//                     Edit_Approve_Records: () => {
//                         navigate(`/RolePermission?id=${otherData.rowData.id}`)
//                     },
//                     Submit_RolePermission: function () {
//                         console.log(ctx.core.data)
//                         service.post("/master/save?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging", ctx.core.data).then((res) => {
//                             this.setPage();
//                         })
//                     },
//                     getPositionTypeAprroveRecordsForm:()=>{
//                         return selectOption
//                     },
//                     getPositionAprroveRecordsForm:()=>{
//                         return selectParentData
//                     }
//   };
//     };
