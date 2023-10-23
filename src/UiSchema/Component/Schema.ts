export const ComponentSchema = {
  type: "object",
  properties: {
    layout: {
      type: "array",
      items: {
        type: "object",
        properties: {
          layout_key: {
            type: "string",
          },
          layout_value: {
            type: "string",
          },
        },
      },
    },
  },
};
