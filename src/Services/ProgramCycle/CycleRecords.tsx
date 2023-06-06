import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../../service/service";
import moment from "moment";
import { ProgramMasterCycleRecordUiSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycleRecord/UiSchema";
export const CycleRecords = (
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
  const serviceApi =  myService(otherData[3],otherData[4],navigate)
  return {
    setPage: async function () {
      setFormdata({})
      const schema = this.getSchema();
      setSchema(schema);
      const UiSchema = await  this.getUiSchema();
      setUiSchema(UiSchema);
      const formData = this.getFormData();
      setFormdata(formData);
    },
    getFormData:  () => {
     return {}
    },
    getUiSchema: async () => {
      const UiSchema = JSON.parse(JSON.stringify(ProgramMasterCycleRecordUiSchema));      
      console.log(UiSchema)
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&status=A";
        const ApiPending =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&status=N";
        const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&status=R";
      await serviceApi
        .get(Api)
        .then((res) => {
          const approveData =  res.data?.payload?.map((e:any) => {
            const demoStartDate =  moment(new Date(e.startDate)).format('DD MMM YYYY');
            const demoEndDate = moment(new Date(e.endDate)).format('DD MMM YYYY');
            return {
              id: e.id,
              name:e.name,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
          UiSchema.elements[1].elements[0].config.main.allRowsData = approveData;
          return serviceApi.get(ApiPending);
        })
        .then((res) => {
          const pendingData =  res.data?.payload?.map((e: any) => {
            const demoStartDate =  moment(new Date(e.startDate)).format('DD MMM YYYY');
            const demoEndDate = moment(new Date(e.endDate)).format('DD MMM YYYY');
            return {
              id: e.id,
              name:e.name,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
          UiSchema.elements[1].elements[1].config.main.allRowsData = pendingData;
          return serviceApi.get(ApiReject);
        })
        .then((res) => {
          const rejectData =  res?.data?.payload?.map((e:any) => {
            const demoStartDate =  moment(new Date(e.startDate)).format('DD MMM YYYY');
            const demoEndDate = moment(new Date(e.endDate)).format('DD MMM YYYY');
            return {
              id: e.id,
              name:e.name,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
          UiSchema.elements[1].elements[2].config.main.allRowsData = rejectData;
        })
        .catch((err) =>{
          UiSchema.elements[1].elements[0].config.main.allRowsData =  [];
          UiSchema.elements[1].elements[1].config.main.allRowsData =  [];
          UiSchema.elements[1].elements[0].config.main.allRowsData = [];
        });
        return UiSchema;
    },
    getSchema: () => {
      return {};
    },
    Approve_Records: function () {
      const Api =
        `/master/getDetailById?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&id=${otherData.rowData.id }`;
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
          });
          setNotify({SuccessMessage:"Approved Successfully",Success:true,})
        })
        .catch((e) => console.log(e));
    },
    Reject_Records: async function () {
      const Api =
        `/master/getDetailById?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&id=${otherData.rowData.id}`;
      await serviceApi
        .get(Api)
        .then((res) => {
          return serviceApi.post(
            "/master/action",
            {id:1,payload:
              {entityName:"com.act21.hyperform3.entity.program.ProgramCycleStaging",
              entityValue:res.data.payload,
              action:"R"}},
          );
        })
        .then( async (res) => {
          const data =   await this.getFormData();
          setFormdata({
            ...data
          });
          setNotify({SuccessMessage:"Rejected Successfully",Success:true,})
        });
    },
    Edit_Approve_Records: function () {
      navigate(`/CycleForm?id=${otherData.rowData.id}`)
    },
    addNewRecords: function () {
      navigate("/CycleForm")
    },
  };
};
