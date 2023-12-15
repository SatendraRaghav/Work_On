import { EventSchema } from "../elements/UiSchema/event/schema"; 
import { EventUiSchema } from "../elements/UiSchema/event/uiSchema";
import Component from "./component";
import { saveFormdataInLocalStorage } from "./saveHandler";
import { APISection } from "../build/uischema/apiSection";
import { getSelectField, getTextArea } from "../build/uischema/buildPropertiesSection";
import { refreshSectionUiSchema } from "../build/uischema/refresh";
import _ from "lodash";

export default (
  store: any,
  dynamicData: any
) => {
  return {
    setPage: async function () {
      const formdata = await this.getFormData();
      store.setFormdata(formdata);
      const schema = await this.getSchema();
      store.setSchema(schema);
     this.refreshPage(formdata.Handler,store)
    },
    refreshPage: (handlerType: any, store: any) => {
      const uiSchema = _.cloneDeep(EventUiSchema)
      if (handlerType) {
        if (handlerType === "custom") {
          uiSchema.elements[1].elements[0].elements[2] = getTextArea("eventCode", "Write Custom Code", false)
        } else if (handlerType === "api") {
          uiSchema.elements[1].elements[0].elements[2] = APISection;

        } else if (handlerType === "inBuiltFunction") {
          uiSchema.elements[1].elements[0].elements[2] = getSelectField("inBuiltFunctionType", "Function Name", [
            { label: "RankProvider", value: "RankProvider" },
            { label: "Download File", value: "downloadFile" },
          ])
          uiSchema.elements[1].elements[0].elements[3] = getTextArea("funcParametersCode", "Write Custom Code for Functions Parameter", true, { xs: 12, sm: 12, md: 6 })
        } else if (handlerType === "refresh") {
          uiSchema.elements[1].elements[0].elements[2] = refreshSectionUiSchema
        }
      }
      store.setUiSchema(uiSchema)
    },

    getFormData: Component(store, dynamicData).getFormdata,
    getUiSchema: async function () {
      return EventUiSchema;
    },
    getSchema: async () => {
      return EventSchema;
    },
    onChange: function () {
      if (
        store?.formData?.Handler !== store?.newData?.Handler &&
        store?.newData?.Handler !== undefined
      ) {
        this.refreshPage(store.newData.Handler||store.formdata.Handler,store)
      }
    },
    
    saveHandler: Component(store, dynamicData).saveHandler,
    addEvent: async function () {
      const path = store.searchParams?.get("path");
      if (!Array.isArray(store.formData.events)) {
        store.formData.events = []
      }
      saveFormdataInLocalStorage(store.formData, path)
      const finalPath = `${path}.events[${store.formData?.events?.length}]`
      store.searchParams.set("path", finalPath)
      store.setSearchParams(store.searchParams)
      this.setPage()
    },
    editEvent: async function () {
      const rowId = dynamicData.path.split(".")[1];
      const path = store.searchParams?.get("path");
      saveFormdataInLocalStorage(store.formData, path)
      const finalPath = `${path}.events[${rowId}]`
      store.searchParams.set("path", finalPath)
      store.setSearchParams(store.searchParams)
      this.setPage()

    },
    deleteEvent: Component(store, dynamicData).deleteEvent,
    backHandler: function () {
      store.navigate(-1)
    },
  }
};
