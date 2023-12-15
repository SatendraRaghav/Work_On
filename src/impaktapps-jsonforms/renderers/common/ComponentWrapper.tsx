import React, { Children, cloneElement } from "react";
function ComponentWrapper({ children, disabled, hidden }: any) {
  if (hidden) {
    return null;
  } else if (disabled) {
    const updatedChildren = Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        //@ts-ignore
        return cloneElement(child, { disabled: true });
      }
      return child;
    });
    return <>{updatedChildren}</>;
  }
  return <>{children}</>;
}

export default ComponentWrapper;
