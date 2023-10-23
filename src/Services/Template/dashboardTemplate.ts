import { myService } from "../../service/service";
import { getUpdatedUiSchema } from "../../utils/getUpdatedUiSchema";
import _ from "lodash";
import { isErrorsExist } from "../../utils/isErrorsExist";
import { fetchFormdata } from "../../utils/fetchFormdata";
import { buildCardSlider } from "@/utils/buildCardSlider";
import { CardSlider } from "@/components/CardSlider";
import { RankCard } from "@/components/RankCard";
import { IconProvider } from "@/utils/IconProvider";
export const dashboardTemplate = (
  store: any,
  dynamicData: any,
  config: any,
  uiSchema: any,
  schema: any
) => {
  const service = myService(dynamicData?.setLoading, store.navigate);
  return {
    setPage: async function () {
      store.setFormdata({
        IncentiveAmount: { maxValue: 100000, value: 50000, minValue: 0 },
      });
      store.setUiSchema(uiSchema);
      const updatedUiSchema = await this.getUiSchema();
      store.setUiSchema(updatedUiSchema);
      const schema = this.getSchema();
      store.setSchema(schema);

      const formData: any = await this.getFormdata();
      store.setFormdata(formData);
    },
    getFormdata: () => {
      return store.pageName === "template_managerDashboard"
        ? {
            budget: [
              { label: "Jan-22", Budget: 120, Payout: 87 },
              { label: "Feb-22", Budget: 154, Payout: 109 },
              { label: "Mar-22", Budget: 104, Payout: 73 },
              { label: "Apr-22", Budget: 160, Payout: 107 },
              { label: "May-22", Budget: 130, Payout: 97 },
              { label: "Jun-22", Budget: 103, Payout: 80 },
              { label: "Jul-22", Budget: 163, Payout: 146 },
              { label: "Aug-22", Budget: 153, Payout: 127 },
              { label: "Sep-22", Budget: 173, Payout: 157 },
              { label: "Oct-22", Budget: 165, Payout: 157 },
            ],
            programId: "dsa",
            fromDate: new Date("July 21, 2020 01:15:00"),
            endDate: Date.now(),
            budget_progress: {
              total: 450000,
              achieved: 267800,
              bottomLabel_3_value: 182200,
            },
            pbc_progress: {
              total: 500,
              achieved: 450,
              bottomLabel_3_value: 50,
            },
            HP_Sales_Incentive: [
              { y: "Uday", x: 12 },
              { y: "Sanchay Plus", x: 8 },
              { y: "New Product", x: 9 },
              { y: "Sanchay FMP", x: 23 },
              { y: "Sampoorn Nivesh", x: 5 },
              { y: "Samriddh", x: 5 },
              { y: "Pragati", x: 8 },
              { y: "Pension plan", x: 27 },
            ],
            DW_Incentive: [
              { label: "ASM", Value: 10 },
              { label: "SDM", Value: 14 },
              { label: "BDM", Value: 11 },
              { label: "SM", Value: 15 },
            ],
            BCW_Incentive: [
              { branch: "Kotak", value: 17 },
              { branch: "SBI", value: 10 },
              { branch: "HDFC", value: 23 },
            ],
            Top5_Incentive: [
              { y: "Anant Sharma", x: 15 },
              { y: "Pankaj Chauhan", x: 19 },
              { y: "Umesh Kumar", x: 20 },
              { y: "Vivek Solanki", x: 25 },
              { y: "Siddarth verma", x: 30 },
            ],
            Bottom5_Incentive: [
              { y: "Shriti Gupta", x: 15 },
              { y: "Rajat Kumar", x: 12 },
              { y: "Alam Khan", x: 11 },
              { y: "Raman Singh", x: 10 },
              { y: "Jay Sharma", x: 8 },
            ],
            Top5_PBC: [
              { y: "Chitranjan Sinha", x: 5 },
              { y: "Mohd Adil", x: 6 },
              { y: "Shrigopal Singh", x: 8 },
              { y: "Gowtham Mukkar", x: 9 },
              { y: "Nareshbhai Raval", x: 10 },
            ],
            Bottom5_PBC: [
              { y: "Sanju Adhikari", x: 3 },
              { y: "Amit Prajapati", x: 3 },
              { y: "Sunil Nirmal", x: 2 },
              { y: "Pratap Praharaj", x: 1.5 },
              { y: "Gurusam Balaguru", x: 1 },
            ],
          }
        : {
            pbc_progress: { total: 20, achieved: 15, bottomLabel_3_value: 5 },
            FCs_progress: { total: 20, achieved: 7, bottomLabel_3_value: 13 },
            graph: [
              { label: "Anant Sharma", Value: 60 },
              { y: "satendra Raghav", x: 150 },
              { y: "Vivek Pahadi", x: 80 },
              { y: "Siddarth verma", x: 100 },
            ],
            IncentiveAmount: { maxValue: 100000, value: 50000, minValue: 0 },
            DW_Incentive: [
              { label: "Q1-22", value: 1022000 },
              { label: "Q2-22", value: 979000 },
              { label: "Q3-22", value: 1046500 },
              { label: "Q4-22", value: 929000 },
            ],
          };
    },
    getUiSchema: async function () {
      const responseUiSchema = await getUpdatedUiSchema(
        config,
        uiSchema,
        service
      );
      return responseUiSchema;
    },
    getSchema: () => {
      return schema;
    },
    search: async function () {
      if (!isErrorsExist(store.schema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Errors on page",
          Fail: true,
        });
        return;
      }
      await this.eventHandle();
    },
    eventHandle: async function () {
      const data = await fetchFormdata(
        config,
        [...config.graph.components],
        store.ctx.core.data,
        {},
        ["search"],
        service
      );
      store.setFormdata(data);
      const components = config.graph.components;
      const uiSchema = await this.getUiSchema();
      const updatedUiSchema: any = await buildCardSlider(
        store?.formData,
        components,
        config,
        ["search"],
        uiSchema
      );

      store.setUiSchema(updatedUiSchema);
    },
    onChange: async function () {
      const uiSchema = _.cloneDeep(store.uiSchema);
      if (store.newData?.program) {
        await service
          .get(`/programCycle/getByProgramId?id=${store.newData?.program} `)
          .then((response: any) => {
            const result1 = response.data.payload.map((elem: any) => {
              const cycle = { label: elem.name, value: elem.id };
              return cycle;
            });

            uiSchema.elements[1].elements[1].config.main.options = result1;
            store.setUiSchema(uiSchema);
          })
          .catch((error) => {});
      }
    },
  };
};
