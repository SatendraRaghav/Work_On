export const ProgramMasterRecordUiSchema:any = {
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
        config: {layout: 12,
          main: {
            id:"Program",
            tabLabels : ["Approve", "Pending", "Reject"],
            
          },
        },
          elements: [
            {
              type: "Control",
              scope: "#/properties/ProgramApproveRecords",
              options: {
                widget: "Table",
              },
              config: {
                main: {
                  columns:{
                  dataColumns: [
                    {
                      accessorKey: "id",
                      // width: "100",
                      header: "Id",
                      flex: 1,
                      hide: true,
                      widget: "api",
                    },
                    {
                      accessorKey: "name",
                      // width: "80",
                      flex: 1,
                      header: "Program Name",
                      widget: "api",
                    },
                    {
                      accessorKey: "description",
                      header: "Description",
                      flex: 1,
                      widget: "api",
                    },
                    {
                      accessorKey: "cycleFrequency",
                      header: "Cycle Frequency",
                      flex: 1,
                      widget: "api",
                    },
                    {
                      accessorKey: "cycleconfig",
                      header: "Cycle Value",
                      flex: 1,
                      align: "right",
                      widget: "api",
                    },
                  ],
                  actionColumns: [
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
                  ]},
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
                  columns:{
                  dataColumns: [
                    
                    {
                      accessorKey: "id",
                      // width: "100",
                      header: "Id",
                      flex: 1,
                      hide: true,
                      widget: "api",
                    },
                    {
                      accessorKey: "name",
                      // width: "80",
                      flex: 1,
                      header: "Program Name",
                      widget: "api",
                    },
                    {
                      accessorKey: "description",
                      header: "Description",
                      flex: 1,
                      widget: "api",
                    },
                    {
                      accessorKey: "cycleFrequency",
                      header: "Cycle Frequency",
                      flex: 1,
                      widget: "api",
                    },
                    {
                      accessorKey: "cycleconfig",
                      header: "Cycle Value",
                      flex: 1,
                      align: "right",
                      widget: "api",
                    },
                  ],
                  actionColumns: [
                    {
                      accessorKey: "Approve_Records",
                      header: "Approve",
                      flex: 1,
                      widget: {
                        type: "Control",
                        scope: "#/properties/Approve Records",
                        options: {
                          widget: "IconButton",
                        },
                        config: {
                          main: {
                            icon: "ApproveIcon",
                            color: "success",
                            onClick: "Approve_Records",
                            tooltipMessage: "Approve This Record",
                          },
                        },
                      },
                    },

                    {
                      accessorKey: "Reject_Records",
                      header: "Reject",
                      flex: 1,
                      widget: {
                        type: "Control",
                        scope: "#/properties/Reject_Records",
                        options: {
                          widget: "IconButton",
                        },
                        config: {
                          main: {
                            icon: "RejectIcon",
                            onClick: "Reject_Records",
                            color: "error",
                            tooltipMessage: "Reject This Record",
                          },
                        },
                      },
                    },
                  ]},
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
                  columns:{
                  dataColumns: [
                    {
                      accessorKey: "id",
                      // width: "100",
                      header: "Id",
                      flex: 1,
                      hide: true,
                      widget: "api",
                    },
                    {
                      accessorKey: "name",
                      // width: "80",
                      flex: 1,
                      header: "Program Name",
                      widget: "api",
                    },
                    {
                      accessorKey: "description",
                      header: "Description",
                      flex: 1,
                      widget: "api",
                    },
                    {
                      accessorKey: "cycleFrequency",
                      header: "Cycle Frequency",
                      flex: 1,
                      widget: "api",
                    },
                    {
                      accessorKey: "cycleconfig",
                      header: "Cycle Value",
                      flex: 1,
                      align: "right",
                      widget: "api",
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
