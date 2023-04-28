export const  PositionMasterRecordsUISchema = {
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
                  heading: "Position Master",
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
                  // styleDefault: true,

                  funcName: "newRecord",
                },
                style: {
                  fontSize: '2rem',
                  width: '4rem',
                  height: '4rem',
                 
                },
              },
            },
          ],
        },
      },
    },
    {
      "type": "Control",
      "scope": "#/properties/agencyRecords",
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
                "loadFunction":"getPositionAprroveRecords",
                "ApiDetails":{
                "DataApi": "http://localhost:8081/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging",
                "DataApiBody": { "status": "A" }},
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
                    "field":"Edit_Approve_Records",
                    "headerName": "Edit",
                   "flex":100,
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
                        
                        },
                        style: {
                          color:"#3949ab"
                        },
                      },
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
                "loadFunction":"getPositionPendingRecords",
                "ApiDetails":{
                "DataApiBody": { "status": "N" },
                "DataApi": "http://localhost:8081/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging"
                },
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
                    "headerName": "Approve",
                    field:"PositionApprover",
                   "flex":100,
                    "widget": {
                      "type": "Control",
                      "scope": "#/properties/Approve2Button",
                      "options": {
                        "widget": "Button"
                      },
                      "value": {
                        "content": {
                          icon: "ApproveIcon",
                          color:"success"
                        }
                      }
                    }
                  },
                  {
                    "headerName": "Reject",
                    field:"Reject_Records",
                   "flex":1,
                    "widget": {
                      "type": "Control",
                      "scope": "#/properties/RejectButton",
                      "options": {
                        "widget": "Button"
                      },
                      "value": {
                        "content": {
                          icon: "RejectIcon",
                          color:"error"
                        }
                      }
                    }
                  },
                ]
              }
            },
            {
              "type": "Control",
              "scope": "#/properties/rejectRecords",
              "layout": 12,
              "options": {
                "widget": "Table",
                "loadFunction":"getPositionRejectedRecords",
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
    }
  ]
}
