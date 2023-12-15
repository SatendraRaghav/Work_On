export default {
    type: "WrapperLayout",
    config: {
      main: {
        rowSpacing: 0.5,
      },
      style: {
        wrapperStyle: {
          position : "relative",
          color: "white",
          height: {xs:"120px",md:"160px"},
          width: "100%",
          textAlign: "left",
          background: "#3f51b5",
          borderRadius: "20px",
        },
      },
   layout: { xs: 12, sm: 12,md: 6,lg: 6, },},
    elements: [
      {
        type: "Control",
        scope: "#/properties/programType",
        config: {
          main: {
            heading: "$5000.00",
          },
          style: {
            position : "absolute",
            left : "10%",
            top: "15%",
            color: "#f5effc",
            height: "80px",
            display: "flex",
            fontSize: {xs:"24px",md:"32px"},
            alignItems: "center",
            background: "inherit",
            justifyContent:"flex-start",
            
          },
          layout: 5,
        },
        options: {
          widget: "Box",
        },
      },
      {
        type: "Control",
        scope: "#/properties/programType",
        config: {
          main: {
            url: "$",
          },
          style: {
            color: "#f5effc",
            objectFit: "contain",
              position:"absolute",
              top:"10px",
              right:"10px",
               height: "80%",
            width : "35%", 
            display: "flex",
            fontSize: "34px",
            alignItems: "center",
            background: "inherit",
            padding: "20px",
            justifyContent: "left",
          },
    layout: 5,
        },
        options: {
          widget: "Image",
        },
      },
      {
        type: "Control",
        scope: "#/properties/programType",
        config: {
          main: {
            heading: "Total Earnings",
          },
          style: {
            position : "absolute",
            top: "calc(60%)",
            alignItems : "center",
            color: "#8999e8",
            fontSize: "16px",
            left: "10%",
            background: "inherit",
            justifyContent :"center",
          },
        layout: 12,
        },
  
        options: {
          widget: "Box",
        },
      },
    ],
  };
  