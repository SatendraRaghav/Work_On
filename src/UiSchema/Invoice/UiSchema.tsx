export const InvoiceGenerationUiSchema = {
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
                  heading: "Invoice Generation",
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
      scope: "#/properties/InvoiceWrapper",
      label: "Invoice",
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
                  conditionalLoadFunc: "loadCycle",
                  options: [{}],
                  color: "secondary",
                  required: true,
                }
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
                  options: [{}],
                  programType: true,
                  required: true,
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/searchBtn",
              layout: {
                xs: 11,
                sm: 11,
                md: 8.5,
                lg: 9.5,
              },
              options: {
                widget: "EmptyBox",
              }},
            {
              type: "Control",
              scope: "#/properties/searchBtn",
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
                  page: "InvoiceGeneration",
                  funcName: "loadTables",
                  size: "large",
                }
              },
            },
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/reportListWrapper",
      label: "Case List",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/caseLevelReportList",
              layout: 11,
              options: {
                widget: "Table",
                loadFunction: "caseTableDataLoad",
                tableStyle: {
                  backgroundColor: "#F5F5F5",
                },
                buttonInStarting: false,
                ApiDetails: {
                  DataApi: "",
                },
                columns: [
                  {
                    field: "Id",
                    headerName: "Id",
                    width: "40",
                    widget: "api",
                  },
                  {
                    field: "Name",
                    width: "150",
                    headerName: "Name",
                    widget: "api",
                  },
                  {
                    field: "Disbursal Amount",
                    headerName: "Disbursal Amount",
                    width: "150",
                    widget: "api",
                  },
                  {
                    field: "Released Amount",
                    width: "240",
                    headerName: "Released Amount",
                    widget: "api",
                  },
                  {
                    field: "Payout",
                    width: "240",
                    headerName: "Payout",
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
      label: "Case List",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
    {
      type: "Control",
      scope: "#/properties/invoiceNumber",
      layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
      options: {
        widget: "InputField",
      },
      value: {
        content: {
          label: "Invoice No.",
        },
        style: {
          marginTop: "25px",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/generateBtn",
      options: {
        widget: "Button",
      },
      layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
      value: {
        content: {
          name: "Generate",
          variant: "contained",
          color: "info",
          type: "text",
          page: "InvoiceGeneration",
          funcName: "generateInvoice",
          size: "large",
        },
        style:{
          width:"20%",
          float:"left"
        }
      },
    }
  ]}}},
    {
      type: "Control",
      scope: "#/properties/reportListWrapper",
      label: "Invoice List",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/invoiceReportList",
              layout: 11,
              options: {
                widget: "Table",
                loadFunction: "invoiceTableDataLoad",
                tableStyle: {
                  backgroundColor: "#F5F5F5",
                },
                buttonInStarting: false,
                ApiDetails: {
                  DataApi: "",
                },
                columns: [
                  {
                    field: "Id",
                    headerName: "Id",
                    width: "40",
                    widget: "api",
                  },
                  {
                    field: "Invoice No.",
                    width: "150",
                    headerName: "Invoice No.",
                    widget: "api",
                  },
                  {
                    field: "Invoice Date",
                    headerName: "Invoice Date",
                    width: "150",
                    widget: "api",
                  },
                  {
                    field: "Payout",
                    width: "240",
                    headerName: "Invoice Amount",
                    widget: "api",
                  },
                  {
                    headerName: "Download File",
                    field: "downloadFile",
                    width: "120",
                    widget: {
                      type: "Control",
                      scope: "#/properties/Download_Records",
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
                  {
                    headerName: "Delete File",
                    field: "deleteFile",
                    width: "120",
                    widget: {
                      type: "Control",
                      scope: "#/properties/Delete_Records",
                      options: {
                        widget: "Button",
                      },
                      value: {
                        content: {
                          name: "Delete",
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
            },
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/reportListWrapper",
      label: "Invoice List",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
    {
      type: "Control",
      scope: "#/properties/actions",
      layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
      options: {
        widget: "SelectInputField",
      },
      value: {
        content: {
          label: "Action",
          options: [
            { label: "Approve", value: "approve" },
            { label: "Reject", value: "reject" },
          ],

          required: true,
        },
        style: {
          marginTop: "25px",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/actionBtn",
      options: {
        widget: "Button",
      },
      layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
      value: {
        content: {
          name: "Submit",
          variant: "contained",
          color: "info",
          type: "text",
          page: "InvoiceGeneration",
          funcName: "actionFunction",
          size: "large",
        },
        style:{
          width:"30%",
          float:"right"
        }
      },
    }]}}}
  ],
};
