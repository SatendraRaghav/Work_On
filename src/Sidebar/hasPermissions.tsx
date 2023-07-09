import {Permission, getMatchedPermissions} from "../impaktapps-jsonforms/lib"; 
// import { Permission } 
// // import {getMatchedPermissions} from "impaktapps-jsonforms";
import { MenuItem } from "./MenuItem";



export const hasPermissions = (menuItem : MenuItem,permissions : Permission[]):boolean => {


    if(menuItem.url===null){

      for(var child of menuItem.children){
        const hasPermission =  hasPermissions(child,permissions);
        if(hasPermission){
          return hasPermission;
        }
      }
      return false;
    }
    return getMatchedPermissions(menuItem.url.slice(1),permissions).length > 0;

  }