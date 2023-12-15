export const ValidationSection = {
  type: "HorizontalLayout",
  elements: [
   {
      type: "Control",
      scope: "#/properties/validation",
      layout: 11.5,
      options: {
        "elementLabelProp": "validationType",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/validationType",

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
                  label: "Validation Type",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/validationValue",

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
                  label: "Validation Value",
                },
              },
            }
          ],
        },
      },

    },
  ]
};