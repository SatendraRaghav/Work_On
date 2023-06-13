import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../../service/service";
import { ProgramMasterUiSchema } from "../../UiSchema/ProgramMaster/Program/UiSchema";
import { ProgramMasterSchema } from "../../UiSchema/ProgramMaster/Program/Schema";
import { validateForm } from "../../utils/validateForm";
import { dynamicDataType } from "../../utils/dynamicDataType";
export const MasterForm = (
  store:any,
  dynamicData?:dynamicDataType
) => {
  const serviceApi = myService(
    dynamicData?.setLoading,
    store.navigate
      );
  return {
    setPage: async function () {
      const schema = this.getSchema();
      store.setSchema(schema);
      const formData = await this.getFormData();
      store.setFormdata(formData)
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema)
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
            if (res.data.payload.groupList) {
              const result = res.data.payload.groupList.map((a: any) => {
                return { label: a.name, value: JSON.stringify(a) };
              });

              formdata = {
              
                    ...res.data.payload,
                    groupList: result,
                    externalData: types,
        
              };
            } else {
              console.log(res.data);
              formdata = {
                 ...res.data.payload, externalData: types ,
              };
            }

            const newData:any = { ...formdata, externalData: types };
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
          Ui.elements[1].elements[2].config.main.options = selectOption?selectOption:[];
        })
        .catch((err) => {
          Ui.elements[1].elements[2].config.main.options = [];
        });
      console.log(Ui);
      return Ui;
    },
    Submit_PM_Program: async function () {
      store.setValidation("ValidateAndHide")
  
      if (
        ! validateForm( store.schema,  store.ctx.core.errors) ||
        Object.keys( store.ctx.core.data.externalData[0]).length < 1
      ) {
         store.setValidation("ValidateAndShow")
         store.setNotify({Fail:true,FailMessage:"Please fill all required fields"})
        // setValidation("ValidateAndHide")
      } else {
        const groupRedesign =  store.ctx.core.data?.groupList?.map((elem: any) => {
          return JSON.parse(elem.value);
        });
        const types =  store.ctx.core.data.externalData.map((elem: any) => {
          return elem.supportedTypes;
        });
        let newData;
        if ( store.ctx.core.data.id) {
          newData = {
            ... store.ctx.core.data,
            status: "E",
            groupList: groupRedesign ? groupRedesign : [],
            config: { features: { externalData: { supportedTypes: types } } },
          };
        } else {
          newData = {
            ... store.ctx.core.data,
            status: "N",
            groupList: groupRedesign ? groupRedesign : [],
            config: { features: { externalData: { supportedTypes: types } } },
          };
        }
        console.log(newData);
        delete newData["externalData"];
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
            store.setNotify({SuccessMessage:"Submitted Successfully",Success:true,})
         
            store.navigate("/MasterRecords");
          })
          .catch((err) => {
            console.log(err)
            store.setNotify({FailMessage:"Server Error",Fail:true,})
          });
      }
    },
    backHandler: function () {
      store.navigate("/MasterRecords");
    },
  };
};
