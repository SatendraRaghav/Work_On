import range from 'lodash/range';
import React, { useMemo } from 'react';
import {
  ArrayControlProps,
  composePaths,
  createDefaultValue,
  findUISchema,
  Helpers,
  ControlElement,
} from '@jsonforms/core';
import {
  JsonFormsDispatch,
  withJsonFormsArrayControlProps,
  withJsonFormsArrayLayoutProps,
  withJsonFormsLayoutProps,
} from '@jsonforms/react';

const { convertToValidClassName } = Helpers;

export const ArrayControl = ({
//   classNames,
  data,
  label,
  path,
  schema,
  errors,
  addItem,
  removeItems,
  moveUp,
  moveDown,
  uischema,
  uischemas,
  getStyleAsClassName,
  renderers,
  rootSchema,
  translations,
}: ArrayControlProps & any) => {
  const controlElement = uischema as ControlElement;
  const childUiSchema = useMemo(
    () =>
      findUISchema(
        uischemas,
        schema,
        uischema.scope,
        path,
        undefined,
        uischema,
        rootSchema
      ),
    [uischemas, schema, uischema.scope, path, uischema, rootSchema]
  );
   const childPath = composePaths(path, `${1}`);
   const childPath2 = composePaths(path, `${2}`);
   console.log(schema)
  return (

      <>
              <div key={1}>
                <JsonFormsDispatch
                  schema={schema}
                  uischema={childUiSchema || uischema}
                  path={childPath}
                  key={childPath}
                  renderers={renderers}
                />
              
                 
              </div>
              <div key={2}>
              <JsonFormsDispatch
                schema={schema}
                uischema={childUiSchema || uischema}
                path={childPath2}
                key={childPath2}
                renderers={renderers}
              />
            
               
            </div>
            </>
  );
};

export const ArrayControlRenderer = ({
  schema,
  uischema,
  data,
  path,
  rootSchema,
  uischemas,
  addItem,
  getStyle,
  getStyleAsClassName,
  removeItems,
  moveUp,
  moveDown,
  id,
  visible,
  enabled,
  errors,
  translations,
}: ArrayControlProps & any) => {
  const controlElement = uischema as ControlElement;
  const labelDescription = Helpers.createLabelDescriptionFrom(
    controlElement,
    schema
  );
  const label = labelDescription.show ? labelDescription.text : '';
  // const controlClassName = `control ${Helpers.convertToValidClassName(
  //   controlElement.scope
  // )}`;
//   const fieldSetClassName = getStyleAsClassName('array.layout');
//   const buttonClassName = getStyleAsClassName('array.button');
//   const childrenClassName = getStyleAsClassName('array.children');
//   const classNames: { [className: string]: string } = {
//     wrapper: controlClassName,
//     fieldSet: fieldSetClassName,
//     button: buttonClassName,
//     children: childrenClassName,
//   };

  return (
    <ArrayControl
    //   classNames={classNames}
      data={data}
      label={label}
      path={path}
      schema={schema}
      errors={errors}
      addItem={addItem}
      removeItems={removeItems}
      moveUp={moveUp}
      moveDown={moveDown}
      uischema={uischema}
      uischemas={uischemas}
      getStyleAsClassName={getStyleAsClassName}
      rootSchema={rootSchema}
      id={id}
      visible={visible}
      enabled={enabled}
      getStyle={getStyle}
      translations={translations}
    />
  );
};

export default withJsonFormsArrayLayoutProps(ArrayControlRenderer);
