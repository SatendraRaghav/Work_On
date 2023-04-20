import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../../service/service";
import { ProgramMasterUiSchema } from "../../UiSchema/ProgramMaster/Program/UiSchema";
import { ProgramMasterSchema } from "../../UiSchema/ProgramMaster/Program/Schema";
export const MasterForm = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?:any,
  otherData?: any
) => {
  const serviceApi = myService()
  return {
    setPage: async function () {
      setFormdata({})
      const schema = this.getSchema();
      setSchema(schema);
      const formData = await this.getFormData();
      setFormdata(formData);
      const UiSchema = await this.getUiSchema();
      setUiSchema(UiSchema);
    },
    getFormData: async () => {
        const action =  otherData[0].get("id")
        let formdata = {}
         if (action) {
             const Api =
               "/master/getDetailById?masterName=com.act21.hyperform3.entity.program.ProgramStaging";
             await serviceApi
               .get(`${Api}&id=${action}`)
               .then((res) => {
                const types = res.data.payload.config.features.externalData.supportedTypes.map((e:any)=>{
                  return {supportedTypes:e}
              })
                if(Object.keys(res.data.payload).includes("groupList")){
                  const result = res.data.payload.groupList.map((a:any)=>{
                      return {label:a.name,value:a.id}});
                    
                   formdata={...res.data.payload,groupList:result,externalData:types};
                  
                  }
                  else {
                      console.log(res.data);
                      formdata={...res.data.payload,externalData:types};
                 
                  }
              
                
                const newData = { ...formdata,externalData:types};
                formdata = newData;
              })
               .catch(() => {});
           }
     return formdata;
    },
    getUiSchema: async function(){
      const ProgramMasterUiSchema = await this.pageLoad();
      return  ProgramMasterUiSchema;
    },
    getSchema: () => {
    return ProgramMasterSchema
    },
    pageLoad: async () => {
      const Ui = ProgramMasterUiSchema;
      let selectOption: any[] = [];
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.group.GroupStaging&status=A'
        )
        .then((res) => {
            selectOption = res.data.payload.map((e: any) => {
                return { label: e.name, value: e.id }
            });
            Ui.elements[4].value.content.options = selectOption?selectOption:[];
        }).catch((err)=>{
          Ui.elements[4].value.content.options = [];
        });
        console.log(Ui)
      return Ui;
    },
    Submit_PM_Program: async function () {
      const groupRedesign = ctx.core.data?.groupList?.map((elem: any) => {
        if(typeof elem === "string"){
          return { name: elem };
        }
        return {name:elem.value}
      })
      const types = ctx.core.data.externalData.map((elem:any)=>{
          return elem.supportedTypes;
      })
      let newData ;
      if(ctx.core.data.id){
        newData = { ...ctx.core.data,status:"E",  groupList: groupRedesign?groupRedesign:[],config:{features:{externalData:{supportedTypes:types}}}};
      }else{
        newData = { ...ctx.core.data,status:"N",  groupList: groupRedesign?groupRedesign:[],config:{features:{externalData:{supportedTypes:types}}}};
      }
      console.log(newData)
      delete newData["externalData"] 
      // const demodata = {...newData,id:null}
      await serviceApi
        .post(
          "/master/save",
          {id:1,payload:
            {entityName:"com.act21.hyperform3.entity.program.ProgramStaging",
            entityValue:{ ...newData },
           }}
        )
        .then((res) => {
         
          setFormdata({ ...ctx.core.data, notifySuccess: "Success" });
          navigate("/MasterRecords")
        })
        .catch(() => {});
    },
    backHandler: function(){
        navigate("/MasterRecords")
      },
  };
};
