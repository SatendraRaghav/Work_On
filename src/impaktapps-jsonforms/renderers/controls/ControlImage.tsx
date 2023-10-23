import React, { useState } from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import Label from "../components/Label";

const ControlImage = (props: any) => {
  return <Label {...props} />;
};

export default withJsonFormsControlProps(ControlImage);
