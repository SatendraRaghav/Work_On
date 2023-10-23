export const CoreSection = {
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
          type: "text",
          options: [
            { label: "Select", value: "Select" },
            { label: "Date", value: "Date" },
            { label: "Table", value: "Table" },
            { label: "Text", value: "Text" },
            { label: "Rank", value: "Rank" },
            { label: "Card", value: "card" },
            { label: "SpeedoMeter", value: "SpeedoMeter" },
            { label: "ProgressBar", value: "ProgressBar" },
            { label: "Graph", value: "Graph" },
            { label: "Box", value: "Box" },
            { label: "ProgressBar Card", value: "ProgressBarCard" },
            { label: "Rank Card", value: "RankCard" },
            { label: "Card Slider", value: "CardSlider" },
            { label: "Timer", value: "Timer" },
            { label: "MultipleSelect", value: "MultipleSelect" },
            { label: "Rank", value: "Rank" },
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
};

export const OptionArray: any = {
  type: "Control",
  scope: "#/properties/value",
  layout: 11.5,
  options: {
    detail: {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/label",
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
              label: "Label",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/value",

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
};

export const OptionArraySchema = {
  value: {
    type: "array",
    items: {
      type: "object",
      properties: {
        label: {
          type: "string",
        },
        value: {
          type: "string",
        },
      },
    },
  },
};

export const LayoutArraySchema = {
  layout: {
    type: "array",
    items: {
      type: "object",
      properties: {
        layout_key: {
          type: "string",
        },
        layout_value: {
          type: "string",
        },
      },
    },
  },
};
