import { JsonForms, useJsonForms } from '@jsonforms/react';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { DataProvider } from '../renderers/context/Context';
import CommonSkeleton from '../renderers/common/commomSkeleton';
import renderers from '../renderers';
import { materialCells } from '@jsonforms/material-renderers';
import { myTheme } from '../styles/StyleFactory';

const AppWithoutRouter = ({ objFunc,objStyle,permissions }: { objFunc: any; permissions?: string[],objStyle?:any}) => {
  const theme =  myTheme(objStyle)
  const ctx = useJsonForms();
  const [formdata2, setFormdata2] = useState({});
  const [UiSchema, setUiSchema] = useState<any>();
  const [schema, setSchema] = useState({});
  const [render, setRender] = useState(false);
  const [additionalErrors, setAdditionalErrors] = useState<any[]>([]);
  const [config, setConfig] = useState<any>("ValidateAndHide");
  const changeHandler = (data: any, errors: any) => {
    setFormdata2(data);
  };
  const callService = () => {
    objFunc
      .getService(
        "Home",
        ctx,
        setFormdata2,
        setUiSchema,
        setSchema,
      )
      .then((res: any) => {
        res.setPage();
        setRender(true);
      });
  };
  useEffect(() => {
    callService();
  }, []);
  return (
    <div>
      {render ? (
        <DataProvider
        id={"RouterUnavailable"}
          objFunc={objFunc}
          setFormdata={setFormdata2}
          setUiSchema={setUiSchema}
          setSchema={setSchema}
          schema={schema}
          setAdditionalErrors={setAdditionalErrors}
          setConfig={setConfig}
          permissions={permissions}
          theme={theme}
        >
          <Box sx={{ ...theme.pageStyle, ...UiSchema?.stylePage }}>
            <JsonForms
              data={formdata2}
              schema={schema}
              uischema={UiSchema}
              renderers={renderers}
              cells={materialCells}
              onChange={({ data, errors }) => changeHandler(data, errors)}
              validationMode={config}
              additionalErrors={additionalErrors}
            />
          </Box>
        // </DataProvider>
      ) : (
        <CommonSkeleton />
      )}
    </div>
  )
}

export default AppWithoutRouter;