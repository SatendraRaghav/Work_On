import React, { useState, useEffect, useContext } from "react";
import { JsonForms, useJsonForms } from "@jsonforms/react";
import { materialCells } from "@jsonforms/material-renderers";
import { renders } from "./renders";
import { DataContext, actions, DataProvider } from "./Context";
import { Box, LinearProgress, Skeleton, Typography, TypographyProps } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useNavigate,useSearchParams } from "react-router-dom";
import './App.css'
import { pageStyle } from "./Styles/InputField";
import { PageBox } from "./Styles/InputField";
import { useTheme } from "@emotion/react";
const variants = [
  "h1",
  "h3",
  "body1",
  "body1",
  "h3",
  "caption",
] as readonly TypographyProps["variant"][];
export const userValue= 5;
const App = ({  objFunc}: any) => {
  // const myTheme = useTheme()
  return (
        <Router>
         <Routes>
             <Route  path="/" 
             element={
            <First 
            objFunc={objFunc}
       
            />} />
            <Route
              path="/:id/*"
              element={
                <Child
                  objFunc={objFunc}
                />
              }
            />
         </Routes>
        </Router>
  );
};

function First({ objFunc }: any) {
      const ctx = useJsonForms();
    const [formdata2,setFormdata2] = useState({})
    const [UiSchema,setUiSchema] = useState<any>()
    const [schema,setSchema] = useState({})
    const [render,setRender] = useState(false)
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const changeHandler = (data: any, errors: any) => {
        setFormdata2(data);
      };
      const callService = ()=>{
        objFunc.getServices("Home",ctx,setFormdata2,setUiSchema,setSchema,navigate,[searchParams,setSearchParams]).then((res:any)=>{
          res.setPage()
        })
       
     
       }
      useEffect(()=>{
        callService()
          setRender(true) 
      },[])
  return (
      <div>
        {
          render?
          <DataProvider objFunc={objFunc} setFormdata={setFormdata2} setUiSchema={setUiSchema} setSchema={setSchema}>
         <Box 
     
         sx={{...pageStyle,...UiSchema?.stylePage}}>
         {/* <PageBox> */}
        <JsonForms
          data={formdata2}
          schema={schema}
          uischema={UiSchema}
          renderers={renders}
          cells={materialCells}
          onChange={({ data, errors }) => changeHandler(data, errors)}
        />
        {/* </PageBox> */}
        </Box>
       </DataProvider>
        :
        <>
        <LinearProgress />
        <Box sx={{ width: "60vw" ,height:"100vh",margin:"auto auto" }}> 
        {variants.map((variant,i) => (
        <Typography component="div" key={variant} variant={variant}>
          <Skeleton height={120}/> 
        </Typography>
      ))}
      </Box>
      </>

    
      }
      </div>
  );
}
function Child({ objFunc }: any) {
  const {state, dispatch} = useContext(DataContext);
  const {id} = useParams();
  const ctx = useJsonForms();
  const [formdata2,setFormdata2] = useState({})
  const [UiSchema,setUiSchema] = useState<any>()
  const [schema,setSchema] = useState({})
  const changeHandler = (data: any, errors: any) => {
      setFormdata2(data);
    };
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    objFunc.getServices(id,ctx,setFormdata2,setUiSchema,setSchema,navigate,[searchParams,setSearchParams]).then((res:any)=>{
      res.setPage()
    })
  }, [id]);

  return (
    <React.Fragment>
        <div
        >
           {UiSchema? 
           <DataProvider id={id} objFunc={objFunc} setFormdata={setFormdata2} setUiSchema={setUiSchema} setSchema={setSchema}>
       <Box 
        sx={{...pageStyle,...UiSchema?.stylePage}}>
        {/* <PageBox> */}
           <JsonForms
              data={formdata2}
              schema={schema}
              uischema={UiSchema}
              renderers={renders}
              cells={materialCells}
              onChange={({ data, errors }) => changeHandler(data, errors)}
              validationMode={"NoValidation"}
            />
            </Box>
           {/* </PageBox> */}
            </DataProvider>
            :
            <>
            <LinearProgress />
            <Box sx={{ width: "60vw" ,height:"100vh",margin:"auto auto" }}> 
            {variants.map((variant,i) => (
            <Typography component="div" key={variant} variant={variant}>
              <Skeleton height={120}/> 
            </Typography>
          ))}
          </Box>
          </>
    }
        </div>
    </React.Fragment>
  );
}

export default App;
