export const PayoutReviewUiSchema = {
    type: "HorizontalLayout",
    stylePage:{
      // background:"#051327",
      margin:"0",
      height:"auto",
      background:"#eef2f6",
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
                    // variant:"standard",
                    options:[{}],
                    color:"secondary",
                    conditionalLoadFunc:"loadCycle",
                    required: true,
                  },
                  style: {
                    '& label':{
                      paddingLeft:"20px"
                     },
             background:"inherit"
                  },
                },
              },
            ]}}},
            {
                type: "Control",
                scope: "#/properties/PayoutProcessingWrapper",
                label: "Payout Review",
                value: {
                  style: {
                    wrapperStyle: {
                      color: "black",
                      boxShadow: "none",
                      backgroundColor: "#E4E9EB",
                        borderRadius:"20px"
                   
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
                          xs: 11,
                          sm: 11,
                          md: 5.5,
                          lg: 5.5,
                        },
                        options: {
                          widget: "SelectInputField",
                        },
                        value: {
                          content: {
                            label: "Program Cycle",
                            options:[{}],
                            programType:true,
                            required: true,

                          },
                          style: {
                            marginTop: "25px",
                          },
                        },
                      },
                      
                      {
                        type: "Control",
                        scope: "#/properties/case",
                        layout: {
                          xs: 11,
                          sm: 11,
                          md: 5.5,
                          lg: 5.5,
                        },
                        options: {
                          widget: "InputField",
                        },
                        value: {
                          content: {
                            label: "Case Name",
                          },
                          style: {
                            marginTop: "25px",
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
                          xs: 0,
                          sm: 4,
                          md: 4,
                          lg: 4,
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
                            page : "PayoutReview",
                            funcName:"loadTable",
                            size: "large"
                          },
                          style: {
                            textAlign: "right",
                          },
                        },
                      }
  
                    ]
                  },
                  
                }
              },
              {
                type: "Control",
                scope: "#/properties/reportListWrapper",
                label: "Report List",
                value: {
                  style: {
                    wrapperStyle: {
                      backgroundColor: "#E4E9EB",
                        borderRadius:"20px",
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
                       scope: "#/properties/agencyRecords",
                       labels: ["Case","Summary"],
                     options: {
                       widget: "Tab",
                       detail: {
                       type: "HorizontalLayout",
                       elements : [
                        {
                            type: "Control",
                            scope: "#/properties/caseReportList",
                            layout: 12,
                            options: {
                              widget: "Table",
                              loadFunction:"caseTableDataFunction",
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
                                  field: "name",
                                  width: "150",
                                  headerName: "Name",
                                  widget: "api",
                                },
                                {
                                  field: "disbursalAmount",
                                  headerName: "Disbursal Amount",
                                  width: "150",
                                  widget: "api",
                                },
                                {
                                  field: "releasedAmount",
                                  width: "240",
                                  headerName: "Released Amount",
                                  widget: "api",
                                },
                                {
                                  field : "payout",
                                  width : "240",
                                  headerName : "Payout",
                                  widget: "api",
                                }
                              ],
                            },
                          },
                          {
                            type: "Control",
                            scope: "#/properties/summaryReportList",
                            layout: 12,
                            options: {
                              widget: "Table",
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
                                  field: "payeeName",
                                  width: "150",
                                  headerName: "Payee Name",
                                  widget: "api",
                                },
                                {
                                  field: "payout",
                                  headerName: "Payout",
                                  width: "150",
                                  widget: "api",
                                }
                              ],
                            },
                          }
                       ]
                       }
                    }
                }
                       ]
                  }
                  
                  
                }
            },
            {
                type: "Control",
                scope: "#/properties/pendingListWrapper",
                label: "Pending Actions",
                value: {
                  style: {
                    wrapperStyle: {
                      backgroundColor: "#E4E9EB",
                        borderRadius:"20px",
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
                    elements : [
                        {
                            type: "Control",
                            scope: "#/properties/pendingActionList",
                            layout: 12,
                            options: {
                              widget: "Table",
                              loadFunction: "workflowTableDataFunction",
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
                                  field: "name",
                                  width: "150",
                                  headerName: "Name",
                                  widget: "api",
                                },
                                {
                                  field: "payeeName",
                                  width: "150",
                                  headerName: "Payee Name",
                                  widget: "api",
                                },
                                {
                                  field: "payout",
                                  headerName: "Payout",
                                  width: "150",
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
            scope: "#/properties/remarks",
            layout: {
              xs: 11,
              sm: 11,
              md: 5.5,
              lg: 5.5,
            },
            options: {
              widget: "InputField",
            },
            value: {
              content: {
                label: "Remarks",
              },
              style: {
              
              },
            },
          },
        {
            type: "Control",
            scope: "#/properties/actions",
            layout: {
              xs: 11,
              sm: 11,
              md: 5.5,
              lg: 5.5,
            },
            options: {
              widget: "SelectInputField",
            },
            value: {
              content: {
                label: "Action",
                options : [{label : "Approve" , value : "approve"},{label : "Reject" , value : "reject"}],
                required: true,
               
              },
              style: {
                // marginTop: "25px",
              },
            },
          },
          {
            type: "Control",
            scope: "#/properties/actionBtn",
            options: {
              widget: "Button",
            },
            layout: 11,
            value: {
              content: {
                name: "Submit",
                variant: "contained",
                color: "info",
                type: "text",
                page:"PayoutReview",
                funcName:"actionFunction",
                size: "large"
              },
              style: {
                marginTop : "30px",
                marginRight:{xs:"0",sm:"30px",md:"50px"},
                width:{xs:"100%",sm:"60%",md:"20%"},
                float:"right"
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
          }
        
        ]
}