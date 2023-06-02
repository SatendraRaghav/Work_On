import Ajv from "ajv";
export const validateForm = (schema: any, data: any) => {
  // const ajv = new Ajv();
  // const validate = ajv.compile(schema);
  // let valid = validate(data);

  // const dataCheck = schema.required.filter((e: string, id: number) => {
  //   return (
  //     data[e] !== "" &&
  //     typeof data[e] !== "undefined" &&
  //     typeof data[e] !== null
  //   );
  // });
  // if (dataCheck.length < schema.required.length) {
  //   return false;
  // }
  // return valid;
  return data.length > 0 ? false : true;
};
