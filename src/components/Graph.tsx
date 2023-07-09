export const BarGraph = {
  type: "Control",
  scope: "#/properties/graph",
  options: {
    widget: "Graph",
  },

  config: {
  
    main: {
      type: "BarGraph",
      header: "Bar Graph",
      bottomLabel: "Name of Employe",
      numTicks: 6,
      leftLabel: "Value in lakhs",
      axisLeft: true,
      axisBottom: true,

      hideTicks: false,
      hideLeftAxisLine: false,
      hideBottomAxisLine: false,
      bottomAxisWidth: "10px",
    },
    style: {
      containerStyle: {
        // background: "#e8eaf6",
        background: "white",
        width: "100%",
        height: "380",
        borderRadius: "24px",
        padding: "10px 0 2px 0",
      },
      headerStyle: {
        textAlign: "left",
        fontWeight: 500,
        fontFamily: "roboto",
        padding: "5px 0 1px 15px",
      },
      tooltipStyle: {
        padding: "6px",
        borderRadius: "2px",
      },
      labelStyle: {
        leftLabelMargin: "75",
        topLabelMargin: "-6",
        labelColor: "black",
        leftLabelOffset: 50,
        bottomLabelOffset: 10,
        tickLabelColor: "balck",
        tickFontSize: "10px",
        tickColor: "black",
        rightAxisWidth: "0.3px",
        fontSize: "10px",
      },
      barStyle: {
        // mediumValueColor: "#3f51b5",
        // highValueColor: "#3f51b5",
        // lowValueColor: "#364152",
        mediumValueColor: "rgba(63, 81, 181, 0.85)",
        highValueColor: "rgba(63, 81, 181, 0.85)",
        lowValueColor: "rgba(63, 81, 181, 0.85)",
      },
    },
  },
};

export const PieGraph = {
  type: "Control",
  scope: "#/properties/graph",
  options: {
    widget: "Graph",
  },
  config: {
    main: {
      header: "Incentive Branch category wise",
      type: "PieGraph",
      bottomLabel: "Name of Employe",
      leftLabel: "Value",
      tooltipDataKey: ["HDFC", "SBI", "Kotak"],
      axisLeft: true,
      axisBottom: true,
      legendAvailable: true,
      legend: {
        labelColor: "green",
        legendTitle: "Branches",
        direction: "row",
        align: "right",
      },
    },

    style: {
      containerStyle: {
        // background: "#e8eaf6",
        background: "white",
        width: "100%",
        height: "310",
        borderRadius: "20px",
        padding: "10px 0 2px 0",
      },
      headerStyle: {
        textAlign: "left",
        fontWeight: 500,
        fontFamily: "roboto",
        padding: "5px 0 1px 15px",
      },
      tooltipStyle: {
        width: "100%",
      },
      labelStyle: {
        labelColor: "black",
        labelOffset: 45,
        leftLabelMargin: "70",
        topLabelMargin: "-40",
      },
      legendStyle: {
        legend: {
          lineHeight: "0.9em",
          color: "black",
          fontSize: "10px",

          fontFamily: "arial",
          padding: "10px 10px",
          float: "left",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: " 8px",
          margin: "5px 5px",
        },
        legendTitle: {
          fontWeight: 500,
          fontFamily: "roboto",
          fontSize: "10px",
          // padding: "5px 0 1px 15px",
        },
      },
      pieStyle: {
        colorRange: ["#3f51b5", "rgba(200,0,31,0.9)", "rgba(25,200,205,0.6)"],
        outerRadius: 120,
        innerRadius: 60,
        cornerRadius: 2,
        padAngle: 0.006,
      },
    },
  },
};
export const LineGraph = {
  type: "Control",
  scope: "#/properties/graph",
  options: {
    widget: "Graph",
  },
  config: {
    main: {
      type:"LineGraph",
      // data: value?.main?.data  || [Product1],
      header: "Quartely Incentive in Thousand",
      bottomLabel: "Years",
      leftLabel: "Incentive",
      gridHidden: true,
      numHidden: false,
      tooltipDataKey: ["MAMA New Project", "Second", "Third"],
      axisLeft: true,

      axisBottom: true,
      hideLeftAxisLine: false,
      hideBottomAxisLine: false,
      legend: {
        labelColor: "green",
        legendTitle: "Our Assests",
        direction: "row",
        align: "right",
        colorRectWidth: 20,
      },
    },
    style: {
      containerStyle: {
        background: "white",
        width: "100%",
        height: "200",
        borderRadius: "20px",
        padding: "10px 0 2px 0",
      },
      headerStyle: {
        textAlign: "center",
        padding: "5px 0 1px 0",
      },
      labelStyle: {
        labelColor: "black",
        bottomLabelOffset: 20,
        leftLabelOffset: 50,
        leftLabelMargin: 80,
      },
      lineStyle: {
        colorRange: ["#3f51b5", "rgba(200,0,31,0.9)", "rgba(25,200,205,0.6)"],
        lineAreaColor: "none",
        lineAreaOpacity: 0.2,
      },
    },
  },
};
const Product1 = [
  { x: "a", y: 100 },
  { x: "b", y: 50 },
  { x: "c", y: 100 },
  { x: "d", y: 80 },
  { x: "f", y: 100 },
  { x: "g", y: 50 },
];

export const HorizontalBarGraph = {
  type: "Control",
  scope: "#/properties/graph",
  options: {
    widget: "Graph",
  },
  config: {
  main: {
    header: " ",
    type: "HorizontalBarGraph",
    bottomLabel: "Name of Employe",
    // numTicks: 6,
    leftLabel: "Value",
    axisLeft: false,
    axisBottom: true,
    hideBottomTicks: false,
    hideLeftTicks: false,
    hideLeftAxisLine: true,
    hideBottomAxisLine: false,
    bottomAxisWidth: "10px",
  },
  style: {
    containerStyle: {
      // background: "#e8eaf6",
      background: "white",
      width: "90%",
      height: "300",
      borderRadius: "20px",
      padding: "10px 0 2px 0",
    },
    headerStyle: {
      textAlign: "center",
      padding: "5px 0 1px 0",
    },
    tooltipStyle: {
      padding: "6px",
      borderRadius: "2px",
    },
    labelStyle: {
      margin: { top: 10, left: 110, right: 40, bottom: 40 },
      tickLabelColor: "#6c5efb",
      leftLabelOffset: 140,
      bottomLabelOffset: 14,
      tickFontSize: "10px",
      tickColor: "#6c5efb",
      rightAxisWidth: "0.3px",
      fontSize: "10px",
    },
    barStyle: {
      color: "#6c5efb",
    },
  },
}};
