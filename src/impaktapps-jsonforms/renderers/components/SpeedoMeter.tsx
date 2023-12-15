//@ts-ignore
import { SpeedoMeter } from "impaktapps-design";
import { DataContext } from "../context/Context";
import { getFieldName } from "../permissions/getFieldName";
import ComponentWrapper from "../common/ComponentWrapper";
import { useContext } from "react";
import { useJsonForms } from "@jsonforms/react";
import { getComponentProps } from "../common/getComponentProps";

const ImpaktApps_SpeedoMeter = (props: any) => {
  const { uischema, data, path,schema,rootSchema } = props;
  const uischemaData = uischema.config;

  const { pageName, permissions, theme } = useContext(DataContext);
  const fieldName = getFieldName(path);
  return (
    <ComponentWrapper
    {...getComponentProps(`${pageName}:${fieldName}`,permissions,schema,rootSchema)} >
      <SpeedoMeter
        theme={theme?.myTheme}
        value={{
          main: {
            ...uischemaData.main,
            data: data ? data : { value: 250, minValue: 0, maxvalue: 500 },
          },
          style: { ...uischemaData.style },
        }}
      />
    </ComponentWrapper>
  );
};

export default ImpaktApps_SpeedoMeter;
