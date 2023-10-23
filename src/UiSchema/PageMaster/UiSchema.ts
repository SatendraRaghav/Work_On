export const PageMasterUiSchema: any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 3,
          header: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/pageMaster",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8,
            main: {
              heading: "Page Master",
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
      config: {
        main: {
          label: "Page Template",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/name",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Name",
              options: [],
              color: "secondary",
              required: true,
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/template",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Template",
              programType: true,
              options: [],

              required: true,
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/label",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Label",
              options: [],
              color: "secondary",
              required: true,
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/proc",
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
          },
          options: {
            widget: "EmptyBox",
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Config",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [],
    },
  ],
};
