

export const ProfileUiSchema:any= {
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
            "heading": "Profile",
          },
          style:{
            margin:"auto",
             marginTop:"20%",
            textAlign:"center",
           
            borderRadius:"20px",
           
            fontWeight:"bolder",
            width:"40%",
         
          }
        }
      }
    ]
  }
  