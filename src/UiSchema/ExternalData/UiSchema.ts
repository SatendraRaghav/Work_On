export const ExternalDataUiSchema :any= {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config:{
        main:{
          rowSpacing:3
        }
      },
      elements: [
            {
              type: "Control",
              scope: "#/properties/pageHeading",
              options: {
                widget: "Box",
              },
              config: {
                layout: 11.6,
                main: {
                  heading: "External Data",
                },
              },
            }
          ]
    },
    {
      type: "WrapperLayout",
      config:{
        main:{
        label:"Load External Data",
        divider:true,
        },
        defaultStyle:true
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/programType",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Program",
              options: [],
              color: "secondary",
              onClick: "typeLoadFunction",
            },
            style: {
              // background: "white",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/fileType",
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
              label: "Type",
              onClick: "clearFileName",
              options: [],
            },
          },
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
              // iconStyleDefault:true,
            },
            style: {
              backgroundColor: "none",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/downloadAggrementCopy",
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
              onClick: "Download_File",
              // iconStyleDefault:true,
            },
            style: {
              backgroundColor: "none",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/loadDataBtn",
          options: {
            widget: "Button",
          },
         
          config: { layout: 11.5,
            main: {
              name: "Load",
              variant: "contained",
              color: "info",
              type: "text",
              tooltipMessage: "Load Data",

              onClick: "loadData",
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
        },
      ],
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "Notify",
      },
    },
    {
      type: "WrapperLayout",
      config:{
        main:{
        label:"Exception List",
        divider:true,
        },
        defaultStyle:true
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/exceptionList",
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
                    accessorKey: "File Name",
                    header: "File Name",
                  },
                  {
                    accessorKey: "Code",
                    header: "Code",
                  },
                  {
                    accessorKey: "Description",
                    header: "Description",
                  },
                  {
                    accessorKey: "Created On",
                    header: "Created On",
                  },
                ]
              },
            },
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config:{
        main:{
        label:"External Data List",
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
                  },
                  {
                    accessorKey: "type",
                    header: "Type",
                  },
                  {
                    accessorKey: "createdOn",
                    header: "Updated Time",
                  },
                ],
                actionColumns: [
                  {
                    header: "Download File",
                    accessorKey: "Download_File_Table",
                    width: "120",
                    widget: {
                      type: "Control",
                      scope: "#/properties/Edit_Records",
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
                    header: "View Errors",
                    accessorKey: "View_Error_Table",
                    width: "120",
                    widget: {
                      type: "Control",
                      scope: "#/properties/View_Error",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                        main: {
                          size: "small",
                          onClick: "View_Error_Table",
                          icon: "ExceptionIcon",
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    },
  ],
};
