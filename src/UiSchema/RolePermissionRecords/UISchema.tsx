export const RolePermissionRecordsUISchema = {
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
              config: { layout: 5.5,
                main: { heading: "Role Permission Master" },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "500",

                  fontSize: "20px",

                  background: "white",
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
                  styleDefault: true,
                  tooltipMessage: "Add New Record",
                  click: "newRecord",
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
                    accessorKey: "permName",

                    header: "Name",
                  },
                ],
                actionColumns: [
                  {
                    accessorKey: "Edit_Approve_Records",
                    header: "Edit_Records",

                    widget: {
                      type: "Control",
                      scope: "#/properties/Edit_Records",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                        main: {
                          color: "info",
                          click: "Edit_Approve_Records",
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

                    hide: true,
                  },
                  {
                    accessorKey: "permName",

                    header: "Name",
                  },
                ],
                actionColumns: [
                  {
                    accessorKey: "RolePermissionApprover",
                    header: "Approve",

                    widget: {
                      type: "Control",
                      scope: "#/properties/Approve2Button",
                      fieldName: "RolePermissionApprover",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                        main: {
                          icon: "ApproveIcon",
                          click: "RolePermissionApprover",
                          color: "success",
                          tooltipMessage: "Approve this Record",
                        },
                      },
                    },
                  },
                  {
                    accessorKey: "Reject_Records",
                    header: "Reject",

                    widget: {
                      type: "Control",
                      scope: "#/properties/RejectButton",
                      fieldName: "Reject_Records",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                        main: {
                          icon: "RejectIcon",
                          color: "error",
                          click: "Reject_Records",
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
                    accessorKey: "permName",

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
      config: { layout: 6 },
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
