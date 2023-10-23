import Permission from "./Permission";
export const filterPermission = (token:string, permissions:Permission[],attribute:string) => {
 
    const permission = permissions.filter((elem) => {
      return (token === elem[attribute] || elem[attribute] === "*");
    });

    return permission;
  }


export const sortPermissions = (permissions:Permission[]) => {
  
  permissions.sort((a,b) => {
    return b.priorityScore - a.priorityScore;
  })
  
  return permissions;
};
