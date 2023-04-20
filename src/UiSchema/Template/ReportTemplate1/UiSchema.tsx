export const  ReportTemplate1UiSchema = {
    type: "HorizontalLayout",
    elements: [
              {
                type: "Control",
                scope: "#/properties/EmptyBox",
                options: {
                  widget: "EmptyBox",
                },
                layout: {
                  xs: 0,
                  sm: 0,
                  md: 6,
                  lg: 6,
                },
              },
              {
                type: "Control",
                scope: "#/properties/programType",
                layout: {
                  xs: 12,
                  sm: 6,
                  md: 5,
                  lg: 5,
                },
                options: {
                  widget: "SelectInputField",
                },
                value: {
                  content: {
                    label: "Program",
                    variant:"standard",
                    options:[{}],
                    color:"secondary",
                    required: true,
                  },
                  style: {
                    '& label':{
                     paddingLeft:"20px"
                    },
                     background:"inherit"
                  },
                },
              }
            ]
}

  