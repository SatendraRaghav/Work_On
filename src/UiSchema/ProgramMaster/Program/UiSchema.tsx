export const ProgramMasterUiSchema = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/reportListWrapper",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/programType",
              layout: 5.5,
              options: {
                widget: "Box",
              },
              value: {
                content: {
                  heading: "Program Master",
                }
              },
            },
            {
              type: "Control",
              scope: "#/properties/Back_Button",
              layout: 5.5,
              options: {
                widget: "Button",
              },
              value: {
                content: { 
                  icon:"BackIcon",
                  styleDefault:true,
                  size:"small",
                  funcName: "backHandler",
                },
                style: {
                  float:"right",
                },
              },
            }
        ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/PayoutProcessingWrapper",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/name",
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
              options: {
                widget: "InputField",
              },
              value: {
                content: {
                  label: "Name",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/description",
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6},
              options: {
                widget: "InputField",
              },
              value: {
                content: {
                  label: "Description",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/groupList",
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
                  label: "Groups",
                  type: "text",
                  multiple: true,
                  variant: "standard",
                  options: [
                    { label: "DSL", value: "DSL" },
                    { label: "HL", value: "HL" },
                    { label: "PL", value: "PL" },
                  ],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/cycleFrequency",
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
                  label: "Cycle Frequency",
                  type: "text",
                  options: [
                    { label: "Year", value: "Year" },
                    { label: "Month", value: "Month" },
                    { label: "Week", value: "Week" },
                    { label: "Day", value: "Day" },
                  ],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/cycleValue",
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
              options: {
                widget: "InputField",
              },
              value: {
                content: {
                  label: "Cycle Value",
                },
              },
            },

            {
              type: "Control",
              scope: "#/properties/enabled",
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
              options: {
                widget: "RadioInputField",
              },
              value: {
                content: {
                  label: "Finalize",
                  options: ["YES", "NO"],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/externalData",
              layout: 11.5,
              lable: " ",
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/supportedTypes",
                      layout: {
                        xs: 11,
                        sm: 11,
                        md: 5.5,
                        lg: 5.5,
                      },
                      options: {
                        widget: "InputField",
                      },
                      value: {
                        content: {
                          label: "Type",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/EmptyBox",
                      layout: {
                        xs: 11,
                        sm: 11,
                        md: 5.5,
                        lg: 5.5,
                      },
                      options: {
                        widget: "EmptyBox",
                      },
                    },
                  ],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              layout: {
                xs: 11,
                sm: 11,
                md: 8.5,
                lg: 9.5,
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
              layout: {
                xs: 11,
                sm: 11,
                md: 2.5,
                lg: 1.5,
              },
              value: {
                content: {
                  name: "Submit",
                  startIcon:"ApproveIcon",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  funcName: "Submit_PM_Program",
                  size: "small",
                },
                style: {
                  marginBottom:"8px"
                },
              },
            },
            
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/notify",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ],
};
