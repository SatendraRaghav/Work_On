export const  PositionMasterUISchema = {
    "type": "HorizontalLayout",
    stylePage:{
      background:"#eef2f6",
      // background:"#051327",
      margin:"10px 20px",
      height:"auto",
      minHeight:"100vh",
      borderRadius:"20px",
      fontFamily:"cursive"
     },
  "elements": [
    {
      type: "Control",
      scope: "#/properties/reportListWrapper",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/programType",
              layout: 5.5,
              options: {
                widget: "Box",
              },
              value: {
                content: {
                  heading: "Program Master",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  background: "white",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/Back_Button",
              layout: 5.5,
              options: {
                widget: "Button",
              },
              value: {
                content: { 
                  icon:"BackIcon",
                  styleDefault:true,
                  size:"small",
                  funcName: "backHandler",
                },
                style: {
                  float:"right",
                },
              },
            }
        ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/reportListWrapper",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
    {
      "type": "Control",
      "scope": "#/properties/name",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Name",
          "type": "text"
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/type",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
      "options": {
        "widget": "SelectInputField"
      },
      "value": {
        "content": {
          "label": "Position Type",
          options:[{}]
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/parent",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
      "options": {
        "widget": "SelectInputField"
      },
      "value": {
        "content": {
          "label": "Reporting to",
          options:[{}],
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/active",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
      "options": {
        "widget": "RadioInputField"
      },
      "value": {
        "content": {
          "label": "Active",
          "options": ["YES", "NO"],
        }
      }
    }
     ,
     {
      "type": "Control",
      "scope": "#/properties/Appbar",
      "layout":12,
      "options": {
        "widget": "EmptyBox"
      },
      "value": {
        "content": {
        }
      }
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      layout: {
        xs: 11,
        sm: 11,
        md: 8.5,
        lg: 9.5,
      },
      options: {
        widget: "EmptyBox",
      },
    },
    {
      type: "Control",
      scope: "#/properties/btn",
      options: {
        widget: "Button",
      },
      layout: {
        xs: 11,
        sm: 11,
        md: 2.5,
        lg: 1.5,
      },
      value: {
        content: {
          name: "Submit",
          startIcon:"ApproveIcon",
          variant: "contained",
          color: "info",
          type: "text",
          "funcName":"Submit_Position",
          size: "small",
        },
        style: {
          marginBottom:"8px"
        },
      },
    },]}}},
  ]
}
  
