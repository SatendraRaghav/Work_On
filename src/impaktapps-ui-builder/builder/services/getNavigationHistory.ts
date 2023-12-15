import _ from "lodash";

export const getNavigationHistory = (config: any, path: string|undefined) => {
  if (path) {
    let urlRoutes: string = config.name;
    const pathArrayAll = path.split(".");
    const arr:any = []
    pathArrayAll.map((e: string, i: number) => {
      if (i === 0) {
        arr.push(e)
        return;
      }
      arr.push(`${arr[i - 1]}.${e}`)
    })
    arr.map((e) => {
      const data = _.get(config, e)
      if(data){
        urlRoutes = urlRoutes + ` >    ${data?.name || data?.eventType}`
      }else{
        urlRoutes = urlRoutes + " > NewComponent";
      }
     
    })
    return { pageName: urlRoutes }
  }
  return undefined;
}