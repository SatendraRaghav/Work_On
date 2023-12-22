export const PayoutProcessingUiSchema: any = {
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
          scope: "#/properties/pageHeading",

          options: {
            widget: "Box",
          },
          config: {
            layout: 11.6,
            main: {
              heading: "Payout Processing",
            },
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Search Program",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/programType",

          options: {
            widget: "SelectInputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Program",
              options: [],
              color: "secondary",
              required: true,
              onClick: "loadCycle",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/search",
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
              name: "Search",
              startIcon: "SearchIcon",
              variant: "contained",
              color: "info",
              type: "text",
              onClick: "searchData",
              size: "large",
            },
            style: {
              textAlign: "right",
              float: "right",
              width: "40%",
              // marginTop: "25px",
            },
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "To Be Processed Cycles",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/toBeProcessedDataReport",
          options: {
            widget: "Table",
          },
          elements: [
            {
              accessorKey: "id",
              header: "Id",
              width: "40",
            },
            {
              accessorKey: "programCycleName",
              header: "Program Cycle Name",
            },
            {
              accessorKey: "isDirty",
              header: "Dirty",
            },
            {
              accessorKey: "status",
              header: "Latest Status",
            },
            {
              accessorKey: "Edit",
              header: "Details",
              widget: {
                type: "Control",
                scope: "#/properties/Edit",
                options: {
                  widget: "IconButton",
                },
                config: {
                  main: {
                    name: "Edit",
                    variant: "contained",
                    color: "info",
                    type: "text",
                    onClick: "EditRequest",
                    size: "small",
                    icon: "EditIcon",
                    tooltipMessage: "Edit This Request",
                  },
                  style: {
                    // color: "#3949ab",
                  },
                },
              },
            },
          ],
          config: {
            layout: 12,
            main: {},
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
