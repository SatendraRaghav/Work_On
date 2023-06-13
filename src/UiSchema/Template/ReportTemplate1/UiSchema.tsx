export const ReportTemplate1UiSchema = () => {
  return {
    type: "HorizontalLayout",
    pageStyle: {
      height: "120vh",
    },
    elements: [
      {
        type: "Control",
        scope: "#/properties/reportListWrapper",
        options: {
          widget: "Wrapper",
          detail: {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",

                scope: "#/properties/programType",

                options: {
                  widget: "Box",
                },

                config: {
                  layout: 5.5,
                  main: {
                    heading: window.localStorage.getItem("pageName"),
                  },

                  style: {
                    fontWeight: "500",

                    fontSize: "20px",

                    background: "white",
                  },
                },
              },
              {
                type: "Control",

                scope: "#/properties/EmptyBox",

                config:{layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 }},

                options: {
                  widget: "EmptyBox",
                },
              },
            ],
          },
        },
      },
      {
        type: "HorizontalLayout",
        config: { defaultStyle: true },

        elements: [
          {
            type: "Control",
            scope: "#/properties/programType",
           
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
              content: {
                label: "Program",
                options: [{}],
                color: "secondary",
                required: true,
                errorMessage: "Program is not selected",
              },
            },
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
};
