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
          scope: "#/properties/programType",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8,
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
          tabLabels: [
            "Core",
            "Workflow",
            "Invoice",
            "Reports",
            "Rule",
            "Clawback",
            "Adjustments",
            "Timeouts",
          ],
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
                  options: [],
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
                  onClick: "verifyStartDate",
                  // onChange: "verifyStartDate",
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
                  onClick: "verifyEndDate",
                  // onChange: "verifyEndDate",
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
                  onClick: "workspaceFileSaveFunction",
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
                  onClick: "Download_Workspace_File",
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
                  onClick: "invioceFileSaveFunction",
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
                  onClick: "Download_Invioce_File",
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
                widget: "MultipleSelect",
              },
              config: {
                layout: { xs: 12, sm: 10, md: 6, lg: 6 },
                main: {
                  label: "  Name",
                  loadFunction: "",
                  color: "secondary",
                  multiple: true,
                  variant: "standard",
                  options: [
                    { label: "DSL", value: "DSL" },
                    { label: "PSL", value: "PSL" },
                    { label: "Home LOAN", value: "Home LOAN" },
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
              scope: "#/properties/groupId",
              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
                main: {
                  label: "Group",
                  options: [{}],
                  color: "secondary",
                  onClick: "typeLoadFunction",
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/project",

              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
                main: {
                  label: "Project",
                  options: [{}],
                  color: "secondary",
                  onClick: "typeLoadFunction",
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/version",

              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
                main: {
                  label: "Version",
                  options: [{}],
                  onClick: "loadExternalData",
                  errorMessage: "Project Not Selected",
                },
              },
              style: {
                backgroundColor: "none",
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
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/adjustments",
              layout: 11.5,
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/adjustment_type",

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
                          label: "Adjustment Type",
                          type: "text",
                          options: [
                            {
                              label: "Payee",
                              value: "Payee",
                            },
                            {
                              label: "Component",
                              value: "Component",
                            },
                          ],
                          errorMessage: "Adjustment Type is not selected",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/adjustment_parameter",

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
                          label: "Parameter Name",
                          errorMessage: "Adjustment Type is not selected",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/adjustment_parameter_type",

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
                          label: "Parameter Type",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/EmptyBox",

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
                      },
                    },
                  ],
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
              scope: "#/properties/loadTimeout",

              options: {
                widget: "InputField",
              },
              config: {
                layout: 6,
                main: {
                  label: "Load Time Out",
                  type: "text",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/computeTimeout",

              options: {
                widget: "InputField",
              },
              config: {
                layout: 6,
                main: {
                  label: "Compute Time Out",
                  type: "text",
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
                  onClick: "Submit_PM_Cycle",
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
