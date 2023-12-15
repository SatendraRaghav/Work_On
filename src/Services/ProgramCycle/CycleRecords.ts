import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../../service/service";
import moment from "moment";
import { ProgramMasterCycleRecordUiSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycleRecord/UiSchema";
import { dynamicDataType } from "../../utils/dynamicDataType";
export const CycleRecords = (store: any, dynamicData: dynamicDataType) => {
  const serviceApi = myService(
    dynamicData?.setLoading,

    store.navigate
  );
  return {
    setPage: async function () {
      // store.setFormdata({})

      const formData = await this.getFormData();
      store.setFormdata(formData);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);

      const schema = await this.getSchema();
      store.setSchema(schema);
    },
    getFormData: async () => {
      const fomData: any = {};
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramCycle&status=A";

      const data = await serviceApi
        .get(Api)
        .then((res) => {
          const approveData = res.data?.map((e: any) => {
            const demoStartDate = moment(new Date(e.startDate)).format(
              "DD MMM YYYY"
            );
            const demoEndDate = moment(new Date(e.endDate)).format(
              "DD MMM YYYY"
            );
            return {
              id: e.id,
              name: e.name,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
          fomData.CycleApproveRecords = approveData.sort((a, b) => {
            return a.id - b.id;
          });
        })
        .catch((err) => {
          fomData.CycleApproveRecords = [];
        });
      return fomData;
    },
    View_Actions: function () {
      let businessKey = `ProgramCycleStaging_${dynamicData?.rowData.id}`;
      store.navigate(`/MasterActions?businessKey=${businessKey}`);
    },
    getUiSchema: async () => {
      return ProgramMasterCycleRecordUiSchema;
      // const UiSchema = JSON.parse(JSON.stringify(ProgramMasterCycleRecordUiSchema));
      // console.log(UiSchema)
      // const Api =
      //   "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&status=A";
      //   const ApiPending =
      //   "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&status=N";
      //   const ApiReject =
      //   "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramCycleStaging&status=R";
      // await serviceApi
      //   .get(Api)
      //   .then((res) => {
      //     const approveData =  res.data?.payload?.map((e:any) => {
      //       const demoStartDate =  moment(new Date(e.startDate)).format('DD MMM YYYY');
      //       const demoEndDate = moment(new Date(e.endDate)).format('DD MMM YYYY');
      //       return {
      //         id: e.id,
      //         name:e.name,
      //         program: e.program?.name,
      //         startDate: demoStartDate,
      //         endDate: demoEndDate,
      //       };
      //     });
      //     UiSchema.elements[1].options.detail.elements[0].config.main.allRowsData = approveData;
      //     return serviceApi.get(ApiPending);
      //   })
      //   .then((res) => {
      //     const pendingData =  res.data?.payload?.map((e: any) => {
      //       const demoStartDate =  moment(new Date(e.startDate)).format('DD MMM YYYY');
      //       const demoEndDate = moment(new Date(e.endDate)).format('DD MMM YYYY');
      //       return {
      //         id: e.id,
      //         name:e.name,
      //         program: e.program?.name,
      //         startDate: demoStartDate,
      //         endDate: demoEndDate,
      //       };
      //     });
      //     UiSchema.elements[1].options.detail.elements[1].config.main.allRowsData = pendingData;
      //     return serviceApi.get(ApiReject);
      //   })
      //   .then((res) => {
      //     const rejectData =  res?.data?.payload?.map((e:any) => {
      //       const demoStartDate =  moment(new Date(e.startDate)).format('DD MMM YYYY');
      //       const demoEndDate = moment(new Date(e.endDate)).format('DD MMM YYYY');
      //       return {
      //         id: e.id,
      //         name:e.name,
      //         program: e.program?.name,
      //         startDate: demoStartDate,
      //         endDate: demoEndDate,
      //       };
      //     });
      //     UiSchema.elements[1].options.detail.elements[2].config.main.allRowsData = rejectData;
      //   })
      //   .catch((err) =>{
      //     UiSchema.elements[1].options.detail.elements[0].config.main.allRowsData =  [];
      //     UiSchema.elements[1].options.detail.elements[1].config.main.allRowsData =  [];
      //     UiSchema.elements[1].options.detail.elements[2].config.main.allRowsData = [];
      //   });
      //   return UiSchema;
    },
    getSchema: async () => {
      return {};
    },
    Edit_Approve_Records: function () {
      store.navigate(`/CycleForm?id=${dynamicData?.rowData.id}`);
    },
    addNewRecords: function () {
      store.navigate("/CycleForm");
    },
    View_Records: function () {
     store.navigate(`/CycleFormView?id=${dynamicData?.rowData.id}`);
    }
  };
};
