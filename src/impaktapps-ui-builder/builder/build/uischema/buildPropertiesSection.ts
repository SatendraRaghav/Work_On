
import _ from "lodash";
const EmptyBox = {
  type: "Control",
  scope: `#/properties/empty`,

  options: {
    widget: "EmptyBox",
  },
  config: {
    layout: {
      xs: 11,
      sm: 11,
      md: 5.5,
      lg: 5.5,
    },
    main: {

    },
  },
};
const getArrayControl = (parentScope: string, childScope: string, childLabel?: string,) => {
  return {
    type: "Control",
    scope: `#/properties/${parentScope}`,
    layout: 11.5,
    options: {
      "elementLabelProp": childScope,
      detail: {
        type: "HorizontalLayout",
        elements: [
          {
            type: "Control",
            scope: `#/properties/${childScope}`,

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
                label: childLabel || "Labels for Tab",
              },
            },
          },
        ],
      },
    },
  }
}
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

const getRadioInputField = (scope: String, label: String, options: string[]) => {
  return {
    type: "Control",
    scope: `#/properties/${scope}`,

    options: {
      widget: "RadioInputField",
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

        options: options,
      },
    },
  };
};

export const getTextArea = (scope: string, heading: string, hideButton: boolean, layout?: any) => {
  return {
    type: "Control",
    scope: `#/properties/${scope}`,

    options: {
      widget: "TextArea",
    },
    config: {
      layout: layout || 12,
      style: {
        containerStyle: {
          borderRadius: "20px",
        },
        headerContainerStyle: {

        },
        textAreaStyle: {
          borderRadius: "20px",
          padding: "20px"
          // background:"black",
          // color:"white"
        }
      },
      main: {
        heading: heading,
        minRows: 8,
        hideButton: hideButton
      },
    },
  }
}
export const getSelectField = (scope: string, label: string, options: { label: string, value: string }[]) => {
  return {
    type: "Control",
    scope: `#/properties/${scope}`,

    options: {
      widget: "SelectInputField",
    },
    config: {
      layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
      main: {
        label: label,
        type: "text",
        options: options
      },
    },
  }
}


const GraphSection = {
  type: "HorizontalLayout",
  elements: [],
};

export const buildPropertiesSection = function (type: String) {
  let uiSchema = _.cloneDeep(GraphSection);
  if (type === "SpeedoMeter") {
    uiSchema.elements = [
      getInputField("segments", "Segments Count"),
      getInputField("heading", "Container Heading"),
      getInputField("heading", "Container Heading"),
      getInputField("speedoCaption", "Speedometer Caption"),
      getInputField("width", "Speedometer Width")
    ]
  }
  else if (type === "RankCard") {
    uiSchema.elements = [
      getInputField("rank", "Rank"),
      getInputField("image", "Image Url"),
      getInputField("title", "Card Title"),
      getInputField("description", "Card Description")];
  }
  else if (type === "LeaderBoard") {
    uiSchema.elements = [getInputField("valueLabel", "Value Label"),
    getInputField("firstImage", "First Image url"),
    getInputField("secondImage", "Second Image url"),
    getInputField("thirdImage", "Third Image url"),
    getTextArea("functionCode", "Write Compare Code", false)
    ];
  }
  else if (type === "CardSlider") {
    const heading = getInputField("heading", "Heading");
    const iconName = getInputField("iconName", "Icon Name");
    uiSchema.elements = [heading, iconName];
  } else if (type === "ProgressBar" || type === "ProgressBarCard") {
    const heading = getInputField("heading", "Heading");
    const bottomLabel_1 = getInputField("bottomLabel_1", "First BottomLabel");
    const bottomLabel_2 = getInputField("bottomLabel_2", "Second BottomLabel");
    const bottomLabel_3 = getInputField("bottomLabel_3", "Third BottomLabel");
    uiSchema.elements = [heading, bottomLabel_1, bottomLabel_2, bottomLabel_3];
  } else if (type === "card") {
    uiSchema.elements = [getInputField("url", "Image Url"), getInputField("label", "Label"), getInputField("description", "Description"),];
  }
  else if (type === "Button") {
    const caption = getInputField("color", "Color");
    const size = getInputField("size", "Size");
    const iconName = getInputField("iconName", "Icon Name");
    uiSchema.elements = [getSelectField("buttonType", "Button Type", [
      { label: "Button With Text", value: "Button" },
      { label: "Button With Icon", value: "IconButton" },
      { label: "Button With Icon and Text", value: "ButtonWithIconAndText" },
    ]), iconName, size, caption,
    getSelectField("defaultStyle", "Default Style", [
      { label: "Apply Default Style", value: "true" },
      { label: "No Style", value: "false" },
    ]),
    JSON.parse(JSON.stringify(EmptyBox))
    ];
  } else if (type === "Graph") {
    const height = getInputField("height", "Height");
    const heading = getInputField("heading", "Heading");
    const leftLabel = getInputField("leftLabel", "Left Label");
    const bottomLabel = getInputField("bottomLabel", "Bottom Label");
    const legendAvailabe = getRadioInputField("legendHide", "Legend Hide", ["YES", "No"])

    uiSchema.elements = [
      heading,
      height,
      getSelectField("graphType", "Graph Type", [
        { label: "Bar Graph", value: "BarGraph" },
        { label: "Stack Bar Graph", value: "StackBarGraph" },
        { label: "Line Graph", value: "LineGraph" },
        { label: "Pie Graph", value: "PieGraph" },
        { label: "Horizontal Bar Graph", value: "HorizontalBarGraph" },
      ]),
      leftLabel,
      bottomLabel,
      legendAvailabe,
      getArrayControl("legendLabels", "label"),
      getArrayControl("pieArcColors", "color"),
    ];
  } else if (type === "WrapperSection") {
    uiSchema.elements = [getRadioInputField("divider", "Divider", ["YES", "No"]), EmptyBox]
  }
  else if (type === "TabSection") {
    uiSchema.elements = [
      getArrayControl("sectionLabels", "label"),
    ]
  }
  else if (type === "Table" || type === "LazyLoadingTable") {
    uiSchema.elements = [
      getRadioInputField("lazyLoading", "Lazy Loading", ["YES", "NO"]),
      getRadioInputField("SelectionAvailable", "Selection Available", ["YES", "NO"]),
      getRadioInputField("ColumnResizingAvailable", "ColumnResizing Available", ["YES", "NO"]),
      getRadioInputField("DragAvailable", "Drag Available", ["YES", "NO"]),
      getInputField("selectKey", "Selection Key"),
      EmptyBox
    ]
  }
  else if (type === "Radio") {
    uiSchema.elements = [
      getArrayControl("sectionLabels", "label", "Options Of Radio"),
    ]
  }
  else if (type === "Select") {
    uiSchema.elements = [
      getRadioInputField("lazyLoading", "Lazy Loading", ["YES", "NO"]),
      getRadioInputField("freeSolo", "FreeSolo", ["YES", "NO"]),
    ]
  }
  else if (type === "MultipleSelect") {
    uiSchema.elements = [
      getRadioInputField("lazyLoading", "Lazy Loading", ["YES", "NO"]),
      EmptyBox
    ]
  }

  return uiSchema;
};
