export const PayoutProcessingUiSchema = {
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
              scope: "#/properties/programType",

              options: {
                widget: "Box",
              },
              config: {
                layout: 5.5,
                main: {
                  heading: "Payout Processing",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              options: {
                widget: "EmptyBox",
              },
              config: { layout: 5.5 },
            },
          ],
        },
      },
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
      scope: "#/properties/PayoutProcessingWrapper",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
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
                  heading: "Search Program",
                  // dividerAvailable:true
                },
              },
              style: {
                marginTop: "2px",
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
                  required: true,
                  click: "loadCycle",
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
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
                main: {
                  label: "Program Cycle",
                  programType: true,
                  options: [{}],

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
                  lg: 9.5,
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
                  lg: 1.5,
                },
                main: {
                  name: "Search",
                  startIcon: "SearchIcon",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  click: "searchData",
                  size: "large",
                },
                style: {
                  textAlign: "right",
                  marginTop: "25px",
                },
              },
            },
          ],
        },
      },
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Audit Data List",
          divider:true
        },
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
                        accessorKey: "type",

                        header: "Type",
                      },
                      {
                        accessorKey: "info",
                        header: "Info",
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
                        accessorKey: "entityName",

                        header: "Entity Name",
                      },
                    ]
                  },
                },
              },
            },
          ],
        },
    {
      type: "Control",
      scope: "#/properties/DataListWrapper",
      label: "Exception List",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/ExceptionList",

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
      },
    },
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
                  click: "LoadFileData",
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
                  click: "ComputeData",
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
                  click: "SartWorkflow",
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
        },
      },
    },
  ],
};
