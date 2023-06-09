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
    return(
    <Grid2  key={`${path}-${index}`} xs={child?.config?.layout?(child?.config?.layout.xs?child?.config?.layout.xs:child?.config?.layout):12} sm={child?.config?.layout?(child?.config?.layout.sm?child?.config?.layout.sm:child?.config?.layout):12} md={child?.config?.layout?(child?.config?.layout.md?child?.config?.layout.md:child?.config?.layout):12} lg={child?.config?.layout?(child?.config?.layout.lg?child?.config?.layout.lg:child?.config?.layout):12}>
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
      );
    }
  };
export const MaterialLayoutRenderer = React.memo(MaterialLayoutRendererComponent);
