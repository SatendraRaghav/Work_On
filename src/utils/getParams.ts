export const getParams = (formData: any, config: any, wrapperName: string[]) => {
    const requiredWrapper: any = {};

    const findAvailableWrapperName: string[] = wrapperName.filter((elem: string) => {
        if (!!config[elem]) {
            requiredWrapper[elem] = config[elem]
            return true;
        }
        return false;
    });
    const requiredFormdata: any = {}
    const allRequiredParams = findAvailableWrapperName.map((elem: any) => {

        const fetchFormdata = requiredWrapper[elem]?.components.map((childElem: any) => {
            if(childElem.type === "Table"){
                return;
                //    requiredFormdata[childElem.name] = formData[`${childElem.name}SelectedRowData`]?.data;
            }
            requiredFormdata[childElem.name] = formData[childElem.name]
            return;
        })

    })
    return requiredFormdata;
}

