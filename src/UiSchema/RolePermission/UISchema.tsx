export const RolePermissionUISchema = {
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
                  heading: "Role Permission Master",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "500",

                  fontSize: "20px",

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
                  onClick: "backHandler",
                  tooltipMessage: "Back",
                },
                style: {
                  // width:"20%",
                  float: "right",
                  // marginTop:"20px",
                  // marginRight:"15px"
                },
              },
            },
          ],
        },
      },
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/permName",

          options: {
            widget: "InputField",
          },
          config: {
            layout: 6,
            main: {
              label: "Name",
              type: "text",
              errorMessage: "Name is empty or invalid",
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
            layout: {
              xs: 11,
              sm: 11,
              md: 5.5,
              lg: 5.5,
            },
            main: {
              label: "Active",
              options: ["YES", "NO"],
              errorMessage: "Active is not marked YES or NO",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          config:{layout: {
            xs: 11,
            sm: 11,
            md: 8.5,
            lg: 9.5,
          }},
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
              onClick: "Submit_RolePermission",
              size: "small",
            },
            style: {},
          },
        },
      ],
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
