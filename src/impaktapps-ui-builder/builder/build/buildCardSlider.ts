import  RankCard  from "./uischema/rankCard";



import _ from "lodash";

import CardSlider  from "./uischema/cardSlider";

export const buildCardSlider = async (
  formData: any,
  components: any,
  config: any,
  identity: string[],
  uiSchema: any,
  myService
) => {
  const service = myService();
  let body:any = undefined;
  const cardSlider:any = _.cloneDeep(CardSlider);
  // const params: any = getParams(formData, config, [...identity]);
  for (let i in components) {
    if (components[i].type === "CardSlider") {
      if (!!components[i]?.api?.payload) {
        body = {
          payload: {
            // params: params,
            ...components[i]?.api?.payload,
          },
        };
      }
      // const response = 
      // await axios[components[i]?.api?.method](
      //   components[i]?.api?.path,
      //   // !!body ? JSON.stringify(body) : "",
      //   // { headers: components[i]?.api?.headers }
      // )
      //   .then((response: any) => {
      //     const data = response?.data
      //     // .map(
      //     // // .payload?.reportData?.values?
      //     // // .map(
      //     //   (elem: any) => {
      //     //     return {
      //     //       rank: elem.rank,
      //     //       name: elem.name,
      //     //       description: elem.description,
      //     //     };
      //     //   }
      //     // );
      //     // let num = 1;
      //     data.map((elem,i:number) => {
      //       const rankCard:any = _.cloneDeep(RankCard);
      //       if (elem?.image) {
      //         rankCard.elements[0].config.main.url = elem?.image;
      //       }
      //       rankCard.elements[1].config.main.heading = elem?.name;
      //       rankCard.elements[2].config.main.heading = elem?.description;
      //       rankCard.elements[3].config.main.heading = "#" + elem?.rank;
      //       // num++;
      //       cardSlider.elements.push(rankCard);
      //     });
      //     uiSchema.elements[2].elements[i] = cardSlider;
      //     return uiSchema;
      //   })
      //   .catch((err: any): any[] => {
      //     return uiSchema;
      //   });
      // return response;
    }
  }
  return uiSchema;
};
