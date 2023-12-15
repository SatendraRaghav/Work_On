import { userValue } from "@/App";
import { NotificationRecordsSchema } from "@/UiSchema/NotificationMasterRecords/Schema";
import { NotificationRecordsUiSchema } from "@/UiSchema/NotificationMasterRecords/UiSchema";
import { myService } from "@/service/service";

export const NotificationRecords: any = (store: any, dynamicData: any) => {
  const service = myService(dynamicData?.setLoading, store.navigate);

  return {
    setPage: async function () {
      const formData = await this.getFormData();
      const uiSchema = await this.getUiSchema();
      const schema = await this.getSchema();

      store.setUiSchema(uiSchema);
      store.setFormdata(formData);
      store.setSchema(schema);
    },
    getFormData: async () => {
      const fomData: any = {};
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.notification.NotificationStaging&status=A";
      const ApiPending = "/master/getPendingActionDetails";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.notification.NotificationStaging&status=R";
      const ApiRaised = "/master/getPendingRequests";
      const data = await service
        .get(Api)
        .then((res) => {
          fomData.ProgramApproveRecords  = res.data;
          const body = {
            entityName:
              "com.act21.hyperform3.entity.master.notification.NotificationStaging",

            candidateGroup: userValue.payload.positionTypeName,
            candidateUser: userValue.payload.positionName,
            processVariables: {
              entityName:
                "com.act21.hyperform3.entity.master.notification.NotificationStaging",
            },

            userName: userValue.payload.username,

            userId: userValue.payload.userId,
          };
          return service.post(ApiPending, body);
        })
        .then((res) => {
          fomData.PendingRecords  = res.data;
          return service.get(ApiReject);
        })
        .then((res) => {
          fomData.RejectRecords  = res.data;
          console.log(fomData);
          const body = {
            entityName:
              "com.act21.hyperform3.entity.master.notification.NotificationStaging",
            userId: userValue.payload.userId,
          };
          return service.post(ApiRaised, body);
        })
        .then((res) => {
          fomData.RaisedRecords  = res.data;
        })
        .catch((err) => {
          fomData.ApproveRecords = [];
          fomData.PendingRecords = [];
          fomData.RejectRecords = [];
          fomData.RaisedRecords = [];
        });
      return fomData;
    },
    getUiSchema: () => {
      return NotificationRecordsUiSchema;
    },
    getSchema: () => {
      
      return NotificationRecordsSchema;
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
      service.post("/workflow/completeTasks", body).then(async (res) => {
        const data = await this.getFormData();
        store.setFormdata(data);
        store.setNotify({
          SuccessMessage: "Approved successfully",
          Success: true,
        });
      });
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
      service.post("/workflow/completeTasks", body).then(async (res) => {
        const data = await this.getFormData();
        store.setFormdata(data);
        store.setNotify({
          SuccessMessage: "Rejected successfully",
          Success: true,
        });
      });
    },
    Edit_Approve_Records: function () {
      store.navigate(`/Notification?id=${dynamicData?.rowData.id}&disabled=false`);
    },
    addNewRecords: function () {
      store.navigate("/Notification");
    },
    View_Actions: function () {
      let businessKey = `NotificationStaging_${dynamicData?.rowData.id}`;
      store.navigate(`/MasterActions?businessKey=${businessKey}`);
    },
    View_Records: function () {
      store.navigate(`/Notification?id=${dynamicData?.rowData.id}&disabled=true`);
    },
  };
};
