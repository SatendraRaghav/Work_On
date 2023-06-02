export const  PositionTypeMasterRecordsUISchema = {
  "type": "HorizontalLayout",
  "elements": [
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
                  heading: "Position Type Master",
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
                  "funcName":"newRecord",
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
      "type": "Control",
      "scope": "#/properties/EmptyBox",
      "layout": {
        "xs": 5.5,
        "sm": 7.5,
        "md": 8,
        "lg": 8
      },
      "options": {
        "widget": "EmptyBox"
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/PositionTypeRecords",
      "labels": ["Approve", "Pending", "Reject"],
      "options": {
        "widget": "Tab",
        "detail": {
          "type": "HorizontalLayout",
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/approveRecords",
              "layout": 12,
              "options": {
                "widget": "Table",
                "columns": [
                  {
                    "field": "id",
                    headerName:"id",
                   flex:1,
                    "hide": true,
                    "widget": "api"
                  },
                  {
                    "field": "name",
                    flex:1,
                    "headerName": "Name",
                    "widget": "api"
                  },
                  {
                    field:"Edit_Approve_Records",
                    "headerName": "Edit",
                    width:"100",
                   "flex":1,
                    "widget": {
                      "type": "Control",
                      "scope": "#/properties/Edit_Records",
                      "options": {
                        "widget": "Button"
                      },
                      "value": {
                        content: {
                          color:"info",
                          size:"small",
                          icon: "EditIcon",
                          tooltipMessage:"Edit This Record",
                        },
                        style: {
                          color:"#3949ab"
                        },
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/pendingRecords",
              "layout": 12,
              "options": {
                "widget": "Table",
                "columns": [
                  {
                    "field": "id",
                    headerName:"id",
                    "width": "100",
                    "hide": true,
                    "widget": "api"
                  },
                  {
                    "field": "name",
                    flex:1,
                    "headerName": "Name",
                    "widget": "api"
                  },
                  {
                    field:"PositionTypeApprover",
                    "headerName": "Approve",
                   width:"100",
                    "widget": {
                      "type": "Control",
                      "scope": "#/properties/Approve2Button",
                      "options": {
                        "widget": "Button"
                      },
                      "value": {
                        "content": {
                          icon: "ApproveIcon",
                          color:"success",
                          tooltipMessage:"Approve This Record",
                        }
                      }
                    }
                  },
                  {
                    "field":"Reject_Records",
                    "headerName": "Reject",
                    width:"100",
                    "widget": {
                      "type": "Control",
                      "scope": "#/properties/RejectButton",
                      "fieldName": "Reject_Records",
                      "options": {
                        "widget": "Button"
                      },
                      "value": {
                        "content": {
                          icon: "RejectIcon",
                          color:"error",
                          tooltipMessage:"Reject This Record",
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/rejectRecords",
              "layout": 12,
              "options": {
                "widget": "Table",
                "columns": [
                  {
                    "field": "id",
                    headerName:"id",
                    "width": "100",
                    "hide": true,
                    "widget": "api"
                  },
                  {
                    "field": "name",
                   flex:1,
                    "headerName": "Name",
                    "widget": "api"
                  },
                ]
              }
            }
          ]
        }
      }
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
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
  ]
}
