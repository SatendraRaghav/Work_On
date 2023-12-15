export const PageMasterRecordsUiSchema = {
    type: "HorizontalLayout",
    elements: [
      {
        type: "WrapperLayout",
        config: {
          main: {
            rowSpacing: 3,
            heading : true
          },
          defaultStyle : true
        },
        elements: [
          {
            type: "Control",
            scope: "#/properties/programType",
  
            options: {
              widget: "Box",
            },
            config: {
              layout: 8.5,
              main: {
                heading: "Page Master",
              },
            },
          },
          {
            type: "Control",
            scope: "#/properties/New_Page",
  
            options: {
              widget: "IconButton",
            },
            config: {
              layout: 3,
              main: {
                icon: "AddIcon",
                size: "small",
                styleDefault: true,
                tooltipMessage: "Create New Page",
                onClick: "newPage",
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
            label: "Pages Records",
            divider: true,
          },
          defaultStyle: true,
        },
        elements: [
          {
            type: "Control",
            scope: "#/properties/PageRecords",
            options: {
              widget: "Table",
            },
            elements:[ {
              accessorKey: "id",
              header: "id",
            },
            {
              accessorKey: "name",
              header: "Name",
            },
            {
              accessorKey: "Edit_Approve_Records",
              header: "Edit",
  
              widget: {
                type: "Control",
                scope: "#/properties/Edit_Records",
                options: {
                  widget: "IconButton",
                },
                config: {
                  main: {
                    color: "info",
                    size: "small",
                    icon: "EditIcon",
                    onClick: "Edit_Records",
                    tooltipMessage: "Edit This Record",
                  },
                  style: {
                    color: "#3949ab",
                  },
                },
              },
            },
          ],
            config: {
              main: {
                columns: {
                 
                },
              },
            },
          },
        ],
      },
    ],
  };
  