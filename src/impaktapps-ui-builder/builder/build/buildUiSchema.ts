import _ from "lodash";
import emptyBox from "./uischema/emptyBox";
import cardSlider from "./uischema/cardSlider";
import { buildLeaderBoard } from "./buildLeaderboard";
import { buildProgressBarCard } from "./buildProgressBarCard";
import { buildProgressBar } from "./buildProgressBar";
import buildHorizontalBarGraph from "./buildHorizontalBarGraph";
import { buildSpeedoMeter } from "./buildSpeedoMeter";
import { buildPieGraph } from "./buildPieGraph";
import { buildStackbarGraph } from "./buildStackBarGraph";
import { RunnerBoyProgressbar } from "./buildRunnerBoyProgrssBar";
import { buildTabSection } from "./buildTabSection";
import { buildWrapperSection } from "./buildWrapperSection";
import { buildTextField } from "./buildText";
import { buildSelect } from "./buildSelect";
import { buildButton } from "./buildButton";
import { buildLazyLoadingTable, buildTable } from "./buildTable";
import { buildLabel } from "./buildLabel";
import { buildUploadFile } from "./buildUplaodFile";
import { buildDownloadFile } from "./buildDownloadFile";
import { buildCard } from "./buildCard";
import { buildDate } from "./buildDate";
import { buildRankCard } from "./buildRankCard";
import { buildRollAndDice } from "./buildRollAndDice";
import { buildTimer } from "./buildTimer";
import { buildMultiSelect } from "./buildMultiSelect";
import { buildBasicUiSchema } from "./buildBasicUiSchema";
import { buildTextArea } from "./buildTextArea";
import { buildSlider } from "./buildSlider";
import { buildCheckbox } from "./buildCheckbox";
import { buildLineGraph } from "./buildLineGraph";
import { buildRadio } from "./buildRadio";
import { buildEmptyBox } from "./buildEmptyBox";
import { buildArray } from "./buildArray";
export let schema = {
  type: "object",
  properties: {},
  required: []
};
//MultipleSelect
function buildRule(configObj: any, tableName?: string, arrayHolderName?: boolean) {
  if (arrayHolderName) {
    if (schema.properties?.[tableName]?.items?.properties) {
      if (!schema.properties?.[tableName]?.items?.properties?.[configObj.name]) {
        schema.properties[tableName].items.properties[configObj.name] = {};
        if (configObj.type === "Select" && configObj.value?.length > 0) {
          schema.properties[tableName].items.properties[configObj.name] = {
            oneOf: configObj.value.map((e) => {
              return { const: e.value, title: e.label }
            })
          }
        }
        else if (configObj.type === "MultipleSelect" && configObj.value?.length > 0) {
          schema.properties[tableName].items.properties[configObj.name] = {
            items: {
              oneOf: configObj.value.map((e) => {
                return { const: e.value, title: e.label }
              })
            }
          }
        }
      }
    }
  } else if ((configObj.type === "Select" || configObj.type === "MultipleSelect") && configObj.value?.length > 0) {
    if (configObj.type === "Select" ) {
      schema.properties[configObj.name] = {
        oneOf: configObj.value.map((e) => {
          return { const: e.value, title: e.label }
        })
      }
    }
    else if (configObj.type === "MultipleSelect" ) {
      schema.properties[configObj.name] = {
        items: {
          oneOf: configObj.value.map((e) => {
            return { const: e.value, title: e.label }
          })
        }
      }
    }
  }
  if (configObj.validation) {
    configObj.validation.forEach((rule: any) => {
      if (tableName) {
        if (schema.properties?.[tableName]?.items?.properties) {
          if (!schema.properties?.[tableName]?.items?.properties?.[configObj.name]) {
            schema.properties[tableName].items.properties[configObj.name] = {};
            if (configObj.type === "Select" || configObj.value?.length > 0) {
              schema.properties[tableName].items.properties[configObj.name] = {
                oneOf: configObj.value.map((e) => {
                  return { const: e.value, title: e.label }
                })
              }
            }
            else if (configObj.type === "MultipleSelect" || configObj.value?.length > 0) {
              schema.properties[tableName].items.properties[configObj.name] = {
                items: {
                  oneOf: configObj.value.map((e) => {
                    return { const: e.value, title: e.label }
                  })
                }
              }
            }
          }
          if (rule.validationType === "required") {
            schema.properties?.[tableName]?.items?.required.push(configObj.name)
          } else {
            schema.properties[tableName].items.properties[configObj.name]["type"] = "string"
            schema.properties[tableName].items.properties[configObj.name][rule.validationType] =
              isNaN(rule.validationValue) ?
                rule.validationValue : Number(rule.validationValue)
          }

        }
      } else {
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
      }
    });
  }


}
export const buildSchema = (config: any, tableName?: string, isArrayType?: boolean) => {
  buildRule(config, tableName, isArrayType);
  if (config?.elements) {
    if (config.type == "Table" || config.type == "Array") {
      if (!schema.properties[config.name]) {
        schema.properties[config.name] = {
          type: "array",
          items: {
            type: "object",
            properties: {},
            required: []
          }
        }
      }
      config.elements.map((e, elemInd) => {
        buildSchema(e, config.name, config.type === "Array" ? true : false)
      })
    }
    else {
      config.elements.map((e, elemInd) => {
        buildSchema(e)
      })
    }
  }
  return schema;
}


