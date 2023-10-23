import React, { Children, cloneElement } from 'react';
import getMatchedPermissions from './getMatchedPermissions';
import Permission from './Permission';





function PermissionWrapper({ children, path, permissions }) {
  if (permissions !== undefined && permissions !== null && path !== null) {
    const permissionObjects = permissions.map((p) => new Permission(p));
    const fieldPermissions = getMatchedPermissions(path, permissionObjects);

    if (fieldPermissions.length === 0) {
      return null;
    } 
   else if(fieldPermissions[0].action === 'H'){
    return null
   }
    else {
      if (fieldPermissions[0].action === 'R') {
        const updatedChildren = Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            //@ts-ignore
            return cloneElement(child, { disabled: true });
          }
          return child;
        });
        return <>{updatedChildren}</>;
      }
    }
  }
  return <>{children}</>;
}

export default PermissionWrapper;
