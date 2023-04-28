export const  RolePermissionRecordsUISchema = {
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

                  "funcName":"newRecord",
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
                "loadFunction":"getRolePermissionAprroveRecords",
                "ApiDetails":{
                "DataApi": "http://localhost:8081/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging",
                "DataApiBody": { "status": "A" }},
                "columns": [
                  {
                    "field": "id",
                    headerName:"id",
                    flex: 1,
                    "hide": true,
                    "widget": "api"
                  },
                  {
                    "field": "name",
                    flex: 200,
                    "headerName": "Name",
                    "widget": "api"
                  },
                  {
                    field:"Edit_Approve_Records",
                    "headerName": "Edit_Records",
                    flex: 100,
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
                          funcName:"Edit_Approve_Records",
                          icon: "EditIcon",
                          page:"ProgramMasterCycle"
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
                "loadFunction":"getRolePermissionPendingRecords",
                "ApiDetails":{
                "DataApiBody": { "status": "N" },
                "DataApi": "http://localhost:8081/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging"
                },
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
                    field:"RolePermissionApprover",
                    "headerName": "Approve",
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
                          icon: "ApproveIcon",
                          color:"success"
                        }
                      }
                    }
                  },
                  {
                    field:"Reject_Records",
                    "headerName": "Reject",
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
                          icon: "RejectIcon",
                          color:"error"
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
                   flex:1,
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
