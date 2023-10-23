import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../../service/service";
import { InvoiceGenerationUiSchema } from "../../UiSchema/Invoice/UiSchema";
import { InvoiceGenerationSchema } from "../../UiSchema/Invoice/Schema";
import { downloadFile } from "../../utils/downloadFile";
import { userValue } from "../../App";
import { isErrorsExist } from "../../utils/isErrorsExist";
import _ from "lodash";
import { getUpdatedUiSchema } from "../../utils/getUpdatedUiSchema";
import { fetchFormdata } from "../../utils/fetchFormdata";
import { getParams } from "../../utils/getParams";

export const invoiceTemplate = (
    store: any,
    dynamicData: any,
    config: any,
    uiSchema: any,
    schema: any
) => {
    const service = myService(dynamicData?.setLoading, store.navigate);
    return {
        setPage: async function () {
            const formdata = await this.getFormdata();
            const UISchema = await this.getUiSchema();
            const schema = await this.getSchema();

            store.setFormdata(formdata);
            store.setUiSchema(UISchema);
            store.setSchema(schema);
        },
        getFormdata: async () => {
            const obj: any = {
                caseLevelReportList: [],
                invoiceReportList: []
            };
            return obj
        },
        getUiSchema: async function () {
            const responseUiSchema = await getUpdatedUiSchema(config, uiSchema, service);
            return responseUiSchema;

        },
        getSchema: () => {
            return schema;
        },
        search: async function () {
            if (store.formData.programId === undefined) {
                store.setNotify({ FailMessage: "Please Select Program", Fail: true, })
                store.setValidation("ValidateAndShow")
                return;
            }
            if (store.formData.programCycleId === undefined) {
                store.setNotify({ FailMessage: "Please Select Program Cycle", Fail: true, })
                store.setValidation("ValidateAndShow")
                return;
            }

            const data = await this.LoadFunction()
            store.setFormdata(data)
        },
        LoadFunction: async () => {
            const data = await fetchFormdata(config, [...config.caseReviewList.components, ...config.invoiceReviewList.components], store.ctx.core.data, {
                candidateGroup: userValue.payload.positionTypeName,
                candidateUser: userValue.payload.positionName,
                userName: userValue.payload.username,
                pageName: "InvoiceGeneration"
            }, ["search"], service);
            return data;
        },
        onChange: async () => {
            if (store?.formData?.programId !== store.newData?.programId && store?.newData?.programId !== undefined) {
                const UiSchema = _.cloneDeep(store.uiSchema);
                if (store.newData.programId) {
                    const result: any = await service
                        .get(`/programCycle/getByProgramId?id=${store.newData.programId} `)
                        .then((response: any) => {

                            const result1 = response.data.payload.map((elem: any) => {
                                const cycle = { label: elem.name, value: elem.id }
                                return cycle;
                            });

                            UiSchema.elements[1].elements[1].config.main.options = result1;
                            store.setUiSchema(UiSchema);
                        })
                        .catch((): any[] => {
                            return [];
                        });
                }
            }
            if (store?.formData?.programCycleId !== store.newData?.programCycleId && store?.newData?.programCycleId !== undefined) {
                const UiSchema = _.cloneDeep(store.uiSchema);
                console.log(UiSchema)
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

                        UiSchema.elements[3].elements[1].config.main.options = options;
                        store.setUiSchema(UiSchema)
                    });
            }
        },
        generateInvoice: async function () {
            if (store.ctx.core.data["caseLevelReportListSelectedRowData"] === undefined || store.ctx.core.data["caseLevelReportListSelectedRowData"].length === 0) {
                store.setNotify({ FailMessage: "Please Select Pending Cases To Generate Invoice", Fail: true, })
                return;
            }
            if (store.ctx.core.data["invoiceNo"] === undefined || store.ctx.core.data["invoiceNo"] === "") {
                store.setNotify({ FailMessage: "Please Enter Invoice No.", Fail: true, })
                return;
            }
            if (
                !isErrorsExist(store.schema, store.ctx.core.errors)
            ) {
                store.setValidation("ValidateAndShow")
                store.setNotify({ FailMessage: "Errors on page", Fail: true, })
                return;
            }
            const paramData:any = getParams(store.ctx.core.data,config,["caseReviewList", "search"]);
            const body: any = {
                payload: {
                    payoutComponentIdList: store.ctx.core.data["caseLevelReportListSelectedRowData"] ? store.ctx.core.data["caseLevelReportListSelectedRowData"]?.data.map((item: any) => item.Id) : [],
                    params: {
                        ...paramData
                        // invoiceNo: store.ctx.core.data["invoiceNo"] ? store.ctx.core.data["invoiceNo"] : ""
                    }
                }
            }
            await service.post('/invoice/generate', body, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response: any) => {

                    return this.LoadFunction();
                })
                .then((res: any) => {

                    store.setFormdata({
                        ...res
                        // ...store.ctx.core.data,
                        // // "caseLevelReportList": res[0],
                        // // "invoiceReportList": res[1]
                    })
                    store.setNotify({ SuccessMessage: "Invoice Generated Succesfully", Success: true, })
                }).
                catch((error: any) => {
                    console.log(error);

                    store.setNotify({ FailMessage: "Invoice Generation Failed", Fail: true, })
                })
        },

        actionFunction: function () {
            if (store.ctx.core.data["invoiceReportListSelectedRowData"] === undefined || store.ctx.core.data["invoiceReportListSelectedRowData"].length === 0) {
                store.setNotify({ FailMessage: "Please Select Pending Invoice To Take Action", Fail: true, })
                return;
            }
            if (store.ctx.core.data.actions === undefined || store.ctx.core.data.actions === "") {
                store.setNotify({ FailMessage: "Please Select Action To Proceed Further", Fail: true, })
                return;
            }
            const data: any = {
                payload: {
                    payoutInvoiceIdList: store.ctx.core.data["invoiceReportListSelectedRowData"] ? store.ctx.core.data["invoiceReportListSelectedRowData"]?.data.map((item: any) => item.id) : [],
                    candidateGroup: userValue.payload.positionTypeName,
                    candidateUser: userValue.payload.positionName,
                    userName: userValue.payload.username,
                    pageName: InvoiceGenerationUiSchema.pageName,
                    completionMap: {
                        action: store.ctx.core.data.actions
                    }
                }
            }
            service.post('/workflow/completeTaskOnPayoutInvoiceIdList', data, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response: any) => {

                    return this.LoadFunction();
                }).then((res: any) => {
                    const message = store.ctx.core.data.actions === "Reject" ? "Rejected" : "Approved"
                    store.setFormdata({
                        ...store.ctx.core.data,
                        "caseLevelReportList": res[0],
                        "invoiceReportList": res[1]
                    })
                    store.setNotify({ SuccessMessage: message, Success: true, })
                }).catch((error: any) => {
                    store.setNotify({ FailMessage: "Error", Fail: true, })
                })
        },
        downloadFile: function () {
            const body = {
                payload: {
                    payoutInvoiceId: dynamicData?.rowData.Id
                }
            }
            service.post("/invoice/download", body, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response: any) => {
                    downloadFile(response.data.payload);
                    return this.LoadFunction()
                })
                .catch((error: any) => {
                    console.log(error);
                });
        },
        deleteFile: function () {
            const body = {
                payload: {
                    payoutInvoiceId: dynamicData?.rowData.Id
                }
            }
            service.post("/invoice/delete", body, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response: any) => {
                    return this.LoadFunction()
                }).then((res: any) => {
                    store.setFormdata({
                        ...store.ctx.core.data,
                        "caseLevelReportList": res[0],
                        "invoiceReportList": res[1]
                    })
                    store.setNotify({ SuccessMessage: "Invoice Deleted Successfully", Success: true, })
                })
                .catch((error: any) => {
                    console.log(error);
                });
        }
    }
}