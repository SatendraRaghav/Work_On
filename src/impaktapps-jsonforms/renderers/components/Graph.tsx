import { memo, useContext, useEffect, useState } from "react";
import { inputProps } from "../interface/inputfieldProps";
import { BarGraph, PieGraph, LineGraph } from "impaktapps-uicomponents";
import { DataContext } from "../context/Context";
import { useJsonForms } from "@jsonforms/react";
import { Box } from "@mui/system";
const Graph = memo(function (props: inputProps) {
  const { uischema } = props;
  const { serviceHolder, pageName, id, theme } = useContext(DataContext);
  const uischemaData = uischema.config;
  const [graphData, setGraphData] = useState(uischemaData.main);
  useEffect(() => {
    uischemaData?.main.data &&
      setGraphData({ ...uischemaData.main, data: uischemaData.main.data });
  }, [uischemaData.main.data]);
  const callServiceProvider = async () => {
    await serviceHolder.getService({ pageName }).then((res: any) => {
      return (
        uischemaData?.main?.loadConfig?.funcName &&
        res[uischemaData?.main?.loadConfig?.funcName](
          uischemaData?.main?.loadConfig
        ).then((res: any) => {
          setGraphData({ ...uischemaData.main, data: res });
          return res;
        })
      );
    });
  };
  useEffect(() => {
    callServiceProvider();
  }, []);

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
    </Box>
  );
});

export default Graph;
