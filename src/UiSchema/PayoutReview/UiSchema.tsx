export const PayoutReviewUiSchema = {
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
          ],
        },
      },
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
              scope: "#/properties/programType",
              layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
                  label: "Program",
                  // variant:"standard",
                  options: [{}],
                  // color: "secondary",
                  conditionalLoadFunc: "loadCycle",
                  required: true,
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
                  required: true,
                },
                style: {
                  marginTop: "25px",
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
                  marginTop: "25px",
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
      label: "Report List",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/agencyRecords",
              labels: ["Case", "Summary"],
              layout: 11.8,
              options: {
                widget: "Tab",
                detail: {
                  type: "HorizontalLayout",
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
                  ],
                },
              },
            },
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/pendingListWrapper",
      label: "Pending Actions",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/pendingActionList",
              layout: 11.5,
              options: {
                widget: "Table",
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
                    { label: "Approve", value: "approve" },
                    { label: "Reject", value: "reject" },
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
                  variant: "contained",
                  color: "info",
                  type: "text",
                  page: "PayoutReview",
                  funcName: "actionFunction",
                  size: "small",
                },
                style: {
                  width: "20%",
                  float: "right",
                },
              },
            },
          ],
        },
      },
    },
  ],
};
