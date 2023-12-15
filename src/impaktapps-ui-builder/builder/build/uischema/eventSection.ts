export const EventSection = {
    type: "HorizontalLayout",
    elements: [
          {
            type: "WrapperLayout",
            config: {
              main: {
                // label: "Table Columns",
                divider: true,
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
                    heading: "Event Table",
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
                    onClick: "eventAddHandler",
                    tooltipMessage: "Back",
                  },
                  style: {
                    float: "right", 
                  },
                },
              },
      {
        type: "Control",
        scope: "#/properties/events",
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
        elements: [
              
          {
            accessorKey: "eventType",
            header: "Event Type",
          },
          {
            accessorKey: "Handler",
            header: "Handler",
          },
          {
            accessorKey: "Edit_Approve_Records",
            header: "Edit Widget",

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
                  tooltipMessage: "Edit This Record",
                  onClick: "eventEditHandler",
                },
                style: {
                  color: "#3949ab",
                },
              },
            },
          },
          {
            accessorKey: "Reject_Records",
            header: "Delete",

            widget: {
              type: "Control",
              scope: "#/properties/RejectButton",
              accessorKeyName: "Reject_Records",
              options: {
                widget: "IconButton",
              },
              config: {
                main: {
                  icon: "RejectIcon",
                  color: "error",
                  tooltipMessage: "Reject This Record",
                  onClick: "deleteEvent",
                },
              },
            },
          },
        ]
      }]}
    ]}
  
  export const EventSectionSchema = {
    events: {
      type: "array",
      items: {
        type: "object",
        properties: {
            eventType: {
            type: "string",
          },
          configType: {
            type: "string",
          },
        },
      },
    },
  };
  