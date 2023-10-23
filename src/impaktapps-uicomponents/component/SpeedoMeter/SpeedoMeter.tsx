import { max } from "d3-array";
import React, { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";

const SpeedoMeter = (props: any) => {
  const {value} = props;
  const [maxValue,setMaxValue] = useState(false )
  // const [minValue,setMinValue] = useState(value?.main?.data?.minValue??0 )
  // const [data,setData] = useState(value?.main?.data?.value??100 )
  useEffect(()=>{
    setMaxValue(value?.main?.data?.render||false);
    // setMinValue(value?.main?.data?.minValue);
    // setData(value?.main?.data?.value)
  },[value])
  return (
    <div style={{ ...value?.style?.containerStyle,overflow:"scroll" }}>
      {value?.main?.header && (
        <div
          style={{
            fontWeight: 700,
            textAlign: "left",
            fontFamily: "inherit",
            fontSize: "18px",
            color: "#121926",
            ...value?.style?.headerStyle,
          }}
        >
          {value.main.header}
        </div>
      )}
      <div style={{ width:"100%",minWidth:500,display: "flex", justifyContent: "center",overflow:"scroll"  }}>
        <ReactSpeedometer
          // needleTransition=''
          forceRender={true}
          segmentColors={value?.style?.segmentColors}
          maxValue={value?.main?.data?.maxValue }
          width={value?.style?.width || 450}
          needleHeightRatio={value?.style?.needleHeightRatio || 0.7}
          currentValueText={value?.main?.currentValueText}
          customSegmentLabels={value?.main?.customSegmentLabel}
          ringWidth={value?.style?.ringWidth || 37}
          needleTransitionDuration={
            value?.style?.needleTransitionDuration || 5333
          }
          // fluidWidth={true}
          height={value?.style?.height}
          needleTransition={value?.style?.needleTransition || "easeElastic"}
          value={value?.main?.data?.value || 473}
          needleColor={value?.style?.needleColor || "red"}
          minValue={value?.main?.data?.minValue || 0}
          startColor={value?.style?.startColor || "red"}
          segments={value?.main?.segments || 5}
          endColor={value?.style?.endColor || "green"}
          textColor={value?.style?.textColor || "black"}
        />
      </div>
    </div>
  );
};

export default SpeedoMeter;
