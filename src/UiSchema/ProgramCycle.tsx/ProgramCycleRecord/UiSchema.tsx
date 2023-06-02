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
              layout: 5.5,
              options: {
                widget: "Box",
              },
              value: {
                content: {
                  heading: "Cycle Master",
                }
              },
            },
            {
              type: "Control",
              scope: "#/properties/New_Record",
              layout: {
                xs: 6,
                sm: 4,
                md: 5.5,
                lg: 5.5,
              },
              options: {
                widget: "Button",
              },
              value: {
                content: {
                  name: "New Records",
                  icon: "AddIcon",
                  size:"small",
                  styleDefault: true,
                  tooltipMessage:"Add New Record",

                  funcName: "addNewRecords",
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
      scope: "#/properties/ProgramCycleRecords",
      labels: ["Approve", "Pending", "Reject"],
      options: {
        widget: "Tab",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/ApproveRecords",
              layout: 12,
              options: {
                widget: "Table",
                loadFunction: "tempTableLoad",
                columns: [
                  {
                    field: "id",
                    // width: "100",
                    headerName: "Id",
                    flex:1,
                    hide: true,
                    widget: "api",
                  },
                  {
                    field: "name",
                    // width: "80",
                    flex:1,
                    headerName: "Cycle Name",
                    cellOverflow:"wrap",
                    widget: "api",
                  },
                  {
                    field: "program",
                    // width: "80",
                    flex:1,
                    headerName: "Program Name",
                    cellOverflow:"wrap",
                    widget: "api",
                  },
                  {
                    field: "startDate",
                    headerName: "Start Date",
                    flex:1,
                    widget: "api",
                  },
                  {
                    field: "endDate",
                    headerName: "End Date",
                   
                    flex: 1,
                    widget: "api",
                  },

                  {
                    field: "Edit_Approve_Records",
                    headerName: "Edit",
                    width:"100",
                    widget: {
                      type: "Control",
                      scope: "#/properties/Edit_Records",
                      options: {
                        widget: "Button",
                      },
                      value: {
                        content: {
                          color:"info",
                          size:"small",
                          icon: "EditIcon",
                          tooltipMessage:"Edit This Record",
                        },
                        style: {
                          color:"#3949ab"
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              type: "Control",
              scope: "#/properties/PendingRecords",
              layout: 12,
              options: {
                widget: "Table",
                loadFunction: "tempTableLoad",
                columns: [
                  {
                    field: "id",
                    flex:1,
                    align:"right",
                    hide: true,
                    widget: "api",
                  },
                  {
                    field: "name",
                    flex:1,
                    headerName: "Cycle Name",
                    widget: "api",
                  },
                  {
                    field: "program",
                    flex:1,
                    headerName: "Program Name",
                    widget: "api",
                  },
                  {
                    field: "startDate",
                    headerName: "Start Date",
                   
                   flex:1,
                    widget: "api",
                  },
                  {
                    field: "endDate",
                    headerName: "End Date",
                    flex:1,
                    widget: "api",
                   
                  },
                  {
                    field: "Approve_Records",
                    headerName: "Approve",
                    width:"100",
                    widget: {
                      type: "Control",
                      scope: "#/properties/Approve Records",
                      options: {
                        widget: "Button",
                      },
                      value: {
                        content: {
                          icon: "ApproveIcon",
                          color:"success",
                          tooltipMessage:"Approve This Record",
                        },

                      },
                    },
                  },

                  {
                    field: "Reject_Records",
                    headerName: "Reject",
                    width:"100",
                    widget: {
                      type: "Control",
                      scope: "#/properties/Reject_Records",
                      options: {
                        widget: "Button",
                      },
                      value: {
                        content: {
                          icon: "RejectIcon",
                          color:"error",
                          tooltipMessage:"Reject This Record",
                        }
                      },
                    },
                  },
                ],
              },
          },
          {
            type: "Control",
            scope: "#/properties/RejectRecords",
            layout: 12,
            options: {
              widget: "Table",
              loadFunction: "tempTableLoad",
              columns: [
                {
                  field: "id",
                  // width: "100",
                  flex: 1,
                  hide: true,
                  widget: "api",
                },
                {
                  field: "name",
                  flex:1,
                  headerName: "Cycle Name",
                  widget: "api",
                },
                {
                  field: "program",
                  // width: "80",
                  flex: 1,
                  headerName: "Program Name",
                  widget: "api",
                },
                {
                  field: "startDate",
                  headerName: "Start Date",
                  width: "120",
                  flex: 1,
                  widget: "api",
                },
                {
                  field: "endDate",
                  headerName: "End Date",
                  width: "120",
                  widget: "api",
                  flex: 1,
                },
              ],
            },
          },
          ],
        },
      },
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
      }
    },
  ],
};
