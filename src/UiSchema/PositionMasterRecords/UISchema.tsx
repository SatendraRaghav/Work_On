export const PositionMasterRecordsUISchema = {
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
                  heading: "Position Master",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/New_Record",

              options: {
                widget: "IconButton",
              },
              config: {
                layout: {
                  xs: 6,
                  sm: 4,
                  md: 5.5,
                  lg: 5.5,
                },
                main: {
                  icon: "AddIcon",
                  size: "small",
                  styleDefault: true,
                  tooltipMessage: "Add New Record",
                  onClick: "newRecord",
                },
                style: {
                  float: "right",
                },
              },
            },
          ],
        },
      },
    },
    {
      type: "TabLayout",
      config: {
        main: {
          labels: ["Approve", "Pending", "Reject"],
          layout: 12,
        },
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/ApproveRecords",
          options: {
            widget: "Table",
          },
          config: {
            main: {
              columns: {
                dataColumns: [
                  {
                    accessorKey: "id",
                    header: "id",
                  },
                  {
                    accessorKey: "name",

                    header: "Name",
                  },
                ],
                actionColumns: [
                  {
                    accessorKey: "Edit_Approve_Records",
                    header: "Edit",

                    widget: {
                      type: "Control",
                      scope: "#/properties/Edit_Records",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                        main: {
                          color: "info",
                          size: "small",
                          icon: "EditIcon",
                          tooltipMessage: "Edit This Record",
                        },
                        style: {
                          color: "#3949ab",
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
          scope: "#/properties/PendingRecords",
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
                    header: "id",
                  },
                  {
                    accessorKey: "name",

                    header: "Name",
                  },
                ],
                actionColumns: [
                  {
                    header: "Approve",
                    field: "PositionApprover",

                    widget: {
                      type: "Control",
                      scope: "#/properties/Approve2Button",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                        main: {
                          icon: "ApproveIcon",
                          color: "success",
                          onClick: "PositionApprover",
                          tooltipMessage: "Approve This Record",
                        },
                      },
                    },
                  },
                  {
                    header: "Reject",
                    field: "Reject_Records",
                    flex: 1,
                    widget: {
                      type: "Control",
                      scope: "#/properties/RejectButton",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                        main: {
                          icon: "RejectIcon",
                          color: "error",
                          onClick: "Reject_Records",
                          tooltipMessage: "Reject This Record",
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
          scope: "#/properties/RejectRecords",
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
                    header: "id",
                  },
                  {
                    accessorKey: "name",

                    header: "Name",
                  },
                ],
              },
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
  ],
};
