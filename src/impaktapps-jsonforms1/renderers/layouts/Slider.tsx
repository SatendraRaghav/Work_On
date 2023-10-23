import { ArrayControlProps, UISchemaElement } from '@jsonforms/core'
import { JsonFormsDispatch } from '@jsonforms/react';
import { isEmpty } from 'lodash';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import "@splidejs/splide/dist/css/splide.min.css";
import "./slider.css"
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

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
    const settings:any = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
     
        ...uischema?.config?.main?.slidderSettings,
      };
  return (
    <div style={{width:"95%",marginLeft:"auto",marginRight:"auto"}}>
      {/* <Slider {...settings}> */}
      <Splide  
    
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: true,
        pagination: true,
        perPage: 3,
      //  autoplay:true,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
          speed: 0.8
        }
      }}
      extensions={{ AutoScroll }}
     
      >
        {!isEmpty(elements) &&
          elements.map((child: UISchemaElement | any, i: number) => {
            return (
              <SplideSlide >
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
  </Splide>
   </div>
  )
}

export default SliderLayout;