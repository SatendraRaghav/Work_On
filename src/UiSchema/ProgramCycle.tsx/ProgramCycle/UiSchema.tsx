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

              options: {
                widget: "Box",
              },
              config: {
                layout: 5.5,
                main: {
                  heading: "Cycle Master",
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
                layout: 5.5,
                main: {
                  icon: "BackIcon",
                  styleDefault: true,
                  size: "small",
                  click: "backHandler",
                  tooltipMessage: "Back",
                },
                style: {
                  float: "right",
                },
              },
            },
          ],
        },
      },
    },
    {
      type: "TabLayout",
      config: {
        main: {
          labels: ["Core", "Workflow", "Invoice", "Reports", "Clawback"],
          defaultStyle: true,
        },
      },
    
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
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
                  label: "Cycle Name",
                  errorMessage: "Cycle Name is empty or invalid",
                },
              },
            },
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
                  options: [{}],
                  errorMessage: "Program Name is not selected",
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
                layout: { xs: 12, sm: 12, md: 6, lg: 6 },
                main: {
                  label: "Start Date",
                  click: "verifyStartDate",
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

              config: {
                layout: { xs: 12, sm: 12, md: 6, lg: 6 },
                main: {
                  label: "End Date",
                  type: "date",
                  click: "verifyEndDate",
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
              scope: "#/properties/uploadWorkflowFile",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 5.5,
                  lg: 5.5,
                },
                main: {
                  required: false,
                  click: "workspaceFileSaveFunction",
                  errorMessage: "Workflow File is not uploaded",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadWorkflowFile",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 5.5,
                  lg: 5.5,
                },
                main: {
                  required: false,
                  click: "Download_Workspace_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/processDefKey1",

              options: {
                widget: "InputField",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
                main: {
                  label: "Process Def Key",
                  errorMessage: "Process Def Key is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/proc",
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
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
              scope: "#/properties/uploadInvoiceFile",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 5.5,
                  lg: 5.5,
                },
                main: {
                  required: false,
                  click: "invioceFileSaveFunction",
                  errorMessage: "Invoice File is not uploaded",
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadInvoiceFile",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 5.5,
                  lg: 5.5,
                },
                main: {
                  required: false,
                  click: "Download_Invioce_File",
                 
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/invoiceEnabled",

              options: {
                widget: "RadioInputField",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
                main: {
                  label: "Enabled",
                  options: ["YES", "NO"],
                  errorMessage: "Enabled is not marked as YES or NO",
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
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/reportNames",

              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 12, sm: 10, md: 6, lg: 6 },
                main: {
                  label: "  Name",
                  loadFunction: "",
                  color: "secondary",
                  variant: "standard",

                  multiple: true,
                  options: [
                    { label: "DSL", config: "DSL" },
                    { label: "PSL", config: "PSL" },
                    { label: "Home LOAN", config: "Home LOAN" },
                  ],
                  errorMessage: "Reports are not selected",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              config: {
                layout: {
                  xs: 0,
                  sm: 0,
                  md: 6,
                  lg: 6,
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
              scope: "#/properties/clawbackEnabled",

              options: {
                widget: "RadioInputField",
              },
              config: {
                layout: { xs: 12, sm: 8, md: 6, lg: 6 },
                main: {
                  label: "Enabled",
                  options: ["YES", "NO"],
                  errorMessage: "Enabled is not marked as YES or NO",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              config: {
                layout: 6,
              },

              options: {
                widget: "EmptyBox",
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
              scope: "#/properties/btn",
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
                  click: "Submit_PM_Cycle",
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
      config: {
        main: {},
        style: {
          marginBottom: "280px",
        },
      },
    },
  ],
};
