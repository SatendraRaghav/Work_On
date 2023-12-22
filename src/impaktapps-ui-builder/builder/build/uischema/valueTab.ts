import { OptionArray } from "./coreSection";

export const ValueTab = {
  type: "HorizontalLayout",
  elements: [
    {
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
    }
  ],
};
