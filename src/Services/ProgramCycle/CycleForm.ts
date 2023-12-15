import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { ProgramMasterCycleSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycle/Schema";
import { ProgramMasterCycleUiSchema } from "../../UiSchema/ProgramCycle.tsx/ProgramCycle/UiSchema";
import { downloadFile } from "../../utils/downloadFile";
import { myService } from "../../service/service";
import { isErrorsExist } from "../../utils/isErrorsExist";
import { validateFile } from "../../utils/validateFile";
import { ErrorObject } from "ajv";
import { dynamicDataType } from "../../utils/dynamicDataType";
import { handleErrors } from "@/utils/handleErrors";
import { userValue } from "@/App";
export const CycleForm = (store: any, dynamicData: dynamicDataType) => {
  const serviceApi = myService(dynamicData?.setLoading, store.navigate, store);
  return {
    setPage: async function () {
      store.setFormdata({});
      const schema = this.getSchema();
      store.setSchema(schema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      store.setAdditionalErrors(() => []);
    },
    getFormData: async function () {
      const action = store.searchParams?.get("id");
      let formdata = {};
      if (action) {
        const Api =
          "/master/getDetailById?masterName=com.act21.hyperform3.entity.program.ProgramCycle";
        await serviceApi
          .get(`${Api}&id=${action}`)
          .then(async (res) => {
            formdata = res.data.payload;
          })
          .catch(() => {});
      }
      return formdata;
    },
    getUiSchema: async function () {
      const updatedProgramCycleUiSchema = await this.programLoadName(
        store.formData
      );
      return updatedProgramCycleUiSchema;
    },
    getSchema: () => {
      let schema = ProgramMasterCycleSchema;
      const disabled = localStorage.getItem("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      return schema;
    },
    backHandler: function () {
      store.navigate("/CycleRecords");
    },
    createProgramCycles: async function () {
      if (!isErrorsExist(store.schema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Errors on page",
          Fail: true,
        });
      } else {
        await serviceApi
          .post("/programCycle/create", {
            id: 1,
            payload: {
              data: store.ctx.core.data,
              userId: userValue.payload.userId,
            }
          })
          .then((res) => {
            if (res?.status == 200) {
              store.setFormdata({ ...store.ctx.core.data });
              store.navigate("/CycleRecords");
              store.setNotify({
                SuccessMessage: "Submitted Successfully",
                Success: true,
              });
            }
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data); // => the response payload
              let errorData = error.response.data.payload;
              handleErrors(errorData, store);
            }
          });
      }
    },

    programLoadName: async function (ruleId: number) {
      let Ui = JSON.parse(JSON.stringify(ProgramMasterCycleUiSchema));
      const action = store.searchParams?.get("id");

      let selectOption: any[] = [];
      const data = await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.program.Program&status=A"
        )
        .then((res) => {
          selectOption = res.data.map((elem: any) => {
            return {
              label: elem.name ? elem.name : elem.id,
              value: JSON.stringify(elem),
            };
          });

          Ui.elements[1].elements[0].elements[0].config.main.options =
            selectOption;
          return { ...Ui };
        })
        .catch((err) => {
          console.log(err);
        });
      return data;
    },
  };
};
