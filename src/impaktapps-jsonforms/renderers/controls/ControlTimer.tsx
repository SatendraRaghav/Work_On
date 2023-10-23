import React, { useState } from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import Timer from "../components/Timer";
import { ControlProps } from "@jsonforms/core";
import { WithInput } from "@jsonforms/material-renderers";

const ControlTimer = (props: ControlProps & WithInput) => {
  return <Timer {...props} />;
};

export default withJsonFormsControlProps(ControlTimer);
