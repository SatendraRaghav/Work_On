import { ArrayControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import CustomTab from "../components/Tab";

export const ControlTab = ({
    data,
    path,
    schema,
    uischema,
    uischemas,
    rootSchema,
   

  }: ArrayControlProps&any ) => {
    
    return (
      <CustomTab
            data={data}
            path={path}
            schema={schema}
            uischema={uischema}
            uischemas={uischemas}
            rootSchema={rootSchema}      
              />
    );
  };
  
  export default withJsonFormsControlProps(ControlTab);