export const MasterActionDetailsUiSchema = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          heading: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/masterActions",

          options: {
            widget: "Box",
          },
          config: {
            layout: 9,
            main: {
              heading: "Master Actions",
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
          rowSpacing: 3,
        },
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/actionRecords",
          options: {
            widget: "Table",
          },
          elements: [
            {
              accessorKey: "id",
              header: "id",
            },
            {
              accessorKey: "stage",
              header: "Stage",
            },
            {
              accessorKey: "action",
              header: "Action",
            },
            {
              accessorKey: "actionBy",
              header: "Action By",
            },
            {
              accessorKey : "remarks",
              header : "Remarks"
            }
          ],
          config: {
            main: {
              columns: {},
            },
          },
        },
      ],
    },
  ],
};