export const AgencyBranchUISchema:any = {
  type: "HorizontalLayout",
  elements: [
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
              config: {
                layout: 8,
                main: {
                  heading: "Agency Branch Master",
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
                layout: 3,
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
            },
          ],
    },
    {
      type: "WrapperLayout",
      config:{
        main:{
          label:"Agency Branch Details",
          divider:true
        },
        defaultStyle:true
      },
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
          scope: "#/properties/agency",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Agency",
              options: [],
              errorMessage: "Agency is not selected",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/address1",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Address 1",
              type: "text",
              errorMessage: "Address 1 is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/address2",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Address 2",
              type: "text",
              errorMessage: "Address 2 is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/address3",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Address 3",
              type: "text",
              errorMessage: "Address 3 is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/state",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "State",
              type: "text",
              errorMessage: "State is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/cin",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Cin",
              type: "text",
              errorMessage: "Cin is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/gstn",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Gstn",
              type: "text",
              errorMessage: "GSTN is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/mapping_state",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Mapping State",
              type: "text",
              errorMessage: "Mapping Branch is empty or invalid",
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
          scope: "#/properties/SubmitButton",
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
              onClick: "Submit",
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
      scope: "#/properties/notify",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
  ],
};
