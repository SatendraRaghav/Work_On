import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { RoleMasterUISchema } from "../UiSchema/RoleMaster/UISchema";
import { RoleMasterSchema } from "../UiSchema/RoleMaster/Schema";
import { validateForm } from "../utils/validateForm";
export const RoleMasterForm = (store: any, dynamicData: any) => {
  const serviceApi = myService(
    dynamicData?.setLoading,
    
    store.navigate
  );
  return {
    setPage: async function () {
      store.setFormdata({});
      const schema = this.getSchema();
      store.setSchema(schema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
    },
    getFormData: async function () {
      const action = store.searchParams?.get("id");
      let formdata = {};
      if (action) {
        const Api = `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
            if (res.data.payload.permissionList) {
              let result = res.data.payload.permissionList.map((a: any) => {
                return { label: a.permName, value: a.id };
              });
              console.log({ ...res.data.payload, permissionList: result });
              formdata = { ...res.data.payload, permissionList: result };
            } else {
              console.log(res.data);
              formdata = res.data.payload;
            }
          })
          .catch(() => {});
      }

      return formdata;
    },
    getUiSchema: async function () {
      const updatedRoleUiSchema = await this.pageLoad();
      return updatedRoleUiSchema;
    },
    getSchema: () => {
      return RoleMasterSchema;
    },
    backHandler: function () {
      store.navigate("/RoleMasterRecords");
    },
    Submit_Role: async function () {
      if (!validateForm(RoleMasterSchema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Please fill all required fields",
          Fail: true,
        });
      } else {
        const idlist = store.ctx.core.data.permissionList.map(
          (a: any) => a.value
        );
        serviceApi
          .post("/master/getDetailsById", {
            id: 1,
            payload: {
              entityName:
                "com.act21.hyperform3.entity.master.role.RolePermissionStaging",
              entityValue: idlist,
            },
          })
          .then((rest) => {
            const permList = rest.data.payload;
            return serviceApi.post("/master/save", {
              id: 1,
              payload: {
                entityName:
                  "com.act21.hyperform3.entity.master.role.RoleStaging",
                entityValue: {
                  ...store.ctx.core.data,
                  permissionList: permList,
                },
              },
            });
          })
          .then(() => {
            store.navigate("/RoleMasterRecords");
            store.setNotify({
              SuccessMessage: "Submitted Successfully",
              Success: true,
            });
          })
          .catch((err) => {
            store.setNotify({
              FailMessage: err.message,
              Fail: true,
            });
          });
      }
    },
    pageLoad: async () => {
      const Ui = RoleMasterUISchema;
      let selectOption: any[] = [];
      await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&status=A"
        )
        .then((res) => {
          selectOption = res.data?.payload?.map((e: any) => {
            return { label: e.permName, value: e.id };
          });
          
          Ui.elements[1].elements[1].config.main.options = selectOption
            ? selectOption
            : [{ id: 1 }];
        });
      console.log(Ui);
      return Ui;
    },
  };
};
