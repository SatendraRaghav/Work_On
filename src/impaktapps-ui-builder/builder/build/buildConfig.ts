import _ from "lodash";

export default (FormData: any) => {
  const formData = _.cloneDeep(FormData)
  let component: any = {};
  // if (formData?.layout) {
  //   component.layout = createData(FormData?.layout, "layout");
  //   delete formData.layout
  // }
  // if(!formData.type ){
  //  component.type = "page";
  // }
  if(formData.pageName){
    delete formData.pageName
  }
  if(formData.eventsSelected){
    delete formData.eventsSelected
  }
  if (formData.type === "Table" ||
    formData.type === "WrapperSection" ||
    formData.type === "TabSection"
  ) {
    component.elements = formData.elements || []
    if (formData.elements) {
      delete formData.elements
    }
  }
  component.events = formData.events||[];
  if (formData.events) {
    delete formData.events
  }
  component = { ...formData, ...component };
  return component;
};

export const createLayoutFormat = (config: any[]) => {
  let data: any = {};
  config.map((e:any)=>{
    data[e.key] = +e.value
  })
  return data;
};
export const flatObjectValueInArray = (config:any[])=>{
  const keyName = Object.keys(config[0])[0]
  const data = config.map((e)=>{
    return e[keyName]
  })
  return data;
}
