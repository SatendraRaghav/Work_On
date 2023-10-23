import { loginService, myService } from "../service/service";
import axios from "axios";
import { ProfileUiSchema } from "../UiSchema/Profile/UiSchema";

 const Profile = (
  store:any,
  dynamicData:any
) => {
  const serviceApi = myService(
    dynamicData?.setLoading,
    
    store.navigate
  );
  return {
    setPage: async function () {
      const formdata =  await this.getFormData();
      store.setFormdata(formdata);
      const schema = this.getSchema();
      const uiSchema = this.getUiSchema();
      store.setSchema(schema);
      store.setUiSchema(uiSchema);
     
    },
    getFormData: async function () {
      const fomData:any = {};
      return fomData
    },
    getUiSchema: function () {
      return ProfileUiSchema;
    },
    getSchema: () => {
      return {
      
      };
    },
    add:function () {
      let tableData = store.ctx.core.data?.table?   JSON.parse(JSON.stringify(store.ctx.core.data?.table)):{}
   
       if(tableData?.rows){
          tableData.rows.push({})
       }else{
        tableData = {rows:[{}]}
       }
       store.setFormdata({table:tableData})
    }
  };
};

export default Profile;
//   adjustmentParameter:{options:options}