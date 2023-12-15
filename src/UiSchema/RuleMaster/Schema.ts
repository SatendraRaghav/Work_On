export const RuleMasterSchema = {
  properties: {
  Back_Button: {
    disabled: false,
  },
  groupId: {
    type: "string",
  },
  artifactId: {
    type: "string",
  },
  version: {
    type: "string",
  },
  ruleId: {
    type: "string",
  },
},
  required: ["groupId", "artifactId", "version", "ruleId"],
};
