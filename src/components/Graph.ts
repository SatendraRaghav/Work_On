export const BarGraph = {
  type: "Control",
  scope: "#/properties/graph",
  options: {
    widget: "Graph",
  },

  config: {
    main: {
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
      legend: {
        labelColor: "green",
        legendTitle: "",
        direction: "row",
        align: "none",
        
    },
    },
    style: {
      containerStyle: {
        width:"100%",
        height:300,
      
      },
      headerStyle: {
        // color:"white"
      },
      tooltipStyle: {    
      
       
      },
      labelStyle: { margin:{left:80,bottom:20},
        leftLabelOffset: 50,
        bottomLabelOffset:10
      },
      barStyle: {
       color:{
         firstBarColor:"#6c5efb",
        secondBarColor:"#3f51b5"
        // "#6c5efb"#3f51b5
        // secondColor:"#3e50b3"
        }
      },
      legendStyle: {
        legend: {
            lineHeight: "0.9em",
            fontSize: "8px",
            fontFamily: "arial",
            padding: "10px 10px",
            width:"30%",
           display:"flex",
           justifyContent:"center",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: " 8px",
            marginRight: "auto",
           
        },
        legendTitle: {
            fontSize: "10px",
            marginBottom: "10px",
            fontWeight: "100",

        },
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
        height:"340"
      },
      headerStyle: {},
      tooltipStyle: {
        // width: "100%",
        backgroundColor:"black",
        width:"80px"
      },
      labelStyle: {},
      legendStyle: {
        legend: {},
        legendTitle: {},
      },
      pieStyle: {},
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
      type: "LineGraph",
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
      containerStyle: {},
      headerStyle: {},
      labelStyle: {},
      lineStyle: {},
    },
  },
};

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
      bottomLabel: " ",
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
        width:"100%"
      },
      headerStyle: {},
      tooltipStyle: {},
      labelStyle: {},
      barStyle: {
        color: "#6c5efb",
      },
    },
  },
};
