export const MultipleSelect: any = {
  type: "Control",
  scope: "#/properties/path",

  options: {
    widget: "MultipleSelect",
  },
  config: {
    layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
    main: {
      label: "",
      type: "text",
      multiple: true,
      variant: "standard",
      options: [],
    },
  },
};
