import { myService } from "../../service/service";
import { getUpdatedUiSchema } from "../../utils/getUpdatedUiSchema";
import _ from "lodash";
import { userValue } from "../../App";
import { isErrorsExist } from "../../utils/isErrorsExist";
import { fetchFormdata } from "../../utils/fetchFormdata";
export const reviewTemplate = (
  store: any,
  dynamicData: any,
  config: any,
  uiSchema: any,
  schema: any
) => {
  const service = myService(dynamicData?.setLoading, store.navigate);
  return {
    setPage: async function () {
      store.setUiSchema(uiSchema);
      const updatedUiSchema = await this.getUiSchema();
      const schema = this.getSchema();
      store.setSchema(schema);
      updatedUiSchema && store.setUiSchema(updatedUiSchema);
      const formData: any = await this.getFormdata();
      store.setFormdata(formData);
    },
    getFormdata: () => {
      return {};
    },
    getUiSchema: async function () {
      const responseUiSchema = await getUpdatedUiSchema(
        config,
        uiSchema,
        service
      );
      return responseUiSchema;
    },
    getSchema: () => {
      return schema;
    },
    search: async function () {
      if (!isErrorsExist(store.schema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Errors on page",
          Fail: true,
        });
        return;
      }
      await this.eventHandle();
    },
    eventHandle: async function () {
      const data = await fetchFormdata(
        config,
        [...config.reportList.components, ...config.pendingActions.components],
        // [...config.reportList.components]
        store.ctx.core.data,
        {
          candidateGroup: userValue.payload.positionTypeName,
          candidateUser: userValue.payload.positionName,
          userName: userValue.payload.username,
          pageName: "PayoutReview",
          // pageName:"payoutOverride_datatablePayee",
        },
        ["search"],
        service
      );
      store.setFormdata(data);
      return data;
    },

    onChange: async function () {
      if (
        store?.formData?.programId !== store.newData?.programId &&
        store?.newData?.programId !== undefined
      ) {
        const uiSchema = _.cloneDeep(store.uiSchema);
        await service
          .get(`/programCycle/getByProgramId?id=${store.newData?.programId} `)
          .then((response: any) => {
            const result1 = response.data.payload.map((elem: any) => {
              const cycle = { label: elem.name, value: elem.id };
              return cycle;
            });

            uiSchema.elements[1].elements[1].config.main.options = result1;
            store.setUiSchema(uiSchema);
          })
          .catch((error) => {});
      }
      if (
        store?.formData?.programCycleId !== store.newData?.programCycleId &&
        store?.newData?.programCycleId !== undefined &&
        store.pageName === "template_payoutReview"
      ) {
        const uiSchema = _.cloneDeep(store.uiSchema);
        const myObj = {
          payload: {
            candidateGroup: userValue.payload.positionTypeName,
            candidateUser: userValue.payload.positionName,
            userName: userValue.payload.username,
            programCycleId: store.newData.programCycleId,
            pageName: store.uiSchema.pageName,
          },
        };
        await service
          .post("/workflow/getActionListOnCandidateUserAndGroup", myObj)
          .then((res) => {
            console.log(res);
            const options = res?.data?.payload?.map((e: string | number) => {
              return { label: e, value: e };
            });

            uiSchema.elements[3].elements[2].config.main.options = options;
            store.setUiSchema(uiSchema);
          });
      }
    },

    submit: async function () {
      const formData = _.cloneDeep(store.formData);
      if (
        store.ctx.core.data.remarks === undefined ||
        store.ctx.core.data.remarks === ""
      ) {
        store.setNotify({
          FailMessage: "Please Enter Remarks To Proceed Further",
          Fail: true,
        });
        return;
      }
      if (formData.actions === undefined || formData.actions === null) {
        store.setNotify({
          FailMessage: "Please Select Action To Proceed Further",
          Fail: true,
        });
        return;
      }
      if (
        formData["pendingActionListSelectedRowData"]?.data === undefined ||
        formData["pendingActionListSelectedRowData"]?.data?.length === 0
      ) {
        store.setNotify({
          FailMessage: "Please Select Pending Tasks To Take Action",
          Fail: true,
        });
        return;
      }
      console.log(store.ctx.core.data);
      const taskMapList = store.ctx.core.data[
        "pendingActionListSelectedRowData"
      ]?.data?.map((elem: any) => {
        return {
          taskId: `${elem.id}`,
          businessKey: elem.businessKey,
          businessKeyType: elem.businessKeyType,
        };
      });
      const data: any = {
        payload: {
          taskMapList: taskMapList,
          completionMap: {
            action: formData.actions,
            remarks: formData.remarks,
          },
        },
      };
      service
        .post("/workflow/completeTaskOnTaskIdList", data, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response) => {
          return this.eventHandle();
        })
        .then((response) => {
          store.setFormdata(response);
          const message =
            store.ctx.core.data.actions === "Reject" ? "Rejected" : "Approved";
          formData["caseReportListSelectedRowData"] = undefined;
          formData["summaryReportListSelectedRowData"] = undefined;
          formData["pendingActionListSelectedRowData"] = undefined;

          store.setNotify({ SuccessMessage: message, Success: true });
          // store.setFormdata(formData)
        })
        .catch((error) => {
          // store.setNotify({ FailMessage: "Error", Fail: true });
        });
    },
  };
};
