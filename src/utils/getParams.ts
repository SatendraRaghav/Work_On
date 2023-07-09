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
            requiredFormdata[childElem.name] = formData[childElem.name]
            return;
        })

    })
    return requiredFormdata;
}

const config = [
    {
        "incentive": {
            "components": [
                {
                    "type": "card",
                    "label": "50000",
                    "caption": "Total Incentive Amoungt",
                    "colorTheme": "blue",
                },
                {
                    "type": "card",
                    "label": "25",
                    "caption": "Topline Incentive EligibiltyPB",
                    "colorTheme": "blue",
                },
                {
                    "type": "card",
                    "label": "5",
                    "caption": "Your Rank",
                    "colorTheme": "blue",
                }
            ]
        },
        "recomendations": {
            "components": [
                {
                    "type": "card",
                    "label": "Good start help you to achieve more",
                    "caption": "recommendation",
                    "colorTheme": "blue",
                }]
        },
        "PBC": {
            "components": [
                {
                    "type": "card",
                    "label": "25000",
                    "caption": "PBC Target",
                    "colorTheme": "blue"
                },
                {
                    "type": "card",
                    "label": "1000",
                    "caption": "PBC Achieved",
                    "colorTheme": "blue",
                },
                {
                    "type": "card",
                    "label": "15000",
                    "caption": "PBC Remaining",
                    "colorTheme": "blue",
                    "icon":"Remaining"
                }
            ]
        },
        "search": {
            "components": [
                {
                    "api": "/program/getAll",
                    "name": "programId",
                    "type": "Select",
                    "label": "Program Type",
                    "value": [{}]
                },
                {
                    "name": "fromDate",
                    "type": "Date",
                    "label": "Start Date"
                },
                {
                    "name": "endDate",
                    "type": "Date",
                    "label": "End Date"
                }
            ]
        },
        "heading": {
            "components": [
                {
                    "name": "heading",
                    "type": "Box",
                    "label": "Your Statics"
                }
            ]
        }
    }
]
