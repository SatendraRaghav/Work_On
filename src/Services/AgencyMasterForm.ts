import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
import { AgencyMasterSchema } from "@/UiSchema/AgencyMaster/Schema";
import { AgencyMasterUISchema } from "@/UiSchema/AgencyMaster/UiSchema";
import { userValue } from "@/App";
import { downloadFile } from "@/utils/downloadFile";
import _ from "lodash";
export const AgencyMasterForm = (
  store: any,
  dynamicData: any
) => {
  const serviceApi = myService(dynamicData?.setLoading, store.navigate, store);
  return {
    setPage: async function () {
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const schema = await this.getSchema();
      store.setSchema(schema);
      const UiSchema =  this.getUiSchema();
      store.setUiSchema(UiSchema);
   
     

    },
    getFormData: async function () {
      const action = store.searchParams?.get("id")
      let formdata = {}
      if (action) {
        const Api =
          "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.agency.AgencyMasterStaging&id=" + action;
        await serviceApi
          .get(Api)
          .then((res) => {
            const fileIds = res.data.fileData.fileIds

            if ((res.data.role) && (res.data.userList)) {
              let result = res.data.userList.map((a: any) => {
                return a.id 
              });
              formdata = { ...res.data, role: res.data.role.id, userList: result };

            }
            else if (res.data.role) {
              formdata = { ...res.data, role: res.data.role.id };

            }
            else if (res.data.userList) {
              let result = res.data.userList.map((a: any) => {
                return a.id 
              })
              formdata = { ...res.data, userList: result };

            }

            else {
              alert("S")
              formdata = res.data;

            }

            Object.keys(fileIds).map((type) => {
              const fileData = fileIds[type];
              let fileName = type.replace("doc", "download");
              formdata[`${type}Id`] = fileData.fileId;
              formdata[`${fileName}`] = fileData.fileName;
            });



          })
          .catch(() => { });

      }

      return formdata;
    },
    getUiSchema:  function () {
      return AgencyMasterUISchema
    },
    getSchema: async function(){
      let schema = await this.pageLoad();
      const disabled = localStorage.getItem("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      return schema;
    },
    backHandler: function () {
      store.navigate("/AgencyMasterRecords")
    },
    Submit: async function () {
      if (
        !isErrorsExist(store.schema, store.ctx.core.errors)
      ) {
        store.setValidation("ValidateAndShow")
        store.setNotify({ FailMessage: "Errors on page", Fail: true, })
        return;
      }
      let role: any;
      let position: any;
      if (store.ctx.core.data.role) {
        role = await this.getRole();
      }
      let userList: any;
      if (store.ctx.core.data.userList) {
        userList = await this.getUser();
      }
      let newData = {
        ...store.ctx.core.data,
        fileData: {
          fileIds: {
            docAggrementCopy: store.ctx.core.data.docAggrementCopy === null ? undefined : {
              fileId: store.ctx.core.data.docAggrementCopyId,
              fileName: store.ctx.core.data.downloadAggrementCopy
            },
            docAppointmentLetter: store.ctx.core.data.docAppointmentLetter === null ? undefined : {
              fileId: store.ctx.core.data.docAppointmentLetterId,
              fileName: store.ctx.core.data.downloadAppointmentLetter
            },
            docApplicationForm: store.ctx.core.data.docApplicationForm === null ? undefined : {
              fileId: store.ctx.core.data.docApplicationFormId,
              fileName: store.ctx.core.data.downloadApplicationForm
            },
            docDueDiligenceReport: store.ctx.core.data.docDueDiligenceReport === null ? undefined : {
              fileId: store.ctx.core.data.docDueDiligenceReportId,
              fileName: store.ctx.core.data.downloadDueDiligenceReport
            },
            docBrokerageLetter: store.ctx.core.data.docBrokerageLetter === null ? undefined : {
              fileId: store.ctx.core.data.docBrokerageLetterId,
              fileName: store.ctx.core.data.downloadBrokerageLetter
            },
            docDisclosureLetter: store.ctx.core.data.docDisclosureLetter === null ? undefined : {
              fileId: store.ctx.core.data.docDisclosureLetterId,
              fileName: store.ctx.core.data.downloadDisclosureLetter
            },
            docCallingSetupAgencyLetterHead: store.ctx.core.data.docCallingSetupAgencyLetterHead === null ? undefined : {
              fileId: store.ctx.core.data.docCallingSetupAgencyLetterHeadId,
              fileName: store.ctx.core.data.downloadCallingSetupAgencyLetterHead
            },
            docCallingSetupKotakLetterHead: store.ctx.core.data.docCallingSetupKotakLetterHead === null ? undefined : {
              fileId: store.ctx.core.data.docCallingSetupKotakLetterHeadId,
              fileName: store.ctx.core.data.downloadCallingSetupKotakLetterHead
            },
            docRmVisitReport: store.ctx.core.data.docRmVisitReport === null ? undefined : {
              fileId: store.ctx.core.data.docRmVisitReportId,
              fileName: store.ctx.core.data.downloadRmVisitReport
            },
            docPan: store.ctx.core.data.docPan === null ? undefined : {
              fileId: store.ctx.core.data.docPanId,
              fileName: store.ctx.core.data.downloadPanId
            },
            docCancel_Cheque_File: store.ctx.core.data.docCancel_Cheque_File === null ? undefined : {
              fileId: store.ctx.core.data.docCancel_Cheque_FileId,
              fileName: store.ctx.core.data.downloadCancel_Cheque_File
            },
            docCibil: store.ctx.core.data.docCibil === null ? undefined : {
              fileId: store.ctx.core.data.docCibilId,
              fileName: store.ctx.core.data.downloadCibil
            },
            docOther: store.ctx.core.data.docOther === null ? undefined : {
              fileId: store.ctx.core.data.docOther,
              fileName: store.ctx.core.data.downloadOther
            },
          }
        }
      }
      delete newData?.downloadAggrementCopy
      delete newData?.downloadAppointmentLetter
      delete newData?.downloadApplicationForm
      delete newData?.downloadDueDiligenceReport
      delete newData?.downloadBrokerageLetter
      delete newData?.downloadDisclosureLetter
      delete newData?.downloadCallingSetupAgencyLetterHead
      delete newData?.downloadCallingSetupKotakLetterHead
      delete newData?.downloadRmVisitReport
      delete newData?.downloadPan
      delete newData?.downloadCancel_Cheque_File
      delete newData?.downloadDueDiligenceReport
      delete newData?.downloadCibil
      delete newData?.downloadOther
      delete newData?.docAggrementCopy
      delete newData?.docAppointmentLetter
      delete newData?.docApplicationForm
      delete newData?.docDueDiligenceReport
      delete newData?.docBrokerageLetter
      delete newData?.docDisclosureLetter
      delete newData?.docCallingSetupAgencyLetterHead
      delete newData?.docCallingSetupKotakLetterHead
      delete newData?.docRmVisitReport
      delete newData?.docPan
      delete newData?.docCancel_Cheque_File
      delete newData?.docDueDiligenceReport
      delete newData?.docCibil
      delete newData?.docOther
      delete newData?.docAggrementCopyId
      delete newData?.docAppointmentLetterId
      delete newData?.docApplicationFormId
      delete newData?.docDueDiligenceReportId
      delete newData?.docBrokerageLetterId
      delete newData?.docDisclosureLetterId
      delete newData?.docCallingSetupAgencyLetterHeadId
      delete newData?.docCallingSetupKotakLetterHeadId
      delete newData?.docRmVisitReportId
      delete newData?.docPanId
      delete newData?.docCancel_Cheque_FileId
      delete newData?.docDueDiligenceReportId
      delete newData?.docCibilId
      delete newData?.docOtherId
      console.log(newData)
      serviceApi.post("/master/save", { entityName: "com.act21.hyperform3.entity.master.agency.AgencyMasterStaging", entityValue: { ...newData, role: role, userList: userList }, userId: userValue.payload.userId }).then((res) => {
        if (res.status == 200) {
          console.log("save")
          store.setFormdata({ ...store.ctx.core.data });
          store.setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
          store.navigate("/AgencyMasterRecords")
        }
      }).catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload 
          let errorData = error.response.data.payload;
          handleErrors(errorData, store);
        }
      });
    },
    pageLoad: async () => {
      const cloneSchema: any = _.cloneDeep(AgencyMasterSchema);

      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.User&status=A'
        )
        .then((res: any) => {
          const selectOption = res.data.map((e: any) => {
            return { title: e.name, const: e.id }
          });
          if(!(_.isEmpty(selectOption))){
          cloneSchema.properties.userList = {
            ...cloneSchema.properties?.userList,
            type:"array",
            items:{
              oneOf: selectOption
            }
           
          }}

        });
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.Role&status=A',

        )
        .then((res) => {
          const selectOption = res.data?.map((e: any) => {
            return { title: e.name, const: e.id }
          });
          if(!(_.isEmpty(selectOption))){
          cloneSchema.properties.role = {
            ...cloneSchema.properties?.role,
            oneOf: selectOption
          }}
        });
      
      return cloneSchema;

    },
    uploadFile: async function () {
      const event = dynamicData.changeEvent;
      const formData = new FormData();
      formData.append(
        "metadata",
        JSON.stringify({
          payload: {
            name: event.target.files[0].name
          },
        })
      )
      formData.append("file", event?.target.files[0]);
      let fileUploadResponse: any = null;
      let fileName = dynamicData.path.replace("doc", "download");
      await serviceApi
        .post("/externalData/save", formData)
        .then((response: any) => {
          fileUploadResponse = response.data.payload;
        })
        .then((response) => {
          const data = { ...store.ctx.core.data };
          data[`${dynamicData.path}Id`] = fileUploadResponse;
          data[`${fileName}`] = event.target.files[0].name
          // store.setFormdata({
          //   ...data,
          //   downloadAggrementCopy: store.formData?.docAggrementCopy?.includes(event.target.files[0].name)?event.target.files[0].name:store.formData?.docAggrementCopy,
          //   downloadAppointmentLetter: store.formData?.docAppointmentLetter?.includes(event.target.files[0].name)?event.target.files[0].name:store.formData?.docAppointmentLetter,
          //   downloadApplicationForm: store.formData?.docApplicationForm?.includes(event.target.files[0].name)?event.target.files[0].name:store.formData?.docApplicationForm,
          //   downloadDueDiligenceReport: store.formData?.docDueDiligenceReport?.includes(event.target.files[0].name)?event.target.files[0].name:store.formData?.docDueDiligenceReport,
          // });

          store.setFormdata({
            ...data
          });



          // ExternalDataUiSchema.elements[4].elements[0].config.main.allRowsData = response;
          // store.setUiSchema(ExternalDataUiSchema)
          store.setNotify({
            SuccessMessage: "File uploaded successfully",
            Success: true,
          });
        })
        .catch((error) => {
          store.setNotify({
            FailMessage: "Server Error",
            Fail: true,
          });
          console.log(error);
        });

    },
    Download_File: () => {
      const data = { ...store.ctx.core.data };
      let fileName = dynamicData.path.replace("download", "doc");
      let id = data[`${fileName}Id`];
      let body = JSON.stringify({
        withData: true,
        id: id,
      });
      serviceApi
        .post("/externalData/getById", body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          downloadFile(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRole: async () => {
      return serviceApi.get(`/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.Role&id=${store.ctx.core.data.role}`).then((rest) => {
        return rest.data;
      });
    },
    getPosition: async () => {
      return await serviceApi.get(`/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNew&id=${store.ctx.core.data.position}`).then((rest1) => {
        return rest1.data;
      });
    },
    getUser: async () => {
      const idlist: any = store.ctx.core.data.userList;
      ;
      return serviceApi.post("/master/getDetailsById", { entityName: "com.act21.hyperform3.entity.master.user.User", entityValue: idlist }).then((rest) => {

        return rest.data;
      });
    },
  };
};