const buildUiSchema = (config: any) => {
  let elements: any = {};
  const componentScope = `#/properties/${config.name}`;
  switch (config.type) {
    case "RunnerBoyProgressBar":
      elements = RunnerBoyProgressbar(config, componentScope);

      break;
    case "TabSection":
      elements = buildTabSection(config, componentScope);
      break;
    case "WrapperSection":
      elements = buildWrapperSection(config, componentScope);
      break;
    case "Text":
      elements = buildTextField(config, componentScope);
      break;
    case "TextArea":
      elements = buildTextArea(config, componentScope)
      break;
    case "Date":
      elements = buildDate(config, componentScope);
      break;
    case "Select":
      elements = buildSelect(config, componentScope);
      break;
    case "Radio":
      elements = buildRadio(config, componentScope);
      break;
    case "Button":

      elements = buildButton(config, componentScope);
      break;
    case "Table":
      elements = buildTable(config, componentScope);
      break;
    case "Array":
      elements = buildArray(config, componentScope);
      break;
    case "LazyLoadingTable":
      elements = buildLazyLoadingTable(config, componentScope)
      break;
    case "Box":
      elements = buildLabel(config, componentScope);
      break;
    case "CheckBox":
      elements = buildCheckbox(config, componentScope);
      break;
    case "UploadFile":
      elements = buildUploadFile(config, componentScope);
      break;
    case "DownloadFile":
      elements = buildDownloadFile(config, componentScope);
      break;
    case "EmptyBox":
      elements = buildEmptyBox(config, componentScope);
      break;
    case "card":
      elements = buildCard(config, componentScope);
      break;
    case "Graph":
      switch (config.graphType) {
        case "BarGraph":
        case "StackBarGraph":
          elements = buildStackbarGraph(config, componentScope);
          break;
        case "LineGraph":
          elements = buildLineGraph(config, componentScope);
          break;
        case "PieGraph":
          elements = buildPieGraph(config, componentScope);
          break;
        case "HorizontalBarGraph":
          elements = buildHorizontalBarGraph(config, componentScope);
          break;
      }
      break;
    case "ProgressBar":
      elements = buildProgressBar(config, componentScope);
      break;
    case "SpeedoMeter":
      elements = buildSpeedoMeter(config, componentScope);
      break;
    case "ProgressBarCard":
      elements = buildProgressBarCard(config, componentScope);
      break;
    case "RankCard":
      elements = buildRankCard(config, componentScope);
      break;
    case "Rank":
      elements = buildRollAndDice(config, componentScope);
      break;
    case "Slider":
      elements = buildSlider(config, componentScope);
      break;
    case "Timer":
      elements = buildTimer(config, componentScope);
      break;

    case "MultipleSelect":
      elements = buildMultiSelect(config, componentScope);
      break;
    case "LeaderBoard":
      elements = buildLeaderBoard(config);
      break;
    default:
      schema = {
        type: "object",
        properties: {},
        required: []
      };
      elements = buildBasicUiSchema(config)
  }

  if (config?.elements) {
    if (config?.type === "LeaderBoard") {
      return elements;
    }
    else if (config.type == "Table") {
      elements.elements = config.elements.map((e, elemInd) => {
        if (e.type) {
          return {
            accessorKey: e.name,
            header: e.label || e.name,
            widget: buildUiSchema(e)
          }
        }
        return {
          accessorKey: e.name,
          header: e.label || e.name
        }
      })
    }
    else if (config.type == "Array") {
      elements.options.detail.elements = config.elements.map((e: any, elemInd: number) => {
        return buildUiSchema(e)
      });
    }
    else {
      elements.elements = config.elements.map((e: any, elemInd: number) => {
        return buildUiSchema(e)
      });
    }
  }
  return elements;
}


export default buildUiSchema;


































