export const UserMasterUISchema = {
  type: "HorizontalLayout",

  elements: [
    {
      type: "Control",
      scope: "#/properties/notify",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
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
          scope: "#/properties/Back_Button",
          layout: 5.5,
          options: {
            widget: "Button",
          },
          value: {
            content: {
              icon: "BackIcon",
              styleDefault: true,
              size: "small",
              funcName: "backHandler",
              tooltipMessage: "Back",
            },
            style: {
              // width:"20%",
              float: "right",
              // marginTop:"20px",
              // marginRight:"15px"
            },
          },
        },
      ]}},
    },
    {
      type: "HorizontalLayout",
      defaultStyle: true,
      elements: [
        {
          type: "Control",
          scope: "#/properties/name",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Login ID",
              type: "text",
              errorMessage: "Login ID is empty or invalid"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/title",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "SelectInputField",
          },
          value: {
            content: {
              label: "Title",
              type: "text",
              options: [
                {
                  label: "Mr.",
                  value: "Mr.",
                },
                {
                  label: "Ms.",
                  value: "Ms.",
                },
                {
                  label: "Mrs.",
                  value: "Mrs.",
                }
              ]
            },
          },
        },

        {
          type: "Control",
          scope: "#/properties/firstName",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "First Name",
              type: "text",
              errorMessage: "First Name is empty or invalid"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/middleName",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Middle Name",
              type: "text",
            },
          },
        },

        {
          type: "Control",
          scope: "#/properties/lastName",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Last Name",
              type: "text",
              errorMessage: "Last Name is empty or invalid"
            },
          },
        },

        {
          type: "Control",
          scope: "#/properties/crn",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "CRN No.",
              type: "text",
              errorMessage: "CRN No. is empty or invalid"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/pan",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "PAN No.",
              type: "text",
              errorMessage: "PAN No. is empty or invalid"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/email",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Email",
              type: "text",
              errorMessage: "Email is empty or invalid"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/gender",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "SelectInputField",
          },
          value: {
            content: {
              label: "Gender",
              options: [
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ],
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/functions",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Functions",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/roles",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Roles",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/grade",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Grade",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/dateOfJoining",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "DateInputField",
          },
          value: {
            content: {
              label: "Date Of Joining",
              type: "date",
              // "required":true
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/locationCode",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Location Code",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/locationName",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Location Name",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/supervisorEmpCode",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Supervisor Employee Code",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/supervisorName",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Supervisor Name",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/supervisorNo",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Supervisor No",
              type: "text",
            },
          },
        },
        // {
        //   type: "Control",
        //   scope: "#/properties/mobilePhoneNo",
        //   layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
        //   options: {
        //     widget: "InputField",
        //   },
        //   value: {
        //     content: {
        //       label: "Mobile Phone No",
        //       type: "text",
        //     },
        //   },
        // },
        {
          type: "Control",
          scope: "#/properties/mobilePhoneNo",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Mobile Phone No",
              type: "text",
              errorMessage: "Mobile Phone No is empty or invalid"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/workPhoneNo",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Work Phone No",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/addrLine1",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Address Line 1",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/addrLine2",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Address Line 2",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/addrLine3",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Address Line 3",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/city",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "City",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/pinCode",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Pin Code",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/ccCode",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "CC Code",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/ccName",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "CC Name",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/lobCode",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "LOB Code",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/lob",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "LOB",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/terminationDate",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "DateInputField",
          },
          value: {
            content: {
              label: "Termination Date",
              type: "date",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/locCity",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "LOC City",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/locState",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "LOC State",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/rmName",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "RM Name",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/segment",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Segment",
              type: "text",
            },
          },
        },

        {
          type: "Control",
          scope: "#/properties/empCode",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "EMP Code",
              type: "text",
              errorMessage: "EMP Code is empty or invalid"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/role",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "SelectInputField",
          },
          value: {
            content: {
              label: "Role",
              // "required": true,
              options: [{}],
              errorMessage: "Role is not selected"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/position",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "SelectInputField",
          },
          value: {
            content: {
              label: "Position",
              // "required": true,
              options: [{}],
              errorMessage: "Position is not selected"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/active",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "RadioInputField",
          },
          value: {
            content: {
              label: "Active",
              options: ["YES", "NO"],
              // "required": true
              errorMessage: "Active is not marked YES or NO"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/reasonForInactiveMarking",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "InputField",
          },
          value: {
            content: {
              label: "Reason For Inactive Marking",
              type: "text",
              errorMessage: "Reason For Inactive Marking is empty or invalid"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
          options: {
            widget: "EmptyBox",
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          options: {
            widget: "EmptyBox",
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          layout: {
            xs: 11,
            sm: 11,
            md: 8.5,
            lg: 9.5,
          },
          options: {
            widget: "EmptyBox",
          },
        },
        {
          type: "Control",
          scope: "#/properties/btn",
          options: {
            widget: "Button",
          },
          layout: {
            xs: 11,
            sm: 11,
            md: 2.5,
            lg: 1.5,
          },
          value: {
            content: {
              name: "Submit",
              startIcon: "ApproveIcon",
              variant: "contained",
              color: "info",
              type: "text",
              funcName: "Submit_User",
              size: "small",
            },
            style: {
              marginBottom: "8px",
            },
          },
        }
      ],
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "DailogBox",
      }
    },
  ],
};
