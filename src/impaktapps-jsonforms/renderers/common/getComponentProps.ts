import Permission from "../permissions/Permission";
import getMatchedPermissions from "../permissions/getMatchedPermissions";

 const getPermissionProps = (path: string, permissions: any) => {
    const returnObj = { hidden: false, disabled: false }
    if (permissions !== undefined && permissions !== null && path !== null) {
        const permissionObjects = permissions.map((p) => new Permission(p));
        const fieldPermissions = getMatchedPermissions(path, permissionObjects);
        if (fieldPermissions.length === 0) {
            returnObj.hidden = true
        }
        else if (fieldPermissions[0].action === 'H') {
            returnObj.hidden = true
        }
        else {
            if (fieldPermissions[0].action === 'R') {
                returnObj.disabled = true;
            }
        }
    }
    return returnObj
}
 export const getSchemaProps = (componentSchema: any, pageSchema: any) => {
    const returnObj = { hidden: false, disabled: false }
    returnObj.disabled = pageSchema?.disabled ? true : false
    if (!(componentSchema?.disabled === undefined)) {
        returnObj.disabled = componentSchema.disabled ? true : false
    }
    returnObj.hidden = pageSchema.hidden ? true : false
    if (!(componentSchema?.hidden === undefined)) {
        returnObj.hidden = componentSchema.hidden ? true : false
    }
    return returnObj;
}

export const getComponentProps = (path: string, permissions: any, componentSchema: any, pageSchema: any) => {
    const SchemaProps = getSchemaProps(componentSchema, pageSchema);
    const permissionsProps = getPermissionProps(path, permissions);
    return {
        disabled: SchemaProps.disabled ? SchemaProps.disabled : permissionsProps.disabled,
        hidden: SchemaProps.hidden ? SchemaProps.hidden : permissionsProps.hidden
    }
}