import { JsonFormsStateContext } from "@jsonforms/react";
import { ErrorPageUischema } from "../UiSchema/Errorpage/Uischema";

 export const error = (
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
  // const [user, setUser] = useLocalStorage("user", null);
  return {
    setPage: function () {
      const formdata = this.getFormData();
      const schema = this.getSchema();
      const uiSchema = this.getUiSchema();
      setFormdata(formdata);
      setSchema(schema);
      setUiSchema(uiSchema);
    },
    getFormData: function () {
      return {};
    },
    getUiSchema: function () {
      return ErrorPageUischema;
    },
    getSchema: () => {
      return {};
    },
  };
};
