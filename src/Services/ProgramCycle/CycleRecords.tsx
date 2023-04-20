import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../../service/service";

import { ProgramMasterCycleRecordUiSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycleRecord/UiSchema";
export const CycleRecords = (
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
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&status=A";
        const ApiPending =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&status=N";
        const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&status=R";
      const data = await serviceApi
        .get(Api)
        .then((res) => {
          approveData =  res.data?.payload?.map((e:any) => {
            const demoStartDate = new Date(e.startDate).toLocaleString();
            const demoEndDate = new Date(e.endDate).toLocaleString();
            return {
              id: e.id,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
          formData["ProgramCycleRecords.0.ApproveRecords"] = approveData;
          return serviceApi.get(ApiPending);
        })
        .then((res) => {
          pendingData =  res.data?.payload?.map((e: any) => {
            const demoStartDate = new Date(e.startDate).toLocaleString();
            const demoEndDate = new Date(e.endDate).toLocaleString();
            return {
              id: e.id,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
          formData["ProgramCycleRecords.1.PendingRecords"] = pendingData;
          return serviceApi.get(ApiReject);
        })
        .then((res) => {
          rejectData =  res?.data?.payload?.map((e:any) => {
            const demoStartDate = new Date(e.startDate).toLocaleString();
            const demoEndDate = new Date(e.endDate).toLocaleString();
            return {
              id: e.id,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
          formData["ProgramCycleRecords.2.RejectRecords"] = rejectData;
          return formData;
        })
        .catch((err) =>{
          formData["ProgramCycleRecords.0.ApproveRecords"] =  [];
          formData["ProgramCycleRecords.1.PendingRecords"] =  [];
          formData["ProgramCycleRecords.2.RejectRecords"] = [];
          return formData;
        });
      return data;
    },
    getUiSchema: () => {
      return ProgramMasterCycleRecordUiSchema;
    },
    getSchema: () => {
      return {};
    },
    Approve_Records: function () {
      console.log(otherData[0]);
      const Api =
        `/master/getDetailById?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&id=${otherData[0].id }`;
      serviceApi
        .get(Api)
        .then((res) => {
          return  serviceApi.post(
            "/master/action",
            {id:1,payload:
              {entityName:"com.act21.hyperform3.entity.program.ProgramCycleStaging",
              entityValue:res.data.payload,
              action:"A"}},

          )})
        .then(async (res) => {
         const data =   await this.getFormData();
          setFormdata({
            ...data,
            notifyInfo: "Filed Approved By You",
          });
        })
        .catch((e) => console.log(e));
    },
    Reject_Records: function () {
      const Api =
        "/master/getDetailById?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging";
      serviceApi
        .post(Api, { id: otherData[0].id })
        .then((res) => {
          return serviceApi.post(
            "/master/action",
            {id:1,payload:
              {entityName:"com.act21.hyperform3.entity.program.ProgramCycleStaging",
              entityValue:res.data,
              action:"R"}},
          );
        })
        .then( async (res) => {
          const data =   await this.getFormData();
          setFormdata({
            ...data,
            notifyInfo: "Filed Rejected By You",
          });
        });
    },
    Edit_Approve_Records: function () {
      navigate(`/CycleForm?id=${otherData[0].id}`)
    },
    addNewRecords: function () {
      navigate("/CycleForm")
    },
  };
};
