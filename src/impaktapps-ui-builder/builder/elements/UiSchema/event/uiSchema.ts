import { getSelectField } from "../../../build/uischema/buildPropertiesSection"; 

export const EventUiSchema: any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 1,
          header: true
        },
        defaultStyle: true
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/Component",

          options: {
            widget: "Box",
          },
          config: {
            layout: {xs:12,sm:12,md:2},
            main: {
              heading: "Component",
            },
            style:{
              "float":"left",
            }
          },
        },
       
        {
          type: "Control",
          scope: "#/properties/pageName",
         
          options: {
            widget: "Box",
          },
          config: {
            layout: {xs:7,sm:7,md:9},
            main: {
              heading: " ",
            },
            style: {
              float: "right",
              width:"auto",
              fontSize:"12px",
              color:"gray",
              paddingTop:"10px"
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
            layout: {xs:2,sm:2,md:0.5},
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
      type: "TabLayout",
      config: {
        main: {
          tabLabels: ["Core", "Response Event"],
          defaultStyle: true,
          id: "event"
        },
      },

      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: `#/properties/eventType`,
          
              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
                main: {
                  label: "Event Type",
                  type: "text",                
  
                },
              },
            },
            getSelectField("Handler", "Handler", [
              { label: "Custom", value: "custom" },
              { label: "Api", value: "api" },
              { label: "Inbuilt Function", value: "inBuiltFunction" },
              { label: "Refresh", value: "refresh" },
            ]),
          ],
        },
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
                  heading: "Response Event",
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
                  onClick: "addEvent",
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
        }
      ],
    },
    {
      type: "Control",
      scope: "#/properties/proc",
      config: {
        layout: { xs: 11, sm: 11, md: 8, lg: 8 },
      },
      options: {
        widget: "EmptyBox",
      },
    },
    {
      type: "Control",
      scope: "#/properties/btn",
      options: {
        widget: "Button",
      },

      config: {
        layout: {
          xs: 11,
          sm: 11,
          md: 3,
          lg: 3,
        },
        main: {
          name: "Save",
          startIcon: "ApproveIcon",
          variant: "contained",
          color: "info",
          type: "text",
          onClick: "saveHandler",
          size: "small",
        },
        style: {
          marginBottom: "8px",
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
  ],
};
