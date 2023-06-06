import {
  HorizontalLayout,
  LayoutProps,
  RankedTester,
  rankWith,
  uiTypeIs,
} from '@jsonforms/core';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import {
  MaterialLayoutRenderer,
  MaterialLayoutRendererProps
} from './Layout';
import { useContext } from 'react';
import { DataContext } from '../context/Context';

/**
 * Default tester for a horizontal layout.
 * @type {RankedTester}
 */
export const materialHorizontalLayoutTester: RankedTester = rankWith(
  200,
  uiTypeIs('HorizontalLayout')
);

export const MaterialLayoutHorizontal = ({ uischema, renderers, cells, schema, path, enabled, visible }: LayoutProps) => {
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
     //@ts-ignore 
    <div style={uischema?.config?.defaultStyle||uischema?.config?.style?{...theme.WrapperStyle,...uischema?.config?.style}:{}}>
  <MaterialLayoutRenderer {...childProps} renderers={renderers} cells={cells} />
  </div>)
};
export default withJsonFormsLayoutProps(MaterialLayoutHorizontal);