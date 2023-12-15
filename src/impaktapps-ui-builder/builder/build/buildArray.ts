import _ from "lodash";

const ArrayUiSchema = {
            type: "Control",
            scope: "#/properties/adjustments",
            layout: 11.5,
            options: {
                detail: {
                    type: "HorizontalLayout",
                    elements: []
                }
            }
        }
export const buildArray = (config:any,componentScope:string)=>{
 const array = _.cloneDeep(ArrayUiSchema);
 array.scope = componentScope;
return array;
}