import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { PositionMasterRecordsUISchema } from "../UiSchema/PositionMasterRecords/UISchema";
import { PositionMasterUISchema } from "../UiSchema/PositionMaster/UISchema";
export const PositionMasterRecords = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(store.setLoading, store.setDialogBox, store.navigate);

  return {
    setPage: async function () {
      const schema = this.getSchema();
      store.setSchema(schema);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData =  this.getFormData();
      store.setFormdata(formData);
    },
    getFormData:  () => {
      return {};
    },
    getUiSchema: async () => {
      const UiSchema = JSON.parse(JSON.stringify(PositionMasterRecordsUISchema));
      console.log(UiSchema);
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging&status=A";
      const ApiPending =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging&status=N";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging&status=R";
      await serviceApi
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
    PositionApprover: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName:
              "com.act21.hyperform3.entity.master.position.PositionNewStaging",
            entityValue: dynamicData.rowData,
            action: "A",
          },
        })
        .then(async (res) => {
          console.log("approved");
          const data = await this.getFormData();
          store.setFormdata({
            ...data,
          });
          store.setNotify({ SuccessMessage: "Approved Successfully", Success: true });
        });
    },
    Reject_Records: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName:
              "com.act21.hyperform3.entity.master.position.PositionNewStaging",
            entityValue: dynamicData.rowData,
            action: "R",
          },
        })
        .then(async (res) => {
          const data = await this.getFormData();
          store.setFormdata({
            ...data,
          });
          store.setNotify({ SuccessMessage: "Rejected Successfully", Success: true });
        });
    },

    newRecord: () => {
      store.navigate("/PositionMaster");
    },
    Edit_Approve_Records: function () {
      store.navigate(`/PositionMaster?id=${dynamicData.rowData.id}`);
    },
  };
};
