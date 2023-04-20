export const  RolePermissionUISchema = {
    "type": "HorizontalLayout",
    stylePage:{
      background:"#eef2f6",
      // background:"#051327",
      minHeight:"100vh",
      margin:"10px 20px",
      height:"auto",
      borderRadius:"20px"
     },
  "elements": [
    {
      "type": "Control",
      "scope": "#/properties/Appbar",
      "layout": 12,
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
      scope: "#/properties/Back_Button",
      layout: {
        xs: 6,
        sm: 4,
        md: 2,
        lg: 2,
      },
      options: {
        widget: "Button",
      },
      value: {
        content: {
          name: "\u2190",
          variant: "contained",
          color: "primary",
          type: "button",
          size: "large",
          funcName: "backHandler",
        },
        style:{
          background:"#091f3c",
          color:"white",
          width:"30px",
          height:"30px",
          paddingTop:"5px",
         fontWeight:"bold",
         fontSize:"30px",
          marginLeft:"5px"
        }
      },
    },
    {
      "type": "Control",
      "scope": "#/properties/EmptyBox",
      "options": {
        "widget": "EmptyBox"
      },
      "layout": {
        "xs": 7,
        "sm": 7,
        "md": 8,
        "lg": 8
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/name",
      "layout": 6,
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
      "scope": "#/properties/active",
      "layout": 6,
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
      type: "Control",
      scope: "#/properties/LoginPage",
      options: {
        widget: "Button",
      },
      layout: {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
      },
      value: {
        content: {
          name: " \u2713 Submit",
          variant: "contained",
          color: "info",
          type: "text",
          "funcName":"Submit_RolePermission",
          size: "large"
        },
        style: {
          background:"#091f3c",
          color:"white",
          width:"200px",
          marginRight:"50px",
          float:"right"
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/notify",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
  ]
}
  
