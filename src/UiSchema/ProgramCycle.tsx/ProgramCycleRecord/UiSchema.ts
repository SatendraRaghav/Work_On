export const ProgramMasterCycleRecordUiSchema: any = {
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
            layout: 8.5,
            main: {
              heading: "Create Program Cycle",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/New_Record",

          options: {
            widget: "IconButton",
          },
          config: {
            layout: 3,
            main: {
              name: "New Records",
              icon: "AddIcon",
              size: "small",
              onClick: "addNewRecords",
              styleDefault: true,
              tooltipMessage: "Add New Record",
            },
            style: {
              float: "right",
            },
          },
        },
      ],
    },

    {
      type: "TabLayout",
      config: {
        main: {
          id: "cycle",
          tabLabels: ["Cycle Records"],
          layout: 12,
        },
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/CycleApproveRecords",
          options: {
            widget: "Table",
          },
          config: {
            main: {},
          },
          elements: [
            {
              accessorKey: "id",
              // width: "100",
              header: "Id",
            },
            {
              accessorKey: "name",
              // width: "80",

              header: "Cycle Name",
              cellOverflow: "wrap",
            },
            {
              accessorKey: "program",
              // width: "80",

              header: "Program Name",
              cellOverflow: "wrap",
            },
            {
              accessorKey: "startDate",
              header: "Start Date",
            },
            {
              accessorKey: "endDate",
              header: "End Date",
            },
          ],
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
