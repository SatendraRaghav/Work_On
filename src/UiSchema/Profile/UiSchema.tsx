export const ProfileUiSchema = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        layout: 11.8,
        main: {
          rowSpacing: 3,
        },
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/programType",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8.5,
            main: {
              heading: "Your Satistics",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/New_Record",

          options: {
            widget: "EmptyBox",
          },
          config: {
            layout: 3,
          },
        },
      ],
    },
    {
      "type": "WrapperLayout",
      "config": {
        "layout": 11.8,
        "main": {
          "label": "Search Your Dashboard",
          "divider": true
        },
        "defaultStyle": true
      },
      "elements": [
        {
          "type": "Control",
          "scope": "#/properties/programType",

          "options": {
            "widget": "InputField",
          },
          "config": {
            "layout": { "xs": 11, "sm": 5.5, "md": 5.5, "lg": 4.5 },
            "main": {
              "label": "Name",
              "type": "text",
              "errorMessage": "Name is empty or invalid",
            },
          }
        },
        {
          "type": "Control",
          "scope": "#/properties/cycleType",

          "options": {
            "widget": "InputField",
          },
          "config": {
            "layout": { "xs": 11, "sm": 5.5, "md": 5.5, "lg": 4.5 },
            "main": {
              "label": "Case",
              "type": "text",
              "errorMessage": "Name is empty or invalid",
            },
          }
        },
        {
          "type": "Control",
          "scope": "#/properties/load",
          "options": {
            "widget": "Button"
          },

          "config": {
            "layout": {
              "xs": 11,
              "sm": 11,
              "md": 2.5,
              "lg": 2
            },
            "main": {
              "name": "Search",
              "startIcon": "SearchIcon",
              "variant": "contained",
              "color": "info",
              "type": "text",
              "onClick": "searchDashboard",
              "size": "large"
            },
            "style": {
              "textAlign": {"xs":"none","sm":"none","md":"right","lg":"none"}
              
            },
          },
        }
      ],
    },
    // {
    //   "type": "WrapperLayout",
    //   "config": {
    //     "layout":3.5,
    //     "main": {
    //       "rowSpacing": 0.5,
    //     },
    //     "style": {
    //       "wrapperStyle": {
    //         "width": "100%",
    //         "borderRadius": "20px",
    //         "textAlign": "left",
    //         "background": "#3f51b5",
    //         "color": "white",
    //       },
    //     },
    //   },
    //   "elements": [
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/programType",

    //       "options": {
    //         "widget": "Box",
    //       },
    //       "config": {
    //         "layout": 5,
    //         "main": {
    //           "heading": "$5000.00",
    //         },
    //         "style": {
    //           "color": "#f5effc",
    //           "height": "80px",
    //           "display": "flex",
    //           "alignItems": "center",
    //           "background": "inherit",
    //           "fontSize": "24px",
    //         },
    //       },
    //     },
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/programType",

    //       "options": {
    //         "widget": "Box",
    //       },
    //       "config": {
    //         "layout": 5,
    //         "main": {
    //           "heading":
    //             `<svg
    //               fill="#fcfcfc"
    //               version="1.1"
    //               id="Capa_1"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 183.589 183.589"
    //               "height"="50px"
    //               style={{ paddingTop: "12px" }}
    //               stroke="#fcfcfc"
    //             >
    //               <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    //               <g
    //                 id="SVGRepo_tracerCarrier"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               ></g>
    //               <g id="SVGRepo_iconCarrier">
    //                 {" "}
    //                 <g>
    //                   {" "}
    //                   <path d="M91.794,0C41.178,0,0,41.178,0,91.794c0,50.62,41.178,91.794,91.794,91.794c50.62,0,91.794-41.175,91.794-91.794 C183.589,41.178,142.402,0,91.794,0z M91.794,171.483c-43.941,0-79.689-35.748-79.689-79.689s35.748-79.689,79.689-79.689 s79.689,35.748,79.689,79.689S135.729,171.483,91.794,171.483z M96.287,80.416l-1.715-0.553V53.342 c3.89,0.322,6.715,1.374,8.5,3.153c2.246,2.24,3.369,5.938,3.369,11.106h17.957c0-9.229-2.838-16.361-8.5-21.385 c-5.119-4.519-12.229-7.013-21.314-7.468v-9.664h-6.377v9.871c-8.316,0.502-15.031,3.038-20.15,7.607 c-5.849,5.254-8.771,12.359-8.771,21.311c0,7.312,2.42,13.184,7.276,17.614c4.471,4.067,11.688,7.678,21.645,10.829v29.335 c-3.656-0.55-6.484-1.915-8.5-4.114c-2.56-2.884-3.697-7.306-3.419-13.293H57.234l-0.074,2.465c0,9.505,2.695,16.774,8.095,21.799 c5.391,5.024,13.042,7.838,22.958,8.435v13.565h6.377v-13.643c9.269-0.396,16.77-3.103,22.479-8.086 c6.26-5.426,9.398-12.755,9.398-21.999c0-7.903-2.293-14.145-6.874-18.714C115.006,87.456,107.233,83.569,96.287,80.416z M88.192,77.674c-2.796-1.138-5.009-2.355-6.676-3.633c-2.976-2.287-4.46-5.071-4.46-8.363c0-3.928,1.301-6.989,3.916-9.188 c1.889-1.599,4.279-2.604,7.214-3.015L88.192,77.674L88.192,77.674z M103.421,122.152c-2.281,2.009-5.243,3.197-8.849,3.569V98.313 c4.256,1.378,7.342,2.985,9.257,4.865c2.529,2.34,3.782,5.302,3.782,8.913C107.611,116.371,106.211,119.729,103.421,122.152z"></path>{" "}
    //                 </g>{" "}
    //               </g>
    //             </svg>`
    //           ,
    //         },
    //         "style": {
    //           "color": "#f5effc",
    //           "background": "inherit",
    //           "fontSize": "34px",
    //           "height": "80px",
    //           "display": "flex",
    //           "alignItems": "center",
    //           "justifyContent": "right",
    //         },
    //       },
    //     },
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/programType",

    //       "options": {
    //         "widget": "Box",
    //       },
    //       "config": {
    //         "layout": 10,
    //         "main": {
    //           "heading": "Total Earnings",
    //         },
    //         "style": {
    //           "color": "#8999e8",
    //           "background": "inherit",
    //           "fontSize": "12px",
    //           "marginTop": "-28px",
    //           "paddingBottom": "25px",
    //         },
    //       },
    //     },
    //   ],
    // },
    // {
    //   "type": "WrapperLayout",
    //   "config": {
    //     "layout":3.5,
    //     "main": {
    //       "rowSpacing": 0.5,
    //     },
    //     "style": {
    //       "wrapperStyle": {
    //         "width": "100%",
    //         "borderRadius": "20px",
    //         "textAlign": "left",
    //         "background": "#3f51b5",
    //         "color": "white",
    //       },
    //     },
    //   },
    //   "elements": [
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/programType",

    //       "options": {
    //         "widget": "Box",
    //       },
    //       "config": {
    //         "layout": 5,
    //         "main": {
    //           "heading": "23000",
    //         },
    //         "style": {
    //           "color": "#f5effc",
    //           "height": "80px",
    //           "display": "flex",
    //           "paddingLeft":"30px",
    //           "alignItems": "center",
    //           "background": "inherit",
    //           "fontSize": "24px",
    //         },
    //       },
    //     },
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/programType",

    //       "options": {
    //         "widget": "Box",
    //       },
    //       "config": {
    //         "layout": 5,
    //         "main": {
    //           "heading":
    //             `<svg
    //               fill="#fcfcfc"
    //               version="1.1"
    //               id="Capa_1"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 183.589 183.589"
    //               "height"="50px"
    //               style={{ paddingTop: "12px" }}
    //               stroke="#fcfcfc"
    //             >
    //               <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    //               <g
    //                 id="SVGRepo_tracerCarrier"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               ></g>
    //               <g id="SVGRepo_iconCarrier">
    //                 {" "}
    //                 <g>
    //                   {" "}
    //                   <path d="M91.794,0C41.178,0,0,41.178,0,91.794c0,50.62,41.178,91.794,91.794,91.794c50.62,0,91.794-41.175,91.794-91.794 C183.589,41.178,142.402,0,91.794,0z M91.794,171.483c-43.941,0-79.689-35.748-79.689-79.689s35.748-79.689,79.689-79.689 s79.689,35.748,79.689,79.689S135.729,171.483,91.794,171.483z M96.287,80.416l-1.715-0.553V53.342 c3.89,0.322,6.715,1.374,8.5,3.153c2.246,2.24,3.369,5.938,3.369,11.106h17.957c0-9.229-2.838-16.361-8.5-21.385 c-5.119-4.519-12.229-7.013-21.314-7.468v-9.664h-6.377v9.871c-8.316,0.502-15.031,3.038-20.15,7.607 c-5.849,5.254-8.771,12.359-8.771,21.311c0,7.312,2.42,13.184,7.276,17.614c4.471,4.067,11.688,7.678,21.645,10.829v29.335 c-3.656-0.55-6.484-1.915-8.5-4.114c-2.56-2.884-3.697-7.306-3.419-13.293H57.234l-0.074,2.465c0,9.505,2.695,16.774,8.095,21.799 c5.391,5.024,13.042,7.838,22.958,8.435v13.565h6.377v-13.643c9.269-0.396,16.77-3.103,22.479-8.086 c6.26-5.426,9.398-12.755,9.398-21.999c0-7.903-2.293-14.145-6.874-18.714C115.006,87.456,107.233,83.569,96.287,80.416z M88.192,77.674c-2.796-1.138-5.009-2.355-6.676-3.633c-2.976-2.287-4.46-5.071-4.46-8.363c0-3.928,1.301-6.989,3.916-9.188 c1.889-1.599,4.279-2.604,7.214-3.015L88.192,77.674L88.192,77.674z M103.421,122.152c-2.281,2.009-5.243,3.197-8.849,3.569V98.313 c4.256,1.378,7.342,2.985,9.257,4.865c2.529,2.34,3.782,5.302,3.782,8.913C107.611,116.371,106.211,119.729,103.421,122.152z"></path>{" "}
    //                 </g>{" "}
    //               </g>
    //             </svg>`
    //         },
    //         "style": {
    //           "color": "#f5effc",
    //           "background": "inherit",
    //           "fontSize": "34px",
    //           "height": "80px",
    //           "display": "flex",
    //           "alignItems": "center",
    //           "justifyContent": "right",
    //         },
    //       },
    //     },
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/programType",

    //       "options": {
    //         "widget": "Box",
    //       },
    //       "config": {
    //         "layout": 10,
    //         "main": {
    //           "heading": "Website Engagement",
    //         },
    //         "style": {
    //           "color": "#8999e8",
    //           "background": "inherit",
    //           "fontSize": "12px",
    //           "marginTop": "-28px",
    //           "paddingBottom": "25px",
    //         },
    //       },
    //     },
    //   ],
    // },
    // {
    //   "type": "WrapperLayout",
    //   "config": {
    //     "layout":3.5,
    //     "main": {
    //       "rowSpacing": 0.5,
    //     },
    //     "style": {
    //       "wrapperStyle": {
    //         "width": "100%",
    //         "borderRadius": "20px",
    //         "textAlign": "left",
    //         "background": "#3f51b5",
    //         "color": "white",
    //       },
    //     },
    //   },
    //   "elements": [
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/programType",

    //       "options": {
    //         "widget": "Box",
    //       },
    //       "config": {
    //         "layout": 5,
    //         "main": {
    //           "heading": "27",
    //         },
    //         "style": {
    //           "color": "#f5effc",
    //           "height": "80px",
    //           "display": "flex",
    //           "paddingLeft":"35px",
    //           "alignItems": "center",
    //           "background": "inherit",
    //           "fontSize": "24px",
    //         },
    //       },
    //     },
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/programType",

    //       "options": {
    //         "widget": "Box",
    //       },
    //       "config": {
    //         "layout": 5,
    //         "main": {
    //           "heading": `<svg
    //               fill="#fcfcfc"
    //               version="1.1"
    //               id="Capa_1"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 183.589 183.589"
    //               "height"="50px"
    //               style={{ paddingTop: "12px" }}
    //               stroke="#fcfcfc"
    //             >
    //               <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    //               <g
    //                 id="SVGRepo_tracerCarrier"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               ></g>
    //               <g id="SVGRepo_iconCarrier">
    //                 {" "}
    //                 <g>
    //                   {" "}
    //                   <path d="M91.794,0C41.178,0,0,41.178,0,91.794c0,50.62,41.178,91.794,91.794,91.794c50.62,0,91.794-41.175,91.794-91.794 C183.589,41.178,142.402,0,91.794,0z M91.794,171.483c-43.941,0-79.689-35.748-79.689-79.689s35.748-79.689,79.689-79.689 s79.689,35.748,79.689,79.689S135.729,171.483,91.794,171.483z M96.287,80.416l-1.715-0.553V53.342 c3.89,0.322,6.715,1.374,8.5,3.153c2.246,2.24,3.369,5.938,3.369,11.106h17.957c0-9.229-2.838-16.361-8.5-21.385 c-5.119-4.519-12.229-7.013-21.314-7.468v-9.664h-6.377v9.871c-8.316,0.502-15.031,3.038-20.15,7.607 c-5.849,5.254-8.771,12.359-8.771,21.311c0,7.312,2.42,13.184,7.276,17.614c4.471,4.067,11.688,7.678,21.645,10.829v29.335 c-3.656-0.55-6.484-1.915-8.5-4.114c-2.56-2.884-3.697-7.306-3.419-13.293H57.234l-0.074,2.465c0,9.505,2.695,16.774,8.095,21.799 c5.391,5.024,13.042,7.838,22.958,8.435v13.565h6.377v-13.643c9.269-0.396,16.77-3.103,22.479-8.086 c6.26-5.426,9.398-12.755,9.398-21.999c0-7.903-2.293-14.145-6.874-18.714C115.006,87.456,107.233,83.569,96.287,80.416z M88.192,77.674c-2.796-1.138-5.009-2.355-6.676-3.633c-2.976-2.287-4.46-5.071-4.46-8.363c0-3.928,1.301-6.989,3.916-9.188 c1.889-1.599,4.279-2.604,7.214-3.015L88.192,77.674L88.192,77.674z M103.421,122.152c-2.281,2.009-5.243,3.197-8.849,3.569V98.313 c4.256,1.378,7.342,2.985,9.257,4.865c2.529,2.34,3.782,5.302,3.782,8.913C107.611,116.371,106.211,119.729,103.421,122.152z"></path>{" "}
    //                 </g>{" "}
    //               </g>
    //             </svg>`
    //         },
    //         "style": {
    //           "color": "#f5effc",
    //           "background": "inherit",
    //           "fontSize": "34px",
    //           "height": "80px",
    //           "display": "flex",
    //           "alignItems": "center",
    //           "justifyContent": "right",
    //         },
    //       },
    //     },
    //     {
    //       "type": "Control",
    //       "scope": "#/properties/programType",

    //       "options": {
    //         "widget": "Box",
    //       },
    //       "config": {
    //         "layout": 10,
    //         "main": {
    //           "heading": "New Customers",
    //         },
    //         "style": {
    //           "color": "#8999e8",
    //           "background": "inherit",
    //           "fontSize": "12px",
    //           "marginTop": "-28px",
    //           "paddingBottom": "25px",
    //         },
    //       },
    //     },
    //   ],
    // },
    {
      type: "WrapperLayout",
      config: {
        layout: 11.8,
        main: {
          label: "All Employees Deatils",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/username",

          options: {
            widget: "Graph",
          },
          config: {
            layout: 12,
            main: {
              loadConfig: {
                funcName: "loadFunction",
                reportName: "barGraphData",
                reportFormat: "dashboard",
              },
              type: "BarGraph",
              header: " ",
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
                background: "white",
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
                fontSize: "12px",
              },
              barStyle: {
                mediumValueColor: "#3f51b5",
                highValueColor: "#3f51b5",
                lowValueColor: "#364152",
              },
            },
          },
        },
      ],
    },

    {
      type: "WrapperLayout",
      config: {
        layout: 11.8,
        main: {
          label: "Company Sales During the years.",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/username",
          layout: { xs: 12, sm: 8, md: 10, lg: 10 },
          options: {
            widget: "Graph",
          },
          config: {
            main: {
              loadConfig: {
                funcName: "loadFunction",
                reportName: "lineData",
                reportFormat: "dashboard",
              },
              type: "LineGraph",
              header: " ",
              bottomLabel: "Years",
              leftLabel: "Sales",
              grid: true,
              numHidden: false,

              tooltipDataKey: ["MAMA New Project"],
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
                // "background": "#e8eaf6",
                background: "white",
                width: "100%",
                height: "400",
                borderRadius: "20px",
                padding: "10px 0 2px 0",
              },
              headerStyle: { textAlign: "center", padding: "5px 0 1px 0" },
              labelStyle: {
                labelColor: "black",
                bottomLabelOffset: 0,
                leftLabelOffset: 50,
                leftLabelMargin: 80,
              },
              lineStyle: {
                colorRange: [
                  "#3f51b5",
                  "rgba(200,0,31,0.9)",
                  "rgba(25,200,205,0.6)",
                ],
                lineAreaColor: "none",
              },
            },
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      config: {
        layout: 11.8,
        main: {
          label: "Other Assests",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/username",
          layout: { xs: 12, sm: 8, md: 10, lg: 10 },
          options: {
            widget: "Graph",
          },
          config: {
            layout: 6.5,
            main: {
              loadConfig: {
                funcName: "loadFunction",
                reportName: "barGraphData",
                reportFormat: "dashboard",
              },
              type: "PieGraph",
              header: "Profit Contribution Chart",
              bottomLabel: "Profit Contribution",
              leftLabel: "Value",
              tooltipDataKey: ["Service", "Products", "New Product"],
              axisLeft: true,
              axisBottom: true,
              legendAvailable: true,
            },
            style: {
              containerStyle: {
                // "background": "#e8eaf6",
                background: "white",
                width: "100%",
                height: "342",
                borderRadius: "20px",
                padding: "10px 0 2px 0",
              },
              headerStyle: { textAlign: "center", padding: "5px 0 1px 0" },
              tooltipStyle: {
                width: "100%",
              },
              labelStyle: {
                labelColor: "black",
                labelOffset: 45,
                leftLabelMargin: "20",
                topLabelMargin: "-10",
              },
              legendStyle: {
                legend: {},
                legendTitle: {
                  color: "black",
                },
              },
              pieStyle: {
                colorRange: [
                  "#3f51b5",
                  "rgba(200,0,31,0.9)",
                  "rgba(25,200,205,0.6)",
                ],
                outerRadius: 100,
                innerRadius: 50,
                cornerRadius: 2,
                padAngle: 0.006,
              },
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/username",
          layout: { xs: 12, sm: 8, md: 10, lg: 10 },
          options: {
            widget: "Graph",
          },
          config: {
            layout: 4.5,
            main: {
              type: "PieGraph",
              header: "Employees Division",
              bottomLabel: "Name of Employe",
              leftLabel: "Value",
              tooltipDataKey: ["HDFC", "Product", "Kotak"],
              axisLeft: true,
              axisBottom: true,
              legendAvailable: true,
            },
            style: {
              containerStyle: {
                background: "white",
                width: "100%",
                height: "342",
                borderRadius: "20px",
                padding: "10px 0 2px 0",
              },
              headerStyle: { textAlign: "center", padding: "5px 0 1px 0" },
              tooltipStyle: {
                width: "100%",
              },
              labelStyle: {
                labelColor: "black",
                labelOffset: 45,
                leftLabelMargin: "20",
                topLabelMargin: "-10",
              },
              legendStyle: {
                legend: {},
                legendTitle: {
                  color: "black",
                },
              },
              pieStyle: {
                colorRange: [
                  "#3f51b5",
                  // "rgba(0,250,41,1)",
                  "rgba(200,0,31,0.9)",
                  "rgba(25,200,205,0.6)",
                ],
                outerRadius: 80,
                innerRadius: 40,
                cornerRadius: 2,
                padAngle: 0.006,
              },
            },
          },
        },
      ],
    },
  ],
};

// export const ProfileUiSchema:any= {
//     "type": "HorizontalLayout",
//     "elements": [
//       {
//         "type": "Control",
//         "scope": "#/properties/username",
//         "layout": {xs:12,sm:8,md:6,lg:5},
//         "options": {
//           "widget": "Box"
//         },
//         ""config"": {
//           "main": {
//             "heading": "Profile",
//           },
//           "style":{
//             margin:"auto",
//              "marginTop":"20%",
//             "textAlign":"center",

//             "borderRadius":"20px",

//             fontWeight:"bolder",
//             ":"40%",

//           }
//         }
//       }
//     ]
//   }
