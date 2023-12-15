import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const SpeedoMeter = ({ value,theme }: any) => {
  return (
    <div style={{ 
      ...value?.style?.containerStyle, 
      width:"100%", 
      // position:"relative",
      display:"flex",
       justifyContent:"center",
       alignItems:"center",
       paddingTop:"50px",
       paddingBottom:"50px",
       marginLeft:"auto",
       marginRight:"auto",
       height:'auto',
      // minWidth:window.innerWidth-30,
      // width:"100vw",
      
      // maxWidth:"600%",
    background:theme.palette.secondary.main ,
    // height:window.innerWidth>750?400:300,
    }}>
      {/* {value?.main?.header && (
        <div
          style={{
            fontWeight: 700,
       
            textAlign: "left",
            fontFamily: "inherit",
            fontSize: "18px",
            color:theme.palette.text.primary||"#121926",
            ...value?.style?.headerStyle,
          }}
        >
          {value.main.header}
        </div>
      )} */}
      <div style={{ width:"100%",
      // position:"absolute",'
      // top:"10%",
       display:"flex",
       justifyContent:"center",
       alignItems:"center"
      
      // left:window.innerWidth>750?"calc(50% - 225px)":"calc(50% - 140px)"
      ,overflowX:"auto"}}>
        <ReactSpeedometer
          
          forceRender={true}
          segmentColors={value?.style?.segmentColors}
          maxValue={value?.main?.data?.maxValue || 500}
          width={window.innerWidth>750?450:280
            // value?.style?.width || 350
          }
          needleHeightRatio={value?.style?.needleHeightRatio || 0.7}
          currentValueText={value?.main?.currentValueText||"Your Score"}
          customSegmentLabels={value?.main?.customSegmentLabels}
          ringWidth={value?.style?.ringWidth || 37}
          needleTransitionDuration={
            value?.style?.needleTransitionDuration || 5333
          }
          // fluidWidth={true}
          // height={window.innerWidth>750?(value?.style?.height||400):300}
          needleTransition={value?.style?.needleTransition || "easeElastic"}
          value={value?.main?.data?.value || 473}
          needleColor={value?.style?.needleColor || "red"}
          minValue={value?.main?.data?.minValue || 0}
          startColor={value?.style?.startColor || "red"}
          segments={+value?.main?.segments || 5}
          endColor={value?.style?.endColor || "green"}
          textColor={value?.style?.textColor || "black"}
        />
      </div>
    </div>
  );
};

export default SpeedoMeter;
