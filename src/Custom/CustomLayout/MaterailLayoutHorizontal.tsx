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

/**
 * Default tester for a horizontal layout.
 * @type {RankedTester}
 */
export const materialHorizontalLayoutTester: RankedTester = rankWith(
  200,
  uiTypeIs('HorizontalLayout')
);

export const MaterialLayoutHorizontal = ({ uischema, renderers, cells, schema, path, enabled, visible }: LayoutProps) => {
  const layout = uischema as HorizontalLayout;
  const childProps: MaterialLayoutRendererProps = {
    elements: layout.elements,
    schema,
    path,
    enabled,
    direction: 'row',
    visible
  };

  return <MaterialLayoutRenderer {...childProps} renderers={renderers} cells={cells} />;
};
export default withJsonFormsLayoutProps(MaterialLayoutHorizontal);