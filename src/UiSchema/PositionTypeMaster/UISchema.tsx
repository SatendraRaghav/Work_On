export const PositionTypeMasterUISchema = {
  type: "HorizontalLayout",
  elements: [
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
              heading: "Position Type Master",
            },
            style: {
              // marginTop: "18px",
              fontFamily: "Roboto",
              fontWeight: "500",
              // paddingTop: "8px",
              fontSize: "20px",
              // paddingBottom: "8px",
              // borderRadius: "20px",
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
              // width:"20%",
              float: "right",
              // marginTop:"20px",
              // marginRight:"15px"
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
          type: "Control",
          scope: "#/properties/name",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Name",
              type: "text",
              errorMessage:"Name is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/active",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
          options: {
            widget: "RadioInputField",
          },
          value: {
            content: {
              label: "Active",
              options: ["YES", "NO"],
              errorMessage:"Active is not marked YES or NO"
            },
          },
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
              startIcon: "ApproveIcon",
              variant: "contained",
              color: "info",
              type: "text",
              funcName: "Submit_PositionType",
              size: "small",
            },
            style: {
              marginBottom: "8px"

            },
          },
        }
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
      scope: "#/properties/notify",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
  ],
};
