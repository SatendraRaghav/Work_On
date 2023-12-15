export const RolePermissionSchema = {
  type: "object",
  properties: {
    Back_Button: {
      disabled: false,
    },
   permissions:{
   oneOf:[{title:"W",const:"W"},{title:"R",const:"R"},{title:"H",const:"H"}]
   },
    permName: {
      type: "string",
      // pattern: "^[^:]*:[^:]*:(R|W|r|w)$"
      //   pattern:"^[A-Za-z0-9@#$?*-_]+:[A-Za-z0-9@#$?*-_]+:[WR\*]$"
    },
    active: {
      type: "string",
    },
  },
  required: ["active","pageName","component","permissions","permName"],
}
