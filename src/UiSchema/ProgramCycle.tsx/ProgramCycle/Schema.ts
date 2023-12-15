export const ProgramMasterCycleSchema = {
  type: "object",
  properties: {
    program: {
      type: "string",
    },
    Back_Button: {
      disabled: false,
    },
  },
  required: ["program"],
};
