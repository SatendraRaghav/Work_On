import React, { useState, useEffect, useContext } from "react";
import { JsonForms, useJsonForms } from "@jsonforms/react";
import { materialCells } from "@jsonforms/material-renderers";
import renderers from "../../renderers";
import { DataProvider } from "../../renderers/context/Context"; 
import { Box } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import CommonSkeleton from "../../renderers/common/commomSkeleton";
function Home({ objFunc, theme }: any) {
  const ctx = useJsonForms();
  const [formdata2, setFormdata2] = useState({});
  const [UiSchema, setUiSchema] = useState<any>();
  const [schema, setSchema] = useState({});
  const [render, setRender] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
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
        navigate,
        { searchParams, setSearchParams }
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
          objFunc={objFunc}
          setFormdata={setFormdata2}
          setUiSchema={setUiSchema}
          setSchema={setSchema}
          schema={schema}
          setAdditionalErrors={setAdditionalErrors}
          setConfig={setConfig}
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
        </DataProvider>
      ) : (
        <CommonSkeleton />
      )}
    </div>
  );
}

export default Home;
