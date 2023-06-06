export const GroupMasterUISchema = {
  "type": "HorizontalLayout",
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
         
          options: {
            widget: "Box",
          },
          config: { layout: 5.5,
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
          config: {layout: 5.5,
            main: {
              icon: "BackIcon",
              styleDefault: true,
              size: "small",
              funcName: "backHandler",
              tooltipMessage: "Back",
            },
            style: {
              float: "right",
            },
          },
        }
      ]}},
    },
    {
      type: "HorizontalLayout",
      config:{defaultStyle: true},
      elements: [
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
          "scope": "#/properties/positionList",
         
          "options": {
            "widget": "SelectInputField"
          },
          "config": { layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            "main": {
              "label": "Position List",
              options: [{}],
              "multiple": true,
              errorMessage:"Positions are not selected"
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
          "type": "Control",
          "scope": "#/properties/AgencyButton",
          
          "options": {
            "widget": "Button"
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
              "funcName": "Submit",
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
        widget: "DailogBox",
      }
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

