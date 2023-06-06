import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { InvoiceGenerationUiSchema } from "../UiSchema/Invoice/UiSchema";
import { InvoiceGenerationSchema } from "../UiSchema/Invoice/Schema";
import { downloadFile } from "../utils/downloadFile";
import { userValue } from "../Apple";;
import { validateForm } from "../utils/validateForm";

export const InvoiceGeneration = (
    ctx?: JsonFormsStateContext,
    setFormdata?: any,
    setUiSchema?: any,
    setSchema?: any,
    navigate?: any,
    otherData?: any,
    schema?: any,
    setConfig?: any,
    setAdditionalErrors?: any,
    setNotify?: any
) => {
    const service = myService(otherData.setLoading, otherData.setDialogBox, navigate);
    return {
        setPage: async function () {
            var formdata = await this.getFormdata();
            var uiSchema = await this.getUiSchema();
            var schema = await this.getSchema();

            setFormdata(formdata);
            setUiSchema(uiSchema);
            setSchema(schema);
        },
        getFormdata: async () => {

            const obj:any = {
                caseLevelReportList: [],
                invoiceReportList: []
            };
            return obj
        },
        getUiSchema: async function () {
            let uiSchema = InvoiceGenerationUiSchema;
            console.log(uiSchema)
            let data: any = null;
            await service.get('/program/getAll').then((response) => {
                data = response.data.payload.map((elem: any) => {
                    return { label: elem.name, value: elem.id };
                });
                //@ts-ignore
                uiSchema.elements[1].elements[4].value.content.options = data;
            })
                .catch((error) => {
                    console.log(error);
                    return [{}];
                });
            return uiSchema;

        },
        getSchema: () => {
            return InvoiceGenerationSchema;
        },
        loadCycle: async (value: any) => {
            const uiSchema = InvoiceGenerationUiSchema;
            const result: any = await service
                .get(`/programCycle/getByProgramId?id=${value
                    ? value
                    : undefined
                    } `)
                .then((response: any) => {

                    const result1 = response.data.payload.map((elem: any) => {
                        const cycle = { label: elem.name, value: elem.id }
                        return cycle;
                    });
                    //@ts-ignore
                    uiSchema.elements[1].elements[5].value.content.options = result1;
                    setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
                })
                .catch((error) => {
                    return [{}];
                });
        }, loadTables: async function () {
            if (ctx.core.data.programType === undefined) {
                setNotify({ FailMessage: "Please Select Program", Fail: true, })
                setConfig("ValidateAndShow")
                return;
            }
            if (ctx.core.data.programCycle === undefined) {
                setNotify({ FailMessage: "Please Select Program Cycle", Fail: true, })
                setConfig("ValidateAndShow")
                return;
            }

            await this.LoadFunction().then((res: any) => {
                setFormdata({
                    ...ctx.core.data,
                    "caseLevelReportList": res[0],
                    "invoiceReportList": res[1]
                })
            }).catch((err: any) => {
                setFormdata({
                    ...ctx.core.data,
                    "caseLevelReportList": [],
                    "invoiceReportList": []
                })
            });

            setUiSchema(InvoiceGenerationUiSchema);
        },
        LoadFunction: async () => {

            let caseData = JSON.stringify({
                payload: {
                    reportName: "invoice_case_level_report",
                    reportFormat: "grid",
                    params: {

                        candidateGroup: userValue.payload.positionTypeName,
                        candidateUser: userValue.payload.positionName,
                        userName: userValue.payload.username,
                        programCycleId: ctx.core.data.programCycle,
                        pageName: InvoiceGenerationUiSchema.pageName
                    }
                }
            })
            let invoiceData = JSON.stringify({
                payload: {
                    reportName: "invoice_level_report",
                    reportFormat: "grid",
                    params: {
                        candidateGroup: userValue.payload.positionTypeName,
                        candidateUser: userValue.payload.positionName,
                        userName: userValue.payload.username,
                        programCycleId: ctx.core.data.programCycle,
                        pageName: InvoiceGenerationUiSchema.pageName
                    }
                }
            })
            let tablesData: Array<any> = []
            await service.post('/workflow/generateReport', caseData, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response: any) => {
                    const result1 = response.data.payload.reportData.values.map((e: any) => {
                        return { ...e, id: e.Id };
                    })
                    tablesData.push(result1)
                    return service.post('/workflow/generateReport', invoiceData, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, });
                }).then(response => {
                    const result2: any = response.data.payload.reportData.values.map((elem: any) => {
                        const timestamp = elem["Invoice Date"];
                        const invoiceDate = new Date(timestamp);
                        const invoiceDateString = invoiceDate.toLocaleString()
                        return { ...elem, id: elem.Id, "Invoice Date": invoiceDateString };
                    });
                    tablesData.push(result2)

                    return result2;
                }).catch((error) => {
                    console.log(error);
                })
            return tablesData;
        },
        generateInvoice: async function () {

            if (ctx.core.data["caseLevelReportListSelectedRowData"] === undefined || ctx.core.data["caseLevelReportListSelectedRowData"].length === 0) {
                setNotify({ FailMessage: "Please Select Pending Cases To Generate Invoice", Fail: true, })
                return;
            }
            if (ctx.core.data["invoiceNumber"] === undefined || ctx.core.data["invoiceNumber"] === "") {
                setNotify({ FailMessage: "Please Enter Invoice No.", Fail: true, })
                return;
            }
            if (
                !validateForm(schema, ctx.core.errors)
            ) {
                setConfig("ValidateAndShow")
                setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
                return;
            }
            const body: any = {
                payload: {
                    payoutComponentIdList: ctx.core.data["caseLevelReportListSelectedRowData"] ? ctx.core.data["caseLevelReportListSelectedRowData"].map((item: any) => item.id) : [],
                    params: {
                        invoiceNo: ctx.core.data["invoiceNumber"] ? ctx.core.data["invoiceNumber"] : ""
                    }
                }
            }
            await service.post('/invoice/generate', body, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response: any) => {

                    return this.LoadFunction();
                }).then(res => {
                    setFormdata({
                        ...ctx.core.data,
                        "caseLevelReportList": res[0],
                        "invoiceReportList": res[1]
                    })
                    setUiSchema(InvoiceGenerationUiSchema);
                    setNotify({ SuccessMessage: "Invoice Generated Succesfully", Success: true, })
                }).catch(error => {
                    console.log(error);

                    setNotify({ FailMessage: "Invoice Generation Failed", Fail: true, })
                })
        },

        actionFunction: function () {
            if (ctx.core.data["invoiceReportListSelectedRowData"] === undefined || ctx.core.data["invoiceReportListSelectedRowData"].length === 0) {
                setNotify({ FailMessage: "Please Select Pending Invoice To Take Action", Fail: true, })
                return;
            }
            if (ctx.core.data.actions === undefined || ctx.core.data.actions === "") {
                setNotify({ FailMessage: "Please Select Action To Proceed Further", Fail: true, })
                return;
            }
            const data: any = {
                payload: {
                    payoutInvoiceIdList: ctx.core.data["invoiceReportListSelectedRowData"] ? ctx.core.data["invoiceReportListSelectedRowData"].map((item: any) => item.id) : [],
                    candidateGroup: userValue.payload.positionTypeName,
                    candidateUser: userValue.payload.positionName,
                    userName: userValue.payload.username,
                    pageName: InvoiceGenerationUiSchema.pageName,
                    completionMap: {
                        action: ctx.core.data.actions
                    }
                }
            }
            service.post('/workflow/completeTaskOnPayoutInvoiceIdList', data, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then(response => {

                    return this.LoadFunction();
                }).then(res => {
                    const message = ctx.core.data.actions === "Reject" ? "Rejected" : "Approved"

                    setFormdata({
                        ...ctx.core.data,
                        "caseLevelReportList": res[0],
                        "invoiceReportList": res[1]
                    })
                    setUiSchema(InvoiceGenerationUiSchema);
                    setNotify({ SuccessMessage: message, Success: true, })
                }).catch(error => {
                    setNotify({ FailMessage: "Error", Fail: true, })
                })
        },
        downloadFile: function () {
            const body = {
                payload: {
                    payoutInvoiceId: otherData.rowData.Id
                }
            }
            service.post("/invoice/download", body, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response) => {
                    downloadFile(response.data.payload);
                    return this.LoadFunction()
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteFile: function () {
            const body = {
                payload: {
                    payoutInvoiceId: otherData.rowData.Id
                }
            }
            service.post("/invoice/delete", body, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response) => {
                    return this.LoadFunction()
                }).then(res => {
                    setFormdata({
                        ...ctx.core.data,
                        "caseLevelReportList": res[0],
                        "invoiceReportList": res[1]
                    })
                    setUiSchema(InvoiceGenerationUiSchema);
                    setNotify({ SuccessMessage: "Invoice Deleted Successfully", Success: true, })
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}