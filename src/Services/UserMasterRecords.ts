import { getUiSchema } from "@jsonforms/core";
import { myService } from "../service/service";
import { UserMasterRecordsUISchema } from "../UiSchema/UserMasterRecords/UISchema";
import { UserMasterUISchema } from "../UiSchema/UserMaster/UISchema";
export const UserMasterRecords = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(dynamicData?.setLoading,  store.navigate);

  return {
    setPage: async function () {
      store.setFormdata({});
      const schema = this.getSchema();
      store.setSchema(schema);
      const UiSchema =await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
    },
    getFormData: async () => {
      const fomData:any = {};
      const Api =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging&status=A";
    const ApiPending =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging&status=N";
    const ApiReject =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging&status=R";
    const data = await serviceApi
      .get(Api)
      .then((res) => {
        fomData.ApproveRecords=  res.data.payload;

        return serviceApi.get(ApiPending);
      })
      .then((res) => {
      
        fomData.PendingRecords=  res.data.payload;
        return serviceApi.get(ApiReject);
      })
      .then((res) => {
        fomData.RejectRecords=  res.data.payload;
        console.log(fomData)
      })
      .catch((err) => {
        fomData.ApproveRecords=  [];
        fomData.PendingRecords=  [];
        fomData.RejectRecords=  [];
      });
      return fomData;
    },
    getUiSchema: async () => {
      return UserMasterRecordsUISchema
    },
    getSchema: () => {
      return {};
    },
    UserApprover: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName: "com.act21.hyperform3.entity.master.user.UserStaging",
            entityValue: dynamicData?.rowData,
            action: "A",
          },
        })
        .then(async (res) => {
          console.log("approved");
          const formData = await this.getFormData();
          store.setFormdata(formData);
          store.setNotify({ SuccessMessage: "Approved successfully", Success: true });
        });
    },
    Reject_Records: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName: "com.act21.hyperform3.entity.master.user.UserStaging",
            entityValue: dynamicData?.rowData,
            action: "R",
          },
        })
        .then(async (res) => {
          const formData = await this.getFormData();
          store.setFormdata(formData);
          store.setNotify({ SuccessMessage: "Rejected successfully", Success: true });
        });
    },

    newRecord: () => {
      store.navigate("/UserMaster");
    },
    Edit_Approve_Records: function () {
      store.navigate(`/UserMaster?id=${dynamicData?.rowData.id}`);
    },
  };
};
