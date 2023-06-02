import { JsonFormsStateContext } from "@jsonforms/react";
import { loginService } from "../service/service";
import axios from "axios";
import { setUserValue,userValue } from "../impaktapps-jsonforms/core/Hyperform/Hyperform";
import { ProfileUiSchema } from "../UiSchema/Profile/UiSchema";

 const Profile = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?:any
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
