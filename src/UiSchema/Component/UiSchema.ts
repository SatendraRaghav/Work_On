export const ComponentUiSchema: any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 3,
        },
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/programType",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8,
            main: {
              heading: "Component",
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
      type: "TabLayout",
      config: {
        main: {
          tabLabels: ["Core"],
          defaultStyle: true,
        },
      },

      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/name",

              options: {
                widget: "InputField",
              },
              config: {
                layout: {
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 6,
                },
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
              scope: "#/properties/label",

              options: {
                widget: "InputField",
              },
              config: {
                layout: {
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 6,
                },
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
              scope: "#/properties/type",

              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 12, sm: 12, md: 6, lg: 6 },
                main: {
                  label: "Type",
                  options: [
                    { label: "Select", value: "Select" },
                    { label: "Date", value: "Date" },
                    { label: "Table", value: "Table" },
                    { label: "Text", value: "Text" },
                    { label: "Card", value: "card" },
                    { label: "SpeedoMeter", value: "SpeedoMeter" },
                    { label: "ProgressBar", value: "ProgressBar" },
                    { label: "Graph", value: "Graph" },
                    { label: "Box", value: "Box" },
                    { label: "ProgressBar Card", value: "ProgressBarCard" },
                    { label: "Rank Card", value: "RankCard" },
                    { label: "Card Slider", value: "CardSlider" },
                    { label: "MultipleSelect", value: "MultipleSelect" },
                  ],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/proc",
              config: {
                layout: { xs: 11, sm: 11, md: 6, lg: 6 },
              },
              options: {
                widget: "EmptyBox",
              },
            },
            {
              type: "Control",
              scope: "#/properties/layout",
              layout: 11.5,
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/layout_key",
                      options: {
                        widget: "SelectInputField",
                      },
                      config: {
                        layout: {
                          xs: 11,
                          sm: 11,
                          md: 5.5,
                          lg: 5.5,
                        },
                        main: {
                          label: "Screen Size",
                          options: [
                            { label: "Extra Small", value: "xs" },
                            { label: "Small", value: "sm" },
                            { label: "Medium", value: "md" },
                            { label: "Large", value: "lg" },
                          ],
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/layout_value",

                      options: {
                        widget: "InputField",
                      },
                      config: {
                        layout: {
                          xs: 11,
                          sm: 11,
                          md: 5.5,
                          lg: 5.5,
                        },
                        main: {
                          label: "Value",
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      ],
    },

    {
      type: "Control",
      scope: "#/properties/proc",
      config: {
        layout: { xs: 11, sm: 11, md: 8, lg: 8 },
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
          md: 3,
          lg: 3,
        },
        main: {
          name: "Add",
          startIcon: "ApproveIcon",
          variant: "contained",
          color: "info",
          type: "text",
          onClick: "submitHandler",
          size: "small",
        },
        style: {
          marginBottom: "8px",
          float: "right",
        },
      },
    },
  ],
};
