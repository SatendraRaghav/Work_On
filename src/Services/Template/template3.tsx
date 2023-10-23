import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../../service/service";
import { downloadFile } from "../../utils/downloadFile";

export const template3 = (
  pageName?: any,
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  uiSchema?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?: any,
) => {
  const service = myService(otherData.setLoading, otherData.setDialogBox);
  return {
    setPage: async function () {
      const finalUiSchema = await this.getUiSchema();
      setUiSchema(finalUiSchema);
      const schema = this.getSchema()
      setSchema(schema);
      let formData: any = await this.getFormdata();
      setFormdata(formData);
    },
    getFormdata: () => {
      let formData: any = {};
      const elements: any = uiSchema.elements[2].elements[0].elements;
      elements.forEach((element: any) => {
        if (element?.options?.widget === "Table") {
          formData[`${element.options.name}`] = [];
        }
      });
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
        if (elem.value?.content?.optionsName) {
          return elem.value?.content?.optionsName;
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
        if (elem.value?.content?.optionsName) {
          const optionList = response[elem.value.content.optionsName]
          const options = optionList.map((childElem: any) => {
            return { label: childElem.name, value: childElem.id };;
          });
          elem.value.content.options = options;
        }
        return elem;
      });
      finalUiSchema.elements[1].elements = allElements;
      return finalUiSchema;
    },
    search: async function () {
      if (ctx.core.errors.length > 0) {
        setConfig("ValidateAndShow")
        setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
        return;
      }
      this.tempTableLoad();
    },

    tempTableLoad: async function () {
      let formData = JSON.parse(JSON.stringify(ctx.core.data));

      const tempName: string[] = window.location.pathname.split("_");
      const paramName = tempName[tempName.length - 1];

      const elements = uiSchema.elements[2].elements[0].elements;
      const element = elements[0];
      const body = JSON.stringify({
        payload: {
          reportName: `${paramName}_${element.options.name}`,
          reportFormat: "grid",
          params: {
            programId: ctx.core.data.programType,
            fromDate: ctx.core.data.startDate,
            endDate: ctx.core.data.endDate,
            invoiceNo: ctx.core.data.invoiceNo,
          },
        },
      });
      let reportData: any[] = [];
      const Api = element.options.api;
      await service
        .post(Api, body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          reportData = response.data?.payload?.reportData?.values;
          formData[`${element.options.name}`] = reportData;
        })
        .catch((err) => {
          formData[`${element.options.name}`] = [];
        });
      setFormdata(formData);
    },
  }

}