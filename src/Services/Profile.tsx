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
      const schema = this.getSchema();
      const uiSchema = this.getUiSchema();
      store.setSchema(schema);
      store.setUiSchema(uiSchema);
      store.setFormdata(formdata);
    },
    getFormData: function () {
      return {
        pbc_progress:{total:500,achieved:300,bottomLabel_3_value:200},
        graph:[{y:"Anant Sharma",x:60},{y:"satendra Raghav",x:150},{y:"Vivek Pahadi",x:80},{y:"Siddarth verma",x:100}]};
    },
    getUiSchema: function () {
      return ProfileUiSchema;
    },
    getSchema: () => {
      return {
      
      };
    },
  };
};

export default Profile;
