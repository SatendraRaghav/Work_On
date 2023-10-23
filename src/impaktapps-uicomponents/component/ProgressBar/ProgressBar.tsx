import React, { useState , useEffect } from "react";
import "./style.css";

const ProgressBar = ({value} : any) => {
  const [progress, setProgress] = useState(
      (value?.main?.data?.achieved / value?.main?.data?.total) *
        100
  );
  useEffect(()=>{
   setProgress( (value?.main?.data?.achieved / value?.main?.data?.total) *
   100)
  },[value.main.data])
  const getColor = () => {
    if (progress < 40) {
      return ["#e2b6b6","#ff0000"];
    }
    if (progress < 70) {
    //   return "#ffa500";  
    return ["#b6bce2","#3f51b5"]; 
    } else {
      return ["#b6e2c2","#2ecc71"];
    }
  };
  if(value?.main?.developOnlyProgresBar){
    return (<div
    style={{
      height: "6px",
      margin: "auto",
      borderRadius: "10px",
      backgroundColor: getColor()[0],
     
      marginBottom: "20px",
    }}
  >
    <div
      className="progress-bar-fill"
      style={{
        width: `${progress<100?progress:100}%`,
        backgroundColor: getColor()[1],
        // backgroundColor: "#3f51b5",
        height: "100%",
        borderRadius: "10px",
        marginBottom: "20px",
        // backgroundColor: "#2ecc71",
        transition: "width 0.5 ease-out",
      }}
    ></div>
  </div>)
  }
  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        width: "auto",
        height: "auto",
        margin: "auto",
        padding: " 40px none",
        // border: "1px solid black",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #e3e8ef",
          padding: "25px 0px 25px 25px",
          fontWeight: 700,
          textAlign: "left",
          fontFamily: "inherit",
          fontSize: "18px",
          color: "#121926",
        }}
      >
        {value?.main?.heading}
      </div>
      <div
        style={{ paddingBottom: "25px", paddingTop: "25px", height: "auto" }}
      >
        <div
          style={{
            // width: "70%",
            width: "90%",
            height: "6px",
            margin: "auto",
            borderRadius: "10px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontWeight: 700,
              marginBottom: "20px",
              fontSize: "24px",
            }}
          >
            {progress.toFixed(2)}%
          </div>
          <div
            style={{
              //   width: "70%",
              // width:"90%",
              height: "6px",
              margin: "auto",
              borderRadius: "10px",
              backgroundColor: getColor()[0],
             
              marginBottom: "20px",
            }}
          >
            <div
              className="progress-bar-fill"
              style={{
                width: `${progress<=100?progress:100}%`,
                backgroundColor: getColor()[1],
                // backgroundColor: "#3f51b5",
                height: "100%",
                borderRadius: "10px",
                marginBottom: "20px",
                // backgroundColor: "#2ecc71",
                transition: "width 0.5 ease-out",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: "40px",
            width: "90%",
            margin: "auto",
          }}
        >
          <div style={{ width: "33.33%" }}>
            <div
              style={{
                textAlign:"left",
                color: "#697586",
                fontSize: "10px",
                marginBottom: "10px",
              }}
            >
               {value?.main?.bottomLabel_1||"Target"}
            </div>
            <div
              style={{
                color: "#121926",
                textAlign:"left",
                fontWeight: 500,
              }}
            >
              {value?.main?.data?.total||value?.main?.data?.bottomLabel_1_value}
            </div>
          </div>
          <div style={{ width: "33.33%" }}>
            <div
              style={{
                textAlign:"center",
                color: "#697586",
                fontSize: "10px",
                marginBottom: "10px",
              }}
            >
                {value?.main?.bottomLabel_2||"Achieved"}
            </div>
            <div
              style={{
                textAlign:"center",
                color: "#121926",
                fontWeight: 500,
              }}
            >
              {value?.main?.data?.achieved||value?.main?.data?.bottomLabel_2_value}
            </div>
          </div>
          <div style={{ width: "33.33%" }}>
            <div
              style={{
                textAlign:"right",
                color: "#697586",
                fontSize: "10px",
                marginBottom: "10px",
              }}
            >
                 {value?.main?.bottomLabel_3||"Average"} 
            </div>
            <div
              style={{
                textAlign:"right",
                color: "#121926",
                fontWeight: 500,
              }}
            >
              {value?.main?.daysCount?
              Math.round(
                (value?.main?.data?.achieved / value?.main?.daysCount)
              )+ value?.main?.bottomLabel_3_averageLabel||"/day"
              :value?.main?.data?.bottomLabel_3_value 
           }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;


