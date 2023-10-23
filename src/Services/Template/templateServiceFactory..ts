import { myService } from "../../service/service";
import { dashboardTemplate } from "./dashboardTemplate";
import { invoiceTemplate } from "./invoiceTemplate";
import { overRideTemplate } from "./overrideTemplate";
import { reportTemplate } from "./reportTemplate";
import { reviewTemplate } from "./reviewTemplate";



export const templateServiceFactory = (store: any, dynamicData: any) => {
  const service = myService(
    dynamicData?.setLoading,

    store.navigate
  );
  return {
    masterTemplate: async () => {
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
          return service.post("/page/getConfiguredPageById", data2, {
            headers: {
              "Content-Type": "application/json",
            },
          });
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
          const config =
            pageData?.data?.payload?.config &&
            pageData?.data?.payload?.config[0];
          const uiSchema = pageData.data.payload.templateMaster.uiSchema;
          const schema = pageData.data.payload.templateMaster.schema;

          const template = pageData.data.payload.templateMaster.name;

          switch (template) {
            case "ReportTemplate1":
              return reportTemplate(
                store,
                dynamicData,
                config,
                uiSchema,
                schema
              );
            case "ReviewTemplate1":
              return reviewTemplate(
                store,
                dynamicData,
                config,
                uiSchema,
                schema
              );
            case "DashboardTemplate1":
              return dashboardTemplate(
                store,
                dynamicData,
                config,
                uiSchema,
                schema
              );
            case "InvoiceGenerationTemplate":
              return invoiceTemplate(
                store,
                dynamicData,
                config,
                uiSchema,
                schema
              );
            case "PayoutOverrideTemplate":
              return overRideTemplate(
                store,
                dynamicData,
                config,
                uiSchema,
                schema
              );
            case "PayoutOverrideEditTemplate":
              return overRideTemplate(
                store,
                dynamicData,
                config,
                uiSchema,
                schema
              );
          }
        })
        .catch((err: any) => {
          console.log(err);
        });

      return result;
    },
  };
};
