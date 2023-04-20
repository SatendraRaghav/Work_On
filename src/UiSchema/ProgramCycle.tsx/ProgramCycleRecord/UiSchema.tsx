export const ProgramMasterCycleRecordUiSchema = {
  type: "HorizontalLayout",
  stylePage:{
    background:"#eef2f6",
    // background:"#051327",
    minHeight:"100vh",
    margin:"10px 20px",
    height:"auto",
    borderRadius:"20px"
   },
  page:"ProgramMasterCycleRecord",
  elements: [
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      layout: {
        xs: 5.5,
        sm: 7.5,
        md: 8,
        lg: 8,
      },
      options: {
        widget: "EmptyBox",
      },
    },
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
          marginTop:"20px",
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
                    flex: 1,
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
                    flex: 1,
                    hide: true,
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
                  flex: 1,
                  hide: true,
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
  ],
};
