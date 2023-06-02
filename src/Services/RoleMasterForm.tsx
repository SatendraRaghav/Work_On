import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { RoleMasterUISchema } from "../UiSchema/RoleMaster/UISchema";
import { RoleMasterSchema } from "../UiSchema/RoleMaster/Schema";
import { validateForm } from "../utils/validateForm";
export const RoleMasterForm = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?: any
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
          `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
            if (res.data.payload.permissionList) {
              let result = res.data.payload.permissionList.map((a: any) => {
                return { label: a.permName, value: a.id }
              });
              console.log({ ...res.data.payload, permissionList: result })
              formdata = { ...res.data.payload, permissionList: result };

            }
            else {
              console.log(res.data);
              formdata = res.data.payload;

            }


          })
          .catch(() => { });
      }

      return formdata;
    },
    getUiSchema: async function () {
      const updatedRoleUiSchema = await this.pageLoad();
      return updatedRoleUiSchema
    },
    getSchema: () => {
      return RoleMasterSchema;
    },
    backHandler: function () {
      navigate("/RoleMasterRecords")
    },
    Submit_Role: async function () {
      if (
        ! validateForm(schema, ctx.core.errors)
      ) {
        setConfig("ValidateAndShow")
        setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
      } else {
        let permList: any;
        let idlist = ctx.core.data.permissionList.map((a: any) => a.value)
        console.log(idlist);
        // if (!otherData[0].get("id")) {
        //   idlist = ctx.core.data.permissionList
        // }
        serviceApi.post("/master/getDetailsById", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.role.RolePermissionStaging", entityValue: idlist } }).then((rest) => {

          permList = rest.data.payload;

        }).then(() => {
          console.log(ctx.core.data)
          serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.role.RoleStaging", entityValue: { ...ctx.core.data, permissionList: permList } } }).then((res) => {
            setFormdata({ ...ctx.core.data });
            navigate("/RoleMasterRecords")
            setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
          })
        }).catch(() => { });
      }
    },
    pageLoad: async () => {
      const Ui = RoleMasterUISchema;
      let selectOption: any[] = [];
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&status=A'
        )
        .then((res) => {
          selectOption = res.data?.payload?.map((e: any) => {
            return { label: e.permName, value: e.id }
          });
          //@ts-ignore
          Ui.elements[1].elements[1].value.content.options = selectOption ? selectOption : [{ id: 1 }];
        });
      console.log(Ui)
      return Ui;
    },


  };
};
