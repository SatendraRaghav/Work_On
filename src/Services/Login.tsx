import { JsonFormsStateContext } from "@jsonforms/react";
import { loginService } from "../service/service";
import { LoginSchema } from "../UiSchema/Login/Schema";
import { LoginUiSchema } from "../UiSchema/Login/UiSchema";
import axios from "axios";
import { userValue, setUserValue} from "../Apple";;

 const Login = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?:any,
  setConfig?:any,
  setAdditionalErrors?:any,
  setNotify?:any
) => {
  const myLoginService = loginService(otherData?.setLoading,)
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
      return LoginUiSchema;
    },
    getSchema: () => {
      return LoginSchema;
    },
    userLogInByEnter : async function(){
        if(otherData.event.code==="Enter"){
          await this.userLogIn()
        }
    },
    userLogIn: async function () {
      console.log(ctx);
    setConfig("ValidateAndShow")
      const data = JSON.stringify({
        payload: {
          username: ctx.core.data.username,
          password: ctx.core.data.password,
        },
      });
      myLoginService.post("/auth/authenticate",data).then((res)=>{
        setUserValue(res.data)
          navigate("/Home");
          setNotify({SuccessMessage:"You Login Successfully",Success:true,})
          setConfig("ValidateAndHide")
      })
      .catch((er)=>{
        setNotify({FailMessage:"Invalid Login ID or Password",Fail:true,})

      })
     
        
    },
  };
};

export default Login;
