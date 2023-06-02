import {Children,  cloneElement } from 'react'
import getMatchedPermissions from './getMatchedPermissions';
import Permission from './Permission';
import React from 'react';

function setDisabledFalse(children) {
  return Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    let updatedChild = child;

    if (child.props && child.props.children) {
      const nestedChildren = child.props.children;
      const updatedNestedChildren = setDisabledFalse(nestedChildren);
      
      updatedChild = cloneElement(child, { children: updatedNestedChildren });
    }

    return cloneElement(updatedChild, { disabled: false });
  });
}
function PermissionWrapper({children,path,permissions}) {
  // const childObj = JSON.parse(JSON.stringify(children));
    if((permissions !== undefined && permissions !== null)  && path !== null ){
    const permissionObjects = permissions.map(p=>new Permission(p));
    const fieldPermissions = getMatchedPermissions(path, permissionObjects);
    // childObj.disabled=true;
    // if( childObj?.props?.children?.props){
    //   childObj.props.children.props.disabled = true;
    // }
    if (fieldPermissions.length === 0) {
        return null;
      } else {

        if (fieldPermissions[0].action === 'R') {
          // const updatedChildren = setDisabledFalse(children);
          cloneElement(children, { disabled: true });
        }
      }
    }
      return <>{children}</>;
}

export default PermissionWrapper