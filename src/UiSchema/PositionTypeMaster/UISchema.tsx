export const PositionTypeMasterUISchema = {
  type: "HorizontalLayout",
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
              layout: 5.5,
              options: {
                widget: "Box",
              },
              value: {
                content: {
                  heading: "Position Type Master",
                },
                style: {
                  // marginTop: "18px",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  // paddingTop: "8px",
                  fontSize: "20px",
                  // paddingBottom: "8px",
                  // borderRadius: "20px",
                  background: "white",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/Back_Button",
              layout: 5.5,
              options: {
                widget: "Button",
              },
              value: {
                content: { 
                  icon:"BackIcon",
                  styleDefault:true,
                  size:"small",
                  funcName: "backHandler",
                },
                style: {
                  // width:"20%",
                  float:"right",
                  // marginTop:"20px",
                  // marginRight:"15px"
                },
              },
            }
        ],
        },
      },
    },
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
      scope: "#/properties/name",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
      options: {
        widget: "InputField",
      },
      value: {
        content: {
          label: "Name",
          type: "text",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/active",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
      options: {
        widget: "RadioInputField",
      },
      value: {
        content: {
          label: "Active",
          options: ["YES", "NO"],
         
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/btn",
      options: {
        widget: "Button",
      },
      layout: 11.5,
      value: {
        content: {
          name: "Submit",
          startIcon:"ApproveIcon",
          variant: "contained",
          color: "info",
          type: "text",
          funcName: "Submit_PositionType",
          size: "small",
        },
        style: {
          // marginBottom:"8px"
          width:"25%",
          float:"right"
        },
      },
    }
    
  ]}}}
  ],
};
