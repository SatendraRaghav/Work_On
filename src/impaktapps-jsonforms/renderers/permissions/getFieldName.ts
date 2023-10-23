export const getFieldName = (path : string) => {
     const pathList = path.split(".");

    // return path
     return pathList[pathList.length - 1];
}