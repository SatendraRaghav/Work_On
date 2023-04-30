export const HomeUiSchema = {
    "type": "HorizontalLayout",
    "elements": [
      {
        "type": "Control",
        "scope": "#/properties/username", 
        "options": {
          "widget": "Box"
        },
        value:{
          content:{},
          "style":{
          marginTop:"2vh"
        }  
        }
           
      },
      {
        type: "Control",
        scope: "#/properties/Back_Button",
        layout:7,

        options: {
          widget: "Button",
        },
        value: {
          content: { 
            icon:"PersonIcon",
            // styleDefault:true,
            size:"small",
            funcName: "backHandler",
          },
          style:{textAlign:"center"},
          iconStyle: {
         
            width:"200px",
            height:"auto",
            fontSize:'100%',
            marginLeft:"auto",
            marginRight:"auto",
          },
        },
      },
      {
        type: "Control",
        scope: "#/properties/reportListWrapper",
        layout:7,
        options: {
          widget: "Wrapper",
          
          detail: {
            type: "HorizontalLayout",
           
            elements: [
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
        "scope": "#/properties/username",
        "layout": 11,
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
        "layout":11,
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
        layout:12
      },
      {
        "type": "Control",
        "scope": "#/properties/LoginButton",
        "layout": 11,
        "options": {
          "widget": "Button"
        },
        "value": {
          "content": {
            "name": "Login",
            "variant": "contained",
            "color": "info",
            funcName:"userLogIn",
            "type": "text",
            "size": "large"
          },
          "style": {
            width:"30%",
            float:"right"
          }
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
        type: "Control",
        scope: "#/properties/EmptyBox",
        options: {
          widget: "Notify",
        },
        layout:6
      },
    ]}}}
    ]
  }
  