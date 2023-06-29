export const  AgencyBranchRecordsUISchema = {
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
      "type": "Control",
      "scope": "#/properties/Appbar",
      "options": {
        "widget": "EmptyBox"
      },
      "layout": 12,
      "value": {
        "content": {
          "eventName": "LogoutUser",  
          "ButtonName": "Log Out"
        }
      }
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
          "funcName":"newRecord",
        },
        style:{
          width:"50px",
          float:"right",
          marginTop:"10px",
          background:"#091f3c",
          color:"white",
         fontSize:"40px",
         height:"40px",
        }
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
      tabLabels : ["Approve", "Pending", "Reject"],
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
                "loadFunction":"getRolePermissionAprroveRecords",
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
                    "width": "80",
                    "headerName": "Name",
                    "widget": "api"
                  },
                  {
                    field:"Edit_Approve_Records",
                    "headerName": "Edit_Approve_Records",
                   "flex":1,
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
                          "size": "large",
                          "eventName": "Edit_Records"
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
                "loadFunction":"getRolePermissionPendingRecords",
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
                    "width": "80",
                    "headerName": "Name",
                    "widget": "api"
                  },
                  {
                    field:"RolePermissionApprover",
                    "headerName": "RolePermissionApprover",
                   "flex":1,
                    "widget": {
                      "type": "Control",
                      "scope": "#/properties/Approve2Button",
                      "fieldName": "RolePermissionApprover",
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
                    "headerName": "Reject_Records",
                   "flex":1,
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
                "loadFunction":"getRolePermissionRejectedRecords",
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
                    "width": "80",
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
