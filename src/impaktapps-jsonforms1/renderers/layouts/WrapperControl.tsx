import {
  HorizontalLayout,
  LayoutProps,
  RankedTester,
  rankWith,
  uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import { MaterialLayoutRendererProps } from "./Horizontal";
import Wrapper from "./Wrapper";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import { inputProps } from "../interface/inputfieldProps";
import { useTheme } from "styled-components";

/**
 * Default tester for a horizontal layout.
 * @type {RankedTester}
 */
export const WrapperLayoutTester: RankedTester = rankWith(
  200,
  uiTypeIs("WrapperLayout")
);

export const WrapperLayoutControl = ({
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
  const wrapperTheme:any = useTheme()
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
    <div
      style={
        // uischema?.config?.defaultStyle || uischema?.config?.wrapperStyle
        //   ? 
          { ...theme.WrapperStyle, ...uischema?.config?.wrapperStyle,
            // background:"white",
            // theme.myTheme.palette.mode==="dark"?
          // theme.myTheme.palette.background.heading
          // :
          // wrapperTheme.palette.secondary.main,
         }
          // : {}
      }
    >
      <Wrapper
        {...childProps}
        rootSchema={rootSchema}
        renderers={renderers}
        cells={cells}
        uischema={uischema}
      />
    </div>
  );
};
export default withJsonFormsLayoutProps(WrapperLayoutControl);
