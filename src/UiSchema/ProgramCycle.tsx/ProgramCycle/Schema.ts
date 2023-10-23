export const ProgramMasterCycleSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 3,
    },
    program: {
      type: "string",
    },
    
    workflowFile: {
      type: "string",
      // minLength: 3,
    },
    downloadWorkflowFile:{
      type: "string",
      // minLength: 3,
    },
    processDefKey1: {
      type: "string",
      minLength: 3,
    },
    invoiceFile: {
      type: "string",
      // minLength: 3,
    },
    timeouts: {
      type: "object",
      properties: {},
      // minLength: 3,
    },
  
    downloadInvoiceFile:{
      type: "string",
      minLength: 3,
    },
    invoiceEnabled: {
      type: "string",
    },
    clawbackEnabled:{
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
  }},
  required: ["name", "program", "startDate", "endDate", "downloadWorkflowFile", "processDefKey1", "downloadInvoiceFile",
    "invoiceEnabled", "reportNames", "clawbackEnabled", "adjustments"],
};
