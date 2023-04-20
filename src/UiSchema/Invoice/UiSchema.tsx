export const InvoiceGenerationUiSchema = {
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
                    conditionalLoadFunc:"loadCycle",
                    options:[{}],
                    color:"secondary",
                    required: true,
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
                scope: "#/properties/InvoiceWrapper",
                label: "Invoice",
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
                          md: 6,
                          lg: 6,
                        },
                        options: {
                          widget: "SelectInputField",
                        },
                        value: {
                          content: {
                            label: "Program Cycle",
                            options:[{}],
                            programType:true,
                            // conditionalLoadFunc:"loadCycle",
                            required: true,
                          }
                        },
                      },
                     
                      {
                        type: "Control",
                        scope: "#/properties/searchBtn",
                        options: {
                          widget: "Button",
                        },
                        layout: {
                          xs: 12,
                          sm: 7,
                          md: 4,
                          lg: 4,
                        },
                        value: {
                          content: {
                            name: "Search",
                            variant: "contained",
                            color: "info",
                            type: "text",
                            page:"InvoiceGeneration",
                            funcName:"loadTables",
                            size: "large"
                          },
                          style: {
                            textAlign: "right",
                          },
                        },
                      }
                    ]
                }
            }
        },
        {
            type: "Control",
            scope: "#/properties/reportListWrapper",
            label: "Case List",
            value: {
              style: {
                wrapperStyle: {
                  color: "black",
                  backgroundColor: "#E4E9EB",
                  borderRadius:"20px",
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
                        scope: "#/properties/caseLevelReportList",
                        layout: 12,
                        options: {
                          widget: "Table",
                          loadFunction:"caseTableDataLoad",
                          tableStyle: {
                            backgroundColor: "#F5F5F5",
                          },
                          buttonInStarting:false,
                          ApiDetails: {
                            DataApi:"",
                            
                         
                          },
                          columns: [
                            {
                              field: "Id",
                              headerName: "Id",
                              width: "40",
                              widget: "api",
                            },
                            {
                              field: "Name",
                              width: "150",
                              headerName: "Name",
                              widget: "api",
                            },
                            {
                              field: "Disbursal Amount",
                              headerName: "Disbursal Amount",
                              width: "150",
                              widget: "api",
                            },
                            {
                              field: "Released Amount",
                              width: "240",
                              headerName: "Released Amount",
                              widget: "api",
                            },
                            {
                              field : "Payout",
                              width : "240",
                              headerName : "Payout",
                              widget: "api",
                            }
                          ],
                        },
                      }
                ]
              }
            }
        },
        {
            type: "Control",
            scope: "#/properties/invoiceNumber",
            layout: {
              xs: 12,
              sm: 12,
              md: 8,
              lg: 8,
            },
            options: {
              widget: "InputField",
            },
            value: {
              content: {
                label: "Invoice No.",
              },
              style: {
                marginTop: "25px",
              },
            },
          },
          {
            type: "Control",
            scope: "#/properties/generateBtn",
            options: {
              widget: "Button",
            },
            layout: {
              xs: 12,
              sm: 7,
              md: 4,
              lg: 4,
            },
            value: {
              content: {
                name: "Generate",
                variant: "contained",
                color: "info",
                type: "text",
                page:"InvoiceGeneration",
                funcName:"generateInvoice",
                size: "large"
              },
              style: {
                margin : "30px",
              },
            },
          },
          {
              type: "Control",
              scope: "#/properties/reportListWrapper",
              label: "Invoice List",
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
                          scope: "#/properties/invoiceReportList",
                          layout: 12,
                          options: {
                            widget: "Table",
                            loadFunction:"invoiceTableDataLoad",
                            tableStyle: {
                              backgroundColor: "#F5F5F5",
                            },
                            buttonInStarting:false,
                            ApiDetails: {
                              DataApi:"",
                              
                           
                            },
                            columns: [
                              {
                                field: "Id",
                                headerName: "Id",
                                width: "40",
                                widget: "api",
                              },
                              {
                                field: "Invoice No.",
                                width: "150",
                                headerName: "Invoice No.",
                                widget: "api",
                              },
                              {
                                field: "Invoice Date",
                                headerName: "Invoice Date",
                                width: "150",
                                widget: "api",
                              },
                              {
                                field: "Payout",
                                width: "240",
                                headerName: "Invoice Amount",
                                widget: "api",
                              },
                              {
                                headerName: "Download File",
                                field:"downloadFile",
                                width: "120",
                                widget: {
                                  type: "Control",
                                  scope: "#/properties/Download_Records",
                                  options: {
                                    widget: "Button",
                                  },
                                  value: {
                                    content: {
                                      name: "Download",
                                      variant: "contained",
                                      color: "info",
                                      type: "button",
                                      size: "small",
                                    },
                                  },
                                },
                              },
                              {
                                headerName: "Delete File",
                                field:"deleteFile",
                                width: "120",
                                widget: {
                                  type: "Control",
                                  scope: "#/properties/Delete_Records",
                                  options: {
                                    widget: "Button",
                                  },
                                  value: {
                                    content: {
                                      name: "Delete",
                                      variant: "contained",
                                      color: "info",
                                      type: "button",
                                      size: "small",
                                    },
                                  },
                                },
                              }
                            ],
                          },
                        }
                  ]
                }
              }
          },
          {
            type: "Control",
            scope: "#/properties/actions",
            layout: {
              xs: 12,
              sm: 12,
              md: 6,
              lg: 6,
            },
            options: {
              widget: "SelectInputField",
            },
            value: {
              content: {
                label: "Action",
                options: [{label: "Approve",value : "approve"}, {label : "Reject", value: "reject"}],
                
                required: true,
              },
              style: {
                marginTop: "25px",
              },
            },
          },
          {
            type: "Control",
            scope: "#/properties/actionBtn",
            options: {
              widget: "Button",
            },
            layout: {
              xs: 12,
              sm: 7,
              md: 4,
              lg: 4,
            },
            value: {
              content: {
                name: "Submit",
                variant: "contained",
                color: "info",
                type: "text",
                page:"InvoiceGeneration",
                funcName:"actionFunction",
                size: "large"
              },
              style: {
                margin : "30px",
              },
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

        ]
}