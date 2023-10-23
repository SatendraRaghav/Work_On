export const InvoiceGenerationUiSchema:any = {
  type: "HorizontalLayout",
  pageName: "InvoiceGeneration",
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
              scope: "#/properties/pageHeading",
            
              options: {
                widget: "Box",
              },
              config: {  
                layout: 11.7,
                main: {
                  heading: "Invoice Generation",
                },
              },
            },
           
          ],
    },
    {
      type: "WrapperLayout",
      config:{
        main:{
        label: "Search Program",
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
              loadFunction: "loadCycle",
              options: [],
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
              options: [],
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
      type: "WrapperLayout",
      config:{
        main:{
        label:  "Case Review List",
        divider:true,
        },
        defaultStyle:true
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/caseLevelReportList",
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
                    accessorKey: "Id",
                    header: "Id",
                  },
                  {
                    accessorKey: "FLS Code",

                    header: "FLS Code",
                  },
                  {
                    accessorKey: "FLS Name",
                    header: "FLS Name",
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
            layout: { xs: 11, sm: 11, md: 6.5, lg: 6.5 },
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
              width: {xs:"90%",md:"32%"},
              float: "right",
            },
          },
        },
      ],
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
      type: "WrapperLayout",
      config:{
        main:{
        label:  "Invoice Review List",
        divider:true,
        },
        defaultStyle:true
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/invoiceReportList",
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
                    accessorKey: "Id",
                    header: "Id",
                  },
                  {
                    accessorKey: "InvoiceNo",

                    header: "Invoice No.",
                  },
                  {
                    accessorKey: "InvoiceDate",
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
                        widget: "IconButton",
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
                    // header: "Delete File",
                    // accessorKey: "deleteFile",

                    widget: {
                      type: "Control",
                      scope: "#/properties/Delete_Records",
                      options: {
                        widget: "IconButton",
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
              options: [{}
                // { label: "Approve", value: "Approve" },
                // { label: "Reject", value: "Reject" },
              ],

              required: true,
            }
          },
        },
        {
          type: "Control",
          scope: "#/properties/actionBtn",
          options: {
            widget: "Button",
          },

          config: {
            layout: { xs: 11, sm: 11, md: 6.5, lg: 6.5 },
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
              width: {xs:"90%",md:"32%"},
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
