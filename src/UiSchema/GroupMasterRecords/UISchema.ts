export const GroupMasterRecordsUISchema: any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 3,
          header: true,
        },
        defaultStyle: true,
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
              heading: "Group Master",
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
          id: "groupMaster",
          tabLabels: ["Approve", "Pending For Approval", "Reject", "Pending"],
          layout: 12,
        },
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/GroupApproveRecords",
          options: {
            widget: "Table",
          },
          config: {
            main: {},
          },
          elements: [
            {
              accessorKey: "id",
              header: "id",
            },
            {
              accessorKey: "name",

              header: "Name",
            },
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
                    size: "small",
                    icon: "EditIcon",
                    tooltipMessage: "Edit This Record",
                    onClick: "Edit_Approve_Records",
                  },
                  style: {
                    color: "#3949ab",
                  },
                },
              },
            },
            {
              accessorKey: "View_Records",
              header: "View",

              widget: {
                type: "Control",
                scope: "#/properties/View_Records",
                options: {
                  widget: "IconButton",
                },
                config: {
                  main: {
                    color: "info",
                    size: "small",
                    icon: "SearchIcon",
                    onClick: "View_Records",
                    tooltipMessage: "View This Record",
                  },
                  style: {
                    color: "#3949ab",
                  },
                },
              },
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/PendingRecords",
              layout: 12,
              options: {
                widget: "Table",
              },
              config: {
                main: {},
              },
              elements: [
                {
                  accessorKey: "Selected",
                  header: "Selected",
                  size: 100,
                  widget: {
                    type: "Control",
                    scope: "#/properties/checked",
                    options: {
                      widget: "CheckBox",
                    },
                    config: {
                      main: {},
                    },
                  },
                },
                {
                  accessorKey: "id",
                  header: "id",
                },
                {
                  accessorKey: "name",

                  header: "Name",
                },
                {
                  accessorKey: "View_Records",
                  header: "View",

                  widget: {
                    type: "Control",
                    scope: "#/properties/View_Records",
                    options: {
                      widget: "IconButton",
                    },
                    config: {
                      main: {
                        color: "info",
                        size: "small",
                        icon: "SearchIcon",
                        onClick: "View_Records",
                        tooltipMessage: "View This Record",
                      },
                      style: {
                        color: "#3949ab",
                      },
                    },
                  },
                },
              ],
            },
            {
              type: "Control",
              scope: "#/properties/remarks",

              options: {
                widget: "TextArea",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 11.5, lg: 11.5 },
                main: {
                  label: "Remarks",
                  errorMessage: "Remarks is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/load",
              options: {
                widget: "Button",
              },

              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 2.75,
                  lg: 2.75,
                },
                main: {
                  name: "Approve",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  onClick: "Approve_Records",
                  size: "large",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/load",
              options: {
                widget: "Button",
              },

              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 2.75,
                  lg: 2.75,
                },
                main: {
                  name: "Reject",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  onClick: "Reject_Records",
                  size: "large",
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
                  md: 5.5,
                  lg: 5.5,
                },
              },
              options: {
                widget: "EmptyBox",
              },
            },
          ],
        },
        {
          type: "Control",
          scope: "#/properties/RejectRecords",
          layout: 12,
          options: {
            widget: "Table",
          },
          config: {
            main: {},
          },
          elements: [
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
        {
          type: "Control",
          scope: "#/properties/RaisedRecords",
          layout: 12,
          options: {
            widget: "Table",
          },
          config: {
            main: {
              columns: {},
            },
          },
          elements: [
            {
              accessorKey: "id",
              // width: "100",
              header: "Id",
            },
            {
              accessorKey: "name",

              header: "Name",
            },
            {
              accessorKey: "type",
              header: "Type",
            },
            {
              accessorKey: "Edit_Approve_Records",
              header: "Actions",
              width: 150,
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
                    tooltipMessage: "View All Actions",
                    onClick: "View_Actions",
                    icon: "ReportIcon",
                  },
                  style: {
                    color: "#3949ab",
                  },
                },
              },
            },
            {
              accessorKey: "View_Records",
              header: "View",

              widget: {
                type: "Control",
                scope: "#/properties/View_Records",
                options: {
                  widget: "IconButton",
                },
                config: {
                  main: {
                    color: "info",
                    size: "small",
                    icon: "SearchIcon",
                    onClick: "View_Records",
                    tooltipMessage: "View This Record",
                  },
                  style: {
                    color: "#3949ab",
                  },
                },
              },
            },
          ],
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
