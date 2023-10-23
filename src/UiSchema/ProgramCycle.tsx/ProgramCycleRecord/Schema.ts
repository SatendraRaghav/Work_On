export const ProgramMasterCycleRecordSchema = {
  type: "object",
  properties: {
    CycleApproveRecords: {
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
  }},
}