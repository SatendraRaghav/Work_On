export const InvoiceGenerationSchema = {
    type: "object",
    properties: {
        invoiceNumber:{
            type: "string",
            pattern: "^[a-zA-Z0-9]+([-._ ]?[a-zA-Z0-9 ]+)*$",
            minLength: 3
        }
    },
    required:["programCycle", "programType"],
}