export const ProgramMasterCycleUiSchema = {
  type: "HorizontalLayout",
  stylePage:{
    background:"#eef2f6",
    // background:"#051327",
    margin:"10px 20px",
    height:"auto",
    borderRadius:"20px",
    minHeight:"100vh"
   },
  elements: [
    {
      type: "Control",
      scope: "#/properties/Back_Button",
      layout: {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 3,
      },
      options: {
        widget: "Button",
      },
      value: {
        content: {
          name: "\u2190",
          variant: "contained",
          color: "primary",
          type: "button",
          size: "large",
          funcName: "backHandler",
        },
        style:{
          background:"#091f3c",
          color:"white",
          width:"30px",
          height:"30px",
          paddingTop:"5px",
         fontWeight:"bold",
         fontSize:"30px",
          marginLeft:"5px"
        }
      },
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      layout: {
        xs: 5.5,
        sm: 7.5,
        md: 8,
        lg: 8,
      },
      options: {
        widget: "EmptyBox",
      },
    },
    {
      type: "Control",
      scope: "#/properties/features",
      labels: [
        "Core",
        "workflow",
        "invoice",
        "Reports",
        "Clawback"
      ],
      options: {
        widget: "Tab",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/Core",
              lable: " ",
              options: {
                detail: {
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
                          options:[{}],
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
                          type: "date",
                         
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
                          
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/workflow",
              lable: " ",
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/workflowFile",
                      options: {
                        widget: "FileInputField",
                      },
                      layout: { xs: 12, sm: 12, md: 6, lg: 6 },
                      value: {
                        content: {
                          label: "Workflow File",
                         
                          funcName: "workspaceFileSaveFunction",
                          // loadFunction:"fileSaveFunction",
                        },
                        style: {
                          backgroundColor: "none",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/processDefKey",
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
                          label: "Process Def Key",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/Upload_Button",
                      layout: { xs: 10, sm: 8, md: 6, lg: 6 },
                      options: {
                        widget: "Button",
                      },
                      value: {
                        content: {
                          name: "DownLoad_File",
                          variant: "contained",
                          color: "primary",
                          type: "button",
                          size: "large",
                          funcName: "Download_Workspace_File",
                        },
                        style: {
                          marginTop: "40px",
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/invoice",
              lable: " ",
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/invoiceFile",
                      options: {
                        widget: "FileInputField",
                      },
                      layout: { xs: 12, sm: 12, md: 6, lg: 6 },
                      value: {
                        content: {
                          label: "Upload Invoice File",
                      
                          funcName: "invioceFileSaveFunction",
                          // loadFunction:"fileSaveFunction",
                        },
                        style: {
                          backgroundColor: "none",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/enabled",
                      layout: { xs: 12, sm: 12, md: 6, lg: 6 },
                      options: {
                        widget: "RadioInputField",
                      },
                      value: {
                        content: {
                          label: "Enabled",
                          options: ["YES", "NO"],
                          
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/Upload_Button",
                      layout: { xs: 10, sm: 8, md: 6, lg: 6 },
                      options: {
                        widget: "Button",
                      },
                      value: {
                        content: {
                          name: "DownLoad_File",
                          variant: "contained",
                          color: "primary",
                          type: "button",
                          size: "large",
                          funcName: "Download_Invioce_File",
                        },
                        style: {
                          marginTop: "40px",
                        },
                      },
                    },
                   
                    {
                      type: "Control",
                      scope: "#/properties/EmptyBox",
                      layout: {
                        xs: 2,
                        sm: 4,
                        md: 6,
                        lg: 6,
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
              scope: "#/properties/Reports",
              lable: " ",
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/names",
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
              },
            },
            {
              type: "Control",
              scope: "#/properties/Clawback",
              lable: " ",
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/enabled",
                      layout: { xs: 12, sm: 8, md: 6, lg: 6 },
                      options: {
                        widget: "RadioInputField",
                      },
                      value: {
                        content: {
                          label: "Enabled",
                          options: ["YES", "NO"],
                         
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/EmptyBox",
                      layout: {
                        xs: 0,
                        sm: 4,
                        md: 6,
                        lg: 6,
                      },
                      options: {
                        widget: "EmptyBox",
                      },
                    },
                  ],
                },
              },
            }
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "EmptyBox",
      },
    },

    {
      type: "Control",
      scope: "#/properties/LoginPage",
      options: {
        widget: "Button",
      },
      layout: {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
      },
      value: {
        content: {
          name: " \u2713 Submit",
          variant: "contained",
          color: "info",
          type: "text",
          funcName: "Submit_PM_Cycle",
          size: "large"
        },
        style: {
          background:"#091f3c",
          color:"white",
          width:"200px",
          marginRight:"50px",
          float:"right"
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
  ],
}; 
