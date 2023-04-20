import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { InvoiceGenerationUiSchema } from "../UiSchema/Invoice/UiSchema";
import { InvoiceGenerationSchema } from "../UiSchema/Invoice/Schema";
import { downloadFile } from "../utils/downloadFile";
import { userValue } from "../App";

export const InvoiceGeneration = (
    ctx?: JsonFormsStateContext,
    setFormdata?: any,
    setUiSchema?: any,
    setSchema?:any,
    navigate?:any,
    otherData?: any
  ) => {
    const service = myService()
    return {
        setPage :async function() {
            var formdata = await this.getFormdata();
            var uiSchema = await this.getUiSchema();
            var schema = await this.getSchema();

            setFormdata(formdata);
            setUiSchema(uiSchema);
            setSchema(schema);
        },
        getFormdata:async ()=>{

            return {...ctx.core.data,
                "reportListWrapper.0.caseLevelReportList" : [],
                "reportListWrapper.0.invoiceReportList" : []
            };
        },
        getUiSchema:async function (){
            let uiSchema = InvoiceGenerationUiSchema;

            let data:any = null;
      await service.get('/program/getAll').then( (response) => {
          data = response.data.payload.map((elem:any) => {
            return { label: elem.name, value: elem.id };
          });
          //@ts-ignore
          uiSchema.elements[0].options.detail.elements[2].value.content.options = data;
        })
        .catch((error) => {
          console.log(error);
          return [{}];
        });
      return uiSchema;

        },
        getSchema : ()=> {
            return InvoiceGenerationSchema;
        },
        loadCycle :async (value:any)=>{
            const uiSchema = InvoiceGenerationUiSchema;
            const result: any = await service
            .get(`/programCycle/getByProgramId?id=${
             value
                ?value
                : undefined
            } `)
            .then((response: any) => {
                
             const result1 = response.data.payload.map((elem: any) => {
                 const cycle = {label : elem.name, value : elem.id}
               return cycle;
        });
            //@ts-ignore
            uiSchema.elements[1].options.detail.elements[0].value.content.options = result1;
            setUiSchema(JSON.parse(JSON.stringify(uiSchema)));
          })
          .catch((error) => {
            return [{}];
          });
        },loadTables : async function (){
           await this.LoadFunction().then((res:any)=>{
                setFormdata({
                    ...ctx.core.data,
                     "reportListWrapper.0.caseLevelReportList" : res[0],
                     "reportListWrapper.0.invoiceReportList" : res[1]
                }) 
            }).catch((err:any)=>{
                setFormdata({
                    ...ctx.core.data,
                     "reportListWrapper.0.caseLevelReportList" : [],
                     "reportListWrapper.0.invoiceReportList" : []
                }) 
            });

            // setFormdata({
            //     ...ctx.core.data,
            //      "reportListWrapper.0.caseLevelReportList" : tabledata[0],
            //      "reportListWrapper.0.invoiceReportList" : tabledata[1]
            // })
            setUiSchema(InvoiceGenerationUiSchema);
        },
        LoadFunction :async () => {
            
            let caseData = JSON.stringify({
                payload: {
                    reportName: "invoice_case_level_report",
                    reportFormat: "grid",
                    params: {
                     
                        // candidateGroup: userValue.payload.positionTypeName,
                        // candidateUser: userValue.payload.positionName,
                        // userName:userValue.payload.username,
                        programCycleId: ctx.core.data.InvoiceWrapper[0].programCycle
                    }
                }
            })
            let invoiceData = JSON.stringify({
                payload: {
                    reportName: "invoice_level_report",
                    reportFormat: "grid",
                    params: {
                        // candidateGroup: userValue.payload.positionTypeName,
                        // candidateUser: userValue.payload.positionName,
                        // userName:userValue.payload.username,
                        programCycleId: ctx.core.data.InvoiceWrapper[0].programCycle
                    }
                }
            })
            let tablesData : Array<any> = []
            await service.post('/workflow/generateReport',caseData,{ headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
            .then((response : any) =>{
                const result1 = response.data.payload.reportData.values.map((e : any) => {
                    return {...e, id: e.Id};
                })
                tablesData.push(result1)
                return service.post('/workflow/generateReport',invoiceData,{ headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, });
            }).then( response => {
                    const result2 : any = response.data.payload.reportData.values.map((elem:any) => {
                        const timestamp = elem["Invoice Date"];
                        const invoiceDate = new Date(timestamp);
                        const invoiceDateString = invoiceDate.toLocaleString()
                         return {...elem,id:elem.Id,"Invoice Date" : invoiceDateString};
                    });
                    tablesData.push(result2)
                    
                    return result2;
            }).catch((error) => {
                console.log(error);
            })
            return tablesData;
        }, 
        generateInvoice : async function() {
                const body:any = {
                    payload : {
                        payoutComponentIdList : ctx.core.data["reportListWrapper.0.caseLevelReportListSelected"]? ctx.core.data["reportListWrapper.0.caseLevelReportListSelected"] : [],
                        params : {
                            invoiceNo : ctx.core.data["invoiceNumber"] ? ctx.core.data["invoiceNumber"] : ""
                        }
                    }
                }
                await service.post('/invoice/generate',body,{ headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response : any) => {
                    
                    return this.LoadFunction();
                }).then(res =>{
                    setFormdata({
                        ...ctx.core.data,
                        notifySuccess : "Invoice Generated",
                        "reportListWrapper.0.caseLevelReportList" : res[0],
                        "reportListWrapper.0.invoiceReportList" : res[1]
                    })
                    setUiSchema(InvoiceGenerationUiSchema);
                }).catch(error => {
                    console.log(error);
                    setFormdata({
                        ...ctx.core.data,
                        notifyFail : "Invoice Not Generated",
                        "reportListWrapper.0.caseLevelReportList" : [],
                        "reportListWrapper.0.invoiceReportList" : []
                    })
                })

            },
           
            actionFunction : function () {
               
                    const data : any = {
                        payload : {
                            payoutInvoiceIdList : ctx.core.data["reportListWrapper.0.invoiceReportListSelected"],
                            candidateGroup: userValue.payload.positionTypeName,
                            candidateUser: userValue.payload.positionName,
                            userName:userValue.payload.username,
                            completionMap : {
                                action : ctx.core.data.actions
                            }
                        }
                    }
                    service.post('/workflow/completeTaskOnPayoutInvoiceIdList',data,{ headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                                  .then(response => {
                                   
                                    return this.LoadFunction();
                                  }).then(res =>{
                                    const message = ctx.core.data.actions === "reject" ? "Rejected" : "Approved"

                                    setFormdata({
                                        ...ctx.core.data,
                                        notifySuccess : "message",
                                        "reportListWrapper.0.caseLevelReportList" : res[0],
                                        "reportListWrapper.0.invoiceReportList" : res[1]
                                    })
                                    setUiSchema(InvoiceGenerationUiSchema);
                                  }).catch(error => {
                                    console.log(error);
                                  })
            },
            downloadFile : function() {
                const body = {
                    payload : {
                        payoutInvoiceId : otherData[0].Id
                    }
                }
                service.post("/invoice/download",body,{ headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response) => {
                  downloadFile(response.data.payload);
                  return this.LoadFunction()
                 })
                .catch((error) => {
                  console.log(error);
                });
            },
            deleteFile : function(){
                   const body = {
                    payload : {
                        payoutInvoiceId : otherData[0].Id
                    }
                }
                service.post("/invoice/delete",body,{ headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', }, })
                .then((response) => {
                  return this.LoadFunction()
                 }).then( res =>{
                    setFormdata({
                        ...ctx.core.data,
                        notifySuccess : "Invoice Generated",
                        "reportListWrapper.0.caseLevelReportList" : res[0],
                        "reportListWrapper.0.invoiceReportList" : res[1]
                    })
                    setUiSchema(InvoiceGenerationUiSchema);
                 })
                .catch((error) => {
                  console.log(error);
                });
            }
    } 
}