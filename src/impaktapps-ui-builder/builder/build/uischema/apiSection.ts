import { getTextArea } from "./buildPropertiesSection";

export const APISection = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/method",

      options: {
        widget: "SelectInputField",
      },
      config: {
        layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
        main: {
          label: "Method",
          type: "text",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/path",

      options: {
        widget: "InputField",
      },
      config: {
        layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
        main: {
          label: "Path",
          type: "text",
          multiple: false,
          options: [],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/headers",
      layout: 11.5,
      options: {
        "elementLabelProp": "key",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/key",
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
                  label: "Key",
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
    },
    {
      type: "Control",
      scope: "#/properties/body",
      layout: 11.5,
      options: {
        "elementLabelProp": "key",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/key",
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
                  label: "Key",
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
    },
    getTextArea("apiBody", "Transformer", true,12),
  ],
};

export const APISectionSchema = {
  headers: {
    type: "array",
    items: {
      type: "object",
      properties: {
        key: {
          type: "string",
        },
        value: {
          type: "string",
        },
      },
    },
  },
  body: {
    type: "array",
    items: {
      type: "object",
      properties: {
        key: {
          type: "string",
        },
        value: {
          type: "string",
        },
      },
    },
  },
};
