import leaderBoard from "./uischema/leaderBoard";
import  buildUiSchema  from "./buildUiSchema";
import _ from "lodash";


export const buildLeaderBoard = (config) => {
    const LeaderBoard:any = _.cloneDeep(leaderBoard)
    if (config.elements) {
        const modifyColumns = config.elements.map((e, i) => {
            if (!e.type) {
                return {accessorKey: e.name, header: e.label||e.name, }
            }
            const widgetSchema = {widget:buildUiSchema(e), accessorKey: e.name,header: e.label||e.name, };
            return {...widgetSchema };
        })
        LeaderBoard.elements[9].elements = modifyColumns;
    }
    if (config.name) {
        LeaderBoard.elements[0].scope = `#/properties/${config.name}/properties/firstImage`;
        LeaderBoard.elements[3].scope = `#/properties/${config.name}/properties/firstName`
        LeaderBoard.elements[1].scope = `#/properties/${config.name}/properties/secondImage`;
        LeaderBoard.elements[4].scope = `#/properties/${config.name}/properties/secondName`
        LeaderBoard.elements[2].scope = `#/properties/${config.name}/properties/thirdImage`;
        LeaderBoard.elements[5].scope = `#/properties/${config.name}/properties/thirdName`
        LeaderBoard.elements[9].scope = `#/properties/${config.name}/properties/table`
    }
    if (config.firstImage) {
        LeaderBoard.elements[0].config.main.url = config.firstImage;
    }
    if (config.secondImage) {
        LeaderBoard.elements[1].config.main.url = config.secondImage;
    }
    if (config.secondImage) {
        LeaderBoard.elements[2].config.main.url = config.thirdImage;
    }
    if (config.layout) {
        LeaderBoard.config.layout = config.layout;
    }
    return LeaderBoard
}