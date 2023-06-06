export const ExternalDataUiSchema = {
  type: "HorizontalLayout",
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
              scope: "#/properties/pageHeading",
              options: {
                widget: "Box",
              },
              config: {
                layout: 5.5,
                main: {
                  heading: "External Data",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              options: {
                widget: "EmptyBox",
              },
              config: {
                layout: 5.5,
              },
            },
          ],
        },
      },
    },
    {
      type: "HorizontalLayout",
      config:{defaultStyle: true},
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
              heading: "Load External Data",
              dividerAvailable: true,
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
          scope: "#/properties/programType",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Program",
              options: [{}],
              color: "secondary",
              click: "typeLoadFunction",
            },
            style: {
              background: "white",
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
              click: "clearFileName",
              options: [{}],
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
              click: "uploadFile",
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
              click: "Download_File",
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
          layout: 11.5,
          config: {
            main: {
              name: "Load",
              variant: "contained",
              color: "info",
              type: "text",
              tooltipMessage: "Load Data",

              funcName: "loadData",
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
      layout: 6,
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "DailogBox",
      },
    },
    {
      type: "HorizontalLayout",
      config:{defaultStyle: true},
      elements: [
        {
          type: "Control",
          scope: "#/properties/pageHeading",
          layout: 11.5,
          options: {
            widget: "Box",
          },
          config: {
            main: {
              heading: "External Data List",
              dividerAvailable: true,
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "EmptyBox",
          },
          layout: 5.5,
        },

        //Table xcvbnhjklcvbn ghjkl; gukhilj;olk;lghbjnkml,; yguhijok'pl[ yuij;ok'p;l' ghjl;' vghbjnk]
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
                          click: "Download_File_Table",
                          icon: "DownloadIcon",
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
