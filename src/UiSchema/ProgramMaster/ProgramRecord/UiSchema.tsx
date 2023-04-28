export const ProgramMasterRecordUiSchema = {
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

                  funcName: "addNewRecords",
                },
                style: {
                  // width:"20%",
                  float: "right",
                  // marginTop:"20px",
                  // marginRight:"15px"
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
      layout: 12,
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
                    flex: 1,
                    hide: true,
                    widget: "api",
                  },
                  {
                    field: "name",
                    // width: "80",
                    flex: 1,
                    headerName: "Program Name",
                    widget: "api",
                  },
                  {
                    field: "description",
                    headerName: "Description",
                    flex: 1,
                    widget: "api",
                  },
                  {
                    field: "cycleFrequency",
                    headerName: "Cycle Frequency",
                    flex: 1,
                    widget: "api",
                  },
                  {
                    field: "cycleValue",
                    headerName: "Cycle Value",
                    flex: 1,
                    align:"right",
                    widget: "api",
                  },
                  {
                    field: "Edit_Approve_Records",
                    headerName: "Edit Records",
                    width: 150,
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
                          funcName:"Edit_Approve_Records",
                          icon: "EditIcon",
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
                    // width: "100",
                    headerName: "Id",
                    flex: 1,
                    hide: true,
                    widget: "api",
                  },
                  {
                    field: "name",
                
                    flex: 1,
                    headerName: "Program Name",
                    widget: "api",
                  },
                  {
                    field: "description",
                    headerName: "Description",
                    flex: 1,
                    widget: "api",
                  },
                  {
                    field: "cycleFrequency",
                    headerName: "Cycle Frequency",
                    flex: 1,
                    widget: "api",
                  },
                  {
                    field: "cycleValue",
                    headerName: "Cycle Value",
                    align:"right",
                    flex: 1,
                    widget: "api",
                  },
                  {
                    field: "Approve_Records",
                    headerName: "Approve",
                    flex: 1,
                    widget: {
                      type: "Control",
                      scope: "#/properties/Approve Records",
                      options: {
                        widget: "Button",
                      },
                      value: {
                        content: {
                          icon: "ApproveIcon",
                          color:"success"
                        },
                      },
                    },
                  },

                  {
                    field: "Reject_Records",
                    headerName: "Reject",
                    flex: 1,
                    widget: {
                      type: "Control",
                      scope: "#/properties/Reject_Records",
                      options: {
                        widget: "Button",
                      },
                      value: {
                        content: {
                          icon: "RejectIcon",
                          color:"error"
                        },
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
                    headerName: "Id",
                    flex: 1,
                    hide: true,
                    widget: "api",
                  },
                  {
                    field: "name",
                    // width: "80",
                    flex: 1,
                    headerName: "Program Name",
                    widget: "api",
                  },
                  // {
                  //   field: "startDate",
                  //   headerName: "Start Date",
                  //   width: "120",
                  //   flex: 1,
                  //   widget: "api",
                  // },
                  {
                    field: "description",
                    headerName: "Description",
                    width: "120",
                    widget: "api",
                  },
                  {
                    field: "cycleFrequency",
                    headerName: "Cycle Frequency",
                    flex: 1,
                    widget: "api",
                  },
                  {
                    field: "cycleValue",
                    headerName: "Cycle Value",
                    flex: 1,
                    widget: "api",
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
  ],
};
