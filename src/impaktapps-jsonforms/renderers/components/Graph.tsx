import { memo, useContext, useEffect, useState } from "react";
import { inputProps } from "../interface/inputfieldProps";
//@ts-ignore
import { BarGraph, PieGraph, LineGraph,HorizontalBarGraph } from "impaktapps-design";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material";
const Graph = function (props: inputProps) {
  const { uischema,data } = props;
  const uischemaData = uischema.config;
  const [graphData, setGraphData] = useState(uischemaData.main);
  const theme = useTheme()
  useEffect(() => {
      setGraphData({ ...uischemaData.main, data: data?data:[{}] });
  }, [data]);
  return (
    <Box sx={{ width: "100%", overflowX: "auto", margin: "auto" }}>
      {uischemaData.main?.type === "BarGraph" && (
        <BarGraph
        theme={theme}
          value={{
            main: graphData,
            style: { ...uischemaData.style },
          }}
        />
      )}
       {uischemaData.main?.type === "StackBarGraph" && (
        <BarGraph
        theme={theme}
          value={{
            main: graphData,
            style: { ...uischemaData.style },
          }}
        />
      )}
      {uischemaData.main?.type === "PieGraph" && (
        <PieGraph
        theme={theme}
          value={{
            main: graphData,
            style: { ...uischemaData.style },
          }}
        />
      )}
      {uischemaData.main?.type === "LineGraph" && (
        <LineGraph
        theme={theme}
          value={{
            main: graphData,
            style: { ...uischemaData.style },
          }}
        />
      )}
      {uischemaData.main?.type === "HorizontalBarGraph" && (
        <HorizontalBarGraph
        theme={theme}
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
