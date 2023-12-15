// import { pageService } from "impaktapps-ui-builder";
import { pageService } from "@/impaktapps-ui-builder/lib";
import { myService } from "../service/service";
 import { userValue } from "@/App";



export const serviceMaster = (store: any, dynamicData: any) => {
    const service = myService(
        dynamicData?.setLoading,

        store.navigate
    );
    return {
        getPageService: async () => {
            const data = JSON.stringify({
                payload: {
                    name: store.pageName,
                },
            });
            let pageData: any;
            const result = await service
                .post("/page/getByName", data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response: any) => {
                    pageData = response;
                    const data2 = JSON.stringify({
                        payload: {
                            pageId: pageData?.data?.payload?.id,
                        },
                    });
                    return service.get(
                        `/page/getById?id=${pageData?.data?.payload?.id}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );
                })
                .then((response: any) => {
                    if (
                        !(
                            response?.data?.payload === undefined ||
                            response?.data?.payload === null
                        )
                    ) {
                        pageData = response;
                    }
                    const config = pageData?.data?.payload?.config;
                    const uiSchema = pageData.data.payload.uiSchema;
                    const schema = pageData.data.payload.schema??{type: "object",properties: {}};
                    return pageService(
                        { store, dynamicData, userValue, config, uiSchema, schema, service }
                    );

                })
                .catch((err: any) => {
                    console.log(err);
                });

            return result;
        },
    };
};
