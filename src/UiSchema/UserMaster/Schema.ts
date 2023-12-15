export const UserMasterSchema = {
  type: "object",
  properties: {
    Back_Button: {
      disabled: false,
    },
    name: {
      type: "string",
      minLength: 3,
    },
    gender:{
      type:"string",
      oneOf:[
        { title: "Male", const: "Male" },
        { title: "Female", const: "Female" },
      ]
    },
    title:{
      type:"string",
      oneOf: [
        {
          title: "Mr.",
          const: "Mr.",
        },
        {
          title: "Ms.",
          const: "Ms.",
        },
        {
          title: "Mrs.",
          const: "Mrs.",
        },
      ],
    },
    passwordManager:{
      type:"string",
      oneOf:[
        { title: "in_memory", const: "in_memory" },
        { title: "other", const: "other" },
      ],
    },
    firstName: {
      type: "string",
      pattern: "^[\\p{L} .'-]+$",
      minLength: 1,
    },

    pan: {
      type: "string",
      pattern: "[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}",
    },
    email: {
      type: "string",
      pattern: "^[\\w\\-\\.]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$",
    },
    mobilePhoneNo: {
      type: "string",
      pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
    },
    empCode: {
      type: "string",
      minLength: 1,
    },
    active: {
      type: "string",
    },

  },
  required: [
    "name",
    "firstName",
    "pan",
    "email",
    "mobilePhoneNo",
    "empCode",
    "active",
    "role",
    "position",
    "passwordManager"
  ],
  if: {
    properties: {
      active: {
        const: "NO",
      },
    },
  },
  then: {
    properties: {
      reasonForInactiveMarking: {
        type: "string",
        minLength: 1,
      },
    },
    required: ["reasonForInactiveMarking"],
  },
};
