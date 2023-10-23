import {
    HorizontalLayout,
    LayoutProps,
    RankedTester,
    rankWith,
    uiTypeIs,
    schemaTypeIs,
    formatIs
  } from '@jsonforms/core';

export const ArrayLayoutTester: RankedTester = 
    rankWith(
      400,
      formatIs('myCustomType')
      // schemaTypeIs('myCustomType')
    )