import _ from "lodash";
import { ComponentSchema } from "../elements/UiSchema/Component/schema"; 
import { componentBasicUiSchema } from "../elements/UiSchema/Component/uiSchema";
import { getFormdataFromLocalStorage, saveFormdataInLocalStorage } from "./saveHandler";
import { CoreSection } from "../build/uischema/coreSection";
import { EventSection } from "../build/uischema/eventSection";
import { buildPropertiesSection } from "../build/uischema/buildPropertiesSection";
import { StyleSection } from "../build/uischema/styleSection";
import { TableSection } from "../build/uischema/tableSection";
import { ValueTab } from "../build/uischema/valueTab";
import { ValidationSection } from "../build/uischema/validationSections";
const sectionLabels = {
  Select: ["Core", "Properties","Value", "style", "Event","Validation"],
  MultipleSelect: ["Core", "Properties","Value", "style", "Event","Validation"],
  Table: ["Core", "Components",  "Properties","style",  "Event","Validation"],
  LazyLoadingTable:["Core", "Components", "Properties", "style", "Event","Validation"],
  LeaderBoard: ["Core", "Components", "Properties", "style", "Event","Validation"],
  WrapperSection: ["Core", "Components","Properties", "style","Validation"],
  TabSection: ["Core", "Components", "Properties", "style","Validation"],
  SpeedoMeter:["Core", "Properties", "style", "Event","Validation"],
  card:["Core", "Properties", "style", "Event","Validation"],
  UploadFile:["Core",  "style", "Event","Validation"],
  Graph:["Core", "Properties", "style", "Event","Validation"],
  DownloadFile:["Core",  "style", "Event","Validation"],
  Box: ["Core", "style", "Event","Validation"],
  Properties: ["Core", "Properties", "style", "Event","Validation"],
  ProgressBarCard: ["Core", "Properties", "style", "Event","Validation"],
  RankCard: ["Core", "Properties", "style", "Event","Validation"],
  Slider: ["Core", "Components","Properties", "style", "Event","Validation"],
  Timer: ["Core", "Properties", "style", "Event","Validation"],
  Rank: ["Core", "Properties", "style", "Event","Validation"],
  Button: ["Core", "Properties", "style", "Event","Validation"],
  Array:["Core","Components","Validation"],
  Radio:["Core", "Properties", "style", "Event","Validation"],
  Text:["Core", "Event","Validation"]
}

export const refreshPage = (type:string,store:any) => {
  const UiSchema = _.cloneDeep(componentBasicUiSchema)
  if(type){
  const sectionUiSchema = {
    Core: CoreSection,
    Value: ValueTab,
    style: StyleSection,
    Event: EventSection,
    Components: TableSection,
    Properties: buildPropertiesSection(type),
    Validation:ValidationSection
  
  }
  const elements = sectionLabels[type]?.map(e => sectionUiSchema[e]);
  UiSchema.elements[1].config.main.tabLabels = sectionLabels[type] || ["Core", "style","Event","Validation"];
  UiSchema.elements[1].elements = elements || [CoreSection, StyleSection,EventSection,ValidationSection];
 
}
store.setUiSchema(UiSchema);
}

export default (store: any, dynamicData: any) => {
  return {
    setPage: async function () {
      const formdata = await this.getFormdata();
      store.setFormdata(formdata);
      const schema = this.getSchema();
      store.setSchema(schema); 
     this.refreshPage(formdata?.type, store);
    
    },
    refreshPage:refreshPage,
    getFormdata: async function () {
      const path = store.searchParams?.get("path");
      return getFormdataFromLocalStorage(path) 
    },
    getSchema: function () {
      return ComponentSchema;
    },
    saveHandler: async function () {
      const path = store.searchParams?.get("path");
      if (_.isEmpty(store.ctx.core.errors)) {
        saveFormdataInLocalStorage(store.formData,path)
          store.navigate(-1)
          store.setNotify({
            SuccessMessage: "Save Successfully",
            Success: true,
          });
      } else {
        store.setValidation("ValidateAndShow");
         store.setNotify({
          Fail:true,
          FailMessage:"Errors on Page"
        })
      }
    },
    onChange: function () {
      if (
        store?.formData?.type !== store?.newData?.type &&
        store?.newData?.type !== undefined
      ) {
        this.refreshPage(store?.newData?.type,store);
      }
    },
    editComponents: async function () {
      const rowId = dynamicData.path.split(".")[1];
      const path = store.searchParams?.get("path");
      const id = store.searchParams?.get("id");
      saveFormdataInLocalStorage(store.formData, path)
      if (path) {
        const path = store.searchParams?.get("path");
        const finalPath = `${path}.elements[${rowId}]`
        store.searchParams.set("path", finalPath)
        store.setSearchParams(store.searchParams)
        this.setPage()
      } else {
        store.navigate(`/Component?path=${`elements[${rowId}]`}&id=${id}`)
      }
    },
    deleteComponents: async function () {
      const path = store.searchParams?.get("path");
      const rowId = dynamicData.path.split(".")[1];
      store.formData.elements.splice(rowId, 1);
      const response = saveFormdataInLocalStorage(store.formData, path)
      const data = path ? _.get(response, path) : response;
      store.setFormdata(data);
    },
    deleteEvent: async function () {
      const path = store.searchParams?.get("path");
      const rowId = dynamicData.path.split(".")[1];
      store.formData.events.splice(rowId, 1);
      const response = saveFormdataInLocalStorage(store.formData, path)
      store.setFormdata(_.get(response, path));
    },
    widgetAddClickHandler: async function () {
      if (!Array.isArray(store.formData.elements)) {
        store.formData.elements = []
      }
      const path = store.searchParams?.get("path");
      saveFormdataInLocalStorage(store.formData, path)
      const finalPath = `${path}.elements[${store.formData.elements.length}]`
      store.searchParams.set("path", finalPath)
      store.setSearchParams(store.searchParams)
      this.setPage()

    },
    eventEditHandler: async function () {
      const rowId = dynamicData.path.split(".")[1];
      const path = store.searchParams?.get("path");
      const id = store.searchParams?.get("id");
      saveFormdataInLocalStorage(store.formData, path)
      const finalPath = `${path}.events[${rowId}]`
      store.navigate(`/ComponentEvents?path=${finalPath}&id=${id}`)
    },
    eventAddHandler: async function () {
      const path = store.searchParams?.get("path");
      const id = store.searchParams?.get("id");
      if (!Array.isArray(store.formData.events)) {
        store.formData.events = []
      }
      saveFormdataInLocalStorage(store.formData, path)
      const finalPath = `${path}.events[${store.formData.events.length}]`
      store.navigate(`/ComponentEvents?path=${finalPath}&id=${id}`)
    },
    backHandler: function () {
      store.navigate(-1)
    },
  }
};







