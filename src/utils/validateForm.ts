import Ajv from "ajv";
export const validateForm = (schema: any, data: any) => {
  return data.length > 0 ? false : true;
};
