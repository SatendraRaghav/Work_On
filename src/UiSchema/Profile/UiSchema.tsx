export const ProfileUiSchema = {
    "type": "HorizontalLayout",
    stylePage:{
        background:"#eef2f6",
        // background:"#051327",
        minHeight:"100vh",
        margin:"10px 20px",
        height:"auto",
        borderRadius:"20px"
       },
    "elements": [
     
      {
        type: "Control",
        scope: "#/properties/EmptyBox",
        options: {
          widget: "EmptyBox",
        },
        layout:12
      },
      {
        type: "Control",
        scope: "#/properties/EmptyBox",
        options: {
          widget: "EmptyBox",
        },
      },
      {
        "type": "Control",
        "scope": "#/properties/username",
        "layout": {xs:12,sm:8,md:6,lg:5},
        "options": {
          "widget": "Box"
        },
        "value": {
          "content": {
            "heading": "Welcome to Hyperform",
          },
          style:{
             
            textAlign:"center",
            display:"flex",
            fontWeight:"bolder",
            width:"100%",
            alignItems:"center",
            justifyContent:"center"
          }
        }
      },
      {
        type: "Control",
        scope: "#/properties/EmptyBox",
        options: {
          widget: "EmptyBox",
        },
      },
      {
        type: "Control",
        scope: "#/properties/EmptyBox",
        options: {
          widget: "Notify",
        },
        layout:6
      },
    ]
  }
  