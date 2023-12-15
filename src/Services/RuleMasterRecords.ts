
import { myService } from "../service/service";
import { RuleMasterRecordsUISchema } from "../UiSchema/RuleMasterRecords/UiSchema"
import { userValue } from "@/App";
export const RuleMasterRecords = (
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
      let formData: any = {};

      let dataArray: any = null;
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.rule.RuleStaging&status=A";
      const ApiPending = "/master/getPendingActionDetails";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.master.rule.RuleStaging&status=R";
      const ApiRaised = "/master/getPendingRequests";
      await serviceApi
        .get(Api)
        .then((res) => {
          formData["ApproveRecords"] = res.data;
          const body = {
            entityName: "com.act21.hyperform3.entity.master.rule.RuleStaging",
            candidateGroup: userValue.payload.positionTypeName,
            candidateUser: userValue.payload.positionName,
            processVariables: {
              entityName: "com.act21.hyperform3.entity.master.rule.RuleStaging",
            },

            userName: userValue.payload.username,
            userId: userValue.payload.userId,
          };
          return serviceApi.post(ApiPending, body);
        })
        .then((res) => {
          formData["PendingRecords"] = res.data;
          return serviceApi.get(ApiReject);
        })
        .then((res) => {
          formData["RejectRecords"] = res.data;
          const body = {
            entityName: "com.act21.hyperform3.entity.master.rule.RuleStaging",
            userId: userValue.payload.userId,
          };
          return serviceApi.post(ApiRaised, body);
        })
        .then((res) => {
          formData.RaisedRecords = res.data;
        })
        .catch((err) => {
          formData.ApproveRecords = [];
          formData.PendingRecords = [];
          formData.RejectRecords = [];
          formData.RaisedRecords = [];
        });
      return formData;
    },
    View_Actions: function () {
      let businessKey = `RuleStaging_${dynamicData?.rowData.id}`;
      store.navigate(`/MasterActions?businessKey=${businessKey}`);
    },
    getUiSchema: async () => {
      return RuleMasterRecordsUISchema;
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
      store.navigate("/RuleMaster");
    },
    Edit_Approve_Records: function () {
      localStorage.setItem("disabled", "false");
      store.navigate(
        `/RuleMaster?id=${dynamicData?.rowData.id}&disabled=false`
      );
    },
    View_Records: function () {
      localStorage.setItem("disabled", "true");
      store.navigate(`/RuleMaster?id=${dynamicData?.rowData.id}&disabled=true`);
    },
  };
};
