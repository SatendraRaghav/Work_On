import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  ArrayControlProps,
  composePaths,
  findUISchema,
  UISchemaElement,
} from "@jsonforms/core";
import Box from "@mui/material/Box";
import { JsonFormsDispatch } from "@jsonforms/react";
import { DataContext } from "../context/Context"; 

interface TabPanelProps {
  children: any;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTab =  React.memo(function CustomTab({
  path,
  schema,
  uischema,
  uischemas,
  rootSchema,
  renderers,
}: ArrayControlProps & any) {
  const childUiSchema: any = React.useMemo(
    () =>
      findUISchema(
        uischemas,
        schema,
        uischema.scope,
        path,
        undefined,
        uischema,
        rootSchema
      ),
    [uischemas, schema, uischema.scope, path, uischema, rootSchema]
  );
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    setValue(0);
  }, [path]);
  const { theme } = React.useContext(DataContext);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        fontFamily: "roboto",
        borderRadius: "20px",
        width: "98%",
        marginRight: "auto",
        marginLeft: "auto",
        background: "white",
      }}
    >
      <Tabs
        TabIndicatorProps={{ sx: { display: "none" } }}
        sx={{
          ...theme.TabsStyle,
          ...uischema?.config?.TabsStyle,
        }}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {uischema?.config?.main?.labels.map((elem: string, i: number) => {
          return (
            <Tab 
            sx={{ ...theme.TabStyle, ...uischema?.config?.TabStyle }}
             label={elem} {...a11yProps(i)} />
          );
        })}
      </Tabs>
      {/* </Box> */}

      {childUiSchema.elements.map((elem: UISchemaElement | any, i: number) => {
        const childPath = composePaths(path, `${i}`);
        return (
          <TabPanel value={value} index={i}>
            <JsonFormsDispatch
              schema={schema}
              uischema={{ type: "HorizontalLayout", ...elem }}
              path={childPath}
              key={childPath}
              renderers={renderers}
            />
          </TabPanel>
        );
      })}
    </Box>
  );
});
export default CustomTab;
