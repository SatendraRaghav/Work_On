import { loginService } from "../service/service";
import axios from "axios";
import { ProfileUiSchema } from "../UiSchema/Profile/UiSchema";

 const Profile = (
  store:any,
  dynamicData:any
) => {
  return {
    setPage: async function () {
      const formdata = this.getFormData();
      store.setFormdata(formdata);
      const schema = this.getSchema();
      const uiSchema = this.getUiSchema();
      store.setSchema(schema);
      store.setUiSchema(uiSchema);
     
    },
    getFormData: function () {
      return{type:{options:[{label:"name",value:"name"}]}}},
    getUiSchema: function () {
      return ProfileUiSchema;
    },
    getSchema: () => {
      return {
      
      };
    },
    addRecords:()=>{
      let tableData = store?.ctx?.core?.data?.table?JSON.parse(JSON.stringify(store?.ctx?.core?.data?.table)):undefined;
      if(tableData){
           tableData.rows.push({})
      }else{
        tableData = {rows:[]}
      }
      store.setFormdata((pre)=>{return {...pre,table:tableData}})
    }
  };
};

export default Profile;
