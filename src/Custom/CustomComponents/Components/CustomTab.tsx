import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { ArrayControlProps, composePaths, findUISchema, UISchemaElement } from "@jsonforms/core";
import Box from '@mui/material/Box';
import { JsonFormsDispatch } from '@jsonforms/react';

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
      style={{color:"red"}}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
        // style={{color:"red"}}
        sx={{ p: 3, color:"red"}}>
       
            {children}
         
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomTab({
  data,
  path,
  schema,
  uischema,
  uischemas,
  rootSchema,
  renderers
}: ArrayControlProps&any) {
  const childUiSchema:any= React.useMemo(
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
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',fontFamily:"roboto" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          TabIndicatorProps={{ sx: { display: 'none' } }}
          sx={{
            fontFamily:"roboto" ,
            color:"red",
            '& .MuiTabs-flexContainer': {
              flexWrap: 'wrap',
            },
          }}
        value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            uischema.labels.map((elem:string,i:number)=>{
              return(
              <Tab  label={elem} {...a11yProps(i)} />
              )
            })
          }
        </Tabs>
      </Box>

      {
        childUiSchema.elements.map((elem:UISchemaElement|any,i:number)=>{
          const childPath = composePaths(path, `${i}`);
         return (
          <TabPanel value={value} index={i}>
    
              <JsonFormsDispatch
                        schema={schema}
                        uischema={{type: 'HorizontalLayout',...elem}}
                        path={childPath}
                        key={childPath}
                        renderers={renderers}
              />
               </TabPanel>
              ) 
            
        })
      }
    </Box>
  );
}
