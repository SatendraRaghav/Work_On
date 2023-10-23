// updated Rule master records


import { getUiSchema } from "@jsonforms/core";
import { myService } from "../service/service";
import { RuleMasterRecordsUISchema } from "../UiSchema/RuleMasterRecords/UiSchema"
export const RuleMasterRecords = (
  store:any,
  dynamicData:any
) => {

  const serviceApi = myService(dynamicData?.setLoading,  store.navigate);
  return {

    setPage: async function () {
      store.setFormdata({})
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
    const ApiPending =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.rule.RuleStaging&status=N";
    const ApiReject =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.master.rule.RuleStaging&status=R";
      
      await serviceApi
        .get(Api)
        .then((res) => {
        dataArray = res.data.payload.map((val: any) => {
          return {id : val.id, artifactId : val.artifactId, groupId : val.groupId, version : val.version}
        })
          formData["ApproveRecords"] = dataArray
          return serviceApi.get(ApiPending);
        })
        .then((res) => {
          dataArray = null;
          dataArray = res.data.payload.map((val: any) => {
            return {id : val.id, artifactId : val.artifactId, groupId : val.groupId, version : val.version}
          })
          if(dataArray == undefined || dataArray == null){
            dataArray = [];
          }
          formData["PendingRecords"] = dataArray;
          return serviceApi.get(ApiReject);
        })
        .then((res) => {
          dataArray = null;
          dataArray = res.data.payload.map((val: any) => {
            return {id : val.id, artifactId : val.artifactId, groupId : val.groupId, version : val.version}
          })
          if(dataArray == undefined || dataArray == null){
            dataArray = [];
          }
          formData["RejectRecords"]  = dataArray
        })
        .catch((err) => {
          formData["ApproveRecords"] = [];
          formData["PendingRecords"] = [];
          formData["RejectRecords"]  = [];
        });
      return formData;
    },
    getUiSchema: async () => {
      return RuleMasterRecordsUISchema
    },
    getSchema: () => {
      return {};
    },
    RoleApprover: function () {
      const Api =
        `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.rule.RuleStaging&id=${dynamicData?.rowData.id }`;
      serviceApi
        .get(Api)
        .then((res) => {
          return  serviceApi.post(
            "/master/action",
            {id:1,payload:
              {entityName:"com.act21.hyperform3.entity.master.rule.RuleStaging",
              entityValue:res.data.payload,
              action:"A"}},
          )})
        .then(async (res) => {
          let formdata = await this.getFormData();
          store.setFormdata(formdata);
          store.setNotify({SuccessMessage:"Approved Successfully",Success:true,})
        })
        .catch((e) => {
          store.setNotify({FailMessage:"Rejected Successfully",Fail:true,})
        });
    },
    Reject_Records: function () {
      const Api =
        `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.rule.RuleStaging&id=${dynamicData?.rowData.id }`;
      serviceApi
        .get(Api)
        .then((res) => {
          return  serviceApi.post(
            "/master/action",
            {id:1,payload:
              {entityName:"com.act21.hyperform3.entity.master.rule.RuleStaging",
              entityValue:res.data.payload,
              action:"R"}},
          )})
        .then(async (res) => {
          let formdata = await this.getFormData();
          store.setFormdata(formdata);
          store.setNotify({SuccessMessage:"Rejected Successfully",Success:true})
        })
        .catch((e) => {
          store.setNotify({FailMessage:"Rejected Successfully",Fail:true,})
        });
    },
    newRecord: () => {
      store.navigate("/RuleMaster")
    },
    Edit_Approve_Records: function () {
      store.navigate(`/RuleMaster?id=${dynamicData?.rowData.id}`)
    }
  };
};
