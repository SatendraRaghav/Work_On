import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../../service/service";
import { ProgramMasterUiSchema } from "../../UiSchema/ProgramMaster/Program/UiSchema";
import { ProgramMasterSchema } from "../../UiSchema/ProgramMaster/Program/Schema";
import { isErrorsExist } from "../../utils/isErrorsExist";
import { dynamicDataType } from "../../utils/dynamicDataType";
import { handleErrors } from "@/utils/handleErrors";
import { cloneDeep } from "lodash";
import { userValue } from "@/App";
import _ from "lodash";
export const MasterForm = (store: any, dynamicData?: dynamicDataType) => {
  const serviceApi = myService(dynamicData?.setLoading, store.navigate, store);
  return {
    setPage: async function () {
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const schema = await this.getSchema();
      store.setSchema(schema);
      const UiSchema =  this.getUiSchema();
      store.setUiSchema(UiSchema)
    },
    getFormData: async () => {
      const action = store.searchParams?.get("id");
      let formdata = {};
      if (action) {
        const Api =
          "/master/getDetailById?masterName=com.act21.hyperform3.entity.program.ProgramStaging";
        await serviceApi
          .get(`${Api}&id=${action}`)
          .then((res: any) => {
            const types =
              res.data.config.features.externalData.supportedTypes.map(
                (e: any) => {
                  return { supportedTypes: e };
                }
              );
            let simulation;
            let timeout;
            if (res.data.config.features.simulationConfig) {
              if (res.data.config.features.simulationConfig.simulationTypes) {
                simulation =
                  res.data.config.features.simulationConfig.simulationTypes.map(
                    (e: any) => {
                      return { simulationTypes: e };
                    }
                  );
              }
              timeout = res.data.config.features?.simulationConfig?.timeout;
            }

            if (res.data.groupList) {
              const result = res.data.groupList.map((a: any) => {
                return { label: a.name, value: JSON.stringify(a) };
              });

              formdata = {
                ...res.data,
                groupList: result,
                externalData: types,
                simulation: simulation,
                timeout: timeout,
              };
            } else {
              formdata = {
                ...res.data,
                externalData: types,
              };
            }

            const newData: any = {
              ...formdata,

              externalData: types,
              simulation: simulation,
              timeout: timeout,
            };
            formdata = newData;
          })
          .catch(() => {});
      }
      return { ...formdata };
    },
    getUiSchema:  function () {
      return ProgramMasterUiSchema;
    },
    getSchema: async function(){
      const schema = await this.pageLoad();
      const disabled = localStorage.getItem("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      return schema;
    },

    onChange: function () {
      const uiSchema = cloneDeep(store.uiSchema);
      if (store?.newData?.isRecurring !== undefined) {
        let value = store?.newData?.isRecurring;
        if (value === "NO") {
          uiSchema.elements[1].elements[0].elements[7].options.widget =
            "EmptyBox";
          uiSchema.elements[1].elements[0].elements[6].options.widget =
            "EmptyBox";
          uiSchema.elements[1].elements[0].elements[5].options.widget =
            "DateInputField";
        } else {
          uiSchema.elements[1].elements[0].elements[7].options.widget =
            "InputField";
          uiSchema.elements[1].elements[0].elements[6].options.widget =
            "SelectInputField";
          uiSchema.elements[1].elements[0].elements[5].options.widget =
            "EmptyBox";
        }
      }
      store.setUiSchema(uiSchema);
    },

    pageLoad: async () => {
      const cloneSchema = _.cloneDeep(ProgramMasterSchema);
     
      await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.group.Group&status=A"
        )
        .then((res) => {
          const selectOption = res.data.map((e: any) => {
            return { title: e.name, const: JSON.stringify(e) };
          });
          if(!(_.isEmpty(selectOption))){
          cloneSchema.properties.groupList = {
            ...cloneSchema.properties?.groupList,
            type:"array",
            items:{
              oneOf:selectOption
            }
          }}
        })
      return cloneSchema;
    },
    Submit_PM_Program: async function () {
      store.setValidation("ValidateAndHide");

      // if (
      //   ! isErrorsExist( store.schema,  store.ctx.core.errors) ||
      //   Object.keys( store.ctx.core.data.externalData[0]).length < 1
      // ) {
      //    store.setValidation("ValidateAndShow")
      //    store.setNotify({Fail:true,FailMessage:"Errors on page"})

      // } else {
      const groupRedesign = store.ctx.core.data?.groupList?.map((elem: any) => {
        return JSON.parse(elem);
      });
      const types = store.ctx.core.data?.externalData?.map((elem: any) => {
        return elem.supportedTypes;
      });
      const simulationtypes = store.ctx.core.data?.simulation?.map(
        (elem: any) => {
          return elem.simulationTypes;
        }
      );
      let newData: any;
      const timeout = store.ctx.core.data.timeout;
      delete store.ctx.core.data.timeout;
      delete store.ctx.core.data.simulation;
      if (store.ctx.core.data.id) {
        newData = {
          ...store.ctx.core.data,
          status: "E",
          groupList: groupRedesign ? groupRedesign : [],
          config: {
            features: {
              externalData: { supportedTypes: types },
              simulationConfig: {
                simulationTypes: simulationtypes,
                timeout: timeout,
              },
            },
          },
        };
      } else {
        newData = {
          ...store.ctx.core.data,
          status: "N",
          groupList: groupRedesign ? groupRedesign : [],
          config: {
            features: {
              externalData: { supportedTypes: types },
              simulationConfig: {
                simulationTypes: simulationtypes,
                timeout: timeout,
              },
            },
          },
        };
      }
      console.log(newData);
      delete newData["externalData"];
      delete newData["PendingRecords"];
      delete newData["ProgramApproveRecords"];
      delete newData["RejectRecords"];
      // const demodata = {...newData,id:null}
      await serviceApi
        .post("/master/save", {
            entityName: "com.act21.hyperform3.entity.program.ProgramStaging",
            entityValue: { ...newData },
            userId: userValue.payload.userId,
          
        })
        .then((res) => {
          if (res?.status == 200 || res?.data?.status == "SUCCESS") {
            store.setNotify({
              SuccessMessage: "Submitted Successfully",
              Success: true,
            });

            store.navigate("/MasterRecords");
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data); // => the response payload
            let errorData = error.response.data;
            handleErrors(errorData, store);
          }
        });
      //    }
    },
    backHandler: function () {
      store.navigate("/MasterRecords");
    },
  };
};
