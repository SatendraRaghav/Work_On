export const  UserMasterUISchema = {
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
      "layout": 12,
      "options": {
        "widget": "EmptyBox"
      },
      "value": {
        "content": {
        
        }
      }
    },
    {
      type: "Control",
      scope: "#/properties/Back_Button",
      layout: {
        xs: 6,
        sm: 4,
        md: 2,
        lg: 2,
      },
      options: {
        widget: "Button",
      },
      value: {
        content: {
          name: "\u2190",
          variant: "contained",
          color: "primary",
          type: "button",
          size: "large",
          funcName: "backHandler",
        },
        style:{
          background:"#091f3c",
          color:"white",
          width:"30px",
          height:"30px",
          paddingTop:"5px",
         fontWeight:"bold",
         fontSize:"30px",
          marginLeft:"5px"
        }
      },
    },
    {
      "type": "Control",
      "scope": "#/properties/EmptyBox",
      "options": {
        "widget": "EmptyBox"
      },
      "layout": {
        "xs": 7,
        "sm": 7,
        "md": 8,
        "lg": 8
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/name",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Name",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/email",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Email",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/firstName",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "First Name",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/middleName",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Middle Name",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/refNo",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Ref No",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/lastName",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Last Name",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/crn",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "CRN",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/pan",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "PAN",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/userCategory",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "User Category",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/title",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Title",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/fatherHusbandName",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Father / Husband Name",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/gender",
      "layout": 6,
      "options": {
        "widget": "SelectInputField"
      },
      "value": {
        "content": {
          "label": "Gender",
          "options": [{label:"Male",value:"Male"},{label:"Female",value:"Female"}]
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/functions",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Functions",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/roles",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Roles",
          "type": "text"
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/grade",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Grade",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/dateOfJoining",
      "layout": 6,
      "options": {
        "widget": "DateInputField"
      },
      "value": {
        "content": {
          "label": "Date Of Joining",
          "type": "date",
          // "required":true
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/locationCode",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Location Code",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/locationName",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "location Name",
          "type": "text"
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/supervisorEmpCode",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Supervisor Employee Code",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/supervisorName",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Supervisor Name",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/supervisorNo",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Supervisor No",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/mobilePhoneNo",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Mobile Phone No",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/mobilePhoneNo",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Mobile Phone No",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/workPhoneNo",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Work Phone No",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/addrLine1",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Address Line 1",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/addrLine2",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Address Line 2",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/addrLine3",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Address Line 3",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/city",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "City",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/pinCode",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Pin Code",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/ccCode",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "cc Code",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/ccName",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "cc Name",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/lobCode",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Lob Code",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/lob",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Lob",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/terminationDate",
      "layout": 6,
      "options": {
        "widget": "DateInputField"
      },
      "value": {
        "content": {
          "label": "Termination Date",
          "type": "date"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/locCity",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Loc City",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/locState",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Loc State",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/rmName",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Rm Name",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/segment",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Segment",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/reasonForInactiveMarking",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Reason For Inactive Marking",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/remarks",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Remarks",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/lastLoginDate",
      "layout": 6,
      "options": {
        "widget": "DateInputField"
      },
      "value": {
        "content": {
          "label": "Last Login Date",
          "type": "date"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/useDatabaseAuth",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "use Database Auth",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/resetPasswordRequired",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Reset Password Required",
          "type": "text"
        }
      }
    },
	{
      "type": "Control",
      "scope": "#/properties/empCode",
      "layout": 6,
      "options": {
        "widget": "InputField"
      },
      "value": {
        "content": {
          "label": "Emp Code",
          "type": "text"
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/role",
      "layout": 6,
      "options": {
        "widget": "SelectInputField"
      },
      "value": {
        "content": {
          "label": "Role",
          // "required": true,
          options:[{}]
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/position",
      "layout": 6,
      "options": {
        "widget": "SelectInputField"
      },
      "value": {
        "content": {
          "label": "Position",
          // "required": true,
          options:[{}]
        }
      }
    },
    {
      "type": "Control",
      "scope": "#/properties/active",
      "layout": 6,
      "options": {
        "widget": "RadioInputField"
      },
      "value": {
        "content": {
          "label": "Active",
          "options": ["YES", "NO"],
          // "required": true
        }
      }
    }
     ,
     {
      "type": "Control",
      "scope": "#/properties/Appbar",
      "layout": 6,
      "options": {
        "widget": "EmptyBox"
      },
      "value": {
        "content": {
        
        }
      }
    },
     {
      type: "Control",
      scope: "#/properties/LoginPage",
      options: {
        widget: "Button",
      },
      layout: {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
      },
      value: {
        content: {
          name: " \u2713 Submit",
          variant: "contained",
          color: "info",
          type: "text",
          "funcName":"Submit_User",
          size: "large"
        },
        style: {
          background:"#091f3c",
          color:"white",
          width:"200px",
          marginRight:"50px",
          float:"right"
        },
      },
    }
  ]
}
  
