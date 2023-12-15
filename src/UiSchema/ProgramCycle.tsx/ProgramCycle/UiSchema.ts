export const ProgramMasterCycleUiSchema: any = {
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
              heading: "Create Program Cycle",
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
          tabLabels: ["Core"],
          defaultStyle: true,
        },
      },

      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/program",

              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 12, sm: 12, md: 6, lg: 6 },
                main: {
                  label: "Program Name",
                  type: "text",
                  options: [],
                  errorMessage: "Program Name is not selected",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/generateTill",

              options: {
                widget: "DateInputField",
              },
              config: {
                layout: { xs: 12, sm: 12, md: 6, lg: 6 },
                main: {
                  label: "Generate Till",
                  type: "date",
                  options: [],
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
                  name: "create",
                  startIcon: "ApproveIcon",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  onClick: "createProgramCycles",
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
  ],
};
