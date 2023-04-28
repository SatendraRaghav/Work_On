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
                  // width:"20%",
                  float:"right",
                  // marginTop:"20px",
                  // marginRight:"15px"
                },
              },
            }
        ],
        },
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
                      scope: "#/properties/programType",
                      layout: { xs: 11, sm: 11, md: 3.5, lg: 2.5 },
                      options: {
                        widget: "Box",
                      },
                      value: {
                        content: {
                          heading: "Work Flow File",
                        },
                        style:{
                          color:"#828f9f",
                          // textAlign:"center"
                        }
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/workflowFile",
                      options: {
                        widget: "FileInputField",
                      },
                      layout: { xs: 11, sm: 11, md: 7.5, lg: 8.5 },
                      value: {
                        content: {
                          label: "Workflow File",
                         
                          funcName: "workspaceFileSaveFunction",
                          downloadFuncName: "Download_Workspace_File",
                        },
                        style: {
                          backgroundColor: "none",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/programType",
                      layout: { xs: 11, sm: 11, md: 3.5, lg: 2.5 },
                      options: {
                        widget: "Box",
                      },
                      value: {
                        content: {
                          heading: "Process Def Key",
                        },
                        style:{
                          color:"#828f9f",
                          // textAlign:"center"
                        }
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/processDefKey",
                      layout: { xs: 11, sm: 11, md: 7.5, lg: 8.5 },
                      options: {
                        widget: "InputField",
                      },
                      value: {
                        content: {
                          label: "",
                        },
                      },
                    }
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
                      scope: "#/properties/programType",
                      layout: { xs: 11, sm: 11, md: 3.5, lg: 2.5 },
                      options: {
                        widget: "Box",
                      },
                      value: {
                        content: {
                          heading: "Upload Invoice File",
                        },
                        style:{
                          color:"#828f9f",
                        }
                      },
                    },
                    
                    {
                      type: "Control",
                      scope: "#/properties/invoiceFile",
                      options: {
                        widget: "FileInputField",
                      },
                      layout: { xs: 11, sm: 11, md: 7.5, lg: 8.5 },
                      value: {
                        content: {
                          label: "Upload Invoice File",
                          downloadFuncName: "Download_Invioce_File",
                          funcName: "invioceFileSaveFunction",
                          
                        },
                        style: {
                          backgroundColor: "none",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/programType",
                      layout: { xs: 11, sm: 11, md: 3.5, lg: 2.5 },
                      options: {
                        widget: "Box",
                      },
                      value: {
                        content: {
                          heading: "Enabled",
                        },
                        style:{
                          color:"#828f9f",
                        }
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/enabled",
                      layout: { xs: 11, sm: 11, md: 7.5, lg: 8.5 },
                      options: {
                        widget: "RadioInputField",
                      },
                      value: {
                        content: {
                          label: "",
                          options: ["YES", "NO"],
                          
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
          funcName: "Submit_PM_Cycle",
          size: "small",
        },
        style: {
          marginBottom:"8px"
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