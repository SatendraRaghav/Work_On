import { getTextArea } from "./buildPropertiesSection";

export const refreshSectionUiSchema = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/refreshElements",
      layout: 11.5,
      options: {
        detail: {
          type: "HorizontalLayout",
          elements: [
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
            {
              type: "Control",
              scope: "#/properties/emptyBox",

              options: {
                widget: "EmptyBox",
              },
              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 5.5,
                  lg: 5.5,
                },
                main: {
                 
                },
              },
            },
          ],
        },
      },
    }
  ],
};


