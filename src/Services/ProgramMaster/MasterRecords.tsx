import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../../service/service";
import { ProgramMasterRecordUiSchema } from "../../UiSchema/ProgramMaster/ProgramRecord/UiSchema";
import { dynamicDataType } from "../../utils/dynamicDataType";

export const MasterRecords = (store: any,dynamicData?:dynamicDataType) => {
  const serviceApi = myService(
    dynamicData?.setLoading,
    store?.setDialogBox,
    store.navigate
  );
  return {
    setPage: async function () {
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const schema = await this.getSchema();
      store.setSchema(schema);
    },
    getFormData: async () => {
      return {};
    },
    getUiSchema: async () => {
      const UiSchema = JSON.parse(JSON.stringify(ProgramMasterRecordUiSchema));
      console.log(UiSchema);
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=A";
      const ApiPending =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=N";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=R";
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
    getSchema: async () => {
      return {};
    },
    Approve_Records: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName: "com.act21.hyperform3.entity.program.ProgramStaging",
            entityValue: dynamicData.rowData,
            action: "A",
          },
        })
        .then(async (res) => {
          const data = await this.getFormData();
          store.setFormdata({
            ...data,
          });
          store.setNotify({
            SuccessMessage: "Approved successfully",
            Success: true,
          });
        });
    },
    Reject_Records: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName: "com.act21.hyperform3.entity.program.ProgramStaging",
            entityValue: dynamicData.rowData,
            action: "R",
          },
        })
        .then(async (res) => {
          const data = await this.getFormData();
          store.setFormdata({
            ...data,
          });
          store.setNotify({
            SuccessMessage: "Rejected successfully",
            Success: true,
          });
        });
    },
    Edit_Approve_Records: function () {
      store.navigate(`/MasterForm?id=${dynamicData.rowData.id}`);
    },
    addNewRecords: function () {
      store.navigate("/MasterForm");
    },
  };
};
