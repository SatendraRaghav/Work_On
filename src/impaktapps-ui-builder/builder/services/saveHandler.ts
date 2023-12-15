import buildConfig  from "../build/buildConfig"; 
import _ from "lodash";
import { getNavigationHistory } from "./getNavigationHistory";

export const saveFormdataInLocalStorage = (formData: any, path?: string) => {
let updatedFormdata:any;
  if (path) {
    const pageFormdata = getFormdataFromLocalStorage()
    updatedFormdata = _.set(pageFormdata, path, buildConfig(formData));
  } else {
    updatedFormdata = buildConfig(formData)
  }
  localStorage.setItem("pageFormdata", JSON.stringify(updatedFormdata))
  return updatedFormdata;
}

export const getFormdataFromLocalStorage = (path?: string) => {
  const pageFormdata = localStorage.getItem("pageFormdata")?JSON.parse(localStorage.getItem("pageFormdata")):undefined;
  let returnValue: any;
  if (path) {
    returnValue = _.get(pageFormdata, path)
    returnValue = { ...returnValue, ...getNavigationHistory(pageFormdata, path) }
  }
  if (!returnValue) {
    returnValue = getNavigationHistory(pageFormdata, path)
  }
  return returnValue || pageFormdata;

}