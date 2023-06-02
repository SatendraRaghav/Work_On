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
          layout: 5.5,
          options: {
            widget: "Box",
          },
          value: {
            content: {
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
          layout: 5.5,
          options: {
            widget: "Button",
          },
          value: {
            content: {
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
      defaultStyle: true,
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
              "type": "text",
              errorMessage:"Name is empty or invalid"
            }
          }
        },
        {
          "type": "Control",
          "scope": "#/properties/positionList",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
          "options": {
            "widget": "SelectInputField"
          },
          "value": {
            "content": {
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
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
          "options": {
            "widget": "RadioInputField"
          },
          "value": {
            "content": {
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
          layout: {
            xs: 11,
            sm: 11,
            md: 5.5,
            lg: 5.5,
          },
          "options": {
            "widget": "Button"
          },
          "value": {
            "content": {
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

