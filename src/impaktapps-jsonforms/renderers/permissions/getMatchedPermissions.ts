import { filterPermission,sortPermissions } from "./PermissionUtils";
import Permission from "./Permission";
const getMatchedPermissions = (path:string, permissions:Permission[]) => {
    const permissionList =permissions;
    const tokenList = path.split(':');
    let finalPermissions = [];
    if(tokenList.length>0){
        const pageNameList = permissionList.map(elem => elem.pageName);
        finalPermissions = filterPermission(tokenList[0],permissions,"pageName");

        if(tokenList.length>1){
            const fieldNameList = finalPermissions.map(elem => elem.fieldName);
            finalPermissions =  filterPermission(tokenList[1],finalPermissions,"fieldName");

        }
        if(finalPermissions.length > 1){
            finalPermissions = sortPermissions(finalPermissions);
        }

    }

       
        return finalPermissions;
}

export default getMatchedPermissions;