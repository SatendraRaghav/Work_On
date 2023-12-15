export default {
  type: "Control",
  scope: "#/properties/pbc_progress",
  options: {
    widget: "ProgressBar",
  },

  config: {
    layout: 6,
    main: {
      developOnlyProgresBar: false,
      bottomLabel_3: "Remaining",
      heading: "PBC Details",
    },
  },
};
