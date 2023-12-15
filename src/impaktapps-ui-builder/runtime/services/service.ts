import _ from "lodash";
import { downloadFile } from "./downloadFile";
import { executeEvents, executeRefreshHandler } from "./events";
import { handlersProps } from "./interface";
let compType: string;
let eventGroups: any = {};
const notifyUiSchema = {
  type: "Control",
  scope: "#/properties/notify",
  options: {
    widget: "Notify",
  },
  layout: 6,
};

export const extractEvents = (eventConfig: any) => {
  function extractsConfigEvents(eventConfigObj: any) {
    if (eventConfigObj.events) {
      eventConfigObj.events.forEach((event: any) => {
        if (eventConfigObj.type) {
          compType = eventConfigObj.type;
        }
        if (!eventGroups[event.eventType]) {
          eventGroups[event.eventType] = {};
        }
        if (!eventGroups[event.eventType][eventConfigObj.name]) {
          eventGroups[event.eventType][eventConfigObj.name] = [];
        }
        const SuccessEvent = event?.events?.find((elem) => {
          return elem.eventType === "Success"
        })
        if (!(!!SuccessEvent) && event.eventType === "onLoad") {
          event.events.push({ Handler: "mergeFormdata", eventType: "Success", type: compType,lazyLoading:eventConfig.lazyLoading==="YES"?true:false })
        }
        eventGroups[event.eventType][eventConfigObj.name].push({ ...event, type: compType })
      });
    }
  }

  extractsConfigEvents(eventConfig)
  if (eventConfig?.elements) {
    eventConfig.elements.forEach(extractEvents);
  }
  return eventGroups;
};

interface funcParamsProps {
  store: any,
  dynamicData: any,
  config: any,
  uiSchema: any,
  schema: any,
  service: any,
  userValue: any,
}
export default (funcParams: funcParamsProps) => {
  eventGroups = {}
  eventGroups = extractEvents(funcParams.config)
  let executeEventsParameters: handlersProps = {
    config: {}, componentName: "",
    store: funcParams.store, dynamicData: funcParams.dynamicData, userValue: funcParams.userValue, service: funcParams.service,
    serviceHolder: this, eventGroups
  };
  return {
    setPage: async function () {
      funcParams.store.setFormdata({});
      executeEventsParameters = {
        config: {}, componentName: "",
        store: funcParams.store, dynamicData: funcParams.dynamicData, userValue: funcParams.userValue, service: funcParams.service,
        serviceHolder: this, eventGroups
      }
      await executeRefreshHandler(executeEventsParameters)
      funcParams.store.setSchema(
        (pre: any) => {
          return {
            ...funcParams.schema, properties:
              { ...funcParams.schema.properties, ...pre.properties, }
          }
        })
      funcParams.uiSchema.elements.push(notifyUiSchema);
      funcParams.store.setUiSchema(funcParams.uiSchema);
    },
    onClick: async function () {
      const path = funcParams.dynamicData?.tableButtonPath || funcParams.dynamicData.path.split(".")[0];
      for (const eventConfig of eventGroups?.onClick[path]) {
        await executeEvents({
          ...executeEventsParameters,
          config: eventConfig,
          componentName: path
        })
      }
    },
    onPaginationChange: async function (paginationValues) {
      const apiBody = [
        { key: "size", value: paginationValues.pagination.pageSize },
        { key: "pageIndex", value: paginationValues.pagination.pageIndex  },
        { key: "sorting", value: paginationValues.sorting || [] },
        { key: "filters", value: paginationValues.columnFilters || [] },
        { key: "globalFilter", value: paginationValues.globalFilter ?? '' }
      ]
      const response =  await this.updateConfigApiBody(paginationValues, apiBody);
      return response?.data;
    },
    getSelectOptions: async function (param) {
      if (param.serachValue !== "" && param.serachValue !== undefined) {
        const apiBody = [
          { key: "searchValue", value: param.serachValue },
          { key: "currentValue", value: param.currentValue }
        ]
        return await this.updateConfigApiBody(param, apiBody)
      }
    },
    onChange: async function () {
      if (eventGroups.onChange) {
        const ChangeEventsKeysArray = Object.keys(eventGroups.onChange);
        Promise.all(ChangeEventsKeysArray.map(async (componentName: string) => {
          if (
            funcParams.store?.formData[componentName] !== funcParams.store.newData[componentName] &&
            funcParams.store?.newData[componentName] !== undefined
          ) {
            for (const eventConfig of eventGroups.onChange[componentName]) {
              await executeEvents({
                ...executeEventsParameters,
                config: eventConfig,
                componentName
              })
            }
          }
        }))
      }
    },
    updateConfigApiBody: async function (paramValue, apiBody) {
      let LastCallResponse = undefined;
      for (const eventConfig of eventGroups?.onLoad[paramValue.path]) {
        if (eventConfig.body) {
          eventConfig.body = [
            ...eventConfig.body,
            ...apiBody
          ]
        } else { eventConfig.body = apiBody; };
        const responseEvent = eventConfig?.events?.filter((elem) => {
          return elem.Handler !== "mergeFormdata"
        })
        eventConfig.events = responseEvent ?? []
        LastCallResponse = await executeEvents({
          ...executeEventsParameters,
          config: eventConfig,
          componentName: paramValue.path
        })
      }
      return LastCallResponse
    },
    downloadFile: downloadFile
  };
};











