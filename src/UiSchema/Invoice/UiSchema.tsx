export const InvoiceGenerationUiSchema = {
  type: "HorizontalLayout",
  pageName: "InvoiceGeneration",
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
              config: { layout: 5.5 },
            },
          ],
        },
      },
    },
    {
      type: "HorizontalLayout",
      config: { defaultStyle: true },
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
            // style: {
            //   paddingTop: "5px",
            // },
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
          scope: "#/properties/EmptyBox",
          options: {
            widget: "EmptyBox",
          },
          config: { layout: 5 },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "EmptyBox",
          },
          config: { layout: 5 },
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
              loadFunction: "loadCycle",
              options: [{}],
              color: "secondary",
              errorMessage: "Program is not selected",
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
              options: [{}],
              programType: true,
              errorMessage: "Program Cycle is not selected",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/searchBtn",
          config: {
            layout: {
              xs: 11,
              sm: 11,
              md: 8.5,
              lg: 9.5,
            },
          },
          options: {
            widget: "EmptyBox",
          },
        },
        {
          type: "Control",
          scope: "#/properties/searchBtn",
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
              variant: "contained",
              color: "info",
              type: "text",
              page: "InvoiceGeneration",
              onClick: "loadTables",
              size: "large",
            },
          },
        },
      ],
    },
    {
      type: "HorizontalLayout",
      config: { defaultStyle: true },
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
              heading: "Case Review List",
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
          config: { layout: 5.5 },
        },
        {
          type: "Control",
          scope: "#/properties/caseLevelReportList",
          options: {
            widget: "Table",
          },
          config: {
            layout: 11.5,
            main: {
              allRowsData: [],
              columns: {
                dataColumns: [
                  {
                    accessorKey: "Id",
                    header: "Id",
                  },
                  {
                    accessorKey: "Name",

                    header: "Name",
                  },
                  {
                    accessorKey: "Disbursal Amount",
                    header: "Disbursal Amount",
                  },
                  {
                    accessorKey: "Released Amount",

                    header: "Released Amount",
                  },
                  {
                    accessorKey: "Payout",

                    header: "Payout",
                  },
                ],
              },
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/invoiceNumber",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Invoice No.",
              errorMessage: "Invoice No. is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/generateBtn",
          options: {
            widget: "Button",
          },

          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              name: "Generate",
              startIcon: "ApproveIcon",
              variant: "contained",
              color: "info",
              type: "text",
              page: "InvoiceGeneration",
              onClick: "generateInvoice",
              size: "large",
            },
            style: {
              width: "35%",
              float: "right",
            },
          },
        },
      ],
    },
    {
      type: "HorizontalLayout",
      config: { defaultStyle: true },
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
              heading: "Invoice Review List",
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
        {
          type: "Control",
          scope: "#/properties/invoiceReportList",
          options: {
            widget: "Table",
          },
          config: {
            layout: 11.5,
            main: {
              allRowsData: [],
              columns: {
                dataColumns: [
                  {
                    accessorKey: "Id",
                    header: "Id",
                  },
                  {
                    accessorKey: "Invoice No.",

                    header: "Invoice No.",
                  },
                  {
                    accessorKey: "Invoice Date",
                    header: "Invoice Date",
                  },
                  {
                    accessorKey: "Payout",

                    header: "Invoice Amount",
                  },
                ],
                actionColumns: [
                  {
                    header: "Download File",
                    accessorKey: "downloadFile",

                    widget: {
                      type: "Control",
                      scope: "#/properties/Download_Records",
                      options: {
                        widget: "Button",
                      },
                      config: {
                        main: {
                          color: "info",
                          size: "small",
                          icon: "DownloadIcon",
                          onClick: "downloadFile",
                        },
                      },
                    },
                  },
                  {
                    header: "Delete File",
                    accessorKey: "deleteFile",

                    widget: {
                      type: "Control",
                      scope: "#/properties/Delete_Records",
                      options: {
                        widget: "Button",
                      },
                      config: {
                        main: {
                          color: "info",
                          size: "small",
                          icon: "DeleteIcon",
                          onClick: "deleteFile",
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
          scope: "#/properties/actions",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Action",
              options: [
                { label: "Approve", config: "Approve" },
                { label: "Reject", config: "Reject" },
              ],

              required: true,
            },
            style: {
              // marginTop: "25px",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/actionBtn",
          options: {
            widget: "Button",
          },

          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              name: "Submit",
              startIcon: "ApproveIcon",
              variant: "contained",
              color: "info",
              page: "InvoiceGeneration",
              onClick: "actionFunction",
              size: "large",
            },
            style: {
              width: "35%",
              float: "right",
            },
          },
        },
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
  ],
};
