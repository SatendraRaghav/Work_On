export const AgencyMasterUISchema: any = {
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
              heading: "Agency Master",
            },
            style: {
              fontFamily: "Roboto",
              fontWeight: "500",
              background: "white",
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
              float: "right",
            },
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Agency Details",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/userName",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Domain login ID",
              type: "text",
              errorMessage: "Domain login ID is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/type",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Type",
              type: "text",
              // "options": [{label:"DSA",value:"DSA"},{label:"VENDOR",value:"VENDOR"}],
              errorMessage: "Agency Type is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/name",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Name of Agency",
              type: "text",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/mobile",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Mobile",
              type: "text",
              errorMessage: "Mobile is empty or invalid",
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
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "Email",
              type: "text",
              errorMessage: "Email does not match the pattern",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/aggrementStartDate",
          options: {
            widget: "DateInputField",
          },

          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "AggrementStartDate",
              type: "text",
              errorMessage: "AggrementStartDate is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/aggrementEndDate",
          options: {
            widget: "DateInputField",
          },

          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "AggrementEndDate",
              type: "text",
              errorMessage: "AggrementEndDate is empty or invalid",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/agencyMainContactPerson",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "AgencyMainContactPerson",
              type: "text",
              errorMessage: "AgencyMainContactPerson is empty or invalid",
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
            layout: {
              xs: 11,
              sm: 11,
              md: 5.5,
              lg: 5.5,
            },
            main: {
              label: "Active",
              options: ["YES", "NO"],
              errorMessage: "Active is not marked YES or NO",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/blankbox",
          options: {
            widget: "Box",
          },

          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            main: {
              label: "",
            },
          },
        },
        {
          type: "WrapperLayout",
          config: {
            main: {
              label: "Bank Details",
              divider: true,
            },
            defaultStyle: true,
          },
          elements: [
            {
              type: "Control",
              scope: "#/properties/pan",

              options: {
                widget: "InputField",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
                main: {
                  label: "PAN",
                  type: "text",
                  errorMessage: "PAN dpesn't match the pattern",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/bankAccountNo",

              options: {
                widget: "InputField",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
                main: {
                  label: "Bank Account Number",
                  type: "number",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/bankIfscCode",
              options: {
                widget: "InputField",
              },

              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
                main: {
                  label: "IFSC Code",
                  type: "text",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/bankbox",
              options: {
                widget: "Box",
              },

              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
                main: {
                  label: "",
                },
              },
            },
          ],
        },
        {
          type: "WrapperLayout",
          config: {
            main: {
              label: "Role Details",
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
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
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
              scope: "#/properties/userList",

              options: {
                widget: "MultipleSelect",
              },
              config: {
                layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
                main: {
                  multiple: true,
                  label: "User List",
                  options: [],
                  errorMessage: "User are not selected",
                },
              },
            },
          ],
        },
        {
          type: "WrapperLayout",
          defaultStyle: true,
          config: {
            main: {
              label: "Documents",
              divider: true,
            },
            defaultStyle: true,
          },
          elements: [
            {
              type: "Control",
              scope: "#/properties/aggrementCopy",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "Aggrement Copy",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docAggrementCopy",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadAggrementCopy",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/appointmentLetter",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "Appointment Letter",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docAppointmentLetter",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadAppointmentLetter",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/applicationForm",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "Application Form",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docApplicationForm",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadApplicationForm",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/dueDiligenceReport",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "DueDiligenceReport",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docDueDiligenceReport",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadDueDiligenceReport",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/brokerageLetter",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "BrokerageLetter",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docBrokerageLetter",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadBrokerageLetter",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/disclosureLetter",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "DisclosureLetter",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docDisclosureLetter",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadDisclosureLetter",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/callingSetupAgencyLetterHead",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "CallingSetupAgencyLetterHead",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docCallingSetupAgencyLetterHead",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadCallingSetupAgencyLetterHead",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/callingSetupKotakLetterHead",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "CallingSetupKotakLetterHead",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docCallingSetupKotakLetterHead",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadCallingSetupKotakLetterHead",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/rmVisitReport",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "RmVisitReport",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docRmVisitReport",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadRmVisitReport",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/pan",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "Pan",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docPan",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadPan",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/cancel_Cheque_File",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "Cancel Cheque File",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docCancel_Cheque_File",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadCancel_Cheque_File",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/cibil",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "Cibil",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docCibil",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadCibil",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docother",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 1.5,
                  sm: 1.5,
                  md: 1.5,
                  lg: 1.5,
                },
                main: {
                  heading: "Doc Other",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "100",
                  background: "white",
                  fontSize: "16px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docOther",
              options: {
                widget: "UploadFile",
              },
              config: {
                layout: {
                  xs: 4.8,
                  sm: 4.8,
                  md: 4.8,
                  lg: 4.8,
                },
                main: {
                  required: false,
                  onClick: "uploadFile",
                  // iconStyleDefault:true,
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/downloadOther",
              options: {
                widget: "DownloadFile",
              },
              config: {
                layout: {
                  xs: 4.7,
                  sm: 4.7,
                  md: 4.7,
                  lg: 4.7,
                },
                main: {
                  required: false,
                  onClick: "Download_File",
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
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "EmptyBox",
          },
          config: {
            layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
            style: {
              padding: "3",
            },
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
              md: 5.5,
              lg: 5.5,
            },
            main: {
              name: "Submit",
              startIcon: "ApproveIcon",
              variant: "contained",
              color: "info",
              type: "text",
              onClick: "Submit",
              size: "medium",
            },
            style: {
              float: { md: "right" },
              width: { xs: "100%", sm: "90%", md: "30%" },
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
