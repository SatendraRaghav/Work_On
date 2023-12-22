export const CoreSection = {
  type: "HorizontalLayout",
  elements: [
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
        },
      },
    },
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
        "elementLabelProp": "key",
        detail: {
          type: "HorizontalLayout",

          elements: [
            {
              type: "Control",
              scope: "#/properties/key",
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
                  type:"number",
                  // freeSolo:true,
                  helperText:'Number should be in range of 0 to 12',
                  errorMessage:"Number Can't be greater than 12 and can't be less than 0.",
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
              helperText: 'Number should be in range of 0 to 12',
              errorMessage: "Number Can't be greater than 12 and can't be less than 0.",
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


