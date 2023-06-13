export const UserMasterRecordsUISchema = {
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
                  heading: "User Master",
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
                  onClick: "newRecord",
                  tooltipMessage: "Add New Record",
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
      type: "Control",
      scope: "#/properties/EmptyBox",
      config: {
        layout: {
          xs: 5.5,
          sm: 7.5,
          md: 8,
          lg: 8,
        },
      },
      options: {
        widget: "EmptyBox",
      },
    },
    {
      type: "TabLayout",
      config: {
        layout: 12,
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
                  dataColumns: [
                    {
                      accessorKey: "id",
                      header: "id",
                    },
                    {
                      accessorKey: "name",

                      header: "Login ID",
                    },
                    {
                      accessorKey: "email",

                      header: "Email",
                    },
                    {
                      accessorKey: "firstName",

                      header: "First Name",
                    },
                    {
                      accessorKey: "lastName",

                      header: "Last Name",
                    },

                    {
                      accessorKey: "crn",

                      header: "CRN",
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
                            onClick:"Edit_Approve_Records",
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
              columns: {
                dataColumns: [
                  {
                    accessorKey: "id",
                    header: "id",
                  },
                  {
                    accessorKey: "name",

                    header: "Login ID",
                  },
                  {
                    accessorKey: "email",

                    header: "Email",
                  },
                  {
                    accessorKey: "firstName",

                    header: "First Name",
                  },

                  {
                    accessorKey: "lastName",

                    header: "Last Name",
                  },

                  {
                    accessorKey: "crn",

                    header: "CRN",
                  },
                ],
                actionColumns: [
                  {
                    accessorKey: "UserApprover",
                    header: "Approve",

                    widget: {
                      type: "Control",
                      scope: "#/properties/Approve2Button",
                      fieldName: "Approve_Records",
                      options: {
                        widget: "IconButton",
                      },
                      config: {
                       main: {
                          icon: "ApproveIcon",
                          color: "success",
                          onClick:"UserApprover",
                          tooltipMessage: "Approve This Record",
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
                          onClick:"Reject_Records",
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

                    header: "Login ID",
                  },
                  {
                    accessorKey: "email",

                    header: "Email",
                  },
                  {
                    accessorKey: "firstName",

                    header: "First Name",
                  },

                  {
                    accessorKey: "lastName",

                    header: "Last Name",
                  },

                  {
                    accessorKey: "crn",

                    header: "CRN",
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
      config: {
        layout: 6,
      },
    },
  ],
};
