import {
    HorizontalLayout,
    LayoutProps,
    RankedTester,
    rankWith,
    uiTypeIs,
  } from "@jsonforms/core";
  import { withJsonFormsLayoutProps } from "@jsonforms/react";
  import { MaterialLayoutRendererProps } from "./Horizontal";
import Slider from "./Slider";
  import { useContext } from "react";
  import { DataContext } from "../context/Context";
  import { inputProps } from "../interface/inputfieldProps";
  
  /**
   * Default tester for a horizontal layout.
   * @type {RankedTester}
   */
  export const SliderLayoutTester: RankedTester = rankWith(
    200,
    uiTypeIs("SliderLayout")
  );
  
  export const SliderLayoutControl = ({
    uischema,
    renderers,
    rootSchema,
    cells,
    schema,
    path,
    enabled,
    visible,
  }: LayoutProps & inputProps) => {
    const { theme } = useContext(DataContext);
    const layout = uischema as HorizontalLayout;
    const childProps: MaterialLayoutRendererProps = {
      elements: layout.elements,
      schema,
  
      path,
      enabled,
      direction: "row",
      visible,
    };
  
    return (
      // <div {/* </div> */}
        // style={
        //   uischema?.config?.defaultStyle || uischema?.config?.sliderStyle
        //     ? { ...theme.WrapperStyle, ...uischema?.config?.sliderStyleStyle }
        //     : {}
        // }
      // >
        <Slider
          {...childProps}
          rootSchema={rootSchema}
          renderers={renderers}
          cells={cells}
          uischema={uischema}
        />
     
    );
  };
  export default withJsonFormsLayoutProps(SliderLayoutControl);