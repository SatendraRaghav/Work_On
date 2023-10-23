import _ from "lodash";
import { Button } from "../components/Button";
import { DateInputField } from "../components/DateInputField";
import { SelectInputField } from "../components/SelectInputField";
import { Table } from "../components/Table";
import { InputField } from "../components/TextInputField";
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
import { SpeedoMeter } from "../components/SpeedoMeter";
import { TableIconButton } from "../components/TableIconButton";
import { ArrayLayout } from "../components/array";
import { downloadFile, uploadFile } from "../components/file";
import { ProgressBarCard } from "@/components/ProgressBarCard";
import { RankCard, RollAndDice } from "@/components/RankCard";
import { CardSlider } from "@/components/CardSlider";
import { Timer } from "../components/Timer";
import { MultipleSelect } from "@/components/MultipleSelect";
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
          let body = undefined;

          if (!!config[i]?.api?.payload) {
            body = {
              payload: {
                ...config[i]?.api?.payload,
              },
            };
          }

          const response = await service[config[i]?.api?.method](
            config[i]?.api?.path,
            !!body ? JSON.stringify(body) : "",
            { headers: config[i]?.api?.headers }
          )

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
        selectInputField.config.main.options = config[i]?.api?.path
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
        // if (!!config[i]?.initialLoadApi) {
        //   const response = await service
        //     .get(config[i]?.initialLoadApi?.path)
        //     .then((response: any) => {
        //       return response.data.payload;
        //     });
        //   rowsData = response;
        // }

        const table: any = _.cloneDeep(Table);

        table.config.main.allRowsData = rowsData;
        table.scope = myScope;
        table.config.main.columns = config[i]?.columns;

        table.config.main.label = config[i]?.label;

        if (!!config[i]?.tableButtons) {
          const tableBtnData = config[i].tableButtons.components.map(
            (elem: any, i: number) => {
              const tableIconButton = _.cloneDeep(TableIconButton);
              tableIconButton.widget.config.main.color = elem.color || "info";
              tableIconButton.widget.config.main.icon = elem.icon;
              tableIconButton.widget.config.main.onClick = elem.onClick;
              if (!!table?.config?.main?.columns?.actionColumns) {
                table.config.main.columns.actionColumns = [
                  ...table.config.main.columns.actionColumns,
                  tableIconButton,
                ];
                return;
              }
              table.config.main.columns.actionColumns = [tableIconButton];
              return;
            }
          );
        }
        elements.push(table);
        break;
      case "Box":
        const box: any = _.cloneDeep(Box);
        box.config.main.heading = config[i]?.label;
        if (config[i]?.layout) {
          box.config.layout = config[i]?.layout;
        }
        if (config[i]?.style) {
          box.config.style = config[i].style;
        }
        elements.push(box);
        break;
      case "UploadFile":
        const UploadFile: any = _.cloneDeep(uploadFile);
        UploadFile.config.main.label = config[i]?.label;
        if (config[i]?.layout) {
          UploadFile.config.layout = config[i]?.layout;
        }
        if (config[i]?.style) {
          UploadFile.config.style = config[i].style;
        }
        UploadFile.config.main.onClick = config[i]?.onClick;
        if (config[i].required) {
          UploadFile.config.main.required = true;
        }
        UploadFile.config.main.errorMessage = config[i]?.errorMessage;
        elements.push(UploadFile);
        break;
      case "DownloadFile":
        const DownloadFile: any = _.cloneDeep(downloadFile);
        if (config[i]?.layout) {
          DownloadFile.config.layout = config[i]?.layout;
        }
        if (config[i]?.style) {
          DownloadFile.config.style = config[i].style;
        }
        if (config[i]?.onClick) {
          DownloadFile.config.main.onClick = config[i]?.onClick;
        }
        if (config[i].required) {
          DownloadFile.config.main.required = true;
        }
        if (config[i]?.errorMessage) {
          DownloadFile.config.main.errorMessage = config[i]?.errorMessage;
        }
        elements.push(DownloadFile);
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
      case "ArrayLayout":
        const arrayLayout = _.cloneDeep(ArrayLayout);
        const arrayConfigElememts = _.cloneDeep(config[i].elements);
        const arrayElememts: any = await buildUiSchema(
          arrayConfigElememts,
          service
        );
        arrayLayout.options.detail.elements = arrayElememts;
        elements.push(arrayLayout);
      case "Graph":
        switch (config[i]?.graphType) {
          case "BarGraph":
          case "StackBarGraph":
            const barGraph: any = _.cloneDeep(BarGraph);
            if (config[i]?.layout) {
              barGraph.config.layout = config[i]?.layout;
            }
            if (config[i]?.legendHide) {
              barGraph.config.main.legendAvailable = false;
            }
            barGraph.config.main.type = config[i]?.graphType;
            barGraph.config.main.header = config[i]?.heading;
            if (config[i]?.barColor) {
              barGraph.config.barStyle.color = config[i]?.barColor;
            }
            if (config[i]?.containerBackground) {
              barGraph.config.containerStyle.background =
                config[i]?.containerBackground;
            }
            if (config[i]?.height) {
              barGraph.config.style.containerStyle.height = config[i]?.height;
            }
            if (config[i]?.bottomLabel) {
              barGraph.config.main.bottomLabel = config[i]?.bottomLabel;
            }
            if (config[i]?.leftLabel) {
              barGraph.config.main.leftLabel = config[i]?.leftLabel;
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
              lineGraph.config.containerStyle.height = config[i]?.height;
            }
            if (config[i]?.bottomLabel) {
              lineGraph.config.main.bottomLabel = config[i]?.bottomLabel;
            }
            if (config[i]?.leftLabel) {
              lineGraph.config.main.leftLabel = config[i]?.leftLabel;
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
              pieGraph.config.containerStyle.height = config[i]?.height;
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
              horizontalBarGraph.config.main.leftLabel = config[i]?.leftLabel;
            }
            elements.push(horizontalBarGraph);
            break;
        }
        break;
      case "ProgressBar":
        const progressBar: any = _.cloneDeep(ProgressBar);
        progressBar.scope = myScope;
        if (config[i]?.layout) {
          progressBar.config.layout = config[i]?.layout;
        }
        progressBar.config.main.heading = config[i]?.heading;
        if (config[i]?.bottomLabel_3) {
          progressBar.config.main.bottomLabel_3 = config[i]?.bottomLabel_3;
        }
        if (config[i]?.bottomLabel_2) {
          progressBar.config.main.bottomLabel_2 = config[i]?.bottomLabel_2;
        }
        if (config[i]?.bottomLabel_1) {
          progressBar.config.main.bottomLabel_1 = config[i]?.bottomLabel_1;
        }
        elements.push(progressBar);
        break;
      case "SpeedoMeter":
        const speedoMeter: any = _.cloneDeep(SpeedoMeter);
        speedoMeter.scope = myScope;
        if (config[i]?.layout) {
          speedoMeter.config.layout = config[i]?.layout;
        }
        if (config[i]?.heading) {
          speedoMeter.config.main.header = config[i]?.heading;
        }

        if (config[i]?.currentValueText) {
          speedoMeter.config.main.currentValueText =
            config[i]?.currentValueText;
        }
        if (config[i]?.customSegmentLabels) {
          speedoMeter.config.main.customSegmentLabels =
            config[i]?.customSegmentLabels;
        }
        if (config[i]?.data) {
          speedoMeter.config.main.data = config[i]?.data;
        }
        if (config[i]?.needleColor) {
          speedoMeter.config.style.needleColor = config[i]?.needleColor;
        }
        if (config[i]?.segments) {
          speedoMeter.config.style.segments = config[i]?.segments;
        }
        if (config[i]?.endColor) {
          speedoMeter.config.style.endColor = config[i]?.endColor;
        }
        if (config[i]?.startColor) {
          speedoMeter.config.style.startColor = config[i]?.startColor;
        }
        if (config[i]?.segmentColors) {
          speedoMeter.config.style.segmentColors = config[i]?.segmentColors;
        }
        elements.push(speedoMeter);
        break;
      case "ProgressBarCard":
        const progressBarCard: any = _.cloneDeep(ProgressBarCard);
        progressBarCard.scope = myScope;
        if (config[i]?.heading) {
          progressBarCard.elements[0].config.main.heading = config[i]?.heading;
        }
        if (config[i]?.layout) {
          progressBarCard.config.layout = config[i]?.layout;
        }
        if (config[i]?.bottomLabel_3) {
          progressBarCard.elements[0].config.main.bottomLabel_3 =
            config[i]?.bottomLabel_3;
        }
        if (config[i]?.bottomLabel_2) {
          progressBarCard.elements[0].config.main.bottomLabel_2 =
            config[i]?.bottomLabel_2;
        }
        if (config[i]?.bottomLabel_1) {
          progressBarCard.elements[0].config.main.bottomLabel_1 =
            config[i]?.bottomLabel_1;
        }
        elements.push(progressBarCard);
        break;
      case "RankCard":
        const rankCard: any = _.cloneDeep(RankCard);
        rankCard.scope = myScope;

        elements.push(rankCard);
        break;
        case "Rank":
          const rank: any = _.cloneDeep(RollAndDice);
          rank.scope = myScope;
  
          elements.push(rank);
          break;
      case "CardSlider":
        const cardSlider: any = _.cloneDeep(CardSlider);

        cardSlider.scope = myScope;

        elements.push(cardSlider);
        break;
      case "Timer":
        const timer: any = _.cloneDeep(Timer);
        timer.scope = myScope;
        if (config[i]?.label) {
          timer.config.main.label = config[i]?.label;
        }
        elements.push(timer);
        break;

      case "MultipleSelect":
        const multipleSelect: any = _.cloneDeep(MultipleSelect);
        multipleSelect.scope = myScope;
        let multiselectOptions: any[];
        if (!!config[i]?.api) {
          let body = undefined;

          if (!!config[i]?.api?.payload) {
            body = {
              payload: {
                ...config[i]?.api?.payload,
              },
            };
          }

          const response = await service[config[i]?.api?.method](
            config[i]?.api?.path,
            !!body ? JSON.stringify(body) : "",
            { headers: config[i]?.api?.headers }
          )

            .then((response: any) => {
              const data = response?.data?.payload?.map((elem: any) => {
                return { label: elem.name, value: elem.id };
              });

              return data;
            })

            .catch((err: any): any[] => {
              return [];
            });
          multiselectOptions = response;
        }
        if (config[i]?.label) {
          multipleSelect.config.main.label = config[i]?.label;
        }
        multipleSelect.config.main.options = config[i]?.api?.path
          ? multiselectOptions
          : config[i]?.value;
        elements.push(multipleSelect);
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
