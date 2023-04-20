export const  PayoutProcessingUiSchema = { 
  type: "HorizontalLayout",
  stylePage:{
    background:"#eef2f6",
    // background:"#051327",
    margin:"0",
    height:"auto",
    borderRadius:"20px"
   },
  elements: [
    {
      type: "Control",
      scope: "#/properties/headerWrapper",
      label: "",
      value: {
        style: {
          wrapperStyle: {
            background:"#eef2f6",
            color: "black",
            boxShadow: "none",
            margin: "0",
            paddingTop:"0",
            borderRadius:"20px",
            width:"100%",
            marginTop:"-28px",
            // marginLeft:"-10px"
          },
          labelStyle: {
            fontSize: "18px",
          },
        },
      },
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/BoxDemo",
              layout: {xs:8,sm:4,md:3,lg:2},
              options: {
                widget: "Box",
              },
      
              value: {
                content: {
                  heading: " ",
                  variant: "h4",
                },
                style: {
                  width: "100%",
                  margin: "none",
                  textAlign: "center",
                  color: "white",
                 
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              options: {
                widget: "EmptyBox",
              },
              layout: {
                xs: 3,
                sm: 2,
                md: 4,
                lg: 5,
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              options: {
                widget: "Notify",
              },
              layout:6
            },
            {
              type: "Control",
              scope: "#/properties/programType",
              layout: {
                xs: 12,
                sm: 6,
                md: 5,
                lg: 4,
              },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
                  label: "Program",
                  variant:"standard",
                  options:[{}],
                  color:"secondary",
                  required: true,
                  conditionalLoadFunc:"loadCycle",
                },
                style: {
                  '& label':{
                    paddingLeft:"20px"
                   },
           background:"inherit"
                },
              },
            }
          ]}}},
          {
            type: "Control",
            scope: "#/properties/PayoutProcessingWrapper",
            label: "Payout Processing",
            value: {
              style: {
                wrapperStyle: {
                  color: "black",
                  backgroundColor: "#E4E9EB",
                  borderRadius:"20px",
                  boxShadow: "none",
                },
                labelStyle: {
                  fontSize: "25px",
                },
              },
            },
            options: {
              widget: "Wrapper",
              detail: {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/programCycle",
                    layout: {
                      xs: 12,
                      sm: 12,
                      md: 4,
                      lg: 4,
                    },
                    options: {
                      widget: "SelectInputField",
                    },
                    value: {
                      content: {
                        label: "Program Cycle",
                        programType:true,
                        options:[{}],
                      
                        required: true,
                      },
                      style: {
                        marginTop: "20px",
                      },
                    },
                  },
                  {
                    type: "Control",
                    scope: "#/properties/load",
                    options: {
                      widget: "Button",
                    },
                    layout: {
                      xs: 12,
                      sm: 4,
                      md: 4,
                      lg: 4,
                    },
                    value: {
                      content: {
                        name: "Search",
                        variant: "contained",
                        color: "info",
                        type: "text",
                        funcName:"searchData",
                        size: "large"
                      },
                      style: {
                        textAlign: "right",
                        marginTop:"25px"
                      },
                    },
                  },
                  

                ]
              }
            }
          },
          {
            type: "Control",
            scope: "#/properties/DataListWrapper",
            label: "Audit Data List",
            value: {
              style: {
                wrapperStyle: {
                  backgroundColor: "#E4E9EB",
                  color: "black",
                  boxShadow: "none",
                },
                labelStyle: {
                  fontSize: "18px",
                },
              },
            },
            options: {
              widget: "Wrapper",
              detail: {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/AuditList",
                    layout: 12,
                    options: {
                      widget: "Table",
                      loadFunction:"auditTableDataFunction",
                      tableStyle: {
                        backgroundColor: "#F5F5F5",
                      },
                      buttonInStarting:false,
                      ApiDetails: {
                        DataApi:"",
                        
                     
                      },
                      columns: [
                        {
                          field: "id",
                          headerName: "Id",
                          width: "40",
                          widget: "api",
                        },
                        {
                          field: "type",
                          width: "150",
                          headerName: "Type",
                          widget: "api",
                        },
                        {
                          field: "info",
                          headerName: "Info",
                          width: "150",
                          widget: "api",
                        },
                        {
                          field: "createdOn",
                          width: "240",
                          headerName: "Created On",
                          widget: "api",
                        },
                        {
                          field : "modifiedOn",
                          width : "240",
                          headerName : "Updated On",
                          widget: "api",
                        },
                        {
                          field : "entityName",
                          width : "240",
                          headerName : "Entity Name",
                          widget: "api",
                        }
                      ],
                    },
                  }
                ],
              },
            },
          },
          {
            type: "Control",
            scope: "#/properties/DataListWrapper",
            label: "Exception List",
            value: {
              style: {
                wrapperStyle: {
                  backgroundColor: "#E4E9EB",
                  color: "black",
                  boxShadow: "none",
                },
                labelStyle: {
                  fontSize: "18px",
                },
              },
            },
            options: {
              widget: "Wrapper",
              detail: {
                type: "HorizontalLayout",
                elements: [
                  {
                    type: "Control",
                    scope: "#/properties/ExceptionList",
                    layout: 12,
                    options: {
                      widget: "Table",
                      loadFunction:"exceptionTableDataFunction",
                      tableStyle: {
                        backgroundColor: "#F5F5F5",
                      },
                      buttonInStarting:false,
                      ApiDetails: {
                        DataApi:"",
                      },
                      columns: [
                        {
                          field: "id",
                          headerName: "Id",
                          width: "40",
                          widget: "api",
                        },
                        {
                          field: "code",
                          width: "150",
                          headerName: "Code",
                          widget: "api",
                        },
                        {
                          field: "description",
                          headerName: "Description",
                          width: "150",
                          widget: "api",
                        },
                        {
                          field: "createdOn",
                          width: "240",
                          headerName: "Created On",
                          widget: "api",
                        },
                        {
                          field : "modifiedOn",
                          width : "240",
                          headerName : "Updated On",
                          widget: "api",
                        }
                      ],
                    },
                  }
                ],
              },
            },
          },
          {
            type: "Control",
            scope: "#/properties/load",
            options: {
              widget: "Button",
            },
            layout: {
              xs: 12,
              sm: 4,
              md: 3,
              lg: 3,
            },
            value: {
              content: {
                name: "Load",
                variant: "contained",
                color: "info",
                type: "text",
                funcName:"LoadFileData",
                size: "large"
              },
              style: {
                textAlign: "right",
              },
            },
          },
          {
            type: "Control",
            scope: "#/properties/compute",
            options: {
              widget: "Button",
            },
            layout: {
              xs: 12,
              sm: 4,
              md: 3,
              lg: 3,
            },
            value: {
              content: {
                name: "Compute",
                variant: "contained",
                color: "info",
                type: "text",
                funcName:"ComputeData",
                size: "large"
              },
              style: {
                textAlign: "right",
              },
            },
          },
          {
            type: "Control",
            scope: "#/properties/startWorkflow",
            options: {
              widget: "Button",
            },
            layout: {
              xs: 12,
              sm: 4,
              md: 3,
              lg: 3,
            },
            value: {
              content: {
                name: "Start Workflow",
                variant: "contained",
                color: "info",
                type: "text",
                funcName:"SartWorkflow",
                size: "large"
              },
              style: {
                textAlign: "right",
              },
            },
          }
        
]   
}