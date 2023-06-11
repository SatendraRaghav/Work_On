export const PayoutReviewUiSchema = {
  type: "HorizontalLayout",
  pageName: "PayoutReview",
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
                  heading: "Payout Review",
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
          },
          style: {
            marginTop: "2px",
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "Notify",
          },
          config: { layout: 8 },
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
              options: [{}],
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
              heading: "Report List",
              dividerAvailable: true,
            },
          },
        },
        {
          type: "TabLayout",
          config: {
            main: {
              labels: ["Case", "Summary"],
              layout: 12,
            },
          },

          elements: [
            {
              type: "Control",
              scope: "#/properties/caseReportList",
              layout: 12,
              options: {
                widget: "Table",
              },
              config: {
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
              layout: 12,
              options: {
                widget: "Table",
              },
              config: {
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
              heading: "Pending Actions",
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
          scope: "#/properties/pendingActionList",

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
              md: 5.5,
              lg: 5.5,
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
              md: 5.5,
              lg: 5.5,
            },
            main: {
              label: "Action",
              options: [{}],
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
              md: 5.5,
              lg: 5.5,
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
              md: 5.5,
              lg: 5.5,
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
              width: "25%",
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
