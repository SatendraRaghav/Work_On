export const ProgramMasterCycleRecordUiSchema = {
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
                  heading: "Cycle Master",
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
                  name: "New Records",
                  icon: "AddIcon",
                  size: "small",
                  click:"addNewRecords",
                  styleDefault: true,
                  tooltipMessage: "Add New Record"
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
                layout: 12,
                dataColumns: [
                  {
                    accessorKey: "id",
                    // width: "100",
                    header: "Id",

                    hide: true,
                  },
                  {
                    accessorKey: "name",
                    // width: "80",

                    header: "Cycle Name",
                    cellOverflow: "wrap",
                  },
                  {
                    accessorKey: "program",
                    // width: "80",

                    header: "Program Name",
                    cellOverflow: "wrap",
                  },
                  {
                    accessorKey: "startDate",
                    header: "Start Date",
                  },
                  {
                    accessorKey: "endDate",
                    header: "End Date",
                  },
                ],
                actionColumns: [
                  {
                    accessorKey: "Edit_Approve_Records",
                    header: "Edit",
                    width: "100",
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
                          click:"Edit_Approve_Records",
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

          options: {
            widget: "Table",
          },
          config: {
            main: {
              layout: 12,
              columns: {
                dataColumns: [
                  {
                    accessorKey: "id",

                    align: "right",
                    hide: true,
                  },
                  {
                    accessorKey: "name",

                    header: "Cycle Name",
                  },
                  {
                    accessorKey: "program",

                    header: "Program Name",
                  },
                  {
                    accessorKey: "startDate",
                    header: "Start Date",
                  },
                  {
                    accessorKey: "endDate",
                    header: "End Date",
                  },
                ],
                actionColumns: [
                  {
                    accessorKey: "Approve_Records",
                    header: "Approve",
                    width: "100",
                    widget: {
                      type: "Control",
                      scope: "#/properties/Approve Records",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                        main: {
                          icon: "ApproveIcon",
                          click: "Approve_Records",
                          color: "success",
                          tooltipMessage: "Approve This Record",
                        },
                      },
                    },
                  },

                  {
                    accessorKey: "Reject_Records",
                    header: "Reject",
                    width: "100",
                    widget: {
                      type: "Control",
                      scope: "#/properties/Reject_Records",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                        main: {
                          icon: "RejectIcon",
                          color: "error",
                          click:"Reject_Records",
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
                    // width: "100",

                    hide: true,
                  },
                  {
                    accessorKey: "name",

                    header: "Cycle Name",
                  },
                  {
                    accessorKey: "program",
                    // width: "80",

                    header: "Program Name",
                  },
                  {
                    accessorKey: "startDate",
                    header: "Start Date",
                    width: "120",
                  },
                  {
                    accessorKey: "endDate",
                    header: "End Date",
                    width: "120",
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
      scope: "#/properties/notify",
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
      },
    },
  ],
};
