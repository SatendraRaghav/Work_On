export const ProgramMasterUiSchema: any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 3,
          header: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/masterName",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8,
            main: {
              heading: "Program Master",
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
          tabLabels: ["Core", "Simulation"],
          defaultStyle: true,
        },
      },

      elements: [
        {
          type: "WrapperLayout",
          config: {
            main: {
              label: "Program Details",
              divider: true,
            },
            defaultStyle: true,
          },
          elements: [
            {
              type: "Control",
              scope: "#/properties/name",

              options: {
                widget: "InputField",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
                main: {
                  label: "Name",
                  errorMessage: "Name is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/description",

              options: {
                widget: "InputField",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
                main: {
                  label: "Description",
                  errorMessage: "Description is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/groupList",

              options: {
                widget: "MultipleSelect",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
                main: {
                  label: "Groups",
                  type: "text",
                  multiple: true,
                  variant: "standard",
                  errorMessage: "Groups are not selected",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/startDate",
              options: {
                widget: "DateInputField",
              },

              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
                main: {
                  label: "Start Date",
                  onClick: "verifyStartDate",
                  // onChange: "verifyStartDate",
                  type: "date",
                  errorMessage: "Start Date is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/isRecurring",

              options: {
                widget: "RadioInputField",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
                main: {
                  label: "Recurring",
                  options: ["YES", "NO"],
                  // errorMessage:"Finalize is not marked YES or NO"
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/endDate",
              options: {
                widget: "DateInputField",
              },

              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
                main: {
                  label: "End Date",
                  type: "date",
                  onClick: "verifyEndDate",
                  // onChange: "verifyEndDate",
                  errorMessage: "End Date is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/cyclePeriod",

              options: {
                widget: "EmptyBox",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
                main: {
                  label: "Cycle Period",
                  type: "text",
                  options: [
                    { label: "Year", value: "Year" },
                    { label: "Month", value: "Month" },
                    { label: "Week", value: "Week" },
                    { label: "Day", value: "Day" },
                  ],
                  //  errorMessage:"Cycle Frequency must be in number"
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/cycleFrequency",

              options: {
                widget: "EmptyBox",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
                main: {
                  label: "Cycle Frequency",
                },
              },
            },

            {
              type: "Control",
              scope: "#/properties/enabled",

              options: {
                widget: "RadioInputField",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
                main: {
                  label: "Finalize",
                  options: ["YES", "NO"],
                  errorMessage: "Finalize is not marked YES or NO",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/externalData",
              config: {
                layout: 11.5,
              },
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/supportedTypes",

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
                          label: "Type",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/EmptyBox",
                      config: {
                        layout: {
                          xs: 11,
                          sm: 11,
                          md: 5.5,
                          lg: 5.5,
                        },
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
              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 8.5,
                  lg: 9.5,
                },
              },
              options: {
                widget: "EmptyBox",
              },
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/timeout",

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
                  label: "Time Out",
                  type: "text",
                  errorMessage: "Timeout should be number",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 5.5,
                  lg: 5.5,
                },
              },
              options: {
                widget: "EmptyBox",
              },
            },
            {
              type: "Control",
              scope: "#/properties/simulation",
              config: {
                layout: 11.5,
              },
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/simulationTypes",

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
                          label: "Type",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/EmptyBox",
                      config: {
                        layout: {
                          xs: 11,
                          sm: 11,
                          md: 5.5,
                          lg: 5.5,
                        },
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
              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 8.5,
                  lg: 9.5,
                },
              },
              options: {
                widget: "EmptyBox",
              },
            },
            {
              type: "Control",
              scope: "#/properties/SubmitButton",
              options: {
                widget: "Button",
              },

              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 2.5,
                  lg: 1.5,
                },
                main: {
                  name: "Submit",
                  startIcon: "ApproveIcon",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  onClick: "Submit_PM_Program",
                  size: "small",
                },
                style: {
                  marginBottom: "8px",
                },
              },
            },
          ],
        },
      ],
    },
    {
      type: "Control",
      scope: "#/properties/notify",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
  ],
};
