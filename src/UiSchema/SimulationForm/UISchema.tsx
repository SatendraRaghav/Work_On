export const SimulationFormUiSchema: any = {
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
            layout: 8,
            main: {
              heading: "Simulation Form",
            },
            style: {

              fontFamily: "Roboto",
              fontWeight: "500",

              fontSize: "20px",

             
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
              icon: "BackIcon",
              styleDefault: true,
              size: "small",
              onClick: "backHandler",
              tooltipMessage: "Back",
            },
            style: {

              float: "right",

            },
          },
        },
      ]
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Simulation Details",
          divider: true,
        },
        defaultStyle: true
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/name",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Name",
              errorMessage: "Name is empty or invalid",
            },
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
              options: [],
              color: "secondary",
              onClick: "typeLoadFunction",
            },
            style: {
              background: "white",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/simulationType",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Simulation Type",
              options: [],
              color: "secondary",
              onClick: "typeLoadFunction",
            },
            style: {
              background: "white",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/startDate",
          options: {
            widget: "DateInputField",
          },

          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Start Date",
              onClick: "verifyStartDate",
              // onChange: "verifyStartDate",
              type: "date",
              errorMessage: "Start Date is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/endDate",
          options: {
            widget: "DateInputField",
          },

          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "End Date",
              type: "date",
              onClick: "verifyEndDate",
              // onChange: "verifyEndDate",
              errorMessage: "End Date is empty or invalid",
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
          }
        }
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Load External Data",
          divider: true,
        },
        defaultStyle: true
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/fileType",
          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
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
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
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
      ]
    },
    {
      type: "WrapperLayout",
      defaultStyle: true,
      config:{
        main:{
        label:"Rule",
        divider:true,
        },
        defaultStyle:true
      },

      style:{
        color : 'black'
      },
      
      elements: [
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
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "Notify",
      },
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "External Data List",
          divider: true,
        },
        defaultStyle: true
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
                    header: "Delete File",
                    accessorKey: "Delete_File_Table",
                    width: "120",
                    widget: {
                      type: "Control",
                      scope: "#/properties/deleteRecords",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                        main: {
                          size: "small",
                          onClick: "deleteRecords",
                          icon: "DeleteIcon",
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/endDate",
          options: {
            widget: "EmptyBox",
          },

          config: {
            layout: { xs: 0, sm: 0, md: 3, lg: 3 },
          },
        },
        {
          type: "Control",
          scope: "#/properties/loadDataBtn",
          options: {
            widget: "Button",
          },

          config: {
            layout: { xs: 11, sm: 11, md: 2.25, lg: 2.25 },
            main: {
              name: "Save",
              variant: "contained",
              color: "info",
              type: "text",
              tooltipMessage: "Save Data",

              onClick: "saveData",
              size: "large",
            },
            style: {
              float: "right",

            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/runSimulationBtn",
          options: {
            widget: "Button",
          },

          config: {
            layout: { xs: 11, sm: 11, md: 2.25, lg: 2.25 },
            main: {
              name: "Run Simulation",
              variant: "contained",
              color: "info",
              type: "text",
              tooltipMessage: "Simulation Started",

              onClick: "runSimulation",
              size: "large",
            },
            style: {
              float: "right",

            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/reportDownload",
          options: {
            widget: "Button",
          },

          config: {
            layout: { xs: 11, sm: 11, md: 2.25, lg: 2.25 },
            main: {
              name: "Download Report",
              variant: "contained",
              color: "info",
              type: "text",
              tooltipMessage: "Report Downloaded",

              onClick: "reportDownload",
              size: "large",
            },
            style: {
              float: "right",

            },
          },
        }
      ],
    },
  ],
};
