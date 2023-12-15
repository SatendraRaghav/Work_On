export default {
  type: "WrapperLayout",
  config: {
    layout: {
      xs: 11,
      sm: 11,
      md: 5.5,
      lg: 5.5,
    },
    main: {},
    defaultStyle: true,
  },
  elements: [
    {
      type: "Control",
      scope: "#/properties/pbc_progress",
      options: {
        widget: "ProgressBar",
      },

      config: {
        layout: 10,
        main: {},
      },
    },
  ],
};
