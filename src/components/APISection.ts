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
          options: [
            { label: "Get", value: "get" },
            { label: "Post", value: "post" },
            { label: "Delete", value: "delete" },
            { label: "Put", value: "put" },
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/path",

      options: {
        widget: "MultipleSelect",
      },
      config: {
        layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
        main: {
          label: "Path",
          type: "text",
          multiple: false,
          variant: "standard",
          options: [],
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
      scope: "#/properties/headers",
      layout: 11.5,
      options: {
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/headers_key",
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
              scope: "#/properties/headers_value",

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
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/body_key",
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
              scope: "#/properties/body_value",

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

export const APISectionSchema = {
  headers: {
    type: "array",
    items: {
      type: "object",
      properties: {
        headers_key: {
          type: "string",
        },
        headers_value: {
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
        body_key: {
          type: "string",
        },
        body_value: {
          type: "string",
        },
      },
    },
  },
};
