import { JsonFormsStateContext } from "@jsonforms/react";
import {  myService } from "../service/service";
import { HomeSchema } from "../UiSchema/Home/Schema";
import { HomeUiSchema } from "../UiSchema/Home/UiSchema";
 const Home = async (
store:any,
dynamicData:any
) => {
  const serviceApi = myService(dynamicData?.setLoading,  store.navigate);
  return {
    setPage: async function () {
      const formdata = await this.getFormData();
      const schema = this.getSchema();
      const uiSchema = this.getUiSchema();
     
      store.setSchema(schema);
      store.setUiSchema(uiSchema);
      store.setFormdata(formdata);
    },
    getFormData: async function  () {
     return {progress:{achieve:200,total:500},
    slider:[{username:"Raghav"},{username:"Raghav1"},{username:"Satendra"},{username:"Satendra"}]
    }
    
   
    },
    getUiSchema: function () {
      return HomeUiSchema;
    },
    getSchema: () => {
      return HomeSchema;
    },
  };
};

export default Home;
