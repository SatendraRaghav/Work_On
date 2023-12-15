export const ApplicationConfigSchema = {
  type: "object",
  properties: {
    emailNotificationName: {
      type: "string",
    },
    retryTimeout: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    maxRetry: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    userDormantPeriod: {
      type: "string",
      pattern: "^[0-9]*$",
    },
    Back_Button: {
      disabled: false,
    },
  },
  required: [
    "emailNotificationName",
    "retryTimeout",
    "maxRetry",
    "userDormantPeriod",
  ],
};
