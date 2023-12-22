export const HomeUiSchema:any = {
  "type": "HorizontalLayout",
  "elements": [
    {
      "type": "Control",
      "scope": "#/properties/username",
      "layout": 12,
      "options": {
        "widget": "Box"
      },
      "config": {
        "main": {
          "heading": "Welcome to Hyperform",
        },
       style:{
        width:"300px",
        marginTop:"20vh",
        "flex":"display",
        "justifyContent":"center",
        alignItems:"self"
       }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/username",
      "layout": 12,
      "options": {
        "widget": "InputSlider"
      },
    config:{
      main:{
        label:"Scroe",
        max:2000,
        step:200,
        defaultStyle:true
      }
    }
    },
    {
      "type": "Control",
      "scope": "#/properties/date",
      "layout": 12,
      "options": {
        "widget": "DateInputField"
      },
    config:{
      main:{
        label:"Scroe",
        max:2000,
        step:200,
        defaultStyle:true
      }
    }
    },
    {
      "type": "Control",
      "scope": "#/properties/name",
      "layout": 12,
      "options": {
        "widget": "InputField"
      },
    config:{
      main:{
        label:"Scroe",
        max:2000,
        step:200,
        defaultStyle:true
      }
    }
    },
    {
      "type": "Control",
      "scope": "#/properties/btn",
      "layout": 12,
      "options": {
        "widget": "UploadFile"
      },
    config:{
      main:{
        label:"Scroe",
        max:2000,
        onClick:"click",
        name:"name",
        step:200,
        defaultStyle:true
      }
    }
    },
  ]
}

