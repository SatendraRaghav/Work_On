export const ComponentSchema: any = {
  type: "object",
  properties: {
    type: {
      type: "string",
      oneOf: [
        { title: "Array", const: "Array" },
        { title: "Button", const: "Button" },
        { title: "Card", const: "card" },
        { title: "CheckBox", const: "CheckBox" },
        { title: "Container", const: "WrapperSection" },
        { title: "Date", const: "Date" },
        { title: "Download File", const: "DownloadFile" },
        { title: "Empty Box", const: "EmptyBox" },
        { title: "Graph", const: "Graph" },
        { title: "Label", const: "Box" },
        { title: "LeaderBoard", const: "LeaderBoard" },
        { title: "MultipleSelect", const: "MultipleSelect" },
        { title: "ProgressBar", const: "ProgressBar" },
        { title: "ProgressBar Card", const: "ProgressBarCard" },
        { title: "Select", const: "Select" },
        { title: "Slider", const: "Slider" },
        { title: "SpeedoMeter", const: "SpeedoMeter" },
        { title: "Radio", const: "Radio" },
        { title: "Rank", const: "Rank" },
        { title: "Rank Card", const: "RankCard" },
        { title: "Runner Boy Progress Bar", const: "RunnerBoyProgressBar" },
        { title: "Table", const: "Table" },
        { title: "Tabs", const: "TabSection" },
        { title: "Text", const: "Text" },
        { title: "Text Area", const: "TextArea" },
        { title: "Timer", const: "Timer" },
        { title: "Upload File", const: "UploadFile" },]
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
    layout: {
      type: "array",
      items: {
        type: "object",
        properties: {
          key: {
            type: "string",
            oneOf: [
              { title: "Extra Small", const: "xs" },
              { title: "Small", const: "sm" },
              { title: "Medium", const: "md" },
              { title: "Large", const: "lg" },
            ],
          },
          value: {
            // type: "string",
      
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
          validationType: {
            type: "string",
            oneOf: [
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
    buttonType: {
      type: "string",
      oneOf: [
        { title: "Button", const: "Button" },
        { title: "IconButton", const: "IconButton" },
        { title: "HybridButton", const: "ButtonWithIconAndText" },
      ]
    },
    defaultStyle: {
      type: "string",
      oneOf: [
        { title: "Apply Default Style", const: "true" },
        { title: "No Style", const: "false" },
      ]
    },
    graphType: {
      type: "string",
      oneOf: [
        { title: "Bar Graph", const: "BarGraph" },
        { title: "Stack Bar Graph", const: "StackBarGraph" },
        { title: "Line Graph", const: "LineGraph" },
        { title: "Pie Graph", const: "PieGraph" },
        { title: "Horizontal Bar Graph", const: "HorizontalBarGraph" },
      ]
    },
    iconName:{
      type:"string",
      oneOf:[
        { title: "Search Icon", const: "SearchIcon" },
        { title: "Edit Icon", const: "EditIcon" },
        { title: "Add Icon", const: "AddIcon" },
        { title: "Send Icon", const: "SendIcon" },
        { title: "Approve Icon", const: "ApproveIcon" },
        { title: "RejectIcon", const: "RejectIcon" },
        { title: "Back Icon", const: "BackIcon" },
        { title: "Back Icon Second ", const: "BackIcon2" },
        { title: "Pending Icon", const: "PendingIcon" },
        { title: "View Icon", const: "ViewIcon" },
        { title: "Notification Icon", const: "NotificationIcon" },
        { title: "Person Icon", const: "PersonIcon" },
        { title: "Report Icon", const: "ReportIcon" },
        { title: "Error Icon", const: "ErrorIcon" },
        { title: "Refresh Icon", const: "RefreshIcon" },
        { title: "Download Icon", const: "DownloadIcon" },
        { title: "Exception Icon", const: "ExceptionIcon" },
      ]
    },
    color:{
      type:"string",
      oneOf: [
        { title: "Primary", const: "primary" },
        { title: "Secondary", const: "secondary" },
        { title: "Error", const: "error" },
        { title: "Success", const: "success" },
        { title: "Info", const: "info" },
      ]
    },
    name: {
      type: "string",
    },
    label: { type: 'string' }
  },
 
  required: ["type", "name", "label"]
};
