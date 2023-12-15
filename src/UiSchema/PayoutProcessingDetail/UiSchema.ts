export const PayoutProcessingDetailUiSchema: any = {
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
          scope: "#/properties/programType",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8,
            main: {
              heading: "Payout Processing Detail",
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
          rowSpacing: 4,
          header: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/cycleNameHeading",

          options: {
            widget: "Box",
          },
          config: {
            layout: 3,

            main: {
              heading: "Cycle Name :",
            },
            style: {
              fontFamily: "Roboto",
              fontWeight: "100",
              background: "white",
              fontSize:"15",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/cycleName",

          options: {
            widget: "Box",
          },

          config: {
            layout: 3,
            main: {
            },
            style: {
              fontFamily: "Roboto",
              fontWeight: "100",
              fontSize:"15",
              background: "white",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/latestStatusHeading",

          options: {
            widget: "Box",
          },

          config: {
            layout: 3,
            main: {
              heading: "Latest Status :",
            },
            style: {
              fontFamily: "Roboto",
              fontWeight: "100",
              background: "white",
              fontSize:"15",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/latestStatus",

          options: {
            widget: "Box",
          },

          config: {
            layout: 3,
            main: {
            },
            style: {
              fontFamily: "Roboto",
              fontWeight: "100",
              background: "white",
              fontSize:"15",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/cycleStartDateHeading",

          options: {
            widget: "Box",
          },

          config: {
            layout: 3,
            main: {
              heading: "Start Date :",
            },
            style: {
              fontFamily: "Roboto",
              fontWeight: "100",
              background: "white",
              fontSize:"15",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/startDate",

          options: {
            widget: "Box",
          },

          config: {
            layout: 3,
            main: {
            },
            style: {
              fontFamily: "Roboto",
              background: "white",
              fontWeight: "100",
              fontSize:"15",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/endDateHeading",

          options: {
            widget: "Box",
          },

          config: {
            layout: 3,
            main: {
              heading: "End Date :",
            },
            style: {
              fontFamily: "Roboto",
              fontWeight: "100",
              background: "white",
              fontSize:"15",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/endDate",

          options: {
            widget: "Box",
          },

          config: {
            layout: 3,
            main: {
            },
            style: {
              fontFamily: "Roboto",
              fontWeight: "100",
              background: "white",
              fontSize:"15",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/forceHeading",

          options: {
            widget: "Box",
          },

          config: {
            layout: 3,
            main: {
              heading: "Force :",
            },
            style: {
              fontFamily: "Roboto",
              fontWeight: "100",
              background: "white",
              fontSize:"15",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/isForce",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 3, sm: 3, md: 2.5, lg: 2.5 },
            main: {
              
              options: [
                {label:"YES", value:"YES"},
                {label:"NO", value:"NO"}
              ],
              color: "secondary",
            },
          },
        },
        
        {
          type: "Control",
          scope: "#/properties/EmptyBox",

          config: {
            layout: 6.5,
          },
          options: {
            widget: "EmptyBox",
          },
        },
        {
          type: "Control",
          scope: "#/properties/refreshButton",

          options: {
            widget: "Button",
          },
          config: {
            layout: {
              xs: 12,
              sm: 4,
              md: 3,
              lg: 3,
            },
            main: {
              styleDefault: true,
              size: "large",
              onClick: "refreshPage",
              name: "Refresh",
              variant: "contained",
              color: "info",
              type: "text",
            },
            style: {
            },
          },
        },
        
        {
          type: "Control",
          scope: "#/properties/loadData",
          options: {
            widget: "Button",
          },

          config: {
            layout: {
              xs: 12,
              sm: 4,
              md: 3,
              lg: 3,
            },
            main: {
              name: "Load",
              variant: "contained",
              color: "info",
              type: "text",
              onClick: "loadData",
              size: "large",
            },
            style: {
              textAlign: "right",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/compute",
          options: {
            widget: "Button",
          },

          config: {
            layout: {
              xs: 12,
              sm: 4,
              md: 3,
              lg: 3,
            },
            main: {
              name: "Compute",
              variant: "contained",
              color: "info",
              type: "text",
              onClick: "ComputeData",
              size: "large",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/startWorkflow",
          options: {
            widget: "Button",
          },

          config: {
            layout: {
              xs: 12,
              sm: 4,
              md: 3,
              lg: 3,
            },
            main: {
              name: "Start Workflow",
              variant: "contained",
              color: "info",
              type: "text",
              onClick: "StartWorkflow",
              size: "large",
            },
            style: {
              textAlign: "right",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",

          config: {
            layout: 3,
          },
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
          label: "Processing Requests",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/AuditList",
          options: {
            widget: "Table",
          },
          elements:[ {
            accessorKey: "id",
            header: "Id",
            width: "40",
          },
          {
            accessorKey: "stage",

            header: "Stage",
          },
          {
            accessorKey: "status",

            header: "Status",
          },
          {
            accessorKey: "createdOn",

            header: "Created On",
          },
          {
            accessorKey: "modifiedOn",

            header: "Updated On",
          },],
          config: {
            layout: 12,
            main: {
            },
          },
        },
      ],
    },

    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Exceptions",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/ExceptionList",

          options: {
            widget: "Table",
          },
          elements:[ {
            accessorKey: "Stage",

            header: "Stage",
          },
          {
            accessorKey: "Code",

            header: "Code",
          },
          {
            accessorKey: "Description",
            header: "Description",
          },
          {
            accessorKey: "CreatedOn",

            header: "Date & Time",
          },],
          config: {
            layout: 12,

            main: {  
            },
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Processed Data",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/processedDataReport",
          options: {
            widget: "Table",
          },
          elements: [{
            accessorKey: "Id",
            header: "Id",
            width: "40",
          },
          {
            accessorKey: "Payee Name",
            header: "Payee Name",
          },],
          config: {
            layout: 12,
            main: {
            },
          },
        },
      ],
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
  ],
};
