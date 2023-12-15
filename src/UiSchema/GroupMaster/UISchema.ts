export const GroupMasterUISchema:any = {
  "type": "HorizontalLayout",
  "elements": [
    {
          type: "WrapperLayout",
          config:{
            main:{
              rowSpacing:3,
              header:true,
            },
            defaultStyle:true
          },
          elements: [
        {
          type: "Control",
          scope: "#/properties/masterName",

          options: {
            widget: "Box",
          },
          config: { layout: 8,
            main: {
              heading: "Group Master",
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
          
          options: {
            widget: "IconButton",
          },
          config: {layout: 3,
            main: {
              icon: "BackIcon",
              styleDefault: true,
              size: "small",
              onClick: "backHandler",
              tooltipMessage: "Back",
            },
            style: {
              float: "right",
            },
          },
        }
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Group Details",
          divider:true
        },
        defaultStyle:true
      },
      elements:[
        {
          "type": "Control",
          "scope": "#/properties/name",
          
          "options": {
            "widget": "InputField"
          },
          "config": {layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            "main": {
              "label": "Name",
              "type": "text",
              errorMessage:"Name is empty or invalid"
            }
          }
        },
        {
          "type": "Control",
          "scope": "#/properties/userList",
         
          "options": {
            "widget": "MultipleSelect"
          },
          "config": { layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            "main": {
              multiple: true,
              "label": "User List",
              options: [],
              errorMessage:"User are not selected"
            }
          }
        },
        {
          "type": "Control",
          "scope": "#/properties/active",
         
          "options": {
            "widget": "RadioInputField"
          },
          "config": { layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            "main": {
              "label": "Active",
              "options": ["YES", "NO"],
              "required": true,
              errorMessage:"Active is not marked YES or NO"
            }
          }
        }
        ,
        {
          type: "Control",
          scope: "#/properties/SubmitButton",

          options: {
            widget: "Button",
          },
          "config": {layout: {
            xs: 11,
            sm: 11,
            md: 5.5,
            lg: 5.5,
          },
            "main": {
              name: "Submit",
              startIcon: "ApproveIcon",
              variant: "contained",
              color: "info",
              type: "text",
              "onClick": "Submit",
              "size": "medium"
            },
            style: {
              float: { md: "right" },
              width: { xs: "100%", sm: "90%", md: "30%" }
            },
          }
        },
      ]
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
  ]
}

