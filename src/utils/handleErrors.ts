
export const handleErrors = (errorData: any[], store: any) => {
  store.setAdditionalErrors([]);
    const addAdditionalError = (scopeName:string, message:string) => {
      const newError: any = {
        instancePath: `/${scopeName}`,
        message: message,
        schemaPath: "",
        keyword: "",
        params: {},
      };
      store.setAdditionalErrors((errors:any) => [...errors, newError]);
    };
    if (errorData.length > 0) {
      errorData.map((e: any, i: number) => {
        if(e?.param?.componentName){
          addAdditionalError(e.param.componentName, e.message);
          
        }else{
          store.setNotify({ FailMessage: e.message, Fail: true })
        }
      });
    }
  };