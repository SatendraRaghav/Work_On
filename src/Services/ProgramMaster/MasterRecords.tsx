import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../../service/service";
import { ProgramMasterRecordUiSchema } from "../../UiSchema/ProgramMaster/ProgramRecord/UiSchema";

export const MasterRecords = (
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
      // setFormdata({})
      const schema = this.getSchema();
      setSchema(schema);
      const UiSchema = this.getUiSchema();
      setUiSchema(UiSchema);
      const formData = await this.getFormData();
      setFormdata(formData);
    },
    getFormData: async () => {
      const formData: any = {};
      const ApiApprove =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=A";
        const ApiPending =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=N";
        const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=R";
      const data =  await serviceApi
        .get(ApiApprove)
        .then((res) => {
          formData["ProgramCycleRecords.0.ApproveRecords"] =  res.data.payload;
          return serviceApi.get(ApiPending);
        })
        .then((res) => {
          formData["ProgramCycleRecords.1.PendingRecords"] =  res.data.payload;
          return serviceApi.get(ApiReject);
        })
        .then((res) => {
          formData["ProgramCycleRecords.2.RejectRecords"] =  res.data.payload;
          return formData
        })
        .catch((err) => {
          formData["ProgramCycleRecords.0.ApproveRecords"] =  [];
          formData["ProgramCycleRecords.1.PendingRecords"] =  [];
          formData["ProgramCycleRecords.2.RejectRecords"] = [];
          return formData;
        });
        return data;
    },
    getUiSchema: () => {
     return ProgramMasterRecordUiSchema;
    },
    getSchema: () => {
    return {}
    },
    Approve_Records: function () { 
      serviceApi
      .post(
        "/master/action",
        {id:1,payload:
          {entityName:"com.act21.hyperform3.entity.program.ProgramStaging",
          entityValue:otherData[0],
          action:"A"}},
      )
        .then( async(res) => {
          const data =   await this.getFormData();
          setFormdata({
            ...data,
            notifyInfo: "Filed Approved By You",
          });
        });
    },
    Reject_Records: function () {
      serviceApi
        .post(
          "/master/action",
          {id:1,payload:
            {entityName:"com.act21.hyperform3.entity.program.ProgramStaging",
            entityValue:otherData[0],
            action:"R"}},
        )
        .then(async(res) => {
          const data =   await this.getFormData();
          setFormdata({
            ...data,
            notifyInfo: "Filed Rejected By You",
          });
        });
    },
    Edit_Approve_Records: function () {
        navigate(`/MasterForm?id=${otherData[0].id}`)
      },
      addNewRecords: function () {
        navigate("/MasterForm")
      },
  };
};
