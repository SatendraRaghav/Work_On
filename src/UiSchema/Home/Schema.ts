export const HomeSchema = {
    properties: {
      adjustments: {
        type: "string",
        format:"myCustomType",
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