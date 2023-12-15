import { EventUiSchema } from "../event/uiSchema"
export const PageMasterUiSchema: any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 1,
          header: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/pageMaster",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8,
            main: {
              heading: "Page Master",
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
          label: "Page Template",
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
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Name",
              options: [],
              color: "secondary",
              errorMessage:"Name should be start with 'page_'",
              helperText:'Name should be start with "page_"',
              required: true,
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/label",

          options: {
            widget: "InputField",
          },
          config: {
            layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
            main: {
              label: "Label",
              options: [],
              color: "secondary",
              required: true,
            },
          },
        }
      ],
    },
    {
      type: "TabLayout",
      config: {
        main: {
          tabLabels: ["Components", "events"],
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "WrapperLayout",
          config: {
            main: {
              // label: "Success Case Event",
              divider: true,
            },
            wrapperStyle: {
              border: "1px solid gray"
            },
          },
          elements: [
            {
              type: "Control",
              scope: "#/properties/heading",
    
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
                  paddingLeft: "-10px",
                  fontSize: "20px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/AddButton",
              options: {
                widget: "IconButton",
              },
              config: {
                layout: 3,
                main: {
                  icon: "AddIcon",
                  styleDefault: true,
                  size: "small",
                  onClick: "onAddClickHandler",
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
            }
          },
          elements: [
            {
              accessorKey: "name",

              header: "Name",
            },
            {
              accessorKey: "type",

              header: "Type",
            },
            {
              header: "Edit",
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
                    onClick: "Edit_Components",
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
                    onClick: "Delete_Components",
                    tooltipMessage: "Reject This Record",
                  },
                },
              },
            }
          ]
        }]},
        {
          type: "WrapperLayout",
          config: {
            main: {
              // label: "Success Case Event",
              divider: true,
            },
            wrapperStyle: {
              border: "1px solid gray"
            },
          },
          elements: [
            {
              type: "Control",
              scope: "#/properties/heading",
    
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
                  paddingLeft: "-10px",
                  fontSize: "20px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/AddButton",
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
                        onClick: "editEvent",
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
            }]
        },
        
      ],
    },
    {
      type: "Control",
      scope: "#/properties/btn",
      options: {
        widget: "EmptyBox",
      },
      config: {
        layout: { xs: 0, sm: 0, md: 8, lg: 7 },
      }
    },
    {
      type: "Control",
      scope: "#/properties/btn",
      options: {
        widget: "Button",
      },

      config: {
        layout: 11.7,
        main: {
          name: "Submit Page",
          startIcon: "ApproveIcon",
          variant: "contained",
          color: "info",
          type: "text",
          onClick: "submitPageHandler",
          size: "small",
        },
        style: {
          marginBottom: "8px",
          width:{xs:"100%",sm:"100%",md:"25%",lg:"20%"},
          float: "right",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/notify",
      options: {
        widget: "Notify",
      },
      layout: 6,
    }
  ]
}

