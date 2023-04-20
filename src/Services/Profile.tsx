import { JsonFormsStateContext } from "@jsonforms/react";
import { myLoginService } from "../service/service";
import axios from "axios";
import { setUserValue,userValue } from "../App";
import { ProfileUiSchema } from "../UiSchema/Profile/UiSchema";

 const Profile = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any
) => {
  return {
    setPage: function () {
      const formdata = this.getFormData();
      const schema = this.getSchema();
      const uiSchema = this.getUiSchema();
     
      setSchema(schema);
      setUiSchema(uiSchema);
       setFormdata(formdata);
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
