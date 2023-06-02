export const RolePermissionSchema = {
    type: "object",
    properties: {
        permName: {
            type: "string",
           // pattern: "^[^:]*:[^:]*:(R|W|r|w)$"
           pattern:"^[A-Za-z0-9@#$?*-_]+:[A-Za-z0-9@#$?*-_]+:[WR\*]$"
        },
        active:{
            type:"string"
        }
    },
    required: ["permName", "active"],
}