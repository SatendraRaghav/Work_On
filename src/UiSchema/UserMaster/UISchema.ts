export const UserMasterUISchema: any = {
  type: "HorizontalLayout",

  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 3,
          header: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/masterName",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8,
            main: {
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
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/Back_Button",

          options: {
            widget: "IconButton",
          },
          config: {
            layout: 3,
            main: {
              icon: "BackIcon",
              styleDefault: true,
              size: "small",
              onClick: "backHandler",
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
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "User Basic Details",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/name",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Login ID",
              type: "text",
              //      errorMessage: "Login ID is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/passwordManager",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 5.5, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Password Manager",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/title",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "Title",
              type: "text",
            },
          },
        },

        {
          type: "Control",
          scope: "#/properties/firstName",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "First Name",
              type: "text",
              // errorMessage: "First Name is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/middleName",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Middle Name",
              type: "text",
            },
          },
        },

        {
          type: "Control",
          scope: "#/properties/lastName",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "Last Name",
              type: "text",
              errorMessage: "Last Name is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/pan",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "PAN No.",
              type: "text",
              errorMessage: "PAN No. is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/email",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "Email",
              type: "text",
              errorMessage: "Email is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/gender",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 11.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Gender",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          config: { layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 } },
          options: {
            widget: "EmptyBox",
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          config: { layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 } },
          options: {
            widget: "EmptyBox",
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Upload Avatar",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/uploadAvatarFile",
          options: {
            widget: "UploadFile",
          },
          config: {
            layout: {
              xs: 11,
              sm: 11,
              md: 5.5,
              lg: 5.5,
            },
            main: {
              required: false,
              onClick: "uploadAvatarSaveFunction",
              // errorMessage: "Workflow File is not uploaded",
              // iconStyleDefault:true,
            },
            style: {
              backgroundColor: "none",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/downloadAvatarFile",
          options: {
            widget: "DownloadFile",
          },
          config: {
            layout: {
              xs: 11,
              sm: 11,
              md: 5.5,
              lg: 5.5,
            },
            main: {
              required: false,
              onClick: "Download_Avatar_File",
              // iconStyleDefault:true,
            },
            style: {
              backgroundColor: "none",
            },
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "User Role Details",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/functions",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Functions",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/roles",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "Roles",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/grade",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Grade",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/dateOfJoining",

          options: {
            widget: "DateInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Date Of Joining",
              type: "date",
              // "required":true
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/locationCode",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "Location Code",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/locationName",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Location Name",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/supervisorEmpCode",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Supervisor Employee Code",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/supervisorName",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "Supervisor Name",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/supervisorNo",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Supervisor No",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/ccName",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "CC Name",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/lobCode",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "LOB Code",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/lob",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "LOB",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/terminationDate",

          options: {
            widget: "DateInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Termination Date",
              type: "date",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/locCity",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "LOC City",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/locState",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "LOC State",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/rmName",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "RM Name",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/segment",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Segment",
              type: "text",
            },
          },
        },

        {
          type: "Control",
          scope: "#/properties/empCode",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "EMP Code",
              type: "text",
              errorMessage: "EMP Code is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          config: { layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 } },
          options: {
            widget: "EmptyBox",
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "User Contact Details",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/mobilePhoneNo",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Mobile Phone No",
              type: "text",
              errorMessage: "Mobile Phone No is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/workPhoneNo",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "Work Phone No",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/addrLine1",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Address Line 1",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/addrLine2",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Address Line 2",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/addrLine3",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "Address Line 3",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/city",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "City",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/pinCode",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Pin Code",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/ccCode",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "CC Code",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/ccCode",

          options: {
            widget: "EmptyBox",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Additional Details",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/role",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Role",
              // "required": true,
              options: [],
              errorMessage: "Role is not selected",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/position",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Position",
              // "required": true,
              options: [],
              errorMessage: "Position is not selected",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/active",

          options: {
            widget: "RadioInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 },
            main: {
              label: "Active",
              options: ["YES", "NO"],
              // "required": true
              errorMessage: "Active is not marked YES or NO",
            },
          },
        },

        {
          type: "Control",
          scope: "#/properties/reasonForInactiveMarking",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.6 },
            main: {
              label: "Reason For Inactive Marking",
              type: "text",
              errorMessage: "Reason For Inactive Marking is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          config: { layout: { xs: 11, sm: 5.5, md: 5.5, lg: 3.7 } },
          options: {
            widget: "EmptyBox",
          },
        },

        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          config: {
            layout: {
              xs: 11,
              sm: 11,
              md: 8.5,
              lg: 5.9,
            },
          },
          options: {
            widget: "EmptyBox",
          },
        },
        {
          type: "Control",
          scope: "#/properties/SubmitButton",
          options: {
            widget: "Button",
          },

          config: {
            layout: {
              xs: 11,
              sm: 11,
              md: 2.5,
              lg: 1.5,
            },
            main: {
              name: "Submit",
              startIcon: "ApproveIcon",
              variant: "contained",
              color: "info",
              type: "text",
              onClick: "Submit_User",
              size: "small",
            },
            style: {
              marginBottom: "8px",
            },
          },
        },
      ],
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
