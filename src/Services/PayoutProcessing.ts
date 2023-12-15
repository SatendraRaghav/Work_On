import axios from "axios";
import { PayoutProcessingUiSchema } from "../UiSchema/PayoutProcessing/UiSchema";
import { PayoutProcessingSchema } from "../UiSchema/PayoutProcessing/Schema";

import { myService } from "../service/service";
import _ from "lodash";
import { userValue } from "@/App";

export const PayoutProcessing = (store: any, dynamicData: any) => {
  const service = myService(dynamicData?.setLoading, store.navigate, store);
  return {
    setPage: async function () {
      const formdata = await this.getFormdata();
      store.setFormdata(formdata);
      const uiSchema =  this.getUiSchema();
      const schema = await this.getSchema();
     
      store.setUiSchema(uiSchema);
      store.setSchema(schema);
    },
    getFormdata: async function () {
      return {};
    },
    getUiSchema: function () {
      return PayoutProcessingUiSchema;
    },
    getSchema: async () => {
      const cloneSchema: any = _.cloneDeep(PayoutProcessingSchema);
      await service
        .get("/program/getAll")
        .then((response) => {
          const data = response.data.payload.map((elem: any) => {
            return { title: String(elem.name), const: elem.id };
          });
          if (data?.length > 0) {
            cloneSchema.properties.programType = {
              ...cloneSchema.properties?.programType,
              oneOf: data
            }
          }
        })
        return cloneSchema;
    },
    onChange: async () => {
      let uiSchema = PayoutProcessingUiSchema;
    },
    searchData: async function () {
      const dataList = await this.ToBeProcessedData();
      const data = _.cloneDeep(store.ctx.core.data);
      store.setFormdata({
        ...data,
        toBeProcessedDataReport: dataList,
      });
    },
    ToBeProcessedData: async function () {
      const body = JSON.stringify({
        messageType: "generateReport",
        reportName: "getCycles",
        reportFormat: "grid",
        programId: store.ctx.core.data.programType,
      });
      const result = await service
        .post("/HyperformMessage/process", body, {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })
        .then((response: any) => {
          const result = response.data.map((elem: any) => {
            return { ...elem };
          });
          return result;
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
      return result;
    },
    EditRequest: function () {
      store.navigate(
        `/PayoutProcessingDetail?id=${dynamicData?.rowData?.id}&programId=${store.ctx.core.data.programType}`
      );
    },
  };
};
