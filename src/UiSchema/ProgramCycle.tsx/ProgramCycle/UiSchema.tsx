export const ProgramMasterCycleUiSchema = {
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
              heading: "Cycle Master",
            },
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
              icon: "BackIcon",
              styleDefault: true,
              size: "small",
              funcName: "backHandler",
              tooltipMessage: "Back",
            },
            style: {
              float: "right",
            },
          },
        },
      ]}},
    },
    {
      type: "TabLayout",
      labels: ["Core", "Workflow", "Invoice", "Reports", "Clawback"],
      defaultStyle: true,
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/name",
              layout: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              options: {
                widget: "InputField",
              },
              value: {
                content: {
                  label: "Cycle Name",
                  errorMessage: "Cycle Name is empty or invalid"
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/program",
              layout: { xs: 12, sm: 12, md: 6, lg: 6 },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
                  label: "Program Name",
                  type: "text",
                  options: [{}],
                  errorMessage: "Program Name is not selected"
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/startDate",
              options: {
                widget: "DateInputField",
              },
              layout: { xs: 12, sm: 12, md: 6, lg: 6 },
              value: {
                content: {
                  label: "Start Date",
                  conditionLoadFunc:"verifyStartDate",
                  type: "date",
                  errorMessage: "Start Date is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/endDate",
              options: {
                widget: "DateInputField",
              },
              layout: { xs: 12, sm: 12, md: 6, lg: 6 },
              value: {
                content: {
                  label: "End Date",
                  type: "date",
                  conditionLoadFunc:"verifyEndDate",
                  errorMessage: "End Date is empty or invalid",
                },
              },
            },
          ],
        },
        {

          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/workflowFile",
              options: {
                widget: "FileInputField",
              },
              value: {
                content: {
                  label: "Upload Workflow File",

                  funcName: "workspaceFileSaveFunction",
                  downloadFuncName: "Download_Workspace_File",
                  errorMessage: "Workflow File is not uploaded"
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/processDefKey1",
              layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
              options: {
                widget: "InputField",
              },
              value: {
                content: {
                  label: "Process Def Key",
                  errorMessage: "Process Def Key is empty or invalid"
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/proc",
              layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
              options: {
                widget: "EmptyBox",
              },

            }
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/invoiceFile",
              layout: 12,
              options: {
                widget: "FileInputField",
              },
              value: {
                content: {
                  label: "Upload Invoice File",
                  downloadFuncName: "Download_Invioce_File",
                  funcName: "invioceFileSaveFunction",
                  errorMessage: "Invoice File is not uploaded"
                },
              },
            },

            {
              type: "Control",
              scope: "#/properties/invoiceEnabled",
              layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
              options: {
                widget: "RadioInputField",
              },
              value: {
                content: {
                  label: "Enabled",
                  options: ["YES", "NO"],
                  errorMessage: "Enabled is not marked as YES or NO"
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
        {

          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/reportNames",
              layout: { xs: 12, sm: 10, md: 6, lg: 6 },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
                  label: "  Name",
                  loadFunction: "",
                  color: "secondary",
                  variant: "standard",

                  multiple: true,
                  options: [
                    { label: "DSL", value: "DSL" },
                    { label: "PSL", value: "PSL" },
                    { label: "Home LOAN", value: "Home LOAN" },
                  ],
                  errorMessage: "Reports are not selected"
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              layout: {
                xs: 0,
                sm: 0,
                md: 6,
                lg: 6,
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
              scope: "#/properties/clawbackEnabled",
              layout: { xs: 12, sm: 8, md: 6, lg: 6 },
              options: {
                widget: "RadioInputField",
              },
              value: {
                content: {
                  label: "Enabled",
                  options: ["YES", "NO"],
                  errorMessage: "Enabled is not marked as YES or NO"
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              layout: 6,
              options: {
                widget: "EmptyBox",
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
                  startIcon: "ApproveIcon",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  funcName: "Submit_PM_Cycle",
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
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "DailogBox",
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
      scope: "#/properties/EmptyBox",
      layout: {
        xs: 11,
        sm: 11,
        md: 8.5,
        lg: 9.5,
      },

      options: {
        widget: "Box",
      },
      value: {
        content: {},
        style: {
          marginBottom: "280px"
        },

      },

    },
  ],
};

