import { JsonFormsStateContext } from "@jsonforms/react";
import { myLoginService } from "../service/service";
import { HomeUiSchema } from "../UiSchema/Login/UiSchema";
import { HomeSchema } from "../UiSchema/Login/Schema";
import axios from "axios";
import { setUserValue,userValue } from "../Apple";

 const Home = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any
) => {
  // const [user, setUser] = useLocalStorage("user", null);
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
      const data = JSON.stringify({
        payload: {
          username: ctx.core.data.username,
          password: ctx.core.data.password,
        },
      });
      myLoginService.post("/auth/authenticate",data).then((res)=>{
        setUserValue(res.data)
          navigate("/Profile");
          setFormdata({
            ...ctx.core.data,
            notifySuccess: "You Login Successfully",
          });
      })
      .catch((er)=>{
          setFormdata({
            ...ctx.core.data,
            notifyFail:ctx.core.data.notifyFail==="Invalid username or password"
            ?"Invalid Details":
            "Invalid username or password",
          });
      })
     
        
    },
  };
};

export default Home;
