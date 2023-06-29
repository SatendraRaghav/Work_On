import { JsonFormsStateContext } from "@jsonforms/react";
import { ReportTemplate1UiSchema } from "../../UiSchema/Template/ReportTemplate1/UiSchema";
import { myService } from "../../service/service";
import { downloadFile } from "../../utils/downloadFile";
import { buildSchema, buildUiSchema } from "../../utils/buildUiSchema";
import { ReportTemplateSchema } from "../../UiSchema/Template/ReportTemplate1/Schema";
import { EmptyBoxField } from "../../components/EmptyBox";
export const template3 = (store: any, dynamicData: any, uiSchema: any, schema:any) => {
  const service = myService();
  let currentUiSchema: any;
  return {
    setPage: async function () {
      store.setFormdata({});
      const currentUiSchema1 = await this.getUiSchema().then((response:any) => {
        currentUiSchema = response;
        store.setUiSchema(currentUiSchema);
      });
      const schema = this.getSchema()
      store.setSchema(schema);
      let formData: any = await this.getFormdata();
      store.setFormdata(formData);
    },
    getFormdata: () => {
      let formData: any = {};
      return formData;
    },
    getUiSchema: async function () {

      const finalUiSchema = JSON.parse(JSON.stringify(uiSchema));

      const finalUiSchema1 = await this.loadLOVs(finalUiSchema);

      return finalUiSchema1;
    },
    getSchema: () => {
      return schema;
    },

    loadLOVs: async (finalUiSchema: { type: string, stylePage?: any, pageName?: string, elements: any[]; }) => {
      const elements = finalUiSchema.elements[1].elements;
      const api = '/page/getLOVs';

      const optionsNameList = elements.map((elem: any) => {
        if (elem.config?.main?.optionsName) {
          return elem.config?.main?.optionsName;
        }
      }).filter((elem: any) => { return elem !== undefined });

      const body = JSON.stringify({
        payload: {
          typeList: optionsNameList,
          params: {},
        },
      });

      const response: any = await service
        .post(api, body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          return response.data.payload;
        })
        .catch((error) => {
          return [{}];
        });

      const allElements = elements.map((elem: any, i: number) => {
        if (elem.config?.main?.optionsName) {
          const optionList = response[elem.config.main.optionsName]
          const options = optionList.map((childElem: any) => {
            return { label: childElem.name, value: childElem.id };;
          });
          elem.config.main.options = options;
        }
        return elem;
      });
      finalUiSchema.elements[1].elements = allElements;
      return finalUiSchema;
    },
    search: async function () {
      if (store.ctx.core.errors.length > 0) {
        store.setConfig("ValidateAndShow")
        store.setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
        return;
      }
      this.tempTableLoad();
    },

    tempTableLoad: async function () {
      let formData = JSON.parse(JSON.stringify(store.ctx.core.data));

      const tempName: string[] = window.location.pathname.split("_");
      const paramName = tempName[tempName.length - 1];

      const elements = uiSchema.elements[2].elements;
      const element = elements[0];
      const body = JSON.stringify({
        payload: {
          reportName: `${paramName}_${element.config.main.name}`,
          reportFormat: "grid",
          params: {
            programId: store.ctx.core.data.programType,
            fromDate: store.ctx.core.data.startDate,
            endDate: store.ctx.core.data.endDate,
            invoiceNo: store.ctx.core.data.invoiceNo,
          },
        },
      });
      let reportData: any[] = [];
      const Api = element.config.main.api;
      await service
        .post(Api, body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          reportData = response.data?.payload?.reportData?.values;
          uiSchema.elements[2].elements[0].config.main.allRowsData = reportData;
        })
        .catch((err) => {
          uiSchema.elements[2].elements[0].config.main.allRowsData = [];
        });
        store.setUiSchema(uiSchema);
    },
  };
};
