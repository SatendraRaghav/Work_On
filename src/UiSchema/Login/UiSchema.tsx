export const HomeUiSchema = {
    "type": "HorizontalLayout",
    "elements": [
      {
        "type": "Control",
        "scope": "#/properties/username", 
        "layout":8,
        "options": {
          "widget": "Box"
        },
        value:{
          content:{},
          style:{
            "height":"80px"
          }
        }
       
      },
      {
        "type": "Control",
        "scope": "#/properties/username",
        "layout": {xs:12,sm:8,md:6,lg:5},
        "options": {
          "widget": "InputField"
        },
        "value": {
          "content": {
            "label": "Enter your username",
            "type": "email",
            "variant": "outlined",
            "size": "normal",
            "helperText": ""
          },
        }
      },
      {
        type: "Control",
        scope: "#/properties/EmptyBox",
        options: {
          widget: "EmptyBox",
        },
        layout:12
      },
      {
        "type": "Control",
        "scope": "#/properties/password",
        "layout": {xs:12,sm:8,md:6,lg:5},
        "options": {
          "widget": "InputField"
        },
  
        "value": {
          "content": {
            "label": "Enter your password",
            "type": "password",
            "variant": "outlined",
            "size": "normal",
            "helperText": ""
          }
        }
      },
      {
        type: "Control",
        scope: "#/properties/EmptyBox",
        options: {
          widget: "EmptyBox",
        },
      },
      {
        "type": "Control",
        "scope": "#/properties/LoginButton",
        "layout": {xs:11,sm:7,md:5,lg:4},
        "options": {
          "widget": "Button"
        },
        "value": {
          "content": {
            "name": "LogIn",
            "variant": "contained",
            "color": "info",
            funcName:"userLogIn",
            "type": "text",
            "size": "large"
          },
          "style": {
            "width": "40%",
           float:"right",
           backgroundColor:"#091f3c",
           color:"white",
           height:"40px",
          fontWeight:"bold",
          // fontSize:"40px",
           marginLeft:"5px"
          }
        }
      },
      {
        type: "Control",
        scope: "#/properties/EmptyBox",
        options: {
          widget: "EmptyBox",
        },
      },
      {
        type: "Control",
        scope: "#/properties/EmptyBox",
        options: {
          widget: "Notify",
        },
        layout:6
      },
    ]
  }
  