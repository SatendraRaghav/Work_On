export const HomeSchema = {
    type: "object",
    properties: {
        date:{
            // type:"string"
        },
        name:{
            type:"string"
        }
    },
 required:["date","name"]
}