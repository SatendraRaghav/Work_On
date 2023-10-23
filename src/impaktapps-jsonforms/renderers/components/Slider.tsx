import { ArrayControlProps, UISchemaElement } from '@jsonforms/core'
import { JsonFormsDispatch, withJsonFormsControlProps } from '@jsonforms/react';
import { isEmpty } from 'lodash';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { Box, Divider, Typography } from '@mui/material';
import { composePaths } from "@jsonforms/core";

const Slider = ({
    path,
    schema,
   data,
    uischema,
    uischemas,
    renderers,
    cells,
    rootSchema,
  }: ArrayControlProps | any) => {
  return (
    <div style={{width:"100%",
    borderRadius:"20px",
    margin:"10px",
    marginLeft:"auto",marginRight:"auto",
    background:"white"}}>
      {uischema?.config?.main?.label && (
        <>
        <Box >
          <Typography
            component={"div"}
            sx={{
               padding:"10px",
              paddingLeft:"8px",
              fontSize: { xs: "16px", sm: "20px" },
              fontFamily: "roboto",
              fontWeight: 500,
              color:"inherit",
              ...uischema?.config?.style?.labelStyle,
            }}
          >
            {uischema.config?.main?.label}
          </Typography>
          {uischema?.config?.main?.divider && <Divider sx={{paddingTop:"8px"}} variant="fullWidth"></Divider>}
        </Box>
        <Divider sx={{marginBottom:"10px"}} /></>
      )}
      <div>
      <Splide 
     style={{
        borderRadius:"20px",
        margin:"20px",

     }}
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: true,
        pagination: true,
        perPage: 3,
        // autoScroll: {
        //   pauseOnHover: true,
        //   pauseOnFocus: false,
        //   rewind: false,
        //   speed: 0.8
        // },
        autoScroll:false,
        ...uischema?.config?.main?.slidderSettings,
      }}
      extensions={{ AutoScroll }}
      >
        {!isEmpty(data) &&
         data.map((child: UISchemaElement | any, i: number) => {
            const childPath = composePaths(path, `${i}`);
            const childUiSchema = uischema.elements[0]
            return (
        
              <SplideSlide style={{margin:"20px"}}>
                <JsonFormsDispatch
                  schema={schema}
                  uischema={childUiSchema}
                  path={childPath}
                  cells={cells}
                  renderers={renderers}
                />
               </SplideSlide>
            
            );
          })}
  </Splide>
  </div>
   </div>
  )
}

export default withJsonFormsControlProps(Slider);