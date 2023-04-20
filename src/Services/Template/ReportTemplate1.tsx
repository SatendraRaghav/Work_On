import { JsonFormsStateContext } from "@jsonforms/react";
import { ReportTemplate1UiSchema } from "../../UiSchema/Template/ReportTemplate1/UiSchema";
import { InputField } from "../../components/TextInputField";
import { DateInputField } from "../../components/DateInputField";
import { SelectInputField } from "../../components/SelectInputField";
import { Button } from "../../components/Button";
import { myService } from "../../service/service";
import { downloadFile } from "../../utils/downloadFile";
import { EmptyBox } from "../../components/Button";

export const ReportTemplate1 = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  config?: any,
) => {
  const service = myService();
  
  return {
    setPage: async function () {
      setFormdata({});
      const uiSchema = await this.getUiSchema();

      setSchema({});

      setUiSchema(uiSchema);
      setFormdata({});
    },
    getFormdata: () => {
      return {};
    },
    getUiSchema: async function () {
      // let uiSchema: any = null
      const actionId =  otherData[0].get("id")
      const id = parseInt( actionId);
      let config ;
      await service
        .get(`/page/getById?id=${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          config = response.data.payload.config;})
      //     const baseUiSchema = response.data.payload.templateMaster.name;
      //     switch (baseUiSchema) {
      //       case "ReportTemplate1":
      //         uiSchema = JSON.parse(JSON.stringify(ReportTemplate1UiSchema));
      //         const elements = this.buildUiSchema(config);
      //         uiSchema.elements.push(...elements);
      //         break;
      //       case "ReportTemplate2":
      //         break;
      //       case "ReportTemplate3":
      //         break;
      //     }

      //     return
      const baseUiSchema = JSON.parse(JSON.stringify(ReportTemplate1UiSchema));
      const elements = this.buildUiSchema(config);
      baseUiSchema.elements.push(...elements);
      const result = await service
        .get("/program/getAll")
        .then((response) => {
          const data = response.data.payload.map((elem: any) => {
            return { label: elem.name, value: elem.id };
          });
          //@ts-ignore
          baseUiSchema.elements[1].value.content.options = data;
          return baseUiSchema;
        })
        .catch((err) => {
          console.log(err);
        });

      return result;
    },
    getSchema: () => {},
    buildUiSchema: (config: any) => {
      let elements: any = [];

      for (let i = 0; i < config.length; i++) {
        switch (config[i].type) {
          case "text":
            const inputField = JSON.parse(JSON.stringify(InputField));
            inputField.value.content.label = config[i].name;
            inputField.scope = `#/properties/${config[i].name
              .toLowerCase()
              .replace(/ /g, "")}`;
            elements.push(inputField);
            break;
          case "date":
            const dateInputField = JSON.parse(JSON.stringify(DateInputField));
            dateInputField.value.content.label = config[i].name;
            dateInputField.scope = `#/properties/${config[i].name
              .toLowerCase()
              .replace(/ /g, "")}`;
            elements.push(dateInputField);
            break;
          case "select":
            const selectInputField = JSON.parse(
              JSON.stringify(SelectInputField)
            );
            selectInputField.value.content.label = config[i].name;
            selectInputField.scope = `#/properties/${config[i].name
              .toLowerCase()
              .replace(/ /g, "")}`;
            if (config[i].hasOwnProperty("constant")) {
              selectInputField.value.content.options = config[i].constant;
            }
            elements.push(selectInputField);
            break;
          case "button":
            const button = JSON.parse(JSON.stringify(Button));
            elements.push(EmptyBox);
            button.value.content.name = config[i].name;
            elements.push(button);
            break;
        }
      }

      return elements;
    },
    downloadFile: async () => {
      const paramName = otherData[0].get("name");
      const body = JSON.stringify({
        payload: {
          reportName: paramName,
          reportFormat: "grid",
          params: {
            programId: ctx.core.data.programType,
            fromDate: ctx.core.data.startdate,
            endDate: ctx.core.data.enddate,
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
          return service.post("externalData/convertGridToCSVFile", data, {
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          });
        })
        .then((response) => {
          downloadFile(response.data.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
};
