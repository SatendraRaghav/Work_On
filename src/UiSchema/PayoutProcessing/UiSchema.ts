export const PayoutProcessingUiSchema:any = {
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
                layout: 11.6,
                main: {
                  heading: "Payout Processing",
                },
              },
            }
          ],
    },
    {
      type: "WrapperLayout",
      config:{
        main:{
        label:"Search Program",
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
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5},
                main: {
                  label: "Program",
                  options: [],
                  color: "secondary",
                  required: true,
                  onClick: "loadCycle",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/programCycle",

              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5},
                main: {
                  label: "Program Cycle",
                  programType: true,
                  options: [],

                  required: true,
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/load",
              options: {
                widget: "EmptyBox",
              },
              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 8.5,
                  lg: 9,
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/load",
              options: {
                widget: "Button",
              },

              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 2.5,
                  lg: 2,
                },
                main: {
                  name: "Search",
                  startIcon: "SearchIcon",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  onClick: "searchData",
                  size: "large",
                },
                style: {
                  textAlign: "right",
                  // marginTop: "25px",
                },
              },
            },
          ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Audit Data List",
          divider:true
        },
        defaultStyle:true
      },
      elements:[
            {
              type: "Control",
              scope: "#/properties/AuditList",
              options: {
                widget: "Table",
              },
              config: {
                layout: 12,
                main: {
                  allRowsData: [],
                  columns: {
                    dataColumns: [
                      {
                        accessorKey: "id",
                        header: "Id",
                        width: "40",
                      },
                      {
                        accessorKey: "name",

                        header: "Name",
                      },
                      
                      {
                        accessorKey: "createdOn",

                        header: "Created On",
                      },
                      {
                        accessorKey: "modifiedOn",

                        header: "Updated On",
                      },
                      {
                        accessorKey: "status",

                        header: "Status",
                      },
                    ],
                    actionColumns: [
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
                    ]
                  },
                },
              },
            },
          ],
        },
        {
          type: "WrapperLayout",
          config: {
            main: {
              label: "Exception List",
              divider:true
            },
            defaultStyle:true
          },
          elements: [
            {
              type: "Control",
              scope: "#/properties/exceptionList",

              options: {
                widget: "Table",
              },
              config: {
                layout: 12,

                main: {
                  allRowsData: [],
                  columns: {
                    dataColumns: [
                      {
                        accessorKey: "id",
                        header: "Id",
                        width: "40",
                      },
                      {
                        accessorKey: "code",

                        header: "Code",
                      },
                      {
                        accessorKey: "description",
                        header: "Description",
                      },
                      {
                        accessorKey: "createdOn",

                        header: "Created On",
                      },
                      {
                        accessorKey: "modifiedOn",

                        header: "Updated On",
                      },
                    ],
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
              rowSpacing:3
            }
          },
          elements: [
            {
              type: "Control",
              scope: "#/properties/load",
              options: {
                widget: "Button",
              },

              config: {
                layout: {
                  xs: 12,
                  sm: 4,
                  md: 2,
                  lg: 2,
                },
                main: {
                  name: "Load",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  onClick: "LoadFileData",
                  size: "large",
                },
              },
            },

            {
              type: "Control",
              scope: "#/properties/compute",
              options: {
                widget: "Button",
              },

              config: {
                layout: {
                  xs: 12,
                  sm: 4,
                  md: 2,
                  lg: 2,
                },
                main: {
                  name: "Compute",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  onClick: "ComputeData",
                  size: "large",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/startWorkflow",
              options: {
                widget: "Button",
              },

              config: {
                layout: {
                  xs: 12,
                  sm: 4,
                  md: 2,
                  lg: 2,
                },
                main: {
                  name: "Start Workflow",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  onClick: "SartWorkflow",
                  size: "large",
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
                widget: "EmptyBox",
              },
              config: {
                layout: {
                  xs: 0,
                  sm: 0,
                  md: 4,
                  lg: 4,
                },
              },
            },
          ],
      //   },
      // },
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
  ],
};
