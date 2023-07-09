import _ from "lodash";
import { Button } from "../components/Button";
import { DateInputField } from "../components/DateInputField";
import { SelectInputField } from "../components/SelectInputField";
import { Table } from "../components/Table";
import { InputField } from "../components/TextInputField";
import { myService } from "../service/service";
import { Box, EmptyBox } from "../components/Box";
import { Card } from "../components/Card";
import { IconProvider } from "./IconProvider";
import {
  BarGraph,
  HorizontalBarGraph,
  LineGraph,
  PieGraph,
} from "../components/Graph";
import { ProgressBar } from "../components/ProgressBar";
export const buildUiSchema = async (config: any, service: any) => {
  let elements: any = [];
  for (let i = 0; i < config.length; i++) {
    const myScope = `#/properties/${config[i]?.name.replace(/ /g, "")}`;
    switch (config[i]?.type) {
      case "Text":
        const inputField: any = _.cloneDeep(InputField);
        inputField.config.main.label = config[i]?.label;
        inputField.config.main.errorMessage = `${config[i]?.name} is empty or invalid`;
        inputField.scope = myScope;
        elements.push(inputField);
        break;
      case "Date":
        const dateInputField: any = _.cloneDeep(DateInputField);
        dateInputField.config.main.label = config[i]?.label;
        dateInputField.config.main.errorMessage = `${config[i]?.name} is empty or invalid`;
        dateInputField.scope = myScope;
        elements.push(dateInputField);
        break;
      case "Select":
        let options: any[];
        if (!!config[i]?.api) {
          const response = await service
            .get(config[i]?.api)
            .then((response: any) => {
              const data = response?.data?.payload?.map((elem: any) => {
                return { label: elem.name, value: elem.id };
              });
              return data;
            })
            .catch((err: any): any[] => {
              return [];
            });
          options = response;
        }
        const selectInputField = _.cloneDeep(SelectInputField);
        selectInputField.config.main.label = config[i]?.label;
        selectInputField.scope = myScope;
        selectInputField.config.main.options = config[i]?.api
          ? options
          : config[i]?.value;
        elements.push(selectInputField);
        break;
      case "Button":
        const button = _.cloneDeep(Button);
        button.config.main.name = config[i]?.name;
        elements.push(button);
        break;
      case "Table":
        let rowsData: any[];
        if (!!config[i]?.api) {
          const response = await service
            .get(config[i]?.api)
            .then((response: any) => {
              return response.data.payload;
            });
          rowsData = response;
        }
        const table: any = _.cloneDeep(Table);
        table.config.main.allRowsData = rowsData;
        table.scope = myScope;
        table.config.main.columns = config[i]?.columns;
        elements.push(table);
        break;
      case "Box":
        const box: any = _.cloneDeep(Box);
        box.config.main.heading = config[i]?.label;
        elements.push(box);
        break;
      case "EmptyBox":
        const emptyBox: any = _.cloneDeep(EmptyBox);
        if (config[i]?.layout) {
          box.config.layout = config[i]?.layout;
        }
        elements.push(box);
        break;
      case "card":
        const icon = IconProvider(config[i]?.iconName);
        const card: any = _.cloneDeep(Card);
        if (config[i]?.layout) {
          card.config.layout = config[i]?.layout;
        }
        card.elements[0].config.main.heading = config[i]?.label;
        card.elements[1].config.main.heading = icon;
        card.elements[2].config.main.heading = config[i]?.caption;
        elements.push(card);
        break;
      case "Graph":
        switch (config[i]?.graphType) {
          case "BarGraph":
            const barGraph: any = _.cloneDeep(BarGraph);
            if (config[i]?.layout) {
              barGraph.config.layout = config[i]?.layout;
            }
            barGraph.config.main.header = config[i]?.heading;
            if (config[i]?.barColor) {
              barGraph.config.barStyle.color = config[i]?.barColor;
            }
            if (config[i]?.containerBackground) {
              barGraph.config.containerStyle.background =
                config[i]?.containerBackground;
            }
            if (config[i]?.height) {
              // barGraph.config.style.containerStyle.height =
              //   config[i]?.height;
            }
            if (config[i]?.bottomLabel) {
              barGraph.config.main.bottomLabel =
                config[i]?.bottomLabel;
            }
            if (config[i]?.leftLabel) {
              barGraph.config.main.leftLabel =
                config[i]?.leftLabel;
            }
            barGraph.scope = myScope;
            elements.push(barGraph);
            break;
          case "LineGraph":
            const lineGraph: any = _.cloneDeep(LineGraph);
            if (config[i]?.layout) {
              lineGraph.config.layout = config[i]?.layout;
            }
            lineGraph.config.main.heading = config[i]?.heading;
            if (config[i]?.containerBackground) {
              lineGraph.config.containerStyle.background =
                config[i]?.containerBackground;
            }
            if (config[i]?.height) {
              lineGraph.config.containerStyle.height =
                config[i]?.height;
            }
            if (config[i]?.bottomLabel) {
              lineGraph.config.main.bottomLabel =
                config[i]?.bottomLabel;
            }
            if (config[i]?.leftLabel) {
              lineGraph.config.main.leftLabel =
                config[i]?.leftLabel;
            }
            lineGraph.scope = myScope;
            elements.push(lineGraph);
            break;
          case "PieGraph":
            const pieGraph: any = _.cloneDeep(PieGraph);
            if (config[i]?.layout) {
              pieGraph.config.layout = config[i]?.layout;
            }
            if (config[i]?.containerBackground) {
              pieGraph.config.containerStyle.background =
                config[i]?.containerBackground;
            }
            if (config[i]?.height) {
              pieGraph.config.containerStyle.height =
                config[i]?.height;
            }
            pieGraph.scope = myScope;
            pieGraph.config.main.heading = config[i]?.heading;
            elements.push(pieGraph);
            break;
          
          case "HorizontalBarGraph":
            const horizontalBarGraph: any = _.cloneDeep(HorizontalBarGraph);
            if (config[i]?.layout) {
              horizontalBarGraph.config.layout = config[i]?.layout;
            }
            horizontalBarGraph.scope = myScope;
            horizontalBarGraph.config.main.header = config[i]?.heading;
            if (config[i]?.barColor) {
              horizontalBarGraph.config.barStyle.color = config[i]?.barColor;
            }
            if (config[i]?.containerBackground) {
              horizontalBarGraph.config.containerStyle.background =
                config[i]?.containerBackground;
            }
            if (config[i]?.height) {
              horizontalBarGraph.config.containerStyle.height =
                config[i]?.height;
            }
            if (config[i]?.bottomLabel) {
              horizontalBarGraph.config.main.bottomLabel =
                config[i]?.bottomLabel;
            }
            if (config[i]?.leftLabel) {
              horizontalBarGraph.config.main.leftLabel =
                config[i]?.leftLabel;
            }
            elements.push(horizontalBarGraph);
            break;
        }
        break;
      case "ProgressBar" :
        const progressBar: any = _.cloneDeep(ProgressBar);
        if (config[i]?.layout) {
          progressBar.config.layout = config[i]?.layout;
        }
        progressBar.elements[0].config.main.heading = config[i]?.label;
        if(config[i]?.bottomLabel_3){
          progressBar.elements[0].config.main.bottomLabel_3 = config[i]?.bottomLabel_3;
        }
        elements.push(progressBar);
        break;
        
    }
  }
  console.log(elements);
  return elements;
};

export const buildSchema = (config: any, pageName: string) => {
  const required = [];
  const property: any = {};
  for (let i = 0; i < config.length; i++) {
    const demoName = pageName + config[i]?.name.toLowerCase().replace(/ /g, "");
    switch (config[i]?.type) {
      case "text":
        if (config[i]?.required) {
          property[demoName] = {
            type: "string",
            minLength: 1,
          };
          required.push(demoName);
        }
        break;

      case "date":
        if (config[i]?.required) {
          property[demoName] = {
            errorMessage: `${config[i]?.name} is empty or invalid`,
          };
          required.push(demoName);
        }
        break;
      case "select":
        if (config[i]?.required) {
          property[demoName] = {
            type: "string",
          };
          required.push(demoName);
        }
        break;
    }
  }
  return { property: property, required: required };
};
