import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../../service/service";
import moment from "moment";
import { dynamicDataType } from "../../utils/dynamicDataType";
import { userValue } from "@/App";
import { ProgramConfigMasterRecordUiSchema } from "@/UiSchema/ProgramConfig/ProgramConfigRecord/UiSchema";
export const ProgramConfigRecords = (
  store: any,
  dynamicData: dynamicDataType
) => {
  const serviceApi = myService(
    dynamicData?.setLoading,

    store.navigate
  );

  const service = myService(dynamicData?.setLoading, store.navigate);
  return {
    setPage: async function () {
      // store.setFormdata({})

      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const schema = await this.getSchema();
      store.setSchema(schema);
    },
    getFormData: async () => {
      const fomData: any = {};
      const Api =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.programConfiguration.ProgramConfigurationStaging&status=A";
      const ApiPending =
        "/master/getPendingActionDetails?masterName=com.act21.hyperform3.entity.program.programConfiguration.ProgramConfigurationStaging&status=N";
      const ApiReject =
        "/master/getDetails?masterName=com.act21.hyperform3.entity.program.programConfiguration.ProgramConfigurationStaging&status=R";
      const ApiRaised = "/master/getPendingRequests";
      const data = await serviceApi
        .get(Api)
        .then((res) => {
          const approveData = res.data?.map((e: any) => {
            const demoStartDate = moment(new Date(e.startDate)).format(
              "DD MMM YYYY"
            );
            const demoEndDate = moment(new Date(e.endDate)).format(
              "DD MMM YYYY"
            );
            return {
              ...e,
              id: e.id,
              name: e.name,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
          fomData.CycleApproveRecords = approveData;

          const body = {
            entityName:
              "com.act21.hyperform3.entity.program.programConfiguration.ProgramConfigurationStaging",
            candidateGroup: userValue.payload.positionTypeName,
            candidateUser: userValue.payload.positionName,
            processVariables: {
              entityName:
                "com.act21.hyperform3.entity.program.programConfiguration.ProgramConfigurationStaging",
            },
            userName: userValue.payload.username,
            userId: userValue.payload.userId,
          };

          return service.post(ApiPending, body);
        })
        .then((res) => {
          const pendingData = res.data?.map((e: any) => {
            const demoStartDate = moment(new Date(e.startDate)).format(
              "DD MMM YYYY"
            );
            const demoEndDate = moment(new Date(e.endDate)).format(
              "DD MMM YYYY"
            );
            return {
              ...e,
              id: e.id,
              name: e.name,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
          fomData.PendingRecords = pendingData;
          return service.get(ApiReject);
        })
        .then((res) => {
          fomData.RejectRecords = res?.data?.map((e: any) => {
            const demoStartDate = moment(new Date(e.startDate)).format(
              "DD MMM YYYY"
            );
            const demoEndDate = moment(new Date(e.endDate)).format(
              "DD MMM YYYY"
            );
            return {
              ...e,
              id: e.id,
              name: e.name,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
          const body = {
            entityName:
              "com.act21.hyperform3.entity.program.programConfiguration.ProgramConfigurationStaging",
            userId: userValue.payload.userId,
          };
          return service.post(ApiRaised, body);
        })
        .then((res) => {
          fomData.RaisedRecords = res?.data?.map((e: any) => {
            const demoStartDate = moment(new Date(e.startDate)).format(
              "DD MMM YYYY"
            );
            const demoEndDate = moment(new Date(e.endDate)).format(
              "DD MMM YYYY"
            );
            return {
              ...e,
              id: e.id,
              name: e.name,
              program: e.program?.name,
              startDate: demoStartDate,
              endDate: demoEndDate,
            };
          });
        })
        .catch((err) => {
          fomData.ApproveRecords = [];
          fomData.PendingRecords = [];
          fomData.RejectRecords = [];
          fomData.RaisedRecords = [];
        });
      return fomData;
    },
    getUiSchema: async () => {
      return ProgramConfigMasterRecordUiSchema;
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
              remarks: store?.formData.Remarks,
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
    Reject_Records: async function () {
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
              remarks: store?.formData.Remarks,
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
      store.navigate(`/ProgramConfiguration?id=${dynamicData?.rowData.id}`);
    },
    addNewRecords: function () {
      store.navigate("/ProgramConfiguration");
    },
    View_Actions: function () {
      let businessKey = `ProgramConfigurationStaging_${dynamicData?.rowData.id}`;
      store.navigate(`/MasterActions?businessKey=${businessKey}`);
    },
    View_Records: function () {
      store.navigate(
        `/ProgramConfiguration?id=${dynamicData?.rowData.id}&disabled=true`
      );
    },
  };
};
