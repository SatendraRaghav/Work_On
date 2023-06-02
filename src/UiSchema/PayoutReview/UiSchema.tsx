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
          layout: 5.5,
          options: {
            widget: "Box",
          },
          value: {
            content: {
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
          layout: 5.5,
        },
      ]}},
    },
    {
      type: "HorizontalLayout",
      defaultStyle: true,
      elements: [
        
        {
          type: "Control",
          scope: "#/properties/heading",
          layout: 11.5,
          options: {
            widget: "Box",
          },
          value: {
            content: {
              heading: "Search Program",
              // dividerAvailable:true
            },
          },
          style:{
            marginTop:"2px"
          }
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "Notify",
          },
          layout: 8,
        },
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
              loadFunction: "loadCycle",
              errorMessage:"Program is not selected"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/programCycle",
          layout: {
            xs: 11,
            sm: 11,
            md: 5.5,
            lg: 5.5,
          },
          options: {
            widget: "SelectInputField",
          },
          value: {
            content: {
              label: "Program Cycle",
              options: [{}],
              programType: true,
              errorMessage:"Program Cycle is not selected"
            },
          },
        },

        {
          type: "Control",
          scope: "#/properties/case",
          layout: {
            xs: 11,
            sm: 11,
            md: 5.5,
            lg: 5.5,
          },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
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
          layout: {
            xs: 11,
            sm: 11,
            md: 5.5,
            lg: 5.5,
          },
          value: {
            content: {
              name: "Search",
              variant: "contained",
              color: "info",
              type: "text",
              funcName: "loadTable",
              size: "medium",
            },
            style: {
              width: "20%",
              float: "right",
              marginTop: "15px"

            },
          },
        },
      ],
    },
    {
      type: "HorizontalLayout",
      defaultStyle: true,
      elements: [
        {
          type: "Control",
          scope: "#/properties/heading",
          layout: 11.5,
          options: {
            widget: "Box",
          },
          value: {
            content: {
              heading: "Report List",
              dividerAvailable:true
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
          type: "TabLayout",
          labels: ["Case", "Summary"],
          layout: 11.8,
          elements: [
            {
              type: "Control",
              scope: "#/properties/caseReportList",
              layout: 12,
              options: {
                widget: "Table",

                loadFunction: "caseTableDataFunction",
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
                    field: "name",
                    width: "150",
                    headerName: "Name",
                    widget: "api",
                  },
                  {
                    field: "disbursalAmount",
                    headerName: "Disbursal Amount",
                    width: "150",
                    widget: "api",
                  },
                  {
                    field: "releasedAmount",
                    width: "240",
                    headerName: "Released Amount",
                    widget: "api",
                  },
                  {
                    field: "payout",
                    width: "240",
                    headerName: "Payout",
                    widget: "api",
                  },
                ],
              },
            },
            {
              type: "Control",
              scope: "#/properties/summaryReportList",
              layout: 12,
              options: {
                widget: "Table",
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
                    field: "payeeName",
                    width: "150",
                    headerName: "Payee Name",
                    widget: "api",
                  },
                  {
                    field: "payout",
                    headerName: "Payout",
                    width: "150",
                    widget: "api",
                  },
                ],
              },
            },
          ]
        },
      ],
    },
    {
      type: "HorizontalLayout",
      defaultStyle: true,
      elements: [
        {
          type: "Control",
          scope: "#/properties/heading",
          layout: 11.5,
          options: {
            widget: "Box",
          },
          value: {
            content: {
              heading: "Pending Actions",
              dividerAvailable:true
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
          scope: "#/properties/pendingActionList",
          layout: 11.5,
          options: {
            widget: "Table",
            addCheckBoxRow: true,
            loadFunction: "workflowTableDataFunction",
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
                field: "name",
                width: "150",
                headerName: "Name",
                widget: "api",
              },
              {
                field: "payeeName",
                width: "150",
                headerName: "Payee Name",
                widget: "api",
              },
              {
                field: "payout",
                headerName: "Payout",
                width: "150",
                widget: "api",
              },
            ],
          },
        },
        {
          type: "Control",
          scope: "#/properties/heading",
          layout: 11.5,
          options: {
            widget: "Box",
          },
          value: {
            content: {
              heading: " ",
              // dividerAvailable:true
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/remarks",
          layout: {
            xs: 11,
            sm: 11,
            md: 5.5,
            lg: 5.5,
          },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Remarks",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/actions",
          layout: {
            xs: 11,
            sm: 11,
            md: 5.5,
            lg: 5.5,
          },
          options: {
            widget: "SelectInputField",
          },
          value: {
            content: {
              label: "Action",
              options: [
                { },
              
              ],
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "EmptyBox",
          },
          layout: {
            xs: 11,
            sm: 11,
            md: 5.5,
            lg: 5.5,
          },
        },
        {
          type: "Control",
          scope: "#/properties/actionBtn",
          options: {
            widget: "Button",
          },
          layout: {
            xs: 11,
            sm: 11,
            md: 5.5,
            lg: 5.5,
          },
          value: {
            content: {
              name: "Submit",
              startIcon: "ApproveIcon",
              variant: "contained",
              color: "info",
              page: "PayoutReview",
              funcName: "actionFunction",
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
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "DailogBox",
      }
    },
  ],
};
