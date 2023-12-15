import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { GroupMasterUISchema } from "../UiSchema/GroupMaster/UISchema";
import { GroupMasterSchema } from "../UiSchema/GroupMaster/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
import { userValue } from "@/App";
import _ from "lodash";
export const GroupMasterForm = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(dynamicData?.setLoading,  store.navigate,store);
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
          "/master/getDetailById?masterName=com.act21.hyperform3.entity.group.GroupStaging&id=" + action;
        await serviceApi
          .get(Api)
          .then((res) => {
            if (res.data.userList) {
              let result = res.data.userList.map((a: any) => {
                return  a.id 
              });
              formdata = { ...res.data, userList:result };
            }
            else {
              formdata = res.data;
            }


          })
          .catch(() => { });
      }
  console.log(formdata)
      return formdata;
    },
    getUiSchema:  function () {
      return GroupMasterUISchema;
    },
    getSchema: async () => {
      let schema:any = _.cloneDeep(GroupMasterSchema);
      const disabled = localStorage.getItem("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.User&status=A'
        )
        .then((res:any) => {
         const selectOption = res.data.map((e: any) => {
            return { title: e.name, const: e.id }
          });
          if(!(_.isEmpty(selectOption))){
         schema.properties.userList = {
          ... schema?.properties?.userList,
            type:"array",
            items:{
              oneOf:selectOption
            }
         }}
        })
      return schema;
    },
    backHandler: function () {
      store.navigate("/GroupMasterRecords")
    },
    Submit: async function () {
      if (
        ! isErrorsExist(store.schema, store.ctx.core.errors)
      ) {
        store.setValidation("ValidateAndShow")
        store.setNotify({FailMessage:"Errors on page",Fail:true,})
        return;
      } 
      let permList: any;
      if(store.ctx.core.data.userList){
        permList=await this.getUser();
      }
        console.log(store.ctx.core.data)
        serviceApi.post("/master/save", { entityName: "com.act21.hyperform3.entity.group.GroupStaging", entityValue: { ...store.ctx.core.data, userList: permList },userId : userValue.payload.userId }).then((res) => {
          if (res.status==200) { 
          console.log("save")
          store.setFormdata({ ...store.ctx.core.data});
          store.setNotify({SuccessMessage:"Submitted Successfully",Success:true,})
          store.navigate("/GroupMasterRecords")
          }
      }).catch((error) => {
         if( error.response ){
        console.log(error.response.data); // => the response payload 
          let errorData=error.response.data.payload;
          handleErrors(errorData,store);
    } });
    },
  
    getUser: async ()=> {
      const idlist:any = store.ctx.core.data.userList;
     ;
      return  serviceApi.post("/master/getDetailsById", {  entityName: "com.act21.hyperform3.entity.master.user.User", entityValue: idlist }).then((rest) => {

        return rest.data;
         });
       },

  };
};
