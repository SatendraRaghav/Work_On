import _ from "lodash";

const arraySchema = 
// {
//     "comments":
     {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {}
        }
    }
// }

export const buildArraySchema = (config:any) => {
  const array = _.cloneDeep(arraySchema);
   return array;
}
