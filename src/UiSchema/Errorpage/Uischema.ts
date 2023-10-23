export const ErrorPageUischema:any = {
    "type": "HorizontalLayout",
    stylePage:{
     background:"#eef2f6",
     margin:"50px",
     height:"100vh"
    },
    "elements": [
      {
        "type": "WrapperLayout",
        name: "PBC",
        "config": {
            "main": {
                "rowSpacing": 0.5
            },
           
        },
        "elements": [
      {
        "type": "WrapperLayout",
        name: "PBC",
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
            "layout": 3.5
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
                        "color": "#f5effc",
                        "height": "80px",
                        "display": "flex",
                        "fontSize": "24px",
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
                    "heading":""
                    },
                    "style": {
                        "color": "#f5effc",
                        "height": "80px",
                        "display": "flex",
                        "fontSize": "34px",
                        "alignItems": "center",
                        "background": "inherit",
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
                        "color": "#8999e8",
                        "fontSize": "12px",
                        "marginTop": "-28px",
                        "background": "inherit",
                        "paddingBottom": "25px"
                    },
                    "layout": 10
                },
                "options": {
                    "widget": "Box"
                }
            }
        ]
    }]},
      {
        "type": "Control",
        "scope": "#/properties/Box",
        "options":{
            "widget":"Box"
        },
       
        "config": {
           "layout": 12,
          "main": {
            "variant":"h4",
            "heading":"This is unauthorized action, either you don't have  permission to access this page or this page is not available."
          },
          "style":{
            "width":"80%",
            "height":"30vh",
            "alignItems":"center",
            "margin":"auto",
            mt:"10vh",
            padding:"30px",
            "display":"flex",
            "justifyContent":"center",
            background:"white",
            borderRadius:"15px"
          }
        }
      }
    ]
  }
  