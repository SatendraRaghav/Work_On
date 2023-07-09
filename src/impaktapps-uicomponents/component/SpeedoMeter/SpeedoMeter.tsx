import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

const SpeedoMeter = ({value}:any) => {
  return (
    <ReactSpeedometer
    // needleTransition=''
    segmentColors={value?.style?.segmentColors}
    maxValue={value?.main?.data?.maxValue ||500}
    width={500}
        needleHeightRatio={value?.style?.needleHeightRatio||0.7}
        currentValueText={value?.main?.currentValueText||"Happiness Level"}
        customSegmentLabels={value?.main?.customSegmentLabels
        //     [
        //   {
        //     text: 'Very Bad',
        //     //@ts-ignore
        //     position: 'INSIDE',
        //     color: '#555',
        //   },
        //   {
        //     text: 'Bad',
        //      //@ts-ignore
        //     position: 'INSIDE',
        //     color: 'white',
        //   },
        //   {
        //     text: 'Ok',
        //      //@ts-ignore
        //     position: 'INSIDE',
        //     color: '#555',
        //     fontSize: '19px',
        //   },
        //   {
        //     text: 'Good',
        //      //@ts-ignore
        //     position: 'INSIDE',
        //     color: '#555',
        //   },
        //   {
        //     text: 'Very Good',
        //      //@ts-ignore
        //     position: 'INSIDE',
        //     color: '#555',
        //   },
        // ]
    }
        ringWidth={value?.style?.ringWidth||37}
        needleTransitionDuration={value?.style?.needleTransitionDuration||5333}
        needleTransition={value?.style?.needleTransition||"easeElastic"}
    //   needleTransition="easeElastic"
    value={value?.main?.data?.value ||473}
    needleColor={value?.style?.needleColor ||"red"}
    minValue={value?.main?.data?.minValue ||0}
    startColor={value?.style?.startColor ||"green"}
    segments={value?.main?.segments ||5}
    endColor={value?.style?.endColor ||"blue"}
    textColor={value?.style?.textColor ||"black"}
  />
  )
}

export default SpeedoMeter