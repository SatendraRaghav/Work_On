
const schema = {
    type: "object",
    properties: {},
    required: []
};

export const buildSchema = (config: any) => {
    function buildRule(configObj: any) {
        if (configObj.validation) {
            configObj.validation.forEach((rule: any) => {
                if (!schema.properties[configObj.name]) {
                    schema.properties[configObj.name] = {};
                }
                if (rule.validationType === "required") {
                    schema.required.push(configObj.name)
                } else {
                    schema.properties[configObj.name]["type"] = "string"
                    schema.properties[configObj.name][rule.validationType] =
                        isNaN(rule.validationValue) ?
                            rule.validationValue : Number(rule.validationValue)
                }
            });
        }
       
    }
    buildRule(config)
    console.log(schema)
    window.localStorage.setItem("schemaDemo",JSON.stringify(schema))
    return schema;
};
export default buildSchema;