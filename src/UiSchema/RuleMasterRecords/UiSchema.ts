export const RuleMasterRecordsUISchema:any = {
    type: "HorizontalLayout",
    elements: [
      {
            type: "WrapperLayout",
            config:{
              main:{
                rowSpacing:3,
                header:true,
              },
              defaultStyle:true
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
                    heading: "Rule Master",
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
            ]
      },
      {
        type: "TabLayout",
        config: {
          main: {
            tabLabels : ["Approve", "Pending", "Reject"],
           
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
                      accessorKey: "groupId",
  
                      header: "GroupId",
                    },
                    {
                      accessorKey: "artifactId",
  
                      header: "Artifact Id",
                    },
                    {
                      accessorKey: "version",
  
                      header: "Version",
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
                      accessorKey: "groupId",
  
                      header: "Name",
                    },
                    {
                      accessorKey: "artifactId",
  
                      header: "Artifact Id",
                    },
                    {
                      accessorKey: "version",
  
                      header: "Version",
                    }
                  ],
                  actionColumns: [
                    {
                      accessorKey: "RoleApprover",
                      header: "Approve",
  
                      widget: {
                        type: "Control",
                        scope: "#/properties/Approve2Button",
                        accessorKeyName: "RoleApprover",
                        options: {
                          widget: "IconButton",
                        },
                        config: {
                          main: {
                            icon: "ApproveIcon",
                            color: "success",
                            onClick: "RoleApprover",
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
                        accessorKeyName: "Reject_Records",
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
                      accessorKey: "groupId",
  
                      header: "GroupId",
                    },
                    {
                      accessorKey: "artifactId",
  
                      header: "Artifact Id",
                    },
                    {
                      accessorKey: "version",
  
                      header: "Version",
                    }
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
  