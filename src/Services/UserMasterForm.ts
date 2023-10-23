import { myService } from "../service/service";

import { UserMasterUISchema } from "../UiSchema/UserMaster/UISchema";
import { UserMasterSchema } from "../UiSchema/UserMaster/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { handleErrors } from "../utils/handleErrors";

export const UserMasterForm = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(dynamicData?.setLoading,  store.navigate,store);
  return {
    setPage: async function () {
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
          `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.user.UserStaging&id=${action}`;
        await serviceApi
          .get(Api)
          .then((res) => {
            if ((res.data.payload.role) && (res.data.payload.position)) {
              console.log({ ...res.data.payload, role: res.data.payload.role.id, position: res.data.payload.position.id });
              formdata = { ...res.data.payload, role: res.data.payload.role.id, position: res.data.payload.position.id };

            }
            else if (res.data.payload.role) {
              console.log({ ...res.data.payload, role: res.data.payload.role.id });
              formdata = { ...res.data.payload, role: res.data.payload.role.id };

            }
            else if (res.data.payload.position) {
              console.log({ ...res.data.payload, position: res.data.payload.position.id });
              formdata = { ...res.data.payload, position: res.data.payload.position.id };

            }
            else {
              console.log(res.data.payload);
              formdata = res.data.payload;

            }

          })
          .catch(() => { });
      }

      return formdata;
    },
    getUiSchema: async function () {
      const updatedUserUiSchema = await this.pageLoad();
      return updatedUserUiSchema
    },
    getSchema: () => {
      return UserMasterSchema;
    },
    backHandler: function () {
      store.navigate("/UserMasterRecords")
    },
    Submit_User: async function () {
     if (
       ! isErrorsExist(UserMasterSchema, store.ctx.core.errors)
    ) {
       store.setValidation("ValidateAndShow")
       store.setNotify({ FailMessage: "Errors on page", Fail: true, })
     } else {
        let role:any;
        let position:any;
        if(store.ctx.core.data.role){
          role=await this.getRole();
        }
        if(store.ctx.core.data.position){
          position=await this.getPosition();
          
        }
          
            console.log({ ...store.ctx.core.data, role: role, position: position })
            serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.user.UserStaging", entityValue: { ...store.ctx.core.data, role: role, position: position } } }).then((res) => {
              if (res.data.status=="SUCCESS") { // <-- check response OK here
              store.setFormdata({ ...store.ctx.core.data});
              store.navigate("/UserMasterRecords")
              store.setNotify({ SuccessMessage: "Submitted Successfully", Success: true, })
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
      const Ui = UserMasterUISchema;
      console.log(Ui)
      let selectOption: any[] = [];
      let selectPositionData: any[] = [];
      console.log(Ui)
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.Role&status=A',

        )
        .then((res) => {
          selectOption = res.data?.payload?.map((e: any) => {
            return { label: e.name, value: e.id }
          });
          
           Ui.elements[4].elements[0].config.main.options = selectOption ? selectOption : [{ id: 1 }];
        });

      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNew&status=A'
        )
        .then((res) => {
          selectPositionData = res.data?.payload?.map((e: any) => {
            return { label: e.name, value: e.id }
          });
          
          Ui.elements[4].elements[1].config.main.options = selectPositionData ? selectPositionData : [{ id: 1 }];
        })
        ;
      console.log(Ui)
      return Ui;
    },
    getRole: async ()=> {
    return serviceApi.get(`/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.Role&id=${store.ctx.core.data.role}`).then((rest) => {
      return  rest.data.payload;
      });
    },
    getPosition: async ()=>{
   return await serviceApi.get(`/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNew&id=${store.ctx.core.data.position}`).then((rest1) => {
        return rest1.data.payload;
      });
    }

  };
};
