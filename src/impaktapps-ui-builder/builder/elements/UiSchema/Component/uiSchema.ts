export const componentBasicUiSchema: any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 1,
          header:true
        },
        defaultStyle:true
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
          tabLabels: ["Core"],
          defaultStyle: true,
          id:`component`
        },
      },

      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/type",

              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 12, sm: 12, md: 6, lg: 6 },
                main: {
                  label: "Type",
                },
              },
            },
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
                  options: [],
                  color: "secondary",
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
                layout: {
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 6,
                },
                main: {
                  label: "Label",
                  options: [],
                  color: "secondary",
                  required: true,
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
              scope: "#/properties/layout",
              layout: 11.5,
              options: {
                detail: {
                  type: "HorizontalLayout",
                  elements: [
                    {
                      type: "Control",
                      scope: "#/properties/key",
                      options: {
                        widget: "SelectInputField",
                      },
                      config: {
                        layout: {
                          xs: 11,
                          sm: 11,
                          md: 5.5,
                          lg: 5.5,
                        },
                        main: {
                          label: "Screen Size",
                        
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
                          options: [
                            {   label: "3", value: "3" },
                            {   label: "5.5", value: "5.5" },
                            {   label: "8", value: "8" },
                            {   label: "12", value: "12" },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
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

















   // {
        //   type: "Control",
        //   scope: "#/properties/homeBtn",
         
        //   options: {
        //     widget: "Button",
        //   },
        //   config: {
        //     layout: {xs:2,sm:2,md:1},
        //     main: {
        //       name: "🏠",
        //     },
        //     style: {
        //       marginRight:'auto',
        //       marginLeft:"auto",
        //       width:"20px",

        //       // background:"inherit",
        //       // boxShadow:"none",
        //       float:"left",
        //       borderRadius:"50%"
           
        //     },
        //   },
        // },