export const PageMasterSchema  = {
    type: "object",
    properties: {
      name:{
     type:"string",
    //  minLength: 6,
     pattern: '^page_\\w+$'
      },
      label:{
        type:"string",
        pattern:"^[a-zA-Z0-9]+$"
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
},
required:["label","name"]
}