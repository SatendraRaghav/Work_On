import { JsonFormsStateContext } from "@jsonforms/react";
import {  myService } from "../service/service";
import { HomeSchema } from "../UiSchema/Home/Schema";
import { HomeUiSchema } from "../UiSchema/Home/UiSchema";
import axios from "axios";
import { setUserValue } from "../Apple";
 const Home = (
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
   const service =myService(otherData.setLoading, otherData.setDialogBox, navigate);
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
      return HomeUiSchema;
    },
    getSchema: () => {
      return HomeSchema;
    },
    userLogIn: function () {
      console.log(ctx);
    setConfig("ValidateAndShow")
      const data = JSON.stringify({
        payload: {
          username: ctx.core.data.username,
          password: ctx.core.data.password,
        },
      });
       service.post("/auth/authenticate",data).then((res)=>{
        setUserValue(res.data)
          navigate("/Home");
          setNotify({successMessage:"Login Successfully",Success:true,})
         
      })
      .catch((er)=>{
        setNotify({FailsMessage:"Invalid Login ID or Password",Fail:true,})
      })
     
        
    },
  };
};

export default Home;
