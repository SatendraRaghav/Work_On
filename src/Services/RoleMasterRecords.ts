import { getUiSchema } from "@jsonforms/core";
import { myService } from "../service/service";
import { RoleMasterRecordsUISchema } from "../UiSchema/RoleMasterRecords/UISchema";
import { userValue } from "@/App";
export const RoleMasterRecords = (
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
      const formData = await this.getFormData();
      store.setFormdata(formData);
    },
    getFormData: async () => {
      const fomData: any = {};
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&status=A";
      const ApiPending = "/master/getPendingActionDetails";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&status=R";
      const ApiRaised = "/master/getPendingRequests";
      const data = await serviceApi
        .get(Api)
        .then((res) => {
          fomData.ApproveRecords = res.data;
          const body = {
            entityName: "com.act21.hyperform3.entity.master.role.RoleStaging",
            candidateGroup: userValue.payload.positionTypeName,
            candidateUser: userValue.payload.positionName,
            processVariables: {
              entityName: "com.act21.hyperform3.entity.master.role.RoleStaging",
            },

            userName: userValue.payload.username,
            userId: userValue.payload.userId,
          };
          return serviceApi.post(ApiPending, body);
        })
        .then((res) => {
          fomData.PendingRecords = res.data;
          return serviceApi.get(ApiReject);
        })
        .then((res) => {
          fomData.RejectRecords = res.data;
          const body = {
            entityName: "com.act21.hyperform3.entity.master.role.RoleStaging",
            userId: userValue.payload.userId,
          };
          return serviceApi.post(ApiRaised, body);
        })
        .then((res) => {
          fomData.RaisedRecords = res.data;
        })
        .catch((err) => {
          fomData.ApproveRecords = [];
          fomData.PendingRecords = [];
          fomData.RejectRecords = [];
          fomData.RaisedRecords = [];
        });
      return fomData;
    },
    View_Actions: function () {
      let businessKey = `RoleStaging_${dynamicData?.rowData.id}`;
      store.navigate(`/MasterActions?businessKey=${businessKey}`);
    },
    getUiSchema: async () => {
      return RoleMasterRecordsUISchema;
    },
    getSchema: () => {
      return {};
    },
    Approve_Records: function () {
      const pendingRecordsSelected = store.formData.PendingRecords.filter(
        (e) => e.checked
      );
      const taskMapList = pendingRecordsSelected.map((e) => {
        let data = {};
        e.taskDetails?.map((childElem) => {
          data = {
            ...childElem,
            completionMap: {
              action: "Approve",
              remarks: store?.formData.remarks,
              actionBy: userValue.payload.userId,
            },
          };
          return;
        });
        return data;
      });

      const body = [...taskMapList];
      serviceApi
        .post("/workflow/completeTasks", body)
        .then(async (res) => {
          const data = await this.getFormData();
          store.setFormdata(data);
          store.setNotify({
            SuccessMessage: "Approved Successfully",
            Success: true,
          });
        })
        .catch((e) => console.log(e));
    },
    Reject_Records: function () {
      const pendingRecordsSelected = store.formData.PendingRecords.filter(
        (e) => e.checked
      );
      const taskMapList = pendingRecordsSelected.map((e) => {
        let data = {};
        e.taskDetails?.map((childElem) => {
          data = {
            ...childElem,
            completionMap: {
              action: "Reject",
              remarks: store?.formData.remarks,
              actionBy: userValue.payload.userId,
            },
          };
          return;
        });
        return data;
      });

      const body = [...taskMapList];
      serviceApi.post("/workflow/completeTasks", body).then(async (res) => {
        const data = await this.getFormData();
        store.setFormdata(data);
        store.setNotify({
          SuccessMessage: "Rejected Successfully",
          Success: true,
        });
      });
    },

    newRecord: () => {
      localStorage.setItem("disabled", "false");
      store.navigate("/RoleMaster");
    },
    Edit_Approve_Records: function () {
      localStorage.setItem("disabled", "false");
      store.navigate(`/RoleMaster?id=${dynamicData?.rowData.id}&disabled=false`);
    },
    View_Records: function () {
      localStorage.setItem("disabled", "true");
      store.navigate(`/RoleMasterView?id=${dynamicData?.rowData.id}`)
    }
  };
};
