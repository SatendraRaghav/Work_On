export const ProgramMasterRecordUiSchema = {
  type: "HorizontalLayout",
  stylePage:{
    background:"#eef2f6",
    // background:"#051327",
    minHeight:"100vh",
    margin:"10px 20px",
    height:"auto",
    borderRadius:"20px"
   },
  elements: [
      {
        type: "Control",
        scope: "#/properties/New_Records_Button",
        // layout: {
        //   xs: 4,
        //   sm: 4,
        //   md: 1,
        //   lg: 1,
        // },
        layout:11,
        options: {
          widget: "Button",
        },
        value: {
          content: {
            name: "\u002B",
            variant: "contained",
            color: "primary",
            type: "button",
            size: "large",
            funcName:"addNewRecords"
          },
          style:{
            width:"50px",
            float:"right",
            // marginTop:"20px",
            background:"#091f3c",
            color:"white",
           fontSize:"40px",
           height:"40px",
          }
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
                     flex:1,
                      widget: "api",
                    },
                    {
                      field: "cycleFrequency",
                      headerName: "Cycle Frequency",
                      width: 150,
                      widget: "api",
                    },
                    {
                      field: "cycleValue",
                      headerName: "Cycle Value",
                      width: 90,
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
                            name: "Edit",
                            variant: "outlined",
                            color: "success",
                            type: "button",
                            size: "large",
                            // page:"ProgramMasterCycle"
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
                    {
                      field: "Approve_Records",
                      headerName: "Approve",
                      width: 150,
                      widget: {
                        type: "Control",
                        scope: "#/properties/Approve Records",
                        options: {
                          widget: "Button",
                        },
                        value: {
                          content: {
                            name: "Approve",
                            variant: "outlined",
                            color: "success",
                            type: "button",
                            size: "large",
                          },
                        },
                      },
                    },
  
                    {
                      field: "Reject_Records",
                      headerName: "Reject",
                      width: 150,
                      widget: {
                        type: "Control",
                        scope: "#/properties/Reject_Records",
                        options: {
                          widget: "Button",
                        },
                        value: {
                          content: {
                            name: "Reject",
                            variant: "outlined",
                            color: "error",
                            type: "button",
                            size: "large",
                           
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
      }
  ],
};
