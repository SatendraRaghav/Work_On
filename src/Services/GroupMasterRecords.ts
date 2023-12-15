import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { GroupMasterRecordsUISchema } from "../UiSchema/GroupMasterRecords/UISchema";
import { userValue } from "@/App";

import { GroupMasterRecordsSchema } from "@/UiSchema/GroupMasterRecords/Schema";


export const GroupMasterRecords = (store: any, dynamicData: any) => {
  const serviceApi = myService(dynamicData?.setLoading, store.navigate,store);
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
        "/master/getDetails?masterName=com.act21.hyperform3.entity.group.GroupStaging&status=A";
      const ApiPending = "/master/getPendingActionDetails";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.group.GroupStaging&status=R";
      const ApiRaised = "/master/getPendingRequests";
      const data = await serviceApi
        .get(Api)
        .then((res) => {
          fomData.GroupApproveRecords = res.data;
          const body = {
            entityName: "com.act21.hyperform3.entity.group.GroupStaging",
            candidateGroup: userValue.payload.positionTypeName,
            candidateUser: userValue.payload.positionName,
            processVariables: {
              entityName: "com.act21.hyperform3.entity.group.GroupStaging",
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
          console.log(fomData);
          const body = {
            entityName: "com.act21.hyperform3.entity.group.GroupStaging",
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
      let businessKey = `GroupStaging_${dynamicData?.rowData.id}`;
      store.navigate(`/MasterActions?businessKey=${businessKey}`);
    },
    getUiSchema: async () => {
      return GroupMasterRecordsUISchema;
    },
    getSchema: () => {
      return GroupMasterRecordsSchema;
    },
    Approve_Records: function () {
      const PendingRecordsSelected = store.formData.PendingRecords.filter(
        (e) => e.checked
      );
      const taskMapList = PendingRecordsSelected.map((e) => {
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
      store.navigate("/GroupMaster");
    },
    Edit_Approve_Records: function () {
      localStorage.setItem("disabled", "false");
      store.navigate(`/GroupMaster?id=${dynamicData?.rowData.id}`);
    },
    View_Records: function () {
      localStorage.setItem("disabled", "true");
      store.navigate(`/GroupMasterView?id=${dynamicData?.rowData.id}`);
    }
  };
};
