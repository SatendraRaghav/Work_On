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
              scope: "#/properties/EmptyBox",
              options: {
                widget: "EmptyBox",
              },
              layout: {
                xs: 0,
                sm: 5,
                md: 7.5,
                lg: 8.5,
              },
            },
            {
              type: "Control",
              scope: "#/properties/programType",
              layout: {
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
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
                 background:"white"
                },
              },
            },
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
              scope: "#/properties/docAggrementCopy",
              options: {
                widget:"Box",
              },
              value: {
                content: {
                  heading:"Upload Data"
                },
                style: {
                 paddingLeft:"20px",
                 fontFamily:'inter'
                },
              },
            },
                    {
                      type: "Control",
                      scope: "#/properties/agencyType",
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
                        xs: 11,
                        sm: 11,
                        md: 5.5,
                        lg: 5.5,
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
                        sm: 6.5,
                        md: 7.5,
                        lg: 8.5,
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
                        sm: 4.5,
                        md: 3.5,
                        lg: 2.5,
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
                      scope: "#/properties/docAggrementCopy",
                      options: {
                        widget:"Box",
                      },
                      value: {
                        content: {
                          heading:"External Data List"
                        },
                        style: {
                         paddingLeft:"20px",
                         fontFamily:'inter'
                        },
                      },
                    },
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
                           flex:1,
                            headerName: "Name",
                            widget: "api",
                          },
                          {
                            field: "type",
                            headerName: "Type",
                           flex:1,
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
}
