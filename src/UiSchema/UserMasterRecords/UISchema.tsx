export const  UserMasterRecordsUISchema = {
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
                  heading: "User Master",
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
                "loadFunction":"getUserAprroveRecords",
                "ApiDetails":{
                "DataApi": "http://localhost:8081/master/getDetails?masterName=com.act21.hyperform3.entity.master.user.UserStaging",
                "DataApiBody": { "status": "A" }},
                "columns": [
                  {
                    "field": "id",
                    headerName:"id",
                    "width": "60",
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
                    "field": "email",
                    flex:1,
                    "headerName": "Email",
                    "widget": "api"
                  },
{
                    "field": "firstName",
                    flex:1,
                    "headerName": "FirstName",
                    "widget": "api"
                  },
{
                    "field": "RefNo",
                    flex:1,
                    align:"right",
                    "headerName": "ref No",
                    "widget": "api"
                  },
{
                    "field": "lastName",
                    flex:1,
                    "headerName": "Last Name",
                    "widget": "api"
                  },			
{
                    "field": "crn",
                    flex:1,
                    "headerName": "CRN",
                    "widget": "api"
                  },	
					  

                  {
                    field:"Edit_Approve_Records",
                    "headerName": "Edit",
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
                "loadFunction":"getUserPendingRecords",
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
                    "field": "email",
                    flex:1,
                    "headerName": "Email",
                    "widget": "api"
                  },
{
                    "field": "firstName",
                    flex:1,
                    "headerName": "FirstName",
                    "widget": "api"
                  },
{
                    "field": "middleName",
                    flex:1,
                    "headerName": "Middle Name",
                    "widget": "api"
                  },
{
                    "field": "refNo",
                    flex:1,
                    "headerName": "ref No",
                    "widget": "api"
                  },
{
                    "field": "lastName",
                    flex:1,
                    "headerName": "Last Name",
                    "widget": "api"
                  },			
{
                    "field": "crn",
                    flex:1,
                    "headerName": "CRN",
                    "widget": "api"
                  },						  
                  {
                    field:"UserApprover",
                    "headerName": "Approve",
                   "flex":1,
                    "widget": {
                      "type": "Control",
                      "scope": "#/properties/Approve2Button",
                      "fieldName": "Approve_Records",
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
                "loadFunction":"getUserRejectedRecords",
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
                    "field": "email",
                    flex:1,
                    "headerName": "Email",
                    "widget": "api"
                  },
{
                    "field": "firstName",
                    flex:1,
                    "headerName": "FirstName",
                    "widget": "api"
                  },
{
                    "field": "middleName",
                    flex:1,
                    "headerName": "Middle Name",
                    "widget": "api"
                  },
{
                    "field": "refNo",
                    flex:1,
                    "headerName": "ref No",
                    "widget": "api"
                  },
{
                    "field": "lastName",
                    flex:1,
                    "headerName": "Last Name",
                    "widget": "api"
                  },			
{
                    "field": "crn",
                    flex:1,
                    "headerName": "CRN",
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
