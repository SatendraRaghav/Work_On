export const NotificationUiSchema = {
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
            scope: "#/properties/notification",
  
            options: {
              widget: "Box",
            },
            config: {
              layout: 8,
              main: {
                heading: "Notification",
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
            label: "Config",
            divider: true,
          },
          defaultStyle: true,
        },
  
        elements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/name",
  
                options: {
                  widget: "InputField",
                },
                config: {
                  layout: {
                    xs: 12,
                    sm: 12,
                    md: 6,
                    lg: 6,
                  },
                  main: {
                    label: "Name",
                    color: "secondary",
                    required: true,
                    options: [],
                  },
                },
              },
              {
                type: "Control",
                scope: "#/properties/type",
  
                options: {
                  widget: "InputField",
                },
                config: {
                  layout: {
                    xs: 12,
                    sm: 12,
                    md: 6,
                    lg: 6,
                  },
                  main: {
                    label: "Type",
                    options: [],
                    color: "secondary",
                    required: true,
                  },
                },
              },
              {
                type: "Control",
                scope: "#/properties/body",
                layout: 11.5,
                options: {
                  detail: {
                    type: "HorizontalLayout",
                    elements: [
                      {
                        type: "Control",
                        scope: "#/properties/key",
                        options: {
                          widget: "InputField",
                        },
                        config: {
                          layout: {
                            xs: 11,
                            sm: 11,
                            md: 5.5,
                            lg: 5.5,
                          },
                          main: {
                            label: "Key",
                            options: [],
                          },
                        },
                      },
                      {
                        type: "Control",
                        scope: "#/properties/value",
  
                        options: {
                          widget: "InputField",
                        },
                        config: {
                          layout: {
                            xs: 11,
                            sm: 11,
                            md: 5.5,
                            lg: 5.5,
                          },
                          main: {
                            label: "Value",
                          },
                        },
                      },
                    ],
                  },
                },
              },
              {
                type: "Control",
                scope: "#/properties/proc",
                config: {
                  layout: { xs: 11, sm: 11, md: 6, lg: 6 },
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
                    name: "Add",
                    startIcon: "ApproveIcon",
                    variant: "contained",
                    color: "info",
                    type: "text",
                    onClick: "saveConfig",
                    size: "small",
                  },
                  style: {
                    marginBottom: "8px",
                    float: "right",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  };