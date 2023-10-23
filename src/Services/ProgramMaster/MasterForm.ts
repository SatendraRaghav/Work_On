import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../../service/service";
import { ProgramMasterUiSchema } from "../../UiSchema/ProgramMaster/Program/UiSchema";
import { ProgramMasterSchema } from "../../UiSchema/ProgramMaster/Program/Schema";
import { isErrorsExist } from "../../utils/isErrorsExist";
import { dynamicDataType } from "../../utils/dynamicDataType";
import { handleErrors } from "@/utils/handleErrors";
export const MasterForm = (
  store:any,
  dynamicData?:dynamicDataType
) => {
  const serviceApi = myService(
    dynamicData?.setLoading,
    store.navigate,
    store
      );
  return {
    setPage: async function () {
      const schema = this.getSchema();
      store.setSchema(schema);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema)
      const formData = await this.getFormData();
      store.setFormdata(formData)
    },
    getFormData: async () => {
      const action =  store.searchParams?.get("id")
      let formdata = {};
      if (action) {
        const Api = `/master/getDetailById?masterName=com.act21.hyperform3.entity.program.ProgramStaging&id=${action}`;
        await serviceApi
          .get(`${Api}&id=${action}`)
          .then((res) => {
            const types =
              res.data.payload.config.features.externalData.supportedTypes.map(
                (e: any) => {
                  return { supportedTypes: e };
                }
              );
              const simulation =
              res.data.payload.config.features?.simulationConfig?.simulationTypes.map(
                (e: any) => {
                  return { simulationTypes: e };
                }
              );
              const timeout=res.data.payload.config.features?.simulationConfig?.timeout;
            if (res.data.payload.groupList) {
              const result = res.data.payload.groupList.map((a: any) => {
                return { label: a.name, value: JSON.stringify(a) };
              });

              formdata = {
              
                    ...res.data.payload,
                    groupList: result,
                    externalData: types,
                    simulation:simulation,
                    timeout:timeout
              };
            } else {
              console.log(res.data);
              formdata = {
                 ...res.data.payload, externalData: types ,
              };
            }

            const newData:any = { ...formdata, externalData: types ,simulation:simulation,timeout:timeout};
            formdata = newData;
          })
          .catch(() => {});
      }
      return formdata;
    },
    getUiSchema: async function () {
      const ProgramMasterUiSchema = await this.pageLoad();
      return ProgramMasterUiSchema;
    },
    getSchema: () => {
      return ProgramMasterSchema;
    },
    pageLoad: async () => {
      const Ui = ProgramMasterUiSchema;
      console.log(Ui);
      let selectOption: any[] = [];
      await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.group.GroupStaging&status=A"
        )
        .then((res) => {
          selectOption = res.data.payload.map((e: any) => {
            return { label: e.name, value: JSON.stringify(e)  };
          });
          Ui.elements[1].elements[0].elements[2].config.main.options = selectOption?selectOption:[];
        })
        .catch((err) => {
          Ui.elements[1].elements[0].elements[2].config.main.options = [];
        });
      console.log(Ui);
      return Ui;
    },
    Submit_PM_Program: async function () {
      store.setValidation("ValidateAndHide")
  
      // if (
      //   ! isErrorsExist( store.schema,  store.ctx.core.errors) ||
      //   Object.keys( store.ctx.core.data.externalData[0]).length < 1
      // ) {
      //    store.setValidation("ValidateAndShow")
      //    store.setNotify({Fail:true,FailMessage:"Errors on page"})
      
      // } else {
        const groupRedesign =  store.ctx.core.data?.groupList?.map((elem: any) => {
          return JSON.parse(elem.value);
        });
        const types =  store.ctx.core.data?.externalData?.map((elem: any) => {
          return elem.supportedTypes;
        });
        const simulationtypes =  store.ctx.core.data?.simulation?.map((elem: any) => {
          return elem.simulationTypes;
        });
        let newData:any;
       const timeout= store.ctx.core.data.timeout;
       delete store.ctx.core.data.timeout;
       delete store.ctx.core.data.simulation;
        if ( store.ctx.core.data.id) {
          newData = {
            ... store.ctx.core.data,
            status: "E",
            groupList: groupRedesign ? groupRedesign : [],
            config: { features: { externalData: { supportedTypes: types } ,simulationConfig:{simulationTypes:simulationtypes,timeout:timeout}} },
          };
        } else {
          newData = {
            ... store.ctx.core.data,
            status: "N",
            groupList: groupRedesign ? groupRedesign : [],
            config: { features: { externalData: { supportedTypes: types } ,simulationConfig:{simulationTypes:simulationtypes,timeout:timeout}} },
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
            id: 1,
            payload: {
              entityName: "com.act21.hyperform3.entity.program.ProgramStaging",
              entityValue: { ...newData },
            },
          })
          .then((res) => {
            if (res?.data?.status=="SUCCESS") { 
            store.setNotify({SuccessMessage:"Submitted Successfully",Success:true,})
         
            store.navigate("/MasterRecords");
            }
          })
          .catch((error) => {
            if( error.response ){
              console.log(error.response.data); // => the response payload 
                let errorData=error.response.data.payload;
                handleErrors(errorData,store);
          }
        });
  //    }
    },
    backHandler: function () {
      store.navigate("/MasterRecords");
    },
  };
};
