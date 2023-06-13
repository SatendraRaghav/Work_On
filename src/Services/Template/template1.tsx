import { JsonFormsStateContext } from "@jsonforms/react";
import { ReportTemplate1UiSchema } from "../../UiSchema/Template/ReportTemplate1/UiSchema";
import { myService } from "../../service/service";
import { downloadFile } from "../../utils/downloadFile";
import { buildSchema, buildUiSchema } from "../../utils/buildUiSchema";
import { ReportTemplateSchema } from "../../UiSchema/Template/ReportTemplate1/Schema";
import { EmptyBoxField } from "../../components/EmptyBox";
export const template1 = (store: any, dynamicData: any, config: any) => {
  const service = myService();

  return {
    setPage: async function () {
      store.setFormdata({});
      const uiSchema = await this.getUiSchema();
      const schema = this.getSchema();
      store.setSchema(schema);

      store.setUiSchema(uiSchema);
      store.setFormdata({});
    },
    getFormdata: () => {
      return {};
    },
    getUiSchema: async function () {
      const uiSchema = JSON.parse(JSON.stringify(ReportTemplate1UiSchema()));

      const elements = buildUiSchema(config, store.pageName);
      uiSchema.elements[1].elements.push(...elements);

      const result = await service.get("/program/getAll").then((res) => {
        const options = res.data.payload.map((elem: any) => {
          return { label: elem.name, value: elem.id };
        });
        console.log(uiSchema);

        uiSchema.elements[1].elements[0].config.main.options = options;

        return uiSchema;
      });
      return result;
    },
    getSchema: () => {
      const schema = ReportTemplateSchema;
      const propertyObj = buildSchema(config, store.pageName);
      return {
        ...schema,
        properties: { ...schema.properties, ...propertyObj.property },
        required: [...schema.required, ...propertyObj.required],
      };
    },

    downloadFile: async () => {
      console.log(store.ctx);
      if (store.ctx.core.errors.length > 0) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Please fill all required fields",
          Fail: true,
        });
        return;
      }
      const tempName: string[] = window.location.pathname.split("_");
      const paramName = tempName[tempName.length - 1];
      const body = JSON.stringify({
        payload: {
          reportName: paramName,
          reportFormat: "grid",
          params: {
            programId: store.ctx.core.data.programType,
            fromDate: store.ctx.core.data[`${store.pageName}startdate`],
            endDate: store.ctx.core.data[`${store.pageName}enddate`],
          },
        },
      });
      await service
        .post("/workflow/generateReport", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          response.data.payload;
          const data = JSON.stringify({
            payload: {
              fileName: `${paramName}.csv`,
              grid: response.data.payload.reportData,
            },
          });
          return service.post("report/convertGridToCSVFile", data, {
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          });
        })
        .then((response: any) => {
          downloadFile(response.data.payload);
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
  };
};
