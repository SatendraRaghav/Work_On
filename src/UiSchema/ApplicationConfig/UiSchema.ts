export const ApplicationConfigUiSchema: any = {
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
              heading: "Application Master",
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
          tabLabels: ["Core", "Master", "Common Config"],
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
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
                main: {
                  label: "Name",
                  errorMessage: "Name is empty or invalid",
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
                layout: { xs: 11, sm: 11, md: 2.5, lg: 3.5 },
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
              scope: "#/properties/retryTimeout",

              options: {
                widget: "InputField",
              },
              config: {
                layout: 6,
                main: {
                  label: "Retry Timeouts (Min)",
                  // type: "number",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/maxRetry",

              options: {
                widget: "InputField",
              },
              config: {
                layout: 6,
                main: {
                  label: "Retry Attempts",
                  //        type: "string",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/userDormantPeriod",

              config: {
                layout: 6,
                main: {
                  label: "Dormant Duration (Days)",
                  //        type: "string",
                },
              },
              options: {
                widget: "InputField",
              },
            },
            {
              type: "Control",
              scope: "#/properties/emailNotificationName",

              config: {
                layout: 6,
                main: {
                  label: "Reset Email Notification Name",
                  type: "text",
                  options: [],
                },
              },
              options: {
                widget: "SelectInputField",
              },
            },
            {
              type: "Control",
              scope: "#/properties/frontEndUrl",

              config: {
                layout: 6,
                main: {
                  label: "Frontend URL (ex : http://localhost:3032/)",
                  type: "text",
                },
              },
              options: {
                widget: "InputField",
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              config: {
                layout: 6,
                main: {
                  label: "Empty Box",
                  //        type: "string",
                },
              },
              options: {
                widget: "EmptyBox",
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              config: {
                layout: 6,
                main: {
                  label: "Empty Box",
                  //        type: "string",
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
                  onClick: "Submit",
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
