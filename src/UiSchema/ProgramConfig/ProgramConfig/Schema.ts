export const ProgramConfigMasterSchema = {
  type: "object",
  properties: {
    program: {
      type: "string",
    },
   reportNames:{
    type:"array",
    items:{
      oneOf:[
        { title: "DSL", const: "DSL" },
        { title: "PSL", const: "PSL" },
        { title: "Home LOAN", const: "Home LOAN" },
      ]
    }
   },
    workflowFile: {
      type: "string",
      // minLength: 3,
    },
    downloadWorkflowFile: {
      type: "string",
      // minLength: 3,
    },
    processDefKey1: {
      type: "string",
      minLength: 3,
    },
    loadTimeout: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    computeTimeout: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    clawbackEnabled: {
      type: "string",
    },
    groupId: {
      type: "string",
    },
    project: {
      type: "string",
    },
    version: {
      type: "string",
    },
    adjustments: {
      type: "array",
      items: {
        type: "object",
        properties: {
          adjustment_type: {
            type: "string",
            minLength: 3,
          },
          adjustment_parameter: {
            type: "string",
            minLength: 3,
          },
          adjustment_parameter_type: {
            type: "string",
            minLength: 3,
          },
        },
      },
    },
  },
  required: [
    "program",
    "startDate",
    "endDate",
    "downloadWorkflowFile",
    "processDefKey1",
    "loadTimeout",
    "computeTimeout",
    "reportNames",
    "clawbackEnabled",
    "adjustments",
    "groupId",
    "project",
    "version",
  ],
};
