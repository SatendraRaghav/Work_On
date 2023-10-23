import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import DataTablePro from "../components/DataTablePro";
import { inputProps } from "../interface/inputfieldProps";

const ControlDataTablePro = (props:inputProps) => {
  return (
    <DataTablePro
    {...props}
    />
  );
};

export default withJsonFormsControlProps(ControlDataTablePro);
