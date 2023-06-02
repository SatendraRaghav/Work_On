import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import DataTable from "../components/DataTable";
import { ArrayControlProps } from "@jsonforms/core";

const ControlDataTable = (props:ArrayControlProps|any) => {
  return (
    <DataTable
    {...props}
    />
  );
};

export default withJsonFormsControlProps(ControlDataTable);
