import { memo, useContext, useEffect, useState } from "react";
import { inputProps } from "../interface/inputfieldProps";
//@ts-ignore
import {
  BarGraph,
  PieGraph,
  LineGraph,
  HorizontalBarGraph,
} from "impaktapps-design";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material";
import { getComponentProps } from "../common/getComponentProps";
import ComponentWrapper from "../common/ComponentWrapper";
import { DataContext } from "../context/Context";
import { getFieldName } from "../permissions/getFieldName";
const Graph = function (props: inputProps) {
  const { uischema, data, path, schema, rootSchema } = props;
  const uischemaData = uischema.config;
  const [graphData, setGraphData] = useState(uischemaData.main);
  const theme = useTheme();
  useEffect(() => {
    setGraphData({ ...uischemaData.main, data: data ? data : [{}] });
  }, [data]);
  const { pageName, permissions } = useContext(DataContext);
  const fieldName = getFieldName(path);
  return (
    <ComponentWrapper
      {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema, rootSchema)}>
      <Box 
       
      sx={{ width: "100%", overflowX: "auto", margin: "auto" }}>
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
    </ComponentWrapper>
  );
};

export default Graph;
