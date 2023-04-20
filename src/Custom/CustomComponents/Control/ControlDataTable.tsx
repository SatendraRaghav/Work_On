import React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import DataTable from '../Components/DataTable';
import { ArrayControlProps } from '@jsonforms/core';

const ControlDataTable = 
    ({
        schema,
        uischema,
        data,
        path,
        rootSchema,
        uischemas,      
        id,
        errors,
        handleChange
    }: ArrayControlProps & any) => {
      
        return (
            <DataTable
                data={data}
                updateValue={(newValue:any) => handleChange(path, newValue)}
                path={path}
                schema={schema}
                errors={errors}
                uischema={uischema}
                uischemas={uischemas}
                rootSchema={rootSchema}
                id={id}
            />
        

)};

export default withJsonFormsControlProps(ControlDataTable);