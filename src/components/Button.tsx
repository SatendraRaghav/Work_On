export const Button =  {
    type: "Control",
    scope: "#/properties/button",
    options: {
      widget: "Button",
    },
    layout: {
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
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
        textAlign: "right",
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