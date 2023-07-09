export const ProgramMasterCycleRecordUiSchema: any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 3,
        },
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/programType",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8.5,
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
            layout: 3,
            main: {
              name: "New Records",
              icon: "AddIcon",
              size: "small",
              onClick: "addNewRecords",
              styleDefault: true,
              tooltipMessage: "Add New Record",
            },
            style: {
              float: "right",
            },
          },
        },
      ],
    },

    {
      type: "TabLayout",
      config: {
        main: {
          id:"cycle",
          tabLabels: ["Approve", "Pending", "Reject"],
          layout: 12,
        },
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/CycleApproveRecords",
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
                          onClick: "Edit_Approve_Records",
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
                          onClick: "Approve_Records",
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
  ],
};
