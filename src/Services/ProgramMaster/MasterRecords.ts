import { userValue } from "@/App";
import { myService } from "../../service/service";
import { ProgramMasterRecordUiSchema } from "../../UiSchema/ProgramMaster/ProgramRecord/UiSchema";
import { dynamicDataType } from "../../utils/dynamicDataType";

export const MasterRecords = (store: any, dynamicData?: dynamicDataType) => {
  const serviceApi = myService(
    dynamicData?.setLoading,

    store.navigate
  );
  return {
    setPage: async function () {
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const schema = await this.getSchema();
      store.setSchema(schema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
    },
    getFormData: async () => {
      const fomData: any = {};
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=A";
      const ApiPending = "/master/getPendingActionDetails";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=R";
      const ApiRaised = "/master/getPendingRequests";

      const data = await serviceApi
        .get(Api)
        .then((res) => {
          fomData.ProgramApproveRecords = res.data;
          const body = {
            entityName: "com.act21.hyperform3.entity.program.ProgramStaging",
            candidateGroup: userValue.payload.positionTypeName,
            candidateUser: userValue.payload.positionName,
            processVariables: {
              entityName: "com.act21.hyperform3.entity.program.ProgramStaging",
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
            entityName: "com.act21.hyperform3.entity.program.ProgramStaging",
            userId: userValue.payload.userId,
          };
          return serviceApi.post(ApiRaised, body);
        })
        .then((res) => {
          fomData.RaisedRecords = res.data;
        })
        .catch((err) => {
          fomData.ProgramApproveRecords = [];
          fomData.PendingRecords = [];
          fomData.RejectRecords = [];
          fomData.RaisedRecords = [];
        });
      return fomData;
    },
    getUiSchema: async () => {
      return ProgramMasterRecordUiSchema;
    },
    getSchema: async () => {
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
      serviceApi.post("/workflow/completeTasks", body).then(async (res) => {
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
      serviceApi.post("/workflow/completeTasks", body).then(async (res) => {
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
        `/MasterForm?id=${dynamicData?.rowData.id}&disabled=false`
      );
    },
    addNewRecords: function () {
      store.navigate("/MasterForm");
    },
    View_Records: function () {
      store.navigate(`/MasterFormView?id=${dynamicData?.rowData.id}`);
    },
    View_Actions: function () {
      let businessKey = `ProgramStaging_${dynamicData?.rowData.id}`;
      store.navigate(`/MasterActions?businessKey=${businessKey}`);
    },
  };
};
