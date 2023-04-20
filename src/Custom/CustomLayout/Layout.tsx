import React from 'react';
import isEmpty from 'lodash/isEmpty';
import type { UISchemaElement } from '@jsonforms/core';
import {
  JsonFormsCellRendererRegistryEntry,
  JsonFormsRendererRegistryEntry,
  JsonSchema,
  OwnPropsOfRenderer,
} from '@jsonforms/core';
import { JsonFormsDispatch, useJsonForms } from '@jsonforms/react';
import { Hidden } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

export const renderLayoutElements = (
  elements:any,
  schema: JsonSchema|undefined,
  path: string|undefined,
  enabled: boolean|undefined,
  renderers?: JsonFormsRendererRegistryEntry[],
  cells?: JsonFormsCellRendererRegistryEntry[]
) => {
  return elements.map((child:any, index:number) => {
    // const {xs,sm,md,lg} = child.layout;
    // console.log(child)
    return(
    <Grid2  key={`${path}-${index}`} xs={child.layout?(child.layout.xs?child.layout.xs:child.layout):12} sm={child.layout?(child.layout.sm?child.layout.sm:child.layout):12} md={child.layout?(child.layout.md?child.layout.md:child.layout):12} lg={child.layout?(child.layout.lg?child.layout.lg:child.layout):12}>
      <JsonFormsDispatch
        uischema={child}
        schema={schema}
        path={path}
        enabled={enabled}
        renderers={renderers}
        cells={cells}
      />
    </Grid2>
  )});
};

export interface MaterialLayoutRendererProps extends OwnPropsOfRenderer {
  elements: UISchemaElement[];
  direction: 'row' | 'column';
}
const MaterialLayoutRendererComponent =
  ({
    visible,
    elements,
    schema,
    path,
    enabled,
    direction,
    renderers,
    cells
  }: MaterialLayoutRendererProps) => {
    if (isEmpty(elements)) {
      return null;
    } else {
      return (
        // <Hidden xsUp={!visible}>
          <Grid2
            container
            direction={direction}
            spacing={direction === 'row' ? 2 : 0}
            justifyContent={'space-around'}
          >
            {renderLayoutElements(
              elements,
              schema,
              path,
              enabled,
              renderers,
              cells
            )}
          </Grid2>
        // </Hidden>
      );
    }
  };
export const MaterialLayoutRenderer = React.memo(MaterialLayoutRendererComponent);
