import { getParams } from "./getParams";

export const fetchFormdata = async (
  config: any,
  allComponents: any,
  formdata: any,
  givenparams: any,
  identity: string[],
  service: any
) => {
  const updatedFormdata = { ...formdata };
  const data: any = getParams(formdata, config, [...identity]);
  const userData: any = window.localStorage.getItem("user");
  const body = {
    params: {
      ...givenparams,
      ...data,
      ...userData.payload,
    },
  };
  const allApiComponets = allComponents.filter((e: any, i: number) => {
    return !!e.api;
  });

  const demo2 = await Promise.all(
    allApiComponets.map(async (elem: any, i: number) => {
      const apiBody = { payload: { ...body, ...elem?.api?.payload } };
      const response = await service[elem.api.method](
        elem.api.path,
        JSON.stringify(apiBody),
        { headers: elem?.api?.headers }
      );
      updatedFormdata[elem.name] = response.data?.payload?.reportData?.values;
    })
  );
  return updatedFormdata;
};
