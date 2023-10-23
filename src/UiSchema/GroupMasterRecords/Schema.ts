export const  GroupMasterRecordsSchema = {
    type: "object",
    properties: {
        GroupApproveRecords: {
      type: "array",
      items: {
        type: "object",
        properties: {
          label1: {
            type: "string",
            minLength: 3,
          },
          label2: {
            type: "string",
            minLength: 3,
          }
        },
      },
    }},
}