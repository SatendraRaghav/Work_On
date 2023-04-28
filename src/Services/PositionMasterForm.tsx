import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";

import { myService } from "../service/service";
import { PositionMasterUISchema } from "../UiSchema/PositionMaster/UISchema";
import { PositionMasterSchema } from "../UiSchema/PositionMaster/Schema";
export const PositionMasterForm = (
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
    getFormData: async function(){
       const action =  otherData[0].get("id")
       let formdata = {}
        if (action) {
            const Api =
              "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging&id="+action;
            await serviceApi
              .get(Api)
              .then((res) => {
                if(Object.keys(res.data.payload).includes("parent")&&Object.keys(res.data.payload).includes("type")){
                    console.log({...res.data.payload,type:res.data.payload.type.id,parent:res.data.payload.parent.id});
                    formdata={...res.data.payload,type:res.data.payload.type.id,parent:res.data.payload.parent.id};
                    
                    }
                  else  if(Object.keys(res.data.payload).includes("type")){
                        console.log({...res.data.payload,type:res.data.payload.type.id});
                        formdata={...res.data.payload,type:res.data.payload.type.id};
                    }
                   else  if(Object.keys(res.data.payload).includes("parent")){
                         console.log({...res.data.payload,parent:res.data.payload.parent.id});
                         formdata={...res.data.payload,parent:res.data.payload.parent.id};
                    }
                    else{
                        console.log(res.data.payload);
                        formdata=res.data.payload;
                    }
                    
            
              })
              .catch(() => {});
          }
      
    return formdata;
    },
    getUiSchema: async function(){
        const updatedPositionUiSchema = await this.pageLoad();
         return  updatedPositionUiSchema
    },
    getSchema: () => {
      return PositionMasterSchema;
    },
    backHandler: function(){
      navigate("/PositionMasterRecords")
    },
    Submit_Position: async function () {
        let idDataRep:any;
        let idData:any;
        serviceApi.get("/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNew&id="+ctx.core.data.type).then((rest) => {
            console.log(rest.data.payload);
            idData=rest.data.payload;
            console.log({...ctx.core.data,type:rest.data});

        }).then(()=>{
            serviceApi.get("/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNew&id="+ctx.core.data.parent ).then((rest1) => {
               console.log(rest1.data.payload);
               idDataRep=rest1.data.payload;
               console.log({...ctx.core.data,type:rest1.data});
        }).then(()=>{
           serviceApi.post("/master/save", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.position.PositionNewStaging",entityValue:{...ctx.core.data,type:idData,parent:idDataRep}}}).then((res) => {
                //            service.post("/master/save?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging",ctx.core.data).then((res) => {    
               console.log("save")
               setFormdata({ ...ctx.core.data, notifySuccess: "Success" });
               console.log(res)
               navigate("/PositionMasterRecords")
           })
       })
        
       }).catch(() => {});
    },
    pageLoad: async () => {
      const Ui = PositionMasterUISchema;
      let selectOption: any[] = [];
      let selectParentData:any[]=[];
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionTypeNew&status=A'
        )
        .then((res) => {
            selectOption = res.data?.payload?.map((e: any) => {
                return { label: e.name, value: e.id }
            });
            // Ui.elements[4].value.content.options = selectOption?selectOption:[{id:1}];
        })
        ;
        await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNew&status=A'
        )
        .then((res) => {
            selectParentData = res.data?.payload?.map((e: any) => {
                return { label: e.name, value: e.id }
            });
            // Ui.elements[5].value.content.options = selectParentData?selectParentData:[{id:1}];
        })
        ;

        console.log(Ui)
      return Ui;
    },
    

    };
};
 