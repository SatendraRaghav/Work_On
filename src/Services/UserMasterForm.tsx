import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";

import { UserMasterUISchema } from "../UiSchema/UserMaster/UISchema";
import { UserMasterSchema } from "../UiSchema/UserMaster/Schema";
export const UserMasterForm = (
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
      // setFormdata({})
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
              `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.user.UserStaging&id=${action}`;
            await serviceApi
              .get(Api)
              .then((res) => {
                if(Object.keys(res.data.payload).includes("role")&&Object.keys(res.data.payload).includes("position")){
                  console.log({...res.data.payload,role:res.data.payload.role.id,position:res.data.payload.position.id});
                  formdata={...res.data.payload,role:res.data.payload.role.id,position:res.data.payload.position.id};
               
                  }
                else if(Object.keys(res.data).includes("role")){
                    console.log({...res.data.payload,role:res.data.payload.role.id});
                    formdata={...res.data.payload,role:res.data.payload.role.id};
                 
                    }
                   else if(Object.keys(res.data).includes("position")){
                      console.log({...res.data.payload,position:res.data.payload.position.id});
                      formdata={...res.data.payload,position:res.data.payload.position.id};
                   
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
        const updatedUserUiSchema = await this.pageLoad();
         return  updatedUserUiSchema
    },
    getSchema: () => {
      return UserMasterSchema;
    },
    backHandler: function(){
      navigate("/UserMasterRecords")
    },
    Submit_User: async function () {
        let idData:any;
        let idDataRep:any;
        console.log(ctx.core.data)
        serviceApi.get(`/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.Role&id=${ctx.core.data.role}` ).then((rest) => {
      //  serviceApi.post("/master/getDetailById", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.role.Role",entityValue:{ id: ctx.core.data.role }}}).then((rest) => {
          console.log(rest.data.payload);
            idData=rest.data.payload;
            console.log({...ctx.core.data,role:rest.data.payload});

          }).then(()=>{
            serviceApi.get(`/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNew&id=${ctx.core.data.position}` ).then((rest1) => {
          //  serviceApi.post("/master/getDetailById", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.position.PositionNew",entityValue:{ id: ctx.core.data.position }}}).then((rest1) => {
              console.log(rest1.data.payload);
               idDataRep=rest1.data.payload;
               console.log({...ctx.core.data,position:rest1.data});
        }).then(()=>{
        console.log({...ctx.core.data,role:idData,position:idDataRep})
        serviceApi.post("/master/save", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.user.UserStaging",entityValue:{...ctx.core.data,role:idData,position:idDataRep}}}).then((res) => {
            console.log("save")
            setFormdata({ ...ctx.core.data, notifySuccess: "Success" });
            console.log(res)
            navigate("/UserMasterRecords")
        })
    })
  }).catch(() => {});
    },
    pageLoad: async () => {
      const Ui = UserMasterUISchema;
      let selectOption: any[] = [];
      let selectPositionData:any[]=[];
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.Role&status=A',
          
        )
        .then((res) => {
            selectOption = res.data?.payload?.map((e: any) => {
                return { label: e.name, value: e.id }
            });
            // Ui.elements[47].value.content.options = selectOption?selectOption:[{id:1}];
        });

        await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNew&status=A'
        )
        .then((res) => {
          selectPositionData = res.data?.payload?.map((e: any) => {
                return { label: e.name, value: e.id }
            });
            // Ui.elements[48].value.content.options = selectPositionData?selectPositionData:[{id:1}];
        })
        ;
        console.log(Ui)
      return Ui;
    },
    

    };
};
 