import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { RolePermissionUISchema } from "../UiSchema/RolePermission/UISchema";
import { RolePermissionSchema } from "../UiSchema/RolePermission/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
import { userValue } from "@/App";
import _ from "lodash";
export const RolePermissionForm = (
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
     
      store.setAdditionalErrors(() => []);
    },
   
    getFormData: async function () {
      const action = store.searchParams?.get("id")
      let formdata = {}
      if (action) {
        const Api =
          `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.RolePermissionStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
          
            formdata = res.data;
            let name = res.data.name;
          
            const nameArray=name.split(":");
            console.log(nameArray)
            formdata={...formdata,pageName:nameArray[0]};
            formdata={...formdata,component:nameArray[1]};
            formdata={...formdata,permissions:nameArray[2]};
          })
          .catch(() => { });
      }

      return formdata;
    },
    getUiSchema:  function () {
      return RolePermissionUISchema;
    },
    getSchema: async () => {
      let schema:any = _.cloneDeep(RolePermissionSchema);
      const disabled = localStorage.getItem("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      await serviceApi
      .post(
        "/page/getLOV",
        {type:"pageName"}
      )
      .then((res) => {
        console.log(res.data)
        const selectOption = res.data?.map((e)=>{
          return {title:e.label||e.value,const:e.value}
        })
        if(!(_.isEmpty(selectOption))){
        schema.properties.pageName = {
          ...schema.properties?.pageName,
          oneOf:selectOption
        }}
       
      });
      return schema;
    },
    backHandler: function () {
      store.navigate("/RolePermissionRecords")
    },
    Submit_RolePermission: async function () {
      if (
        ! isErrorsExist(store.schema, store.ctx.core.errors)
      ) {
        store.setValidation("ValidateAndShow")
        store.setNotify({ FailMessage: "Errors on page", Fail: true, })
      } else {
        const perm=store.ctx.core.data.permissions=="W"?"Write":store.ctx.core.data.permissions=="R"?"Read":store.ctx.core.data.permissions=="H"?"Hide":""
        const component=store.ctx.core.data.component=="*"?" all ":store.ctx.core.data.component
        const permissionName=store.ctx.core.data.pageName+":"+store.ctx.core.data.component+":"+store.ctx.core.data.permissions
        const permName=store.ctx.core.data.pageName+"_"+component+"_"+perm
    
        let data={...store.ctx.core.data,name:permissionName}
        
        delete data.pageName;
        delete data.component;
        delete data.permissions;
        serviceApi.post("/master/save", { entityName: "com.act21.hyperform3.entity.master.role.RolePermissionStaging", entityValue: data,userId : userValue.payload.userId }).then((res) => {
          if (res.status==200) { 
          store.navigate("/RolePermissionRecords")
          store.setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
          }
        })
          .catch((error) => { 
            if( error.response ){
              console.log(error.response.data); // => the response payload 
                let errorData=error.response.data.payload;
                handleErrors(errorData,store);
          }
          });
      }
    },
    onChange: async () => {
      let schemaClone = _.cloneDeep(store.schema);

      if (store.newData?.pageName) {
        await serviceApi
          .post("/page/getLOV",{type:"component",pageName:store.newData?.pageName})
          .then((res: any) => {
             const componentOption = res.data.map((e)=>{
                  return {title:e.label,const:e.value}
             })
             if(!(_.isEmpty(componentOption))){
             schemaClone.properties.component = {
              ... schemaClone.properties?.component,
              oneOf:componentOption
             }}
            store.setSchema(schemaClone);
          })
        }
    },
  };
};
