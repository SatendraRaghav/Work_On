import { JsonFormsStateContext } from "@jsonforms/react";
import {  myService } from "../service/service";
import { HomeSchema } from "../UiSchema/Home/Schema";
import { HomeUiSchema } from "../UiSchema/Home/UiSchema";
 const Home = async (
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
      return {new:{box:"Raghav"}};
    },
    getUiSchema: function () {
      return HomeUiSchema;
    },
    getSchema: () => {
      return HomeSchema;
    },
    click:()=>{
      store.setValidation("ValidateAndShow");
    }
  };
};

export default Home;
