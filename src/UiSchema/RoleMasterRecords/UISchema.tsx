export const  RoleMasterRecordsUISchema = {
  "type": "HorizontalLayout",
  stylePage:{
    background:"#eef2f6",
    // background:"#051327",
    minHeight:"100vh",
    margin:"10px 20px",
    height:"auto",
    borderRadius:"20px"
   },
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
                  heading: "Role Master",
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

                  funcName: "newRecord",
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
                "loadFunction":"getRoleAprroveRecords",
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
                    field:"Edit_Approve_Records",
                    "headerName": "Edit",

                  "width": "100",
                    "widget": {
                      "type": "Control",
                      "scope": "#/properties/Edit_Records",
                      "options": {
                        "widget": "Button"
                      },
                      "value": {
                        "content": {
                          "name": "Edit",
                          "variant": "outlined",
                          "color": "success",
                          "type": "button",
                          "size": "large"
                        }
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
                "loadFunction":"getRolePendingRecords",
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
                    field:"RoleApprover",
                    "headerName": "Approve",
                    "width": "100",
                    "widget": {
                      "type": "Control",
                      "scope": "#/properties/Approve2Button",
                      "fieldName": "RoleApprover",
                      "options": {
                        "widget": "Button"
                      },
                      "value": {
                        "content": {
                          "name": "Approve",
                          "variant": "outlined",
                          "color": "success"
                        }
                      }
                    }
                  },
                  {
                    field:"Reject_Records",
                    "headerName": "Reject",
                    "width": "100",
                    "widget": {
                      "type": "Control",
                      "scope": "#/properties/RejectButton",
                      "fieldName": "Reject_Records",
                      "options": {
                        "widget": "Button"
                      },
                      "value": {
                        "content": {
                          "name": "Reject",
                          "variant": "outlined",
                          "color": "error",
                          "eventName": "BackToAgencyApproveRecords"
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
                "loadFunction":"getRoleRejectedRecords",
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
