import Ajv from "ajv";
export const isErrorsExist = (schema: any, data: any) => {
  return data.length > 0 ? false : true;
};
