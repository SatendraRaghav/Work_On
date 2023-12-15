export const ProgramMasterSchema = {
  type: "object",
  properties: {
    Back_Button: {
      disabled: false,
    },
    name: {
      type: "string",
      minLength: 1,
    },
    description: {
      type: "string",
      minLength: 1,
    },

    groupList: {},

    enabled: {
      type: "string",
    },
    cyclePeriod:{
      type:"string",
      oneOf:  [{ title: "Year", const: "Year" },
      { title: "Month", const: "Month" },
      { title: "Week", const: "Week" },
      { title: "Day", const: "Day" }],
    },
    isRecurring: {
      type: "string",
    },
    timeout: {
      type: "string",
      pattern: "^[0-9]*$",
      minLength: 1,
    },
    externalData: {
      type: "array",
      items: {
        type: "object",
        properties: {
          supportedTypes: {
            type: "string",
            minLength: 3,
          },
        },
      },
    },
    
    simulation: {
      type: "array",
      items: {

        type: "object",
        properties: {
          supportedTypes: {
            type: "string",
            minLength: 3,
          },
        },
      },
    },
  },
  required: [
    "name",
    "description",
    "startDate",
    "enabled",
    "externalData",
    "groupList",
    "timeout",
    "isRecurring",
  ],
};
//supportedTypes
