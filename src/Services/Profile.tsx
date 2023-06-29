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
      return {};
    },
    getUiSchema: function () {
      return ProfileUiSchema;
    },
    getSchema: () => {
      return {};
    },
  };
};

export default Profile;
