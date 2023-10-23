import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { AgencyBranchUISchema } from "../UiSchema/AgencyBranchMaster/UiSchema";
import { AgencyBranchSchema } from "../UiSchema/AgencyBranchMaster/Schema";


export const AgencyBranchForm = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?: any,
  setValidation?: any,
  setAdditionalErrors?: any,
  setNotify?:any
) => {
  const serviceApi =  myService();
  return {
    setPage: async function () {
      setFormdata({})
      const schema = this.getSchema();
      setSchema(schema);
      const UiSchema = await this.getUiSchema();
      setUiSchema(UiSchema);
      const formData = await this.getFormData();
      setFormdata(formData);
    },
    getFormData: async function(){
       const action =   otherData.searchParams?.get("id")
       let formdata = {}
        if (action) {
            const Api =
              "/master/getDetailById?masterName=com.act21.hyperform3.entity.master.agency.AgencyBranchStaging&id="+action;
            await serviceApi
              .get(Api)
              .then((res) => {
                if(res.data.payload.agency){
                  console.log({...res.data.payload,agency:res.data.payload.agency.id});
                  formdata={...res.data.payload,agency:res.data.payload.agency.id};
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
        const updatedAgencyUiSchema = await this.pageLoad();
         return  updatedAgencyUiSchema;
    },
    getSchema: () => {
      return AgencyBranchSchema;
    },
    backHandler: function(){
      navigate("/AgencyBranchRecords")
    },
    Submit_RolePermission: async function () {
       console.log(ctx.core.data)
       let idData:any;
       serviceApi.get("/master/getDetailById?masterName=com.act21.hyperform3.entity.master.agency.AgencyMaster&id="+ctx.core.data.agency).then((rest) => {
           console.log(rest.data.payload);
           idData=rest.data.payload;
           console.log({...ctx.core.data,agency:rest.data.payload});

          }).then(()=>{
       serviceApi.post("/master/save", {id:1,payload:{entityName:"com.act21.hyperform3.entity.master.agency.AgencyBranchStaging",entityValue:{...ctx.core.data,agency:idData}}}).then((res) => {
            console.log("save")
            setFormdata({ ...ctx.core.data, notifySuccess: "Success" });
            console.log(res)
            navigate("/AgencyBranchRecords")
        })
      })
    .catch(() => {});
    },
     pageLoad: async () => {
       const Ui = AgencyBranchUISchema;
       let selectOption: any[] = [];
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.agency.AgencyMaster&status=A'
        )
        .then((res) => {
            selectOption = res.data?.payload?.map((e: any) => {
                return { label: e.name, value: e.id }
            });
            Ui.elements[4].value.content.options = selectOption?selectOption:[{id:1}];
        })
        ;
       return Ui;
     },
    

    };
};
 