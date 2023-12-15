import React, { useContext, useEffect, useState } from "react";
//@ts-ignore
import { ProgressBar } from "impaktapps-design";
import { useTheme } from "@mui/material";
import ComponentWrapper from "../common/ComponentWrapper";
import { DataContext } from "../context/Context";
import { getFieldName } from "../permissions/getFieldName";
import { getComponentProps } from "../common/getComponentProps";

const ImpaktApps_ProgressBar = (props: any) => {
  const { uischema, data,path,schema,rootSchema } = props;
  const uischemaData = uischema.config;
  const [graphData, setGraphData] = useState({
    main: {
      ...uischemaData.main,
      data: { total: 0, achieved: 0, bottomLabel_3_value: 0 },
    },
  });
  useEffect(() => {
    setGraphData({
      main: {
        ...uischemaData.main,
        data: data ? data : { total: 0, achieved: 0, bottomLabel_3_value: 0 },
      },
    });
  }, [data]);
  const { pageName, permissions } = useContext(DataContext);
  const fieldName = getFieldName(path);
  const theme = useTheme();
  return <ComponentWrapper
  {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)}>
  <ProgressBar theme={theme} value={graphData} />
  </ComponentWrapper>
  ;
};

export default ImpaktApps_ProgressBar;
