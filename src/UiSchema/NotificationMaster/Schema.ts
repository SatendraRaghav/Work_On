export const NotificationSchema = {
    type: "object",
    properties: {
      Back_Button : {
        disabled : false
      },
      body: {
        type: "array",
        items: {
          type: "object",
          properties: {
            key: {
              type: "string",
            },
            value: {
              type: "string",
            },
          },
        },
      },
    },
  };
  