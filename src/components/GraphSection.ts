import _ from "lodash";

const getInputField = (scope: String, label: String) => {
  return {
    type: "Control",
    scope: `#/properties/${scope}`,

    options: {
      widget: "InputField",
    },
    config: {
      layout: {
        xs: 11,
        sm: 11,
        md: 5.5,
        lg: 5.5,
      },
      main: {
        label: label,
      },
    },
  };
};

const graphType = {
  type: "Control",
  scope: "#/properties/graphType",

  options: {
    widget: "SelectInputField",
  },
  config: {
    layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
    main: {
      label: "Graph Type",
      type: "text",
      options: [
        { label: "Bar Graph", value: "BarGraph" },
        { label: "Stack Bar Graph", value: "StackBarGraph" },
        { label: "Pie Graph", value: "PieGraph" },
        { label: "Horizontal Bar Graph", value: "HorizontalBarGraph" },
      ],
    },
  },
};
const radioInput = {
  type: "Control",
  scope: "#/properties/legendHide",

  options: {
    widget: "RadioInputField",
  },
  config: {
    layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
    main: {
      label: "Legend Hide",
      options: ["True", "False"],
    },
  },
};

const emptyBox = {
  type: "Control",
  scope: "#/properties/proc",
  config: {
    layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
  },
  options: {
    widget: "EmptyBox",
  },
};

const GraphSection = {
  type: "HorizontalLayout",
  elements: [],
};

export const buildGraphSection = function (type: String) {
  let uiSchema = _.cloneDeep(GraphSection);

  if (type === "SpeedoMeter" || type === "RankCard" || type === "Timer") {
    const heading = getInputField("heading", "Heading");
    uiSchema.elements = [heading, emptyBox];
  } else if (type === "CardSlider") {
    const heading = getInputField("heading", "Heading");
    const iconName = getInputField("iconName", "Icon Name");
    uiSchema.elements = [heading, iconName];
  } else if (type === "ProgressBar" || type === "ProgressBarCard") {
    const heading = getInputField("heading", "Heading");
    const bottomLabel_1 = getInputField("bottomLabel_1", "First BottomLabel");
    const bottomLabel_2 = getInputField("bottomLabel_2", "Second BottomLabel");
    const bottomLabel_3 = getInputField("bottomLabel_3", "Third BottomLabel");
    uiSchema.elements = [heading, bottomLabel_1, bottomLabel_2, bottomLabel_3];
  } else if (type === "card" || type === "Box") {
    const caption = getInputField("caption", "Caption");
    const iconName = getInputField("iconName", "Icon Name");
    uiSchema.elements = [caption, iconName];
  } else if (type === "Graph") {
    const height = getInputField("height", "Height");
    const heading = getInputField("heading", "Heading");
    const leftLabel = getInputField("leftLabel", "Left Label");
    const bottomLabel = getInputField("bottomLabel", "Bottom Label");

    uiSchema.elements = [
      heading,
      height,
      graphType,
      leftLabel,
      bottomLabel,
      radioInput,
    ];
  }else if (type === "Rank"){
    const height = getInputField("height", "Height");
    uiSchema.elements = [
     height,
    ];
  }

  return uiSchema;
};
