export const ErrorPageUischema = {
    "type": "HorizontalLayout",
    stylePage:{
     background:"#eef2f6",
     margin:"50px",
     height:"100vh"
    },
    "elements": [
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
  