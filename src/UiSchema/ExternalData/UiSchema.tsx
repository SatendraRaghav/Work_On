export const  ExternalDataUiSchema = {
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
                  conditionalLoadFunc:"typeLoadFunction",
                },
                style: {
                  // padding:"5px 0 0 5px",
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
      scope: "#/properties/DataLoadParentWrapper",
      label: "External Data Load",
      value: {
        style: {
          wrapperStyle: {
            background:"#eef2f6",
            color: "black",
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
              scope: "#/properties/uploadDataWraper",
              label: "Upload Data",
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
                      scope: "#/properties/agencyType",
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
                          label: "Type",
                          // programType:true,
                          options:[{}],
                       
                        
                        },
                        style: {
                          marginTop: "35px",
                        },
                      },
                    },
                    {
                      type: "Control",
                      scope: "#/properties/docAggrementCopy",
                      options: {
                        widget: "FileInputField",
                      },
                      layout: {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        lg: 6,
                      },
                      value: {
                        content: {
                          label: "Upload File",
                          required: false,
                          funcName : "uploadFile",
                        },
                        style: {
                          backgroundColor: "none",
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
                        md: 7,
                        lg: 7,
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
                      scope: "#/properties/LoginPage",
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
                          name: "Load",
                          variant: "contained",
                          color: "info",
                          type: "text",
                          funcName:"loadData",
                          size: "large"
                        },
                        style: {
                          textAlign: "right",
                        },
                      },
                    },
                  ],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/DataListWrapper",
              label: "External Data List",
              value: {
                style: {
                  wrapperStyle: {
                      background:"#eef2f6",
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
                      scope: "#/properties/LoadRecords",
                      layout: 12,
                      options: {
                        widget: "Table",
                        loadFunction:"tableLoadFunction",
                        tableStyle: {
                          backgroundColor: "#F5F5F5",
                        },
                        buttonInStarting:false,
                        ApiDetails: {
                          DataApi:"",
                          DataApiBody: {  },
                        },
                        columns:[
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
                            field: "type",
                            headerName: "Type",
                            width: "150",
                            widget: "api",
                          },
                          {
                            field: "createdOn",
                            width: "240",
                            headerName: "Updated Time",
                            widget: "api",
                          },
                          {
                            headerName: "Download_File",
                            field:"Download_File",
                            width: "120",
                            widget: {
                              type: "Control",
                              scope: "#/properties/Edit_Records",
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
                        ],
                      },
                    }
                  ],
                },
              },
            },
          ],
        },
      },
    },
  ],
}
