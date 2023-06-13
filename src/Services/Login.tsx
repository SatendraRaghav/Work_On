import { JsonFormsStateContext } from "@jsonforms/react";
import { loginService } from "../service/service";
import { LoginSchema } from "../UiSchema/Login/Schema";
import { LoginUiSchema } from "../UiSchema/Login/UiSchema";
import axios from "axios";
import { userValue, setUserValue} from "../Apple";;

 const Login = (
    store:any,
    dynamicData:any
) => {
  const myLoginService = loginService(dynamicData?.setLoading,)
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
      return LoginUiSchema;
    },
    getSchema: () => {
      return LoginSchema;
    },
    onKeyPress : async function(){
        if(dynamicData.event.key==="Enter"){
          await this.userLogIn()
        }
    },
    onChange:()=>{
      console.log(store.newData)
      // console.log(store.formData)
      console.log(store.formData)

    // window.alert(dynamicData.preData)
    },
    userLogIn: async function () {
    store.setValidation("ValidateAndShow")
      const data = JSON.stringify({
        payload: {
          username: store.ctx.core.data.username,
          password: store.ctx.core.data.password,
        },
      });
      myLoginService.post("/auth/authenticate",data).then((res)=>{
        setUserValue(res.data)
          store.navigate("/Home");
          store.setNotify({SuccessMessage:"You Login Successfully",Success:true,})
          store.setValidation("ValidateAndHide")
      })
      .catch((er)=>{
        store.setNotify({FailMessage:"Invalid Login ID or Password",Fail:true,})

      })
     
        
    },
  };
};

export default Login;