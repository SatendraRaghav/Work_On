export const PositionMasterUISchema = {
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

              options: {
                widget: "Box",
              },
              config: {
                layout: 5.5,
                main: {
                  heading: "Position Master",
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
              config: {
                layout: 5.5,
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
            },
          ],
        },
      },
    },
    {
      type: "HorizontalLayout",
      config:{defaultStyle: true},
      elements: [
        {
          type: "Control",
          scope: "#/properties/name",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Name",
              type: "text",
              errorMessage: "Name is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/type",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Position Type",
              options: [{}],
              errorMessage: "Position Type is not selected",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/parent",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Reporting To",
              options: [{}],
              errorMessage: "Reporting To is not selected",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/active",

          options: {
            widget: "RadioInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Active",
              options: ["YES", "NO"],
              errorMessage: "Active is not marked YES or NO",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/Appbar",

          options: {
            widget: "EmptyBox",
          },
          config: { layout: 12, main: {} },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          config: {
            layout: {
              xs: 11,
              sm: 11,
              md: 8.5,
              lg: 9.5,
            },
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

          config: {
            layout: {
              xs: 11,
              sm: 11,
              md: 2.5,
              lg: 1.5,
            },
            main: {
              name: "Submit",
              startIcon: "ApproveIcon",
              variant: "contained",
              color: "info",
              type: "text",
              funcName: "Submit_Position",
              size: "small",
            },
            style: {
              marginBottom: "8px",
            },
          },
        },
      ],
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "DailogBox",
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
  ],
};
