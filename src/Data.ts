import React from "react";
// import appleStock from '@visx/mock-data/lib/mocks/appleStock';cls
import { letterFrequency } from "@visx/mock-data";
console.log(letterFrequency)
const Product1 = [
  { x: "2015", y: 200 },
  { x: "2016", y: 1200 },
  { x: "2017", y: 1500 },
  { x: "2018", y: 500 },
];
const Product2 = [
  { x: "2015", y: 700 },
  { x: "2016", y: 1000 },
  { x: "2017", y: 450 },
  { x: "2018", y: 3600 },
];
const Product3 = [
  { x: "2015", y: 200 },
  { x: "2016", y: 700 },
  { x: "2017", y: 1000 },
  { x: "2018", y: 500 },
];

export const BarData = {
  type: "Bargraph",
 
  main: {
     data: letterFrequency,
    header: "Bar Graph Dynamic",
    bottomLabel: "Name of Employe",
    numTicks: 6,
    leftLabel: "Value",
    axisLeft: true,
    axisBottom: true,
    hideTicks: true,
    hideLeftAxisLine: false,
    hideBottomAxisLine: false,
    bottomAxisWidth: "10px",
  },
  style: {
    containerStyle: {
      background: "#e8eaf6",
      width: "100%",
      height: "400",
      borderRadius: "20px",
      padding: "10px 0 2px 0",

    },
    headerStyle: { textAlign: "center", padding: "5px 0 1px 0" },
    tooltipStyle: { padding: "6px", borderRadius: "2px" },
    labelStyle: {
      labelColor: "black",
      tickLabelColor: "balck",
      labelOffset: 45,
      tickFontSize: "10px",
      tickColor: "white",
      rightAxisWidth: "0.3px",
      fontSize: "12px"
    },
    barStyle: {
      mediumValueColor: "#3f51b5",
      highValueColor: "#3f51b5",
      lowValueColor: "#364152",
    }
  }
};

export const LineData = {
 

  main: {
    type: "Linegraph",
    header: "Line Graph Dynamic",
    bottomLabel: "Name of Employe",
    leftLabel: "Value",
    gridHidden: true,
    numHidden: true,

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
      colorRectWidth: 20
    },
  },
 
  style: {
    containerStyle: {
      background: "gray",
      width: "100%",
      height: "400",
      borderRadius: "20px", padding: "10px 0 2px 0",
    },
    headerStyle: { textAlign: "center", padding: "5px 0 1px 0" },
    labelStyle: {
      labelColor: "white",
      bottomLabelOffset: 20,
      leftLabelOffset: 50,
      leftLabelMargin: 80
    },
    lineStyle: {
      colorRange: ["rgba(0,250,41,1)",
        "rgba(200,0,31,0.9)",
        "rgba(25,200,205,0.6)"],
      lineAreaColor: "yellow",
      lineAreaOpacity: 0.2
    }
  }
}
export const PieData = {
  type: "Piegraph",
  data: letterFrequency.slice(0, 3),
  content: {
    header: "Pie Graph Dynamic",
    bottomLabel: "Name of Employe",
    leftLabel: "Value",
    tooltipDataKey: ["MAMA New Project", "Second", "Third"],
    axisLeft: true,
    axisBottom: true,
    legendAvailable: true
  },
  legend: {
    labelColor: "green",
    legendTitle: "Our Assests",
    direction: "row",
    align: "right"
  },
  style: {
    containerStyle: {
      background: "#e8eaf6",
      width: "50%", height: "342",
      borderRadius: "20px", padding: "10px 0 2px 0",
    },
    headerStyle: { textAlign: "center", padding: "5px 0 1px 0" },
    tooltipStyle: {
      // background:"blue",
      // color:"white",
      // fontSize:"2px"
      width: "100%"
    },
    labelStyle: {
      labelColor: "black",
      labelOffset: 45,
      leftLabelMargin: "70",
      topLabelMargin: "-40"
    },
    legendStyle: {
      legend: {
        lineHeight: "0.9em",
        color: "black",
        fontSize: "10px",
        fontFamily: "arial",
        padding: "10px 10px",
        float: "left",
        border: "6px solid black",
        borderRadius: "8px",
        margin: "5px 5px",
       
      },
      legendTitle: {
        fontSize: "12px",
        marginBottom: "10px",
        fontWeight: "100",
        color:"black"
        
      },},
    pieStyle: {
      colorRange: [
        " #3f51b5",
        // "rgba(0,250,41,1)",
        "rgba(200,0,31,0.9)",
        "rgba(25,200,205,0.6)"],
      outerRadius: 120,
      innerRadius: 20,
      cornerRadius: 2,
      padAngle: 0.006,
    }
  }
}
export const AreaChartWithBrushData = {
  type: "AreaChartWithBrush",
  //  data:appleStock.slice(0,497),
  content: {
    chartSeparation: 30,
    heading: "Your Performance",
    showHeader: true,
    customDataheading: "Custom",
    customConditionheading: "Vs prev"
  },
  style: {
    // background1:"#7A3ACF",
    // background2:"rgb(31, 16, 69)",
    background1: "rgb(31, 16, 69)",
    background2: "#500582",
    borderRadius: "10px",
    accentColor: "#f6acc8",
    height: "500",
    labelColor: "white",
    labelFontSize: "20px",
    color: "white"
  }
}
export const AreaGraphData = {
  type: "AreaGraph",
  // data:appleStock.slice(0,100),
  content: {
    chartSeparation: 30,
    showHeader: true,
    heading: "Your Performance custom"
  },
  style: {
    // background1:"#7A3ACF",
    // background2:"rgb(31, 16, 69)",
    background1: "rgb(31, 16, 69)",
    background2: "#500582",
    borderRadius: "10px",
    height: "300",
    accentColor: "#f6acc8",
    accentColorDark: "yellow",
    labelColor: "white",
    labelFontSize: "20px",
    color: "white"
  }
}