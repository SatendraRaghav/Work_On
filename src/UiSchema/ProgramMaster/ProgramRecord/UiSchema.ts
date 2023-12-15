export const ProgramMasterRecordUiSchema: any = {
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
          scope: "#/properties/masterName",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8.5,
            main: {
              heading: " Program Master",
            },
            style: {
              // marginTop: "18px",
              fontFamily: "Roboto",
              fontWeight: "500",
              // paddingTop: "8px",
              fontSize: "20px",
              // paddingBottom: "8px",
              // borderRadius: "20px",
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
              tooltipMessage: "Add New Record",
              styleDefault: true,

              onClick: "addNewRecords",
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
          id: "Program",
          tabLabels: ["Approve", "Pending For Approval", "Reject", "Pending"],
          layout: 12,
        },
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/ProgramApproveRecords",
          options: {
            widget: "Table",
          },
          elements: [
            {
              accessorKey: "id",
              // width: "100",
              header: "Id",
              flex: 1,
            },
            {
              accessorKey: "name",
              // width: "80",
              flex: 1,
              header: "Program Name",
            },
            {
              accessorKey: "description",
              header: "Description",
              flex: 1,
            },
            {
              accessorKey: "cyclePeriod",
              header: "Cycle Period",
              flex: 1,
            },
            {
              accessorKey: "cycleFrequency",
              header: "Cycle Frequency",
              flex: 1,
              align: "right",
            },
            {
              accessorKey: "Edit_Approve_Records",
              header: "Edit Records",
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
                    tooltipMessage: "Edit This Record",
                    onClick: "Edit_Approve_Records",
                    icon: "EditIcon",
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
          config: {
            main: {},
          },
        },

        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "control",
              scope: "#/properties/PendingRecords",
              layout: 12,
              options: {
                widget: "Table",
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
                  // width: "100",
                  header: "Id",
                  flex: 1,
                  hide: true,
                },
                {
                  accessorKey: "name",
                  // width: "80",
                  flex: 1,
                  header: "Program Name",
                },
                {
                  accessorKey: "description",
                  header: "Description",
                  flex: 1,
                },
                {
                  accessorKey: "cyclePeriod",
                  header: "Cycle Period",
                  flex: 1,
                },
                {
                  accessorKey: "cycleFrequency",
                  header: "Cycle Frequency",
                  flex: 1,
                  align: "right",
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
              config: {
                main: {},
              },
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
          elements: [
            {
              accessorKey: "id",
              // width: "100",
              header: "Id",
              flex: 1,
              hide: true,
            },
            {
              accessorKey: "name",
              // width: "80",
              flex: 1,
              header: "Program Name",
            },
            {
              accessorKey: "description",
              header: "Description",
              flex: 1,
            },
            {
              accessorKey: "cyclePeriod",
              header: "Cycle Period",
              flex: 1,
            },
            {
              accessorKey: "cycleFrequency",
              header: "Cycle Frequency",
              flex: 1,
              align: "right",
            },
          ],
          config: {
            main: {},
          },
        },
        {
          type: "Control",
          scope: "#/properties/RaisedRecords",

          options: {
            widget: "Table",
          },
          config: {
            main: {},
          },
          elements: [
            {
              accessorKey: "id",
              // width: "100",
              header: "Id",
              flex: 1,
              hide: true,
            },
            {
              accessorKey: "name",
              // width: "80",
              flex: 1,
              header: "Program Name",
            },
            {
              accessorKey: "description",
              header: "Description",
              flex: 1,
            },
            {
              accessorKey: "cyclePeriod",
              header: "Cycle Period",
              flex: 1,
            },
            {
              accessorKey: "cycleFrequency",
              header: "Cycle Frequency",
              flex: 1,
              align: "right",
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
      scope: "#/properties/notify",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
  ],
};
