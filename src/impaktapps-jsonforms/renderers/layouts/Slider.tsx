import { ArrayControlProps, UISchemaElement } from '@jsonforms/core'
import { JsonFormsDispatch } from '@jsonforms/react';
import { isEmpty } from 'lodash';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Slider from "react-slick";
// import "@splidejs/splide/dist/css/splide.min.css";
import "./slider.css"
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { Box, Divider, Typography } from '@mui/material';

const SliderLayout = ({
    path,
    schema,
    elements,
    uischema,
    uischemas,
    renderers,
    cells,
    rootSchema,
  }: ArrayControlProps | any) => {
  return (
    <div style={{width:"95%",marginLeft:"auto",marginRight:"auto"}}>
      {uischema?.config?.main?.label && (
        <Box >
          <Typography
            component={"div"}
            sx={{
               padding:"10px",
              paddingLeft:"28px",
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
      )}
      <div>
      {/* <Slider {...settings}> */}
      <Splide  options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: true,
        pagination: true,
        perPage: 3,
       
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
          speed: 0.8
        },
        ...uischema?.config?.main?.slidderSettings,
      }}
      extensions={{ AutoScroll }}
      // extensions={{ AutoScroll }}
      >
        {!isEmpty(elements) &&
          elements.map((child: UISchemaElement | any, i: number) => {
            return (
              // <div key ={i} style={{}}>
              <SplideSlide>
                <JsonFormsDispatch
                  schema={schema}
                  uischema={child}
                  path={path}
                  cells={cells}
                  renderers={renderers}
                />
               </SplideSlide>
            
            );
          })}
  {/* </Slider> */}
  </Splide>
  </div>
   </div>
  )
}

export default SliderLayout;