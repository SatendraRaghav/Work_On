import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { PositionMasterUISchema } from "../UiSchema/PositionMaster/UISchema";
import { PositionMasterSchema } from "../UiSchema/PositionMaster/Schema";
import { validateForm } from "../utils/validateForm";
export const PositionMasterForm = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?:any
) => {
  const serviceApi =  myService(otherData.setLoading, otherData.setDialogBox, navigate);
  return {
    setPage: async function () {
      setFormdata({})
      const schema = this.getSchema();
      setSchema(schema);
      const formData = await this.getFormData();
      setFormdata(formData);
      const UiSchema = await this.getUiSchema();
      setUiSchema(UiSchema);

    },
    getFormData: async function () {
      const action = otherData.searchParams?.get("id")
      let formdata = {}
      if (action) {
        const Api =
          `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
            if ((res.data.payload.type) && (res.data.payload.parent)) {
              console.log({ ...res.data.payload, type: res.data.payload.type.id, parent: res.data.payload.parent.id });
              formdata = { ...res.data.payload, type: res.data.payload.type.id, parent: res.data.payload.parent.id };

            }
            else if (res.data.payload.type) {
              console.log({ ...res.data.payload, type: res.data.payload.type.id });
              formdata = { ...res.data.payload, type: res.data.payload.type.id };
            }
            else if (res.data.payload.parent) {
              console.log({ ...res.data.payload, parent: res.data.payload.parent.id });
              formdata = { ...res.data.payload, parent: res.data.payload.parent.id };
            }
            else {
              console.log(res.data.payload);
              formdata = res.data.payload;
            }


          })
          .catch(() => { });
      }

      return formdata;
    },
    getUiSchema: async function () {
      const updatedPositionUiSchema = await this.pageLoad();
      return updatedPositionUiSchema
    },
    getSchema: () => {
      return PositionMasterSchema;
    },
    backHandler: function () {
      navigate("/PositionMasterRecords")
    },
    Submit_Position: async function () {
      if (
        ! validateForm(schema, ctx.core.errors)
      ) {
        setConfig("ValidateAndShow")
        setNotify({FailMessage:"Please fill all required fields",Fail:true,})
      } else {
        let idDataRep: any;
        let idData: any;
        serviceApi.get(`/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNew&id=${ctx.core.data.type}`).then((rest) => {
          console.log(rest.data.payload);
          idData = rest.data.payload;

        }).then(() => {
          serviceApi.get(`/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNew&id=${ctx.core.data.parent}`).then((rest1) => {
            console.log(rest1.data.payload);
            idDataRep = rest1.data.payload;
          }).then(() => {
            serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.position.PositionNewStaging", entityValue: { ...ctx.core.data, type: idData, parent: idDataRep } } }).then((res) => {
              //            service.post("/master/save?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging",ctx.core.data).then((res) => {    
              setFormdata({ ...ctx.core.data});
              navigate("/PositionMasterRecords")
              setNotify({SuccessMessage:"Submitted Successfully",Success:true,})
            })
          })

        }).catch(() => { });
      }
    },
    pageLoad: async () => {
      const Ui = PositionMasterUISchema;
      let selectOption: any[] = [];
      let selectParentData: any[] = [];
      console.log(Ui)
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNew&status=A'
        )
        .then((res) => {
          selectOption = res.data?.payload?.map((e: any) => {
            return { label: e.name, value: e.id }
          });
          //@ts-ignore
          Ui.elements[1].elements[1].value.content.options = selectOption ? selectOption : [{ id: 1 }];
        })
        ;
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNew&status=A'
        )
        .then((res) => {
          selectParentData = res.data?.payload?.map((e: any) => {
            return { label: e.name, value: e.id }
          });
          //@ts-ignore
          Ui.elements[1].elements[2].value.content.options = selectParentData ? selectParentData : [{ id: 1 }];
        })
        ;

      console.log(Ui)
      return Ui;
    },


  };
};
