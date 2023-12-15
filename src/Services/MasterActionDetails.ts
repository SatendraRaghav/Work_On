import { MasterActionDetailsUiSchema } from "@/UiSchema/MasterAction/UiSchema";
import { myService } from "@/service/service";

export const MasterActionDetails = (store: any, dynamicData: any) => {
  const service = myService(dynamicData?.setLoading, store.navigate);
  return {
    setPage: async function () {
      var formdata = await this.getFormdata();
      store.setFormdata(formdata);
      var uiSchema = await this.getUiSchema();
      var schema = await this.getSchema();

      store.setUiSchema(uiSchema);
      store.setSchema(schema);
    },
    getFormdata: async function () {
      let formData: any = {};
      const businessKey = store.searchParams?.get("businessKey");
      const body = {
        reportName: "workflowActionReport",
        businessKey: businessKey,
      };
      await service
        .post(`/report/getReport`, body)
        .then((res) => {
          formData.actionRecords = res.data;
        })
        .catch((err) => {
          console.log(err);
          return [];
        });
      return formData;
    },
    getUiSchema: async function () {
      return MasterActionDetailsUiSchema;
    },
    getSchema: () => {
      return {};
    },
    backHandler : () => {
        store.navigate(-1);
    },
  };
};
