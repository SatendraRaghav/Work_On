export const Button = {
  type: "Control",
  scope: "#/properties/button",
  options: {
    widget: "Button",
  },
  config: {
    layout: {
      xs: 11,
      sm: 11,
      md: 5.5,
      lg: 5.5,
    },
    main: {
      name: "",
      variant: "contained",
      color: "info",
      type: "text",
      onClick: "downloadFile",
      size: "large",
    },
    style: {
      width: "30%",
      float: "right",
    },
  },
};
