import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { InvoiceGenerationUiSchema } from "../UiSchema/Invoice/UiSchema";
import { InvoiceGenerationSchema } from "../UiSchema/Invoice/Schema";
import { downloadFile } from "../utils/downloadFile";
import { userValue } from "../Apple";;
import { validateForm } from "../utils/validateForm";
import _ from "lodash";

export const InvoiceGeneration = (
    store:any,
    dynamicData:any
) => {
    const service = myService(dynamicData?.setLoading,  store.navigate);
    return {
        setPage: async function () {
            var formdata = await this.getFormdata();
            var uiSchema = await this.getUiSchema();
            var schema = await this.getSchema();

            store.setFormdata(formdata);
            store.setUiSchema(uiSchema);
            store.setSchema(schema);
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
                
                uiSchema.elements[1].elements[0].config.main.options = data;
            })
                .catch((error) => {
                    console.log(error);
                    return [];
                });
            return uiSchema;

        },
        getSchema: () => {
            return InvoiceGenerationSchema;
        },
        onChange: async () => {
            const uiSchema = _.cloneDeep(InvoiceGenerationUiSchema);
            if(store.newData.programType){
            const result: any = await service
                .get(`/programCycle/getByProgramId?id=${store.newData.programType} `)
                .then((response: any) => {

                    const result1 = response.data.payload.map((elem: any) => {
                        const cycle = { label: elem.name, value: elem.id }
                        return cycle;
                    });
                    
                    uiSchema.elements[1].elements[1].config.main.options = result1;
                    store.setUiSchema(uiSchema);
                })
                .catch((error) => {
                    return [];
                });}
        }, 
        loadTables: async function () {
            const uischema = InvoiceGenerationUiSchema;
            if (store.formData.programType === undefined) {
                store.setNotify({ FailMessage: "Please Select Program", Fail: true, })
                store.setValidation("ValidateAndShow")
                return;
            }
            if (store.formData.programCycle === undefined) {
                store.setNotify({ FailMessage: "Please Select Program Cycle", Fail: true, })
                store.setValidation("ValidateAndShow")
                return;
            }

            await this.LoadFunction().then((res: any) => {
                  store.setFormdata({
                    ...store.ctx.core.data,
                    "caseLevelReportList": res[0],
                    "invoiceReportList": res[1]
                })
                // uischema.elements[2].elements[2].config.main.allRowsData = res[0]
                 
                // uischema.elements[3].elements[2].config.main.allRowsData = res[1]
                // store.setUiSchema(uischema);
            }).catch((err: any) => {
                // store.setUiSchema(uischema);
                store.setFormdata({
                    ...store.ctx.core.data,
                    "caseLevelReportList": [],
                    "invoiceReportList": []
                })
            });

          
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
                        programCycleId: store.ctx.core.data.programCycle,
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
                        programCycleId: store.ctx.core.data.programCycle,
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

            if (store.ctx.core.data["caseLevelReportListSelectedRowData"] === undefined || store.ctx.core.data["caseLevelReportListSelectedRowData"].length === 0) {
                store.setNotify({ FailMessage: "Please Select Pending Cases To Generate Invoice", Fail: true, })
                return;
            }
            if (store.ctx.core.data["invoiceNumber"] === undefined || store.ctx.core.data["invoiceNumber"] === "") {
                store.setNotify({ FailMessage: "Please Enter Invoice No.", Fail: true, })
                return;
            }
            if (
                !validateForm(store.schema, store.ctx.core.errors)
            ) {
                store.setValidation("ValidateAndShow")
                store.setNotify({ FailMessage: "Please fill all required fields", Fail: true, })
                return;
            }
            const body: any = {
                payload: {
                    payoutComponentIdList: store.ctx.core.data["caseLevelReportListSelectedRowData"] ? store.ctx.core.data["caseLevelReportListSelectedRowData"].map((item: any) => item.id) : [],
                    params: {
                        invoiceNo: store.ctx.core.data["invoiceNumber"] ? store.ctx.core.data["invoiceNumber"] : ""
                    }
                }
            }
            await service.post('/invoice/generate', body, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response: any) => {

                    return this.LoadFunction();
                }).then(res => {
                       
            //     InvoiceGenerationUiSchema.elements[2].elements[2].config.main.allRowsData = res[0]
                
            //     InvoiceGenerationUiSchema.elements[3].elements[2].config.main.allRowsData = res[1]
            //    store.setUiSchema(InvoiceGenerationUiSchema);
                    store.setFormdata({
                        ...store.ctx.core.data,
                        "caseLevelReportList": res[0],
                        "invoiceReportList": res[1]
                    })
                    // store.setUiSchema(InvoiceGenerationUiSchema);
                    store.setNotify({ SuccessMessage: "Invoice Generated Succesfully", Success: true, })
                }).catch(error => {
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
                    payoutInvoiceIdList: store.ctx.core.data["invoiceReportListSelectedRowData"] ? store.ctx.core.data["invoiceReportListSelectedRowData"].map((item: any) => item.id) : [],
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
                .then(response => {

                    return this.LoadFunction();
                }).then(res => {
                    const message = store.ctx.core.data.actions === "Reject" ? "Rejected" : "Approved"
                              
                // InvoiceGenerationUiSchema.elements[2].elements[2].config.main.allRowsData = res[0]
                
                // InvoiceGenerationUiSchema.elements[3].elements[2].config.main.allRowsData = res[1]
            //    store.setUiSchema(InvoiceGenerationUiSchema);
                    store.setFormdata({
                        ...store.ctx.core.data,
                        "caseLevelReportList": res[0],
                        "invoiceReportList": res[1]
                    })
                    // store.setUiSchema(InvoiceGenerationUiSchema);
                    store.setNotify({ SuccessMessage: message, Success: true, })
                }).catch(error => {
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
                    payoutInvoiceId: dynamicData?.rowData.Id
                }
            }
            service.post("/invoice/delete", body, { headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response) => {
                    return this.LoadFunction()
                }).then(res => {
                             
            //     InvoiceGenerationUiSchema.elements[2].elements[2].config.main.allRowsData = res[0]
                
            //     InvoiceGenerationUiSchema.elements[3].elements[2].config.main.allRowsData = res[1]
            //    store.setUiSchema(InvoiceGenerationUiSchema);
                    store.setFormdata({
                        ...store.ctx.core.data,
                        "caseLevelReportList": res[0],
                        "invoiceReportList": res[1]
                    })
                    // store.setUiSchema(InvoiceGenerationUiSchema);
                    store.setNotify({ SuccessMessage: "Invoice Deleted Successfully", Success: true, })
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}