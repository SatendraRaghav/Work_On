import { PageMasterSchema } from "../elements/UiSchema/PageMaster/schema";
import { PageMasterUiSchema } from "../elements/UiSchema/PageMaster/uiSchema";
import _ from "lodash";
import Component from "./component";
import { getFormdataFromLocalStorage, saveFormdataInLocalStorage } from "./saveHandler";
import { schema } from "../build/buildUiSchema";

interface funcParamsProps {
  store: any,
  dynamicData: any,
  config: any,
  submitHandler: any,
  service: any
}
export default (funcParams: funcParamsProps) => {
  const { store, dynamicData, config, submitHandler } = funcParams
  return {
    setPage: async function () {
      const formdata = await this.getFormdata();
      store.setFormdata(formdata);
      const uiSchema = await this.getUiSchema();
      const schema = await this.getSchema();
      store.setSchema(schema);
      store.setUiSchema(uiSchema);
    },
    getFormdata: async function () {
      const id = store.searchParams?.get("id");
      const formData = getFormdataFromLocalStorage()
      if (formData) {
        return formData;
      }
      saveFormdataInLocalStorage(config)
      return config
    },
    getUiSchema: async function () {
      return PageMasterUiSchema;
    },
    getSchema: () => {
      return PageMasterSchema;
    },
    backHandler: () => {
      localStorage.removeItem("pageFormdata")
      store.navigate("/PageMasterRecords");
    },
    onAddClickHandler: async function () {
      const id = store.searchParams?.get("id");
      if (!Array.isArray(store.formData.elements)) {
        store.formData.elements = []
      }
      const response = saveFormdataInLocalStorage(store.formData)
      store.navigate(
        `/Component?path=${`elements[${response?.elements.length}]`}&id=${id}`
      );
    },
    submitPageHandler: async function () {
      console.log()
      if (_.isEmpty(funcParams.store.ctx.core.errors)) {
        submitHandler(store, funcParams.service)
        .then((saveReturn: any) => {
          localStorage.removeItem("pageFormdata")
          store.navigate(-1)
          store.setNotify({
            SuccessMessage: "Submit Successfully",
            Success: true,
          });
        })
      } else {
        funcParams.store.setValidation("ValidateAndShow");
        funcParams.store.setNotify({
          Fail:true,
          FailMessage:"Errors on Page"
        })
      }
    },
    Edit_Components: Component(store, dynamicData).editComponents,
    Delete_Components: Component(store, dynamicData).deleteComponents,
    eventAddHandler: async function () {
      const id = store.searchParams?.get("id");
      if (!Array.isArray(store.formData.events)) {
        store.formData.events = []
      }
      saveFormdataInLocalStorage(store.formData)
      const finalPath = `events[${store.formData.events.length}]`
      store.navigate(`/ComponentEvents?path=${finalPath}&id=${id}`)
    },
    editEvent: async function () {
      const rowId = dynamicData.path.split(".")[1];
      const id = store.searchParams?.get("id");
      saveFormdataInLocalStorage(store.formData)
      const finalPath = `events[${rowId}]`
      store.navigate(`/ComponentEvents?path=${finalPath}&id=${id}`)
    },
    deleteEvent: async function () {
      const rowId = dynamicData.path.split(".")[1];
      store.formData.events.splice(rowId, 1);
      const response = saveFormdataInLocalStorage(store.formData)
      store.setFormdata(response);
    },
  }
};