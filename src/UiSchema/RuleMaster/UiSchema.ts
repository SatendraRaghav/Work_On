export const RuleMasterUISchema = {
    type: "HorizontalLayout",
    elements: [
      {
        type: "WrapperLayout",
        config:{
          main:{
            rowSpacing:3,
            header:true,
          },
          defaultStyle:true
        },
        elements: [
          {
            type: "Control",
            scope: "#/properties/programType",
            options: {
              widget: "Box",
            },
            config: {
              layout: 8.5,
              main: {
                heading: "Rule Master",
              },
              style: {
                // fontWeight: "500",
                // fontSize: "20px",
                background: "white",
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
                name: "New Records",
                icon: "BackIcon",
                size: "small",
                styleDefault: true,
                tooltipMessage: "Back",
                onClick: "backHandler",
              },
              style: {
                float: "right",
              },
            },
          }
        ],
      },
      {
        type: "WrapperLayout",
        defaultStyle: true,
        config:{
          main:{
          // label:"Load External Data",
          // divider:true,
          },
          defaultStyle:true
        },
        
        elements: [
          {
            type: "Control",
            scope: "#/properties/heading",
            
            options: {
              widget: "Box",
            },
            config: {
              layout: 11.5,
              main: {
               
              },
            },
            style:{
              marginTop:"3px",
              
            }
          },
          {
            type: "Control",
            scope: "#/properties/EmptyBox",
            options: {
              widget: "EmptyBox",
            }
          },
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
                    options : [{}],
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
                    errorMessage:"Project Not Selected",
                  },
                },
                style: {
                  backgroundColor: "none",
                },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              options: {
                widget: "EmptyBox",
              },
              config : {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
              }
            },
        ],
      },
      {

        type: "WrapperLayout",
        defaultStyle: true,
        config:{
          main:{
          label:"Documents",
          divider:true,
          },
          defaultStyle:true
        },
        elements: [
          
          {
            type: "Control",
            scope: "#/properties/EmptyBox",
            options: {
              widget: "EmptyBox",
            }
          },
          {
            type: "Control",
            scope: "#/properties/uploadAggrementCopy",
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
                onClick: "uploadFile",
                defaultStyle: true,
                // iconStyleDefault:true,
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
            config : {
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
              style: {
                padding : '3',
              },
            }
          },
          {
            type: "WrapperLayout",
            config:{
              main:{
              // label:"Files",
              divider:true,
              },
              defaultStyle:true
            },
            elements: [
              {
                type: "Control",
                scope: "#/properties/LoadRecords",
                layout: 11.5,
                options: {
                  widget: "Table",
                },
                config: {
                  main: {
                    // allRowsData:,
                    columns: {
                      dataColumns: [
                        {
                          accessorKey: "id",
                          header: "Id",
                        },
                        {
                          accessorKey: "name",
                          header: "Name",
                        }
                      ],
                      actionColumns: [
                        {
                          header: "Download File",
                          accessorKey: "Download_File_Table",
                          width: "120",
                          widget: {
                            type: "Control",
                            scope: "#/properties/download_file",
                            options: {
                              widget: "IconButton",
                            },
                            config: {
                              main: {
                                size: "small",
                                onClick: "Download_File_Table",
                                icon: "DownloadIcon",
                              },
                            },
                          },
                        },
                        {
                          header: "Download File",
                          accessorKey: "Delete_File_Table",
                          width: "120",
                          widget: {
                            type: "Control",
                            scope: "#/properties/Delete_Records",
                            options: {
                              widget: "IconButton",
                            },
                            config: {
                              main: {
                                size: "small",
                                onClick: "Delete_File_Table",
                                icon: "DeleteIcon",
                              },
                            },
                          },
                        }
                      ],
                    },
                  },
                },
              },
            ],
          }
          

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
        scope: "#/properties/saveBtn",
        options: {
          widget: "Button",
        },
       
        config: { layout: 11.5,
          main: {
            name: "Save",
            variant: "contained",
            color: "info",
            type: "text",
            tooltipMessage: "saveBtn",

            onClick: "saveData",
            size: "large",
          },
          style: {
            float: "right",
            width: {
              xs: "90%",
              sm: "90%",
              md: "20%",
              lg: "10%",
            },
          },
        },
      }
    ],
  };