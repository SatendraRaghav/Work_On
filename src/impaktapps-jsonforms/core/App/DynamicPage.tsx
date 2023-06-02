import React, { useState, useEffect, useContext } from "react";
import { JsonForms, useJsonForms } from "@jsonforms/react";
import { materialCells } from "@jsonforms/material-renderers";
import renderers from "../../renderers";
import { DataProvider } from "../../renderers/context/Context";
import { Box } from "@mui/material";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CommonSkeleton from "../../renderers/common/commomSkeleton";
export default function DynamicPage({ objFunc, permissions, theme }: any) {
  const { id } = useParams();
  const ctx = useJsonForms();
  const [formdata2, setFormdata2] = useState({});
  const [UiSchema, setUiSchema] = useState<any>();
  const [schema, setSchema] = useState({});
  const [additionalErrors, setAdditionalErrors] = useState<any[]>([]);
  const [config, setConfig] = useState<any>("ValidateAndHide");
  const changeHandler = (data: any, errors: any) => {
    setFormdata2(data);
  };
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  //  const allowedUrl = ["MasterRecords","CycleRecords"]
  useEffect(() => {
    // const myId =   allowedUrl.indexOf(id)>-1?id:"NotFound";
    objFunc.getService(id, ctx, setFormdata2, setUiSchema, setSchema, navigate, {
        searchParams,
        setSearchParams,
      })
      .then((res) => {
        res.setPage();
        setConfig("ValidateAndHide");
      });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <React.Fragment>
      <div>
        {UiSchema ? (
          <DataProvider
            id={id}
            objFunc={objFunc}
            setFormdata={setFormdata2}
            setUiSchema={setUiSchema}
            setSchema={setSchema}
            schema={schema}
            setAdditionalErrors={setAdditionalErrors}
            validationMode={config}
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
                additionalErrors={additionalErrors}
                validationMode={config}
              />
            </Box>
          </DataProvider>
        ) : (
          <CommonSkeleton />
        )}
      </div>
    </React.Fragment>
  );
}
