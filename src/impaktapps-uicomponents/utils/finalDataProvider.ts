const Product1 = [
    { x: "a", y: 100 },
    { x: "b", y: 50 },
    { x: "c", y: 100 },
    { x: "d", y: 80 },
    { x: "f", y: 100 },
    { x: "g", y: 50 },
];
export const finalDataProvider = (type: string, value: any) => {
    switch (type) {
        case "BarGraph":
            return {
                main: {
                    type: "barGraph",
                    data: value?.main?.data || [{ x: "ASM", y: 100 }, { x: "SDM", y: 60 }, { x: "DCM", y: 40 }, { x: "RCM", y: 70 }],
                    // [{}] ,
                    header: "Bar Graph",
                    bottomLabel: "Name of Employe",
                    numTicks: 6,
                    leftLabel: "Value",
                    axisLeft: true,
                    axisBottom: true,

                    hideTicks: true,
                    hideLeftAxisLine: false,
                    hideBottomAxisLine: false,
                    bottomAxisWidth: "10px",
                    ...value.main
                },
                style: {
                    containerStyle: {
                        background: "white",
                        width: "90%",
                        height: "300",
                        borderRadius: "20px",
                        padding: "10px 0 2px 0",
                        ...value?.style?.containerStyle
                    },
                    headerStyle: {
                        fontWeight: 500,
                        textAlign: "left",
                        fontFamily: "inherit",
                        marginBottom: "20px",
                        padding: "15px 0 1px 20px",
                        width: "100%",
                        fontSize: "18px",
                        ...value?.style?.headerStyle
                    },
                    tooltipStyle: {
                        padding: "6px", borderRadius: "2px",
                        ...value?.style?.tooltipStyle
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
                        ...value?.style?.labelStyle
                    },
                    barStyle: {
                        mediumValueColor: "rgba(63, 81, 181, 0.85)",
                        highValueColor: "rgba(63, 81, 181, 0.85)",
                        lowValueColor: "rgba(63, 81, 181, 0.85)",
                        ...value?.style?.barStyle
                    }
                }
            };
        case "PieGraph":
            return {
                main: {
                    data: value?.main?.data || [{ branch: "Kotak", value: 500 }, { branch: "SBI", value: 700 }, { branch: "HDFC", value: 900 }],
                    // [{}] ,
                    // || letterFrequency.slice(0, 3),
                    header: "Pie Graph",
                    bottomLabel: "Name of Employe",
                    leftLabel: "Value",
                    tooltipDataKey: ["First", "Second", "Third"],
                    axisLeft: true,
                    axisBottom: true,
                    legendAvailable: true,
                    ...value?.main,
                    legend: {
                        labelColor: "green",
                        legendTitle: "Our Assests",
                        direction: "row",
                        align: "right",
                        ...value?.main?.legend,
                    },
                },

                style: {
                    containerStyle: {
                        background: "white",
                        width: "100%",
                        height: "310",
                        borderRadius: "20px",
                        padding: "10px 0 2px 0",
                        ...value?.style?.containerStyle,
                    },
                    headerStyle: {
                        fontWeight: 500,
                        textAlign: "left",
                        fontFamily: "inherit",
                        marginBottom: "20px",
                        padding: "15px 0 1px 20px",
                        width: "100%",
                        fontSize: "18px",
                        ...value?.style?.headerStyle
                    },
                    tooltipStyle: {
                        // width: "100%",
                        ...value?.style?.tooltipStyle,
                    },
                    labelStyle: {
                        labelColor: "black",
                        labelOffset: 45,
                        leftLabelMargin: "70",
                        topLabelMargin: "-40",
                        ...value?.style?.labelStyle,
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
                            ...value?.style?.legendStyle?.legend,
                        },
                        legendTitle: {
                            fontWeight: 500,
                            marginBottom: "5px",
                            fontFamily: "roboto",
                            fontSize: "10px",
                            ...value?.style?.legendStyle?.legendTitle,
                        },
                    },
                    pieStyle: {
                        colorRange: ["#3f51b5", "rgba(200,0,31,0.9)", "rgba(25,200,205,0.6)"],
                        outerRadius: 120,
                        innerRadius: 60,
                        cornerRadius: 2,
                        padAngle: 0.006,
                        ...value?.style?.pieStyle,
                    },
                },
            }
        case "LineGraph":
            return {

                main: {
                    data: value?.main?.data || [Product1],
                    header: "Line Graph Dynamic",
                    bottomLabel: "Name of Employe",
                    leftLabel: "Value",
                    gridHidden: true,
                    numHidden: false,
                    tooltipDataKey: ["MAMA New Project", "Second", "Third"],
                    axisLeft: true,

                    axisBottom: true,
                    hideLeftAxisLine: false,
                    hideBottomAxisLine: false,
                    ...value?.main,
                    legend: {
                        labelColor: "green",
                        legendTitle: "Our Assests",
                        direction: "row",
                        align: "right",
                        colorRectWidth: 20,
                        ...value?.main?.legend
                    },
                },
                style: {
                    containerStyle: {
                        background: "white",
                        width: "90%",
                        height: "300",
                        borderRadius: "20px",
                        padding: "10px 0 2px 0",
                        ...value?.style?.containerStyle
                    },
                    headerStyle: {
                        fontWeight: 500,
                        textAlign: "left",
                        fontFamily: "inherit",
                        marginBottom: "20px",
                        padding: "15px 0 1px 20px",
                        width: "100%",
                        fontSize: "18px",
                        ...value?.style?.headerStyle
                    },
                    labelStyle: {
                        labelColor: "black",
                        bottomLabelOffset: 20,
                        leftLabelOffset: 50,
                        leftLabelMargin: 80,
                        ...value?.style?.labelStyle
                    },
                    lineStyle: {
                        colorRange: ["#3f51b5", "rgba(200,0,31,0.9)", "rgba(25,200,205,0.6)"],
                        lineAreaColor: "none",
                        lineAreaOpacity: 0.2,
                        ...value?.style?.lineStyle
                    }
                }
            }
        case "HorizontalBarGraph":
            return {
                main: {
                    data:
                        value?.main?.data || [{ y: "Anant Sharma", x: 60 }, { y: "Pankaj Chauhan", x: 60 }, { y: "satendra Raghav", x: 150 }, { y: "Vivek Pahadi", x: 80 }, { y: "Siddarth verma", x: 100 }],
                    //   [{}] ,

                    header: " ",
                    bottomLabel: "Name of Employe",
                    // numTicks: 6,
                    leftLabel: "Value",
                    axisLeft: true,
                    axisBottom: true,
                    hideBottomTicks: false,
                    hideLeftTicks: value?.main?.data ? true : false,
                    hideLeftAxisLine: value?.main?.data ? true : false,
                    hideBottomAxisLine: false,
                    bottomAxisWidth: "10px",
                    ...value.main
                },
                style: {
                    containerStyle: {
                        background: "white",
                        width: "90%",
                        height: "300",
                        borderRadius: "20px",
                        padding: "10px 0 2px 0",
                        ...value?.style?.containerStyle
                    },
                    headerStyle: {
                        fontWeight: 500,
                        textAlign: "left",
                        fontFamily: "inherit",
                        marginBottom: "20px",
                        padding: "15px 0 1px 20px",
                        width: "100%",
                        fontSize: "18px",
                        ...value?.style?.headerStyle
                    },
                    tooltipStyle: {
                        padding: "6px",
                        borderRadius: "2px",
                        ...value?.style?.tooltipStyle
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

                        ...value?.style?.labelStyle
                    },
                    barStyle: {
                        color: "#6c5efb",
                        ...value?.style?.barStyle
                    },
                },
            };
    }
}