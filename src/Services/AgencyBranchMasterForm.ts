import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { AgencyBranchUISchema } from "../UiSchema/AgencyBranchMaster/UiSchema";
import { AgencyBranchSchema } from "../UiSchema/AgencyBranchMaster/Schema";
import { isErrorsExist } from "@/utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
import { userValue } from "@/App";
import _ from "lodash";


export const AgencyBranchForm = (store: any, dynamicData: any) => {
  const serviceApi =  myService(dynamicData?.setLoading, store.navigate,store);
  return {
    setPage: async function () {
      store.setFormdata({});
      const schema = await this.getSchema();
      store.setSchema(schema);
      const UiSchema =  this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
    },
    getFormData: async function(){
      const action = store.searchParams?.get("id");
       let formdata = {}
        if (action) {
            const Api =
              "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.agency.AgencyBranchStaging&id="+action;
            await serviceApi
              .get(Api)
              .then((res) => {
                if(res.data.agency){
                  console.log({...res.data,agency:res.data.agency.id});
                  formdata={...res.data,agency:res.data.agency.id};
              }
              else{
                console.log(res.data);
                formdata=res.data;
              }
              })
              .catch(() => {});
          }
      
    return formdata;
    },
    getUiSchema:  function(){
         return  AgencyBranchUISchema;
    },
    getSchema: async function() {
      let schema = await this.pageLoad();
      const disabled = localStorage.getItem("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      return schema;
    },
    backHandler: function(){
      store.navigate("/AgencyBranchRecords")
    },
    Submit: async function () {
      if (!isErrorsExist(store.schema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Errors on page",
          Fail: true,
        });
      } else {
        let idData: any;
        if(store.ctx.core.data.type){
          idData=await this.getAgency();
        }
       
       serviceApi.post("/master/save", {entityName:"com.act21.hyperform3.entity.master.agency.AgencyBranchStaging",entityValue:{...store.ctx.core.data,agency:idData},userId : userValue.payload.userId}).then((res) => {
        if (res.status==200) {
        store.navigate("/AgencyBranchRecords");
        store.setNotify({
          SuccessMessage: "Submitted Successfully",
          Success: true,
        });
      }
      }).catch((error) => {
        if( error.response ){
          console.log(error.response.data); // => the response payload 
            let errorData=error.response.data.payload;
            handleErrors(errorData,store);
      }
      });
    }
  },
     pageLoad: async () => {
       const cloneSchema:any = _.cloneDeep(AgencyBranchSchema)
      
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.agency.AgencyMaster&status=A'
        )
        .then((res) => {
           const selectOption = res.data?.map((e: any) => {
                return { title: e.name||String(e.id), const: e.id }
            });
            if(!(_.isEmpty(selectOption))){
            cloneSchema.properties.agency = {
             ...cloneSchema.properties.agency, 
             oneOf:selectOption
            }
          }
            })
        ;
       return cloneSchema;
     },

     getAgency: async ()=> {
      serviceApi.get("/master/getDetailById?masterName=com.act21.hyperform3.entity.master.agency.AgencyMaster&id="+store.ctx.core.data.agency).then((rest) => {
        return  rest.data.payload;
         });
       },
    

    };
};
 