import { JsonFormsStateContext } from "@jsonforms/react";
//import service from "service";
import { myService } from "../service/service";
import { GroupMasterRecordsUISchema } from "../UiSchema/GroupMasterRecords/UISchema";

export const GroupMasterRecords = (
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
  const serviceApi = myService(
    otherData.setLoading,
    otherData.setDialogBox,
    navigate
  );
  return {
    setPage: async function () {
      setFormdata({});
      const schema = this.getSchema();
      setSchema(schema);
      const UiSchema = await this.getUiSchema();
      setUiSchema(UiSchema);
      const formData = this.getFormData();
      setFormdata(formData);
    },
    getFormData: async () => {
      return {};
    },
    getUiSchema: async () => {
      const UiSchema = JSON.parse(JSON.stringify(GroupMasterRecordsUISchema));
      console.log(UiSchema);
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.group.GroupStaging&status=A";
      const ApiPending =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.group.GroupStaging&status=N";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.group.GroupStaging&status=R";
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
    Approver: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName: "com.act21.hyperform3.entity.group.GroupStaging",
            entityValue: otherData.rowData,
            action: "A",
          },
        })
        .then(async (res) => {
          console.log("approved");
          const data = await this.getFormData();
          setFormdata({
            ...data,
          });
          setNotify({ SuccessMessage: "Approved successfully", Success: true });
        });
    },
    Reject_Records: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName: "com.act21.hyperform3.entity.group.GroupStaging",
            entityValue: otherData.rowData,
            action: "R",
          },
        })
        .then(async (res) => {
          const data = await this.getFormData();
          setFormdata({
            ...data,
          });
          setNotify({ SuccessMessage: "Rejected successfully", Success: true });
        });
    },

    newRecord: () => {
      navigate("/GroupMaster");
    },
    Edit_Approve_Records: function () {
      navigate(`/GroupMaster?id=${otherData.rowData.id}`);
    },
  };
};
