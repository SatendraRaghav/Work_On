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
              layout: 5.5,
              options: {
                widget: "Box",
              },
              value: {
                content: {
                  heading: "Payout processing",
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
      label: "Payout Processing",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/programType",
              layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
                  label: "Program",
                  options: [{}],
                  color: "secondary",
                  required: true,
                  conditionalLoadFunc: "loadCycle",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/programCycle",
              layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
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
              layout: {
                xs: 11,
                sm: 11,
                md: 8.5,
                lg: 9.5,
              },
            },
            {
              type: "Control",
              scope: "#/properties/load",
              options: {
                widget: "Button",
              },
              layout: {
                xs: 11,
                sm: 11,
                md: 2.5,
                lg: 1.5,
              },
              value: {
                content: {
                  name: "Search",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  funcName: "searchData",
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
      type: "Control",
      scope: "#/properties/DataListWrapper",
      label: "Audit Data List",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/AuditList",
              layout: 11,
              options: {
                widget: "Table",
                loadFunction: "auditTableDataFunction",
                tableStyle: {
                  backgroundColor: "#F5F5F5",
                },
                buttonInStarting: false,
                ApiDetails: {
                  DataApi: "",
                },
                columns: [
                  {
                    field: "id",
                    headerName: "Id",
                    width: "40",
                    widget: "api",
                  },
                  {
                    field: "type",
                    width: "150",
                    headerName: "Type",
                    widget: "api",
                  },
                  {
                    field: "info",
                    headerName: "Info",
                    width: "150",
                    widget: "api",
                  },
                  {
                    field: "createdOn",
                    width: "240",
                    headerName: "Created On",
                    widget: "api",
                  },
                  {
                    field: "modifiedOn",
                    width: "240",
                    headerName: "Updated On",
                    widget: "api",
                  },
                  {
                    field: "entityName",
                    width: "240",
                    headerName: "Entity Name",
                    widget: "api",
                  },
                ],
              },
            },
          ],
        },
      },
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
              layout: 11,
              options: {
                widget: "Table",
                loadFunction: "exceptionTableDataFunction",
                tableStyle: {
                  backgroundColor: "#F5F5F5",
                },
                buttonInStarting: false,
                ApiDetails: {
                  DataApi: "",
                },
                columns: [
                  {
                    field: "id",
                    headerName: "Id",
                    width: "40",
                    widget: "api",
                  },
                  {
                    field: "code",
                    width: "150",
                    headerName: "Code",
                    widget: "api",
                  },
                  {
                    field: "description",
                    headerName: "Description",
                    width: "150",
                    widget: "api",
                  },
                  {
                    field: "createdOn",
                    width: "240",
                    headerName: "Created On",
                    widget: "api",
                  },
                  {
                    field: "modifiedOn",
                    width: "240",
                    headerName: "Updated On",
                    widget: "api",
                  },
                ],
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
      layout: {
        xs: 12,
        sm: 4,
        md: 3,
        lg: 2,
      },
      value: {
        content: {
          name: "Load",
          variant: "contained",
          color: "info",
          type: "text",
          funcName: "LoadFileData",
          size: "large",
        },
        style: {
          textAlign: "right",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/startWorkflow",
      layout: {
        xs: 0,
        sm: 0,
        md: 0,
        lg: 1,
      },
      options: {
        widget: "EmptyBox",
      }},
    {
      type: "Control",
      scope: "#/properties/compute",
      options: {
        widget: "Button",
      },
      layout: {
        xs: 12,
        sm: 4,
        md: 3,
        lg: 2,
      },
      value: {
        content: {
          name: "Compute",
          variant: "contained",
          color: "info",
          type: "text",
          funcName: "ComputeData",
          size: "large",
        },
        style: {
          textAlign: "right",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/startWorkflow",
      layout: {
        xs: 0,
        sm: 0,
        md: 0,
        lg: 1,
      },
      options: {
        widget: "EmptyBox",
      }},
    {
      type: "Control",
      scope: "#/properties/startWorkflow",
      options: {
        widget: "Button",
      },
      layout: {
        xs: 12,
        sm: 4,
        md: 3,
        lg: 2,
      },
      value: {
        content: {
          name: "Start Workflow",
          variant: "contained",
          color: "info",
          type: "text",
          funcName: "SartWorkflow",
          size: "large",
        },
        style: {
          textAlign: "right",
        },
      },
    }]}}}
  ],
};
