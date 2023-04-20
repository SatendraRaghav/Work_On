import { Card, Typography } from "@mui/material";
let Permissions:Array<string> ;

export const checkDisableCondition = (
  pagePath: string,
  path: string,
  accessPermissions: Array<string>
) => {
  return false
};

export const checkHiddenCondition = (
  pagePath: string,
  path: string,
  accessPermissions: Array<string>
) => {
  return false
};

export const checkInputFieldValidation = (value: any, data: any) => {
  return [false, " "];
};
