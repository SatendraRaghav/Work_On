import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";

import { RolePermissionRecordsUISchema } from "../UiSchema/RolePermissionRecords/UISchema";
import { RolePermissionUISchema } from "../UiSchema/RolePermission/UISchema";
export const RolePermissionRecords = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(dynamicData?.setLoading,  store.navigate);
  return {
    setPage: async function () {
      const schema = this.getSchema();
      store.setSchema(schema);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData =  await this.getFormData();
      store.setFormdata(formData);
    },
    getFormData: async () => {
      return {}
    },
    getUiSchema: async () => {
      const UiSchema = JSON.parse(
        JSON.stringify(RolePermissionRecordsUISchema)
      );
      console.log(UiSchema);
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&status=A";
      const ApiPending =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&status=N";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&status=R";
      const data = await serviceApi
        .get(Api)
        .then((res) => {
          UiSchema.elements[1].elements[0].config.main.allRowsData =
            res.data.payload;

          return serviceApi.get(ApiPending);
        })
        .then((res) => {
          UiSchema.elements[1].elements[1].config.main.allRowsData =
            res.data.payload;
          return serviceApi.get(ApiReject);
        })
        .then((res) => {
          UiSchema.elements[1].elements[2].config.main.allRowsData =
            res.data.payload;
          // return UiSchema;
        })
        .catch((err) => {
          UiSchema.elements[1].elements[0].config.main.allRowsData = [];
          UiSchema.elements[1].elements[1].config.main.allRowsData = [];
          UiSchema.elements[1].elements[2].config.main.allRowsData = [];
        });
      return UiSchema;
    },
    getSchema: () => {
      return {};
    },
    RolePermissionApprover: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName:
              "com.act21.hyperform3.entity.master.role.RolePermissionStaging",
            entityValue: dynamicData?.rowData,
            action: "A",
          },
        })
        .then(async (res) => {
          console.log("approved");
          const data = await this.getUiSchema();
          store.setUiSchema(data)
          store.setNotify({ SuccessMessage: "Approved successfully", Success: true });
        });
    },
    Reject_Records: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName:
              "com.act21.hyperform3.entity.master.role.RolePermissionStaging",
            entityValue: dynamicData?.rowData,
            action: "R",
          },
        })
        .then(async (res) => {
          const data = await this.getUiSchema();
          store.setUiSchema(data)
          store.setNotify({ SuccessMessage: "Rejected successfully", Success: true });
        });
    },

    newRecord: () => {
      store.navigate("/RolePermission");
    },
    Edit_Approve_Records: function () {
      store.navigate(`/RolePermission?id=${dynamicData?.rowData.id}`);
    },
  };
};
