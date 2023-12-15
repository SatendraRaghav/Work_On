export const TableSection = {
  type: "HorizontalLayout",
  elements: [
        {
          type: "WrapperLayout",
          config: {
            main: {
              // label: "Table Columns",
              // divider: true,
            },
            wrapperStyle: {
              border:"1px solid gray"
            },
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
                  heading: "Components Table",
                },
                style: {
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  paddingLeft:"-10px",
                  fontSize: "20px",},
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
                  icon: "AddIcon",
                  styleDefault: true,
                  size: "small",
                  onClick: "widgetAddClickHandler",
                  tooltipMessage: "Add New",
                },
                style: {
                  float: "right", 
                },
              },
            },
    {
      type: "Control",
      scope: "#/properties/elements",
      options: {
        widget: "Table",
      },
      config: {
        main: {
          disableAction: true,
          disableSelection: true,
          enableDrag: true,
         
        },
      },
      elements:[
        {
          accessorKey: "name",
          header: "Name"
        },
        {
          accessorKey: "type",
          header: "Type"
        },
        {
          header: "Edit Record",
          field: "Reject_Records",
          flex: 1,
          widget: {
            type: "Control",
            scope: "#/properties/RejectButton",
            options: {
              widget: "IconButton",
            },
            config: {
              main: {
                icon: "EditIcon",
                color: "primary",
                onClick: "editComponents",
                tooltipMessage: "Reject This Record",
              },
            },
          },
        },
        {
          header: "Delete",
          field: "Reject_Records",
          flex: 1,
          widget: {
            type: "Control",
            scope: "#/properties/RejectButton",
            options: {
              widget: "IconButton",
            },
            config: {
              main: {
                icon: "RejectIcon",
                color: "error",
                onClick: "deleteComponents",
                tooltipMessage: "Reject This Record",
              },
            },
          },
        }
      ]
    }]}
  ]}

export const TableSectionSchema = {
  columns: {
    type: "array",
    items: {
      type: "object",
      properties: {
        header: {
          type: "string",
        },
        accessorKey: {
          type: "string",
        },
        widgetType: {
          type: "string",
        },
      },
    },
  },
};
