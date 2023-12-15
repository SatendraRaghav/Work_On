import _, { cloneDeep } from "lodash";
import { handlersProps } from "./interface";


export const executeEvents = async (
 params:handlersProps
) => {
  let nextEvent = [];
  let finalResponse = null;
  try{
    if (!shouldEventExecute(params)) {
      return { response: undefined, events: undefined };
    }
    const response  = await executeEventsHandler(params)
    finalResponse = response;
    const SuccessEvent = params.config?.events.filter(e => e.eventType === "Success");
    nextEvent = SuccessEvent;
  } catch (err) {
    const FailEvent = params.config?.events?.filter(e => e.eventType === "Fail")
    const setEvent = FailEvent?.length > 0 ? FailEvent : []
     nextEvent = setEvent;
  }
  if (nextEvent?.length > 0) {
    for (const actionConfig of nextEvent) {
        await executeEvents({...params,config:actionConfig,parentEventOutput:finalResponse})
    }
  }
  return finalResponse;
}

async function executeEventsHandler(params:handlersProps) {
  if (params.config.Handler === "api") {
    return await executeApiEventHandler(params)
  }
  else if (params.config.Handler === "inBuiltFunction") {
    return await executeInBuiltFunctionHandler(params)
  }
  else if (params.config.Handler === "custom") {
    return await executeCustomHandler(params)
  }
  else if (params.config.Handler === "refresh") {
    return await executeRefreshHandler(params)
  }
  else if (params.config.Handler === "mergeFormdata") {
    return await mergeFormdata(
    params.parentEventOutput, params.componentName, params.config, params.store)
  }
}
export async function executeRefreshHandler(params:handlersProps) {
  const compToRefresh: string[] = getRefreshElements(params.config, params.eventGroups)
  for (const componentName of compToRefresh) {
    for (const compEventConfig of params.eventGroups.onLoad[componentName]) {
      await executeEvents({...params,config:compEventConfig,componentName});
    }
  }
}
async function executeApiEventHandler(params:handlersProps) {
  const initialBody = { ...params.userValue?.payload };
  const initialHeaders = {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*"
  };
  const { body, headers } = await buildApiPayload(params.config, initialBody, initialHeaders, params.store, params.dynamicData, params.userValue, params.service)
  
  const response = await params.service[params.config.method](
    params.config.path,
    body,
    headers && { headers: headers }
  );
  return response;
}

async function executeInBuiltFunctionHandler(params:handlersProps) {
  let parameter = {};
  if (params.config.funcParametersCode) {
    const makeFunc = eval(params.config.funcParametersCode)
    parameter = makeFunc(params.store, params.dynamicData, params.userValue, params.parentEventOutput, params.service);
  }
  params.serviceHolder[params.config.inBuiltFunctionType](parameter)
}

async function executeCustomHandler(params:handlersProps) {
  const makeFunc = eval(params.config.eventCode)
  const response = await makeFunc(params.store, params.dynamicData, params.userValue, params.parentEventOutput, params.service, params.componentName);
  return response;
}

async function mergeFormdata(handlerResponse: any, componentName: string, eventConfig: any, store: any) {
  if (eventConfig.type === "Select" && !(_.isEmpty(handlerResponse?.data) && handlerResponse?.data)) {
    store.setSchema((pre) => {
      return {
        ...pre, properties: {
          ...pre.properties, [componentName]: {
            ...pre.properties?.[componentName],
            oneOf: handlerResponse.data
          }
        }
      }
    })
  }
  else if(eventConfig.type === "MultipleSelect" && !(_.isEmpty(handlerResponse?.data) && handlerResponse?.data)){
    store.setSchema((pre) => {
      return {
        ...pre, properties: {
          ...pre.properties, [componentName]: {
            ...pre.properties?.[componentName],
            type:"array",
            items:{
            oneOf: handlerResponse.data
            }
          }
        }
      }
    })
  }
  else if (eventConfig.type === "page") {
    store.setFormdata((pre: any) => { return { ...pre, ...handlerResponse?.data } })
  }
  else {
    if (handlerResponse) {
      store.setFormdata((pre) => { return { ...pre, [componentName]:eventConfig.lazyLoading?handlerResponse.data.data: handlerResponse.data } });
    }
  }
}

const buildBodyFormat = (body: any[], formData: any, userValue: any) => {
  const finalBody = { ...userValue?.payload };
  body.map((elem) => {
    if(typeof elem?.value !== "string") {
      finalBody[elem.key] = elem.value;
    } else {
      if (elem?.value?.startsWith("$userValue")) {
        const finalpath = elem.value.substring(11);
        finalBody[elem.key] = _.get(userValue, finalpath);;
      }
      else if (elem?.value?.startsWith("$")) {
        const finalpath = elem.value.substring(1);
        finalBody[elem.key] = _.get(formData, finalpath);;
      } else {
        finalBody[elem.key] = elem.value;
      }
    }
  })
  return finalBody;
}

const buildHeadersFormat = (headers: any[]) => {
  const headerObj = {
    // "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
  headers.map((elem) => {
    headerObj[elem.key] = elem.value;
  })
  return headerObj;
}

async function shouldEventExecute(params:handlersProps) {
  const startEvent = params.config?.events?.filter(e => e.eventType === "onStart");
  if (startEvent?.length > 0) {
    const response = await executeEventsHandler({...params,config:startEvent[0]});
    return response;
  }
}

export async function buildApiPayload(compConfig: any, body: any, headers: any, store: any, dynamicData: any, userValue: any, service) {
  if (compConfig?.headers) {
    headers = buildHeadersFormat(compConfig.headers)

  }
  if (compConfig.body) {
    body = { ...buildBodyFormat(compConfig.body, store.newData || store?.ctx?.core?.data || store.formData, userValue) };
  }
  if (compConfig.apiBody) {
    const makeFunc = eval(compConfig.apiBody);
    const data = await makeFunc(store, dynamicData, userValue, body);
    body = data
  }
  return { body, headers };
}

export function getRefreshElements(eventConfig: any, eventGropus: any) {
  let result: string[] = [];
  if (eventConfig?.refreshElements?.length > 0) {
    result = eventConfig.refreshElements.map((e) => {
      return e.value
    })

  } else {
    if (eventGropus?.onLoad) {
      result = Object.keys(eventGropus?.onLoad)
      result.push(result[0]);
    }
  }
  console.log(result);
  return result;
}

