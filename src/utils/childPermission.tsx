import { getMatchedPermissions } from "json2ui";

export const childPermission = (menuItem: any, permissions: Array<string>) => {
  if (menuItem.children) {
    if (menuItem.children.length === 0 && menuItem.url !== null) {
      if (
        getMatchedPermissions(menuItem.url.slice(1), permissions).length > 0
      ) {
        return true;
      }
    }

    for (let i = 0; i < menuItem.children.length; i++) {
      const child = menuItem.children[i];

      if (child.children.length === 0) {
        if (getMatchedPermissions(child.url.slice(1), permissions).length > 0) {
          return true;
        }
      }

      childPermission(child, permissions);
    }
  }

  return false;
};
