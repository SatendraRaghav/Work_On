import { userValue } from "@/App";
import { ApplicationConfigRecordsSchema } from "@/UiSchema/ApplicationMasterRecords/Schema";
import { ApplicationConfigRecordsUiSchema} from "@/UiSchema/ApplicationMasterRecords/UiSchema";
import { myService } from "@/service/service";

export const ApplicationConfigRecords: any = (store: any, dynamicData: any) => {
  const service = myService(dynamicData?.setLoading, store.navigate);

  return {
    setPage: async function () {
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const uiSchema = await this.getUiSchema();
      const schema = await this.getSchema();

      store.setUiSchema(uiSchema);

      store.setSchema(schema);
    },
    getFormData: async () => {
      const fomData: any = {};
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.application.ApplicationConfigStaging&status=A";
      const ApiPending = "/master/getPendingActionDetails";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.application.ApplicationConfigStaging&status=R";
      const ApiRaised = "/master/getPendingRequests";
      const data = await service
        .get(Api)
        .then((res) => {
          fomData.ApproveRecords  = res.data;
          const body = {
            entityName:
              "com.act21.hyperform3.entity.master.application.ApplicationConfigStaging",
            candidateGroup: userValue.payload.positionTypeName,
            candidateUser: userValue.payload.positionName,
            processVariables: {
              entityName:
                "com.act21.hyperform3.entity.master.application.ApplicationConfigStaging",
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
              "com.act21.hyperform3.entity.master.application.ApplicationConfigStaging",
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
      return ApplicationConfigRecordsUiSchema;
    },
    getSchema: () => {
      return ApplicationConfigRecordsSchema;
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
      store.navigate(
        `/ApplicationMaster?id=${dynamicData?.rowData.id}&disabled=false`
      );
    },
    addNewRecords: function () {
      store.navigate("/ApplicationMaster");
    },
    View_Actions: function () {
      let businessKey = `ApplicationConfigStaging_${dynamicData?.rowData.id}`;
      store.navigate(`/MasterActions?businessKey=${businessKey}`);
    },
    View_Records: function () {
      store.navigate(`/ApplicationMaster?id=${dynamicData?.rowData.id}&disabled=true`);
    },
  };
};
