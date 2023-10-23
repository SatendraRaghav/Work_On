import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { GroupMasterUISchema } from "../UiSchema/GroupMaster/UISchema";
import { GroupMasterSchema } from "../UiSchema/GroupMaster/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "@/utils/handleErrors";
export const GroupMasterForm = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(dynamicData?.setLoading,  store.navigate,store);
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
    getFormData: async function () {
      const action = store.searchParams?.get("id")
      let formdata = {}
      if (action) {
        const Api =
          "/master/getDetailById?masterName=com.act21.hyperform3.entity.group.GroupStaging&id=" + action;
        await serviceApi
          .get(Api)
          .then((res) => {
            if (res.data.payload.positionList) {
              let result = res.data.payload.positionList.map((a: any) => {
                return { label: a.name, value: a.id }
              });
              console.log({ ...res.data.payload, positionList: result })
              formdata = { ...res.data.payload, positionList: result };

            }
            else {
              console.log(res.data);
              formdata = res.data.payload;

            }


          })
          .catch(() => { });
      }

      return formdata;
    },
    getUiSchema: async function () {
      const updatedRoleUiSchema = await this.pageLoad();
      return updatedRoleUiSchema
    },
    getSchema: () => {
      return GroupMasterSchema;
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
      if(store.ctx.core.data.positionList){
        permList=await this.getPosition();
      }
        console.log(store.ctx.core.data)
        serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.group.GroupStaging", entityValue: { ...store.ctx.core.data, positionList: permList } } }).then((res) => {
          if (res.data.status=="SUCCESS") { 
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
    pageLoad: async () => {
      const Ui = GroupMasterUISchema;
      let selectOption: any[] = [];
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging&status=A'
        )
        .then((res) => {
          selectOption = res.data.payload.map((e: any) => {
            return { label: e.name, value: e.id }
          });
          
          Ui.elements[1].elements[1].config.main.options = selectOption;
        });
      console.log(Ui)
      return Ui;
    },
    getPosition: async ()=> {
      const idlist:any = store.ctx.core.data.positionList.map((a: any) => a.value);
     ;
      return  serviceApi.post("/master/getDetailsById", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.position.PositionNewStaging", entityValue: idlist } }).then((rest) => {

        return rest.data.payload;
         });
       },

  };
};
