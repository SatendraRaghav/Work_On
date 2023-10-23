export const buildConfig = (formData: any) => {
  let component: any = {};
  component.type = formData.type;
  component.name = formData.name;
  component.label = formData.label;
  if (formData?.layout) {
    component.layout = createData(formData?.layout, "layout");
  }

  if (
    formData.type === "Select" ||
    formData.type === "Table" ||
    formData.type === "SpeedoMeter" ||
    formData.type === "ProgressBar" ||
    formData.type === "card" ||
    formData.type === "Box" ||
    formData.type === "Graph" ||
    formData.type === "ProgressBarCard" ||
    formData.type === "CardSlider" ||
    formData.type === "Timer" ||
    formData.type === "MultipleSelect"
  ) {
    component.api = {
      path: formData.path,
      method: formData.method,
      headers: createData(formData.headers, "headers"),
      payload: createData(formData.body, "body"),
    };
    if (formData.type === "Select") {
      component.value = formData.value;
    } else if (formData.type === "Table") {
      component.columns = {
        dataColumns: formData.columns,
      };
      if (formData.tableButtons !== undefined) {
        component.tableButtons = {
          components: formData.tableButtons,
        };
      }
    } else if (
      formData.type === "SpeedoMeter" ||
      formData.type === "ProgressBar" ||
      formData.type === "card" ||
      formData.type === "Box" ||
      formData.type === "Graph" ||
      formData.type === "ProgressBarCard" ||
      formData.type === "CardSlider" ||
      formData.type === "Timer"
    ) {
      component.heading = formData?.heading;
      component.caption = formData?.caption;
      component.iconName = formData?.iconName;
      component.bottomLabel_1 = formData?.bottomLabel_1;
      component.bottomLabel_2 = formData?.bottomLabel_2;
      component.bottomLabel_3 = formData?.bottomLabel_3;
      component.leftLabel = formData?.leftLabel;
      component.bottomLabel = formData?.bottomLabel;
      component.height = formData?.height;
      component.legendHide = formData?.legendHide;
      component.graphType = formData?.graphType;
    }
  }
  return component;
};

const createData = (config: [], type: string) => {
  let data: any = {};
  if (config) {
    for (let elem of config) {
      let key = elem[`${type}_key`];
      let value =
        type === "layout" ? +elem[`${type}_value`] : elem[`${type}_value`];
      data[key] = value;
    }
  }
  return data;
};
