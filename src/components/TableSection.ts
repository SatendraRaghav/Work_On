export const TableSection = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/columns",
      layout: 11.5,
      options: {
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/header",
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
                  label: "Header",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/accessorKey",

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
                  label: "Accessor Key",
                },
              },
            },
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/tableButtons",
      layout: 11.5,
      options: {
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/icon",
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
                  label: "Icon Name",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/size",

              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
                main: {
                  label: "Size",
                  type: "text",
                  options: [
                    { label: "Small", value: "small" },
                    { label: "Medium", value: "medium" },
                    { label: "Large", value: "large" },
                  ],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/color",

              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
                main: {
                  label: "Colour",
                  type: "text",
                  options: [
                    { label: "Primary", value: "primary" },
                    { label: "Secondary", value: "secondary" },
                    { label: "Error", value: "error" },
                    { label: "Success", value: "success" },
                    { label: "Info", value: "info" },
                  ],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/onClick",
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
                  label: "Function Name",
                },
              },
            },
          ],
        },
      },
    },
  ],
};

export const TableSectionSchema = {
  columns: {
    type: "array",
    items: {
      type: "object",
      properties: {
        header: {
          type: "string",
        },
        accessorKey: {
          type: "string",
        },
      },
    },
  },
  tableButtons: {
    type: "array",
    items: {
      type: "object",
      properties: {
        icon: {
          type: "string",
        },
        size: {
          type: "string",
        },
        color: {
          type: "string",
        },
        onClick: {
          type: "string",
        },
      },
    },
  },
};
