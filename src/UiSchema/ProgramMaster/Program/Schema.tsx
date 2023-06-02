export const ProgramMasterSchema = {
   type: "object",
   properties: {
    name:{
      type:"string",
      minLength:1
    },
    description:{
      type:"string", 
      minLength:1
    },
    cycleFrequency:{
      type:"string",
    },
    groupList:{
      type:"array",
    },
    cycleValue:{
      type:"string",
      pattern:"^[0-9]*$",
      minLength:1
    },
    enabled:{
      type:"string",
    },
   externalData: {

      type: "array",
      items: {
        type: "object",
        properties: {
          supportedTypes:{
            type:"string",
            minLength:3,
          }
        },
      },
    },
   },
   required:["name","description","cycleFrequency","cycleValue","enabled","externalData","groupList"],
  }
   //supportedTypes