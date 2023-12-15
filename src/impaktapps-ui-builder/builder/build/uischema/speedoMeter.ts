export default  {
    type: "Control",
    scope: "#/properties/emptyBox",
    options: {
      widget: "SpeedoMeter",
    },
   config:{
    layout:{xs:12,sm:12,md:11.7,lg:11.7},
    width:350,
    segments:"5",
    main:{
     currentValueText:"Your Score",
     customSegmentLabels:[], 
        data:{  
            maxValue:100000,
            value:50000,
            minValue:0,
        }
    },
    style:{
        //@ts-ignore
        segmentColors:[],
        ringWidth:57,
        needleHeightRatio:0.7,
        needleColor:"#3f51b5",
        startColor:"red",
        textColor:"black",
        endColor:"green",

        containerStyle:{
         background:"white",
         padding:"20px",
         borderRadius:"20px",
         display:"flex",
        //  height:"350px",
         flexDirection:"column",
         margin:"auto",
         justifyContent:"center",
         fontFamily:"Roboto",
         fontWeight:500
        },
        headerStyle:{
            textAlign:"left",
            width:"100%",
            paddingBottom:"20px"
        }
    }
   }
  }