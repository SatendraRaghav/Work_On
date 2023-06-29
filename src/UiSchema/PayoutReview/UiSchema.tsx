export const PayoutReviewUiSchema:any = {
  type: "HorizontalLayout",
  pageName: "PayoutReview",
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
                layout: 11.5,
                main: {
                  heading: "Payout Review",
                }
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
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Program",
              options: [],
              onClick: "loadCycle",
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
            layout: {
              xs: 11,
              sm: 11,
              md: 5.5,
              lg: 5.5,
            },
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
          scope: "#/properties/case",

          options: {
            widget: "InputField",
          },
          config: {
            layout: {
              xs: 11,
              sm: 11,
              md: 5.5,
              lg: 5.5,
            },
            main: {
              label: "Case Name",
            },
            style: {
              // marginBottom: "25px",
            },
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
              md: 5.5,
              lg: 5.5,
            },
            main: {
              name: "Search",
              startIcon:"SearchIcon",
              variant: "contained",
              color: "info",
              type: "text",
              onClick: "loadTable",
              size: "medium",
            },
            style: {
              width: {xs:"100%",sm:"90%",md:"30%"},
              float: "right",
              marginTop: "15px",
            },
          },
        },
      ],
    },
        {
          type: "TabLayout",
          config: { layout: 12,
            main: {
              tabLabels: ["Case", "Summary"],
              label:"Report List",
                divider:true,
            },
          },

          elements: [
            {
              type: "Control",
              scope: "#/properties/caseReportList",
             
              options: {
                widget: "Table",
              },
              config: { layout: 12,
                main: {
                  allRowsData: [],
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
                        accessorKey: "disbursalAmount",
                        header: "Disbursal Amount",
                      },
                      {
                        accessorKey: "releasedAmount",
                        width: "240",
                        header: "Released Amount",
                      },
                      {
                        accessorKey: "payout",
                        width: "240",
                        header: "Payout",
                      },
                    ],
                  },
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/summaryReportList",
            
              options: {
                widget: "Table",
              },
              config: {  layout: 12,
                main: {
                  columns: {
                    dataColumns: [
                      {
                        accessorKey: "id",
                        header: "Id",
                      },
                      {
                        accessorKey: "payeeName",

                        header: "Payee Name",
                      },
                      {
                        accessorKey: "payout",
                        header: "Payout",
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
        label:"Pending Actions",
        divider:true,
        },
        defaultStyle:true
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/pendingActionList",

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
                  },
                  {
                    accessorKey: "name",

                    header: "Name",
                  },
                  {
                    accessorKey: "payeeName",

                    header: "Payee Name",
                  },
                  {
                    accessorKey: "payout",
                    header: "Payout",
                  },
                ],
              },
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/heading",

          options: {
            widget: "Box",
          },
          config: {
            layout: 11.5,
            main: {
              heading: " ",
              // dividerAvailable:true
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/remarks",

          options: {
            widget: "InputField",
          },
          config: {
            layout: {
              xs: 11,
              sm: 11,
              md: 6,
              lg: 6,
            },
            main: {
              label: "Remarks",
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
            layout: {
              xs: 11,
              sm: 11,
              md: 6,
              lg: 6,
            },
            main: {
              label: "Action",
              options: [],
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
              xs: 11,
              sm: 11,
              md: 6,
              lg: 6,
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
            layout: {
              xs: 11,
              sm: 11,
              md: 6,
              lg: 6,
            },
            main: {
              name: "Submit",
              startIcon: "ApproveIcon",
              variant: "contained",
              color: "info",
              page: "PayoutReview",
              onClick: "actionFunction",
              size: "small",
            },
            style: {
              width: {xs:"100%",sm:"100%",md:"25%"},
              float: "right",
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
    }
  ],
};
