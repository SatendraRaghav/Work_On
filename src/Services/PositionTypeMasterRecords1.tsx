import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { PositionTypeMasterRecordsUISchema } from "../UiSchema/PositionTypeMasterRecords/UISchema";
export const PositionTypeMasterRecords = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(dynamicData?.setLoading,  store.navigate);
  return {
    setPage: async function () {
      store.setFormdata({});
      const schema = this.getSchema();
      store.setSchema(schema);
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData =  this.getFormData();
      store.setFormdata(formData);
    },
    getFormData:  () => {
      return {}
    },
    getUiSchema: async () => {
      const UiSchema = JSON.parse(
        JSON.stringify(PositionTypeMasterRecordsUISchema)
      );
      console.log(UiSchema);
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNewStaging&status=A";
      const ApiPending =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNewStaging&status=N";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNewStaging&status=R";
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
    PositionTypeApprover: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName:
              "com.act21.hyperform3.entity.master.position.PositionTypeNewStaging",
            entityValue: dynamicData?.rowData,
            action: "A",
          },
        })
        .then(async (res) => {
          console.log("approved");
          const data = await this.getUiSchema();
          store.setUiSchema(data)
          store.setNotify({ SuccessMessage: "Approved Successfully", Success: true });
        });
    },
    Reject_Records: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName:
              "com.act21.hyperform3.entity.master.position.PositionTypeNewStaging",
            entityValue: dynamicData?.rowData,
            action: "R",
          },
        })
        .then(async (res) => {
          const data = await this.getUiSchema();
          store.setUiSchema(data)
          store.setNotify({ SuccessMessage: "Rejected Successfully", Success: true });
        });
    },

    newRecord: () => {
      store.navigate("/PositionTypeMaster");
    },
    Edit_Approve_Records: function () {
      store.navigate(`/PositionTypeMaster?id=${dynamicData?.rowData.id}`);
    },
  };
};
