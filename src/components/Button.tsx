export const Button =  {
    type: "Control",
    scope: "#/properties/button",
    options: {
      widget: "Button",
    },
    layout: {
      xs: 11,
      sm: 11,
      md: 5.5,
      lg: 5.5,
    },
    value: {
      content: {
        name: "",
        variant: "contained",
        color: "info",
        type: "text",
        funcName:"downloadFile",
        size: "large"
      },
      style: {
        width:"30%",
       float: "right",
      },
    },
  }
  export const EmptyBox =  {
    type: "Control",
    scope: "#/properties/emptyBox",
    options: {
      widget: "EmptyBox",
    },
  
    value: {
      content: {
      }
    },
  }