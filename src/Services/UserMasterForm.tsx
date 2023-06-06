import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";

import { UserMasterUISchema } from "../UiSchema/UserMaster/UISchema";
import { UserMasterSchema } from "../UiSchema/UserMaster/Schema";
import { validateForm } from "../utils/validateForm";
export const UserMasterForm = (
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
      // setFormdata({})
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
          `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.user.UserStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
            if ((res.data.payload.role) && (res.data.payload.position)) {
              console.log({ ...res.data.payload, role: res.data.payload.role.id, position: res.data.payload.position.id });
              formdata = { ...res.data.payload, role: res.data.payload.role.id, position: res.data.payload.position.id };

            }
            else if (res.data.payload.role) {
              console.log({ ...res.data.payload, role: res.data.payload.role.id });
              formdata = { ...res.data.payload, role: res.data.payload.role.id };

            }
            else if (res.data.payload.position) {
              console.log({ ...res.data.payload, position: res.data.payload.position.id });
              formdata = { ...res.data.payload, position: res.data.payload.position.id };

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
      const updatedUserUiSchema = await this.pageLoad();
      return updatedUserUiSchema
    },
    getSchema: () => {
      return UserMasterSchema;
    },
    backHandler: function () {
      navigate("/UserMasterRecords")
    },
    Submit_User: async function () {
      if (
        ! validateForm(schema, ctx.core.errors)
      ) {
        setConfig("ValidateAndShow")
        setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
      } else {
        let idData: any;
        let idDataRep: any;
        serviceApi.get(`/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.Role&id=${ctx.core.data.role}`).then((rest) => {
          //  serviceApi.post("/master/getDetailById", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.role.Role",entityValue:{ id: ctx.core.data.role }}}).then((rest) => {

          idData = rest.data.payload;


        }).then(() => {
          serviceApi.get(`/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNew&id=${ctx.core.data.position}`).then((rest1) => {
            //  serviceApi.post("/master/getDetailById", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.position.PositionNew",entityValue:{ id: ctx.core.data.position }}}).then((rest1) => {
            idDataRep = rest1.data.payload;

          }).then(() => {
            console.log({ ...ctx.core.data, role: idData, position: idDataRep })
            serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.user.UserStaging", entityValue: { ...ctx.core.data, role: idData, position: idDataRep } } }).then((res) => {

              setFormdata({ ...ctx.core.data});
              navigate("/UserMasterRecords")
              setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
            })
          })
        }).catch(() => { });
      }
    },
    pageLoad: async () => {
      const Ui = UserMasterUISchema;
      console.log(Ui)
      let selectOption: any[] = [];
      let selectPositionData: any[] = [];
      console.log(Ui)
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.Role&status=A',

        )
        .then((res) => {
          selectOption = res.data?.payload?.map((e: any) => {
            return { label: e.name, value: e.id }
          });
          //@ts-ignore
          Ui.elements[2].elements[35].config.main.options = selectOption ? selectOption : [{ id: 1 }];
        });

      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNew&status=A'
        )
        .then((res) => {
          selectPositionData = res.data?.payload?.map((e: any) => {
            return { label: e.name, value: e.id }
          });
          //@ts-ignore
          Ui.elements[2].elements[36].config.main.options = selectPositionData ? selectPositionData : [{ id: 1 }];
        })
        ;
      console.log(Ui)
      return Ui;
    },


  };
};
