import { memo, useContext, useEffect, useState } from "react";
import { inputProps } from "../interface/inputfieldProps";
//@ts-ignore
import { BarGraph, PieGraph, LineGraph,HorizontalBarGraph } from "impaktapps-design";
// import { BarGraph, PieGraph, LineGraph,HorizontalBarGraph } from "../../../impaktapps-uicomponents/lib";
import { Box } from "@mui/system";
const Graph = function (props: inputProps) {
  const { uischema,data } = props;
  const uischemaData = uischema.config;
  const [graphData, setGraphData] = useState(uischemaData.main);
  useEffect(() => {
      setGraphData({ ...uischemaData.main, data: data?data:[{}] });
  }, [data]);
  return (
    <Box sx={{ width: "100%", overflowX: "auto", margin: "auto" }}>
      {uischemaData.main?.type === "BarGraph" && (
        <BarGraph
          value={{
            main: graphData,
            style: { ...uischemaData.style },
          }}
        />
      )}
        {uischemaData.main?.type === "StackBarGraph" && (
        <BarGraph
          value={{
            main: graphData,
            style: { ...uischemaData.style },
          }}
        />
      )}
      {uischemaData.main?.type === "PieGraph" && (
        <PieGraph
          value={{
            main: graphData,
            style: { ...uischemaData.style },
          }}
        />
      )}
      {uischemaData.main?.type === "LineGraph" && (
        <LineGraph
          value={{
            main: graphData,
            style: { ...uischemaData.style },
          }}
        />
      )}
      {uischemaData.main?.type === "HorizontalBarGraph" && (
        <HorizontalBarGraph
          value={{
            main: graphData,
            style: { ...uischemaData.style },
          }}
        />
      )}
    </Box>
  );
};

export default Graph;
