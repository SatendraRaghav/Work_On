import { ArrayControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import CustomTab from "../Components/CustomTab";

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