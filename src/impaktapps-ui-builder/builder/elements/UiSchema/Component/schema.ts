export const ComponentSchema:any = {
  type: "object",
  properties: {
    type:{
    type:"string",
    oneOf:[
      { title: "Select", const: "Select" },
      { title: "Date", const: "Date" },
      { title: "CheckBox", const: "CheckBox" },
      { title: "Table", const: "Table" },
      { title: "Lazy Loading Table", const: "LazyLoadingTable" },
      { title: "Array", const: "Array" },
      { title: "Container", const: "WrapperSection" },
      { title: "Tabs", const: "TabSection" },
      { title: "Text", const: "Text" },
      { title: "Text Area", const: "TextArea" },
      { title: "Button", const: "Button" },
      { title: "Card", const: "card" },
      { title: "Radio", const: "Radio" },
      { title: "Rank", const: "Rank" },
      { title: "SpeedoMeter", const: "SpeedoMeter" },
      { title: "ProgressBar", const: "ProgressBar" },
      { title: "Graph", const: "Graph" },
      { title: "Label", const: "Box" },
      { title: "Upload File", const: "UploadFile" },
      { title: "Download File", const: "DownloadFile" },
      { title: "Empty Box", const: "EmptyBox" },
      { title: "ProgressBar Card", const: "ProgressBarCard" },
      { title: "Rank Card", const: "RankCard" },
      { title: "Runner Boy Progress Bar", const: "RunnerBoyProgressBar" },
      { title: "Slider", const: "Slider" },
      { title: "Timer", const: "Timer" },
      { title: "MultipleSelect", const: "MultipleSelect" },
      { title: "LeaderBoard", const: "LeaderBoard" },]
    },
    method:{
      type:"string",
      oneOf: [
        { title: "Get", const: "get" },
        { title: "Post", const: "post" },
        { title: "Delete", const: "delete" },
        { title: "Put", const: "put" },
      ]
    },
    layout: {
      type: "array",
      items: {
        type: "object",
        properties: {
          key: {
            type: "string",
            oneOf:[
              { title: "Extra Small", const: "xs" },
              { title: "Small", const: "sm" },
              { title: "Medium", const: "md" },
              { title: "Large", const: "lg" },
            ],
          },
          value: {
            type: "string",
          },
        },
      },
    },
    value: {
      type: "array",
      items: {
        type: "object",
        properties: {
          label: {
            type: "string",
          },
          value: {
            type: "string",
          },
        },
      },
    },
    columns: {
      type: "array",
      items: {
        type: "object",
        properties: {
          header: {
            type: "string",
          },
          accessorKey: {
            type: "string",
          },
          widgetType: {
            type: "string",
          },
        },
      },
    },
    events: {
      type: "array",
      items: {
        type: "object",
        properties: {
            eventType: {
            type: "string",
          },
          configType: {
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
          },
         
        },
      },
    },
    legendLabels: {
      type: "array",
      items: {
        type: "object",
        properties: {
          label: {
            type: "string",
          },
         
        },
      },
    },
    pieArcColors: {
      type: "array",
      items: {
        type: "object",
        properties: {
          label: {
            type: "string",
          },
         
        },
      },
    },
    validation: {
      type: "array",
      items: {
        type: "object",
        properties: {
          componentName: {
            type: "string",
            
          },
          validationType:{
              type: "string",
              oneOf:[
                { const: "required", title: "Required" },
                { const: "minLength", title: "Minimum Length" },
                { const: "maxLength", title: "Maximum Length" },
                { const: "pattern", title: "Pattern" },
              ]
          },
          validationValue: {
            type: "string",
          },
        },
      },
    },
    buttonType:{
      type:"string",
      oneOf:[
        { title: "Button With Text", const: "Button" },
        { title: "Button With Icon", const: "IconButton" },
        { title: "Button With Icon and Text", const: "ButtonWithIconAndText" },
      ]
    },
    defaultStyle:{
      type:"string",
      oneOf:[
        { title: "Apply Default Style", const: "true" },
        { title: "No Style", const: "false" },
      ]
    },
    graphType:{
      type:"string",
      oneOf:[
        { title: "Bar Graph", const: "BarGraph" },
        { title: "Stack Bar Graph", const: "StackBarGraph" },
        { title: "Line Graph", const: "LineGraph" },
        { title: "Pie Graph", const: "PieGraph" },
        { title: "Horizontal Bar Graph", const: "HorizontalBarGraph" },
      ]
    }
  },
  
};
