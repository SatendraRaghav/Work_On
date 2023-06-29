import { uischema } from "@jsonforms/examples/lib/examples/allOf";
import { myService } from "../../service/service";
import { ProfileUiSchema } from "../../UiSchema/Profile/UiSchema";

export const dashboard1 = async (store: any, dynamicData: any) => {
  const service = myService();
  return {
    setPage: async function () {
      const uischema = await this.getUiSchema();
      const schema = await this.getSchema();
      store.setUiSchema(uischema)
      store.setSchema(schema);
      const formData: any = await this.getFormdata();
      store.setFormdata(formData);
    },
    getFormdata: async function () {
      return {}
    },
    getUiSchema: async function () {
      const data = JSON.stringify({
        payload: {
          name: store.pageName,
        },
      });
      let pageData: any;
      const result = await service
        .post("/page/getByName", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response: any) => {
          pageData = response;
          const uiSchema = pageData.data.payload.uiSchema;
          return uiSchema;
        });
        return result;
      // return ProfileUiSchema;
    },
    getSchema: async () => {
      const data = JSON.stringify({
        payload: {
          name: store.pageName,
        },
      });
      let pageData: any;
      const result = await service
        .post("/page/getByName", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response: any) => {
          pageData = response;

          const schema = pageData.data.payload.schema;
          return schema;
        });
      return result;
      // return {}
    },
    loadFunction: async (value) => {
      const data = await service
        .post("/workflow/generateReport", {
          payload: {
            reportName: value.reportName,
            reportFormat: value.reportFormat,
            params: {},
          },
        })
        .then((res: any) => {
          return res.data.payload.reportData[value?.reportName];
        });
      return data;
    },
    searchDashboard: async function () {
       this.setPage()
    },
  };
};
