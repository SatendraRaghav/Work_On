export default  {
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
      name: "Compare",
      variant: "contained",
      color: "info",
      type: "text",
      startIcon:"",
      styleDefault:false,
      icon:"",
      onClick: "onClick",
      size: "small",
    },
    style: {
    },
  },
};
