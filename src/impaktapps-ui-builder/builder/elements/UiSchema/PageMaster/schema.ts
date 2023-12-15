export const PageMasterSchema  = {
    type: "object",
    properties: {
      name:{
     type:"string",
     minLength: 6,
      },
      layout: {
        type: "array",
        items: {
          type: "object",
          properties: {
            layout_key: {
              type: "string",
            },
            layout_value: {
              type: "string",
            },
          },
        },
      },
    sectionLabels: {
        type: "array",
        items: {
          type: "object",
          properties: {
            label: {
              type: "string",
            }
          },
        },
      }
}}