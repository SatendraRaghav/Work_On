import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
//import service from "service";

import { myService } from "../service/service";
import { RoleMasterRecordsUISchema } from "../UiSchema/RoleMasterRecords/UISchema";
import { RoleMasterUISchema } from "../UiSchema/RoleMaster/UISchema";

// let selectOption:any[] = [];
// let selectParentData:any[]=[];
// let idData:any;
export const RoleMasterRecords = (
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
  const serviceApi =  myService(otherData.setLoading, otherData.setDialogBox, navigate);
  return {

    setPage: async function () {
      setFormdata({})
      const schema = this.getSchema();
      setSchema(schema);
      const UiSchema = await this.getUiSchema();
      setUiSchema(UiSchema);
      const formData =  this.getFormData();
      setFormdata(formData);
    },
    getFormData: async () => {
      return {}
    },
    getUiSchema: async () => {
      const UiSchema = JSON.parse(
        JSON.stringify(RoleMasterRecordsUISchema)
      );
      console.log(UiSchema);
      const Api =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&status=A";
    const ApiPending =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&status=N";
    const ApiReject =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.RoleStaging&status=R";
      const data = await serviceApi
        .get(Api)
        .then((res) => {
          UiSchema.elements[1].elements[0].config.main.allRowsData =
            res.data.payload;

          return serviceApi.get(ApiPending);
        })
        .then((res) => {
          UiSchema.elements[1].elements[1].config.main.allRowsData =
            res.data.payload;
          return serviceApi.get(ApiReject);
        })
        .then((res) => {
          UiSchema.elements[1].elements[2].config.main.allRowsData =
            res.data.payload;
          // return UiSchema;
        })
        .catch((err) => {
          UiSchema.elements[1].elements[0].config.main.allRowsData = [];
          UiSchema.elements[1].elements[1].config.main.allRowsData = [];
          UiSchema.elements[1].elements[2].config.main.allRowsData = [];
        });
      return UiSchema;
    },
    getSchema: () => {
      return {};
    },
    RoleApprover: function () {
      serviceApi.post("/master/action", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.role.RoleStaging", entityValue: otherData.rowData, action: "A" } }).then(async (res) => {
        console.log("approved")
        const data = await this.getFormData();
        setFormdata({
          ...data,
        });
        setNotify({ SuccessMessage: "Approved successfully", Success: true, })
      })
    },
    Reject_Records: function () {
      serviceApi.post("/master/action", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.role.RoleStaging", entityValue: otherData.rowData, action: "R" } }).then(async (res) => {
        const data = await this.getFormData();
        setFormdata({
          ...data,
        });
        setNotify({ SuccessMessage: "Rejected successfully", Success: true, })
      });
    },

    newRecord: () => {
      navigate("/RoleMaster")
    },
    Edit_Approve_Records: function () {
      navigate(`/RoleMaster?id=${otherData.rowData.id}`)
    }

  };
};
