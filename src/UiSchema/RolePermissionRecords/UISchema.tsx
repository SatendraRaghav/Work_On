export const RolePermissionRecordsUISchema:any = {
  type: "HorizontalLayout",
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
              scope: "#/properties/programType",

              options: {
                widget: "Box",
              },
              config: { layout: 8.5,
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
                layout: 3,
                main: {
                  name: "New Records",
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

    {
      type: "TabLayout",
      config: {
        main: {
          tabLabels : ["Approve", "Pending", "Reject"],
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
                          onClick: "Edit_Approve_Records",
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
                          onClick: "RolePermissionApprover",
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
    
  ],
};
