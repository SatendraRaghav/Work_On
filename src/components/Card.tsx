export const Card = {
    "type": "WrapperLayout",
    "config": {
        "main": {
            "rowSpacing": 0.5
        },
        "style": {
            "wrapperStyle": {
                "color": "white",
                "width": "100%",
                "textAlign": "left",
                "background": "#3f51b5",
                "borderRadius": "20px"
            }
        },
        "layout": {
            xs: 11,
            sm: 11,
            md: 5.5,
            lg: 3.85,
          },
    },
    "elements": [
        {
            "type": "Control",
            "scope": "#/properties/programType",
            "config": {
                "main": {
                    "heading": "$5000.00"
                },
                "style": {
                    // width:"70%",

                    "color": "#f5effc",
                    "height": "80px",
                    "display": "flex",
                    "fontSize": "24px",
                    paddingLeft:"10px",
                    "alignItems": "center",
                    "background": "inherit"
                },
                "layout": 5
            },
            "options": {
                "widget": "Box"
            }
        },
        {
            "type": "Control",
            "scope": "#/properties/programType",
            "config": {
                "main": {
                    "heading": "$"
                },
                "style": {
                    "color": "#f5effc",
                    "height": "80px",
                    "display": "flex",
                    "fontSize": "34px",
                    "alignItems": "center",
                    "background": "inherit",
                    paddingTop:"20px",
                    "justifyContent": "right"
                },
                "layout": 5
            },
            "options": {
                "widget": "Box"
            }
        },
        {
            "type": "Control",
            "scope": "#/properties/programType",
            "config": {
                "main": {
                    "heading": "Total Earnings"
                },

                "style": {
                    width:"75%",
                    "color": "#8999e8",
                    "fontSize": "12px",
                    "marginTop": "-28px",
                    "background": "inherit",
                    textAlign:"left",
                    float:"left",
                    paddingLeft:"10px",
                    "paddingBottom": "25px"
                },
                "layout": 12
            },
            "options": {
                "widget": "Box"
            }
        }
    ]
}