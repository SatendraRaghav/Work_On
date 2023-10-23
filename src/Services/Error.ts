import { JsonFormsStateContext } from "@jsonforms/react";
import { ErrorPageUischema } from "../UiSchema/Errorpage/Uischema";

 export const error = (
  store:any,
  dynamicData:any
) => {
  return {
    setPage: async function () {
      const formdata = this.getFormData();
      const schema = this.getSchema();
      const uiSchema = this.getUiSchema();
      store.setFormdata(formdata);
      store.setSchema(schema);
      store.setUiSchema(uiSchema);
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
