export const HomeUiSchema = {
    "type": "HorizontalLayout",
    "elements": [
      {
        "type": "Control",
        "scope": "#/properties/username",
        "layout": {xs:12,sm:8,md:6,lg:5},
        "options": {
          "widget": "Box"
        },
        "config": {
          "main": {
            "heading": "Welcome to Hyperform",
          },
          style:{
             marginTop:"20%",
            textAlign:"center",
            borderRadius:"20px",
            display:"flex",
            fontWeight:"bolder",
            width:"80%",
            color:"black",
            alignItems:"center",
            justifyContent:"center"
          }
        }
      }
    ]
  }
  