export const EventSchema = {
  type: "object",
  properties: {
    headers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          headers_key: {
            type: "string",
          },
          headers_value: {
            type: "string",
          },
        },
      },
    },
    method: {
      type: "string",
      oneOf: [
        { title: "Get", const: "get" },
        { title: "Post", const: "post" },
        { title: "Delete", const: "delete" },
        { title: "Put", const: "put" },
      ]
    },
    refreshElements: {
      type: "array",
      items: {
        type: "object",
        properties: {
          value: {
            type: "string",
          },
        },
      },
    },
    eventType: {
      type: "string",
      oneOf: [
        { title: "Click Event", const: "onClick" },
        { title: "onStart", const: "onStart" },
        { title: "Load Event", const: "onLoad" },
        { title: "Change Event", const: "onChange" },
        { title: "Success", const: "Success" },
        { title: "Fail", const: "Fail" }
      ]
    },
    Handler: {
      type: "string",
      oneOf: [
        { title: "Custom", const: "custom" },
        { title: "Api", const: "api" },
        { title: "Inbuilt Function", const: "inBuiltFunction" },
        { title: "Refresh", const: "refresh" },
      ]
    },
    inBuiltFunctionType: {
      type: "string",
      oneOf: [
        { title: "RankProvider", const: "RankProvider" },
        { title: "Download File", const: "downloadFile" },
      ]
    },
    body: {
      type: "array",
      items: {
        type: "object",
        properties: {
          body_key: {
            type: "string",
          },
          body_value: {
            type: "string",
          },
        },
      },
    }
  },
required:["eventType","Handler"]
}