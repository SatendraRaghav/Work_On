export const  RoleMasterSchema = {
    type: "object",
    properties: {
        
      Back_Button : {
        disabled : false
      },
      permissionList:{
         type:"array"
      },
        name: {
            type: "string",
            pattern: "^[a-zA-Z0-9]+([-_ ]?[a-zA-Z0-9 ]+)*$",
        },
        active:{
            type:"string"
        },
    },
    required: ["name", "active", "permissionList"],
}