export const PositionTypeMasterSchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            pattern: "^[a-zA-Z0-9]+([-_ ]?[a-zA-Z0-9 ]+)*$",
        },
        active:{
            type:"string"
        },
    },
    required:["name","active"],
}