import { getUiSchema } from "@jsonforms/core";
import { myService } from "../service/service";
import { RoleMasterRecordsUISchema } from "../UiSchema/RoleMasterRecords/UISchema";
export const RoleMasterRecords = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(store.setLoading, store.setDialogBox, store.navigate);
  return {

    setPage: async function () {
      store.setFormdata({})
      const schema = this.getSchema();
      store.setSchema(schema);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData =  this.getFormData();
      store.setFormdata(formData);
    },
    getFormData: async () => {
      return {}
    },
    getUiSchema: async () => {
      const UiSchema = JSON.parse(
        JSON.stringify(RoleMasterRecordsUISchema)
      );
      console.log(UiSchema);
      const Api =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&status=A";
    const ApiPending =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&status=N";
    const ApiReject =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&status=R";
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
    RoleApprover: function () {
      serviceApi.post("/master/action", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.role.RoleStaging", entityValue: dynamicData.rowData, action: "A" } }).then(async (res) => {
        console.log("approved")
        const data = await this.getFormData();
        store.setFormdata({
          ...data,
        });
        store.setNotify({ SuccessMessage: "Approved successfully", Success: true, })
      })
    },
    Reject_Records: function () {
      serviceApi.post("/master/action", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.role.RoleStaging", entityValue: dynamicData.rowData, action: "R" } }).then(async (res) => {
        const data = await this.getFormData();
        store.setFormdata({
          ...data,
        });
        store.setNotify({ SuccessMessage: "Rejected successfully", Success: true, })
      });
    },

    newRecord: () => {
      store.navigate("/RoleMaster")
    },
    Edit_Approve_Records: function () {
      store.navigate(`/RoleMaster?id=${dynamicData.rowData.id}`)
    }

  };
};
