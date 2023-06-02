import {
    HorizontalLayout,
    LayoutProps,
    RankedTester,
    rankWith,
    uiTypeIs,
  } from '@jsonforms/core';
  import { withJsonFormsLayoutProps } from '@jsonforms/react';
  import {
    MaterialLayoutRendererProps
  } from './Layout';
  import { CustomTabLayout } from './TabLayout';
  import { useContext } from 'react';
  import { DataContext } from '../context/Context';
import { inputProps } from '../interface/inputfieldProps';
  
  /**
   * Default tester for a horizontal layout.
   * @type {RankedTester}
   */
  export const TabLayoutTester: RankedTester = rankWith(
    200,
    uiTypeIs('TabLayout')
  );

  export const TabLayoutControl = ({ uischema, renderers, cells, schema, path, enabled, visible }: LayoutProps& inputProps) => {
    const { theme} =
      useContext(DataContext);
    const layout = uischema as HorizontalLayout;
    const childProps: MaterialLayoutRendererProps = {
      elements: layout.elements,
      schema,
      path,
      enabled,
      direction: 'row',
      visible
    };
  
    return(
      <div style={uischema?.config?.defaultStyle||uischema?.config?.wrapperStyle?{...theme.WrapperStyle,...uischema?.config?.wrapperStyle}:{}}>
    <CustomTabLayout {...childProps} renderers={renderers} cells={cells} uischema={uischema}/>
    </div>)
  };
  export default withJsonFormsLayoutProps(TabLayoutControl);