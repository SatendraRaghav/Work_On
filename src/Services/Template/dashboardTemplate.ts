import { myService } from "../../service/service";
import { getUpdatedUiSchema } from "../../utils/getUpdatedUiSchema";
import _ from "lodash";
import { validateForm } from "../../utils/validateForm";
export const dashboardTemplate = (
  store: any,
  dynamicData: any,
  config:any,
  uiSchema: any,
  schema: any
) => {
  const service =myService(dynamicData?.setLoading,  store.navigate);
  return {
    setPage: async function () {
      store.setUiSchema(uiSchema);
      const updatedUiSchema = await this.getUiSchema();
      store.setUiSchema(updatedUiSchema);
      const schema = this.getSchema();
      store.setSchema(schema);

      const formData: any = await this.getFormdata();
      store.setFormdata(formData);
    },
    getFormdata: () => {
      // return {DW_Incentive:[[{x:"Q1",y:1022000},{x:"Q2",y:979000},{x:"Q3",y:1046500},{x:"Q4",y:929000}]]}
      return {DW_Incentive:[{x:"Q1",y:1022000},{x:"Q2",y:979000},{x:"Q3",y:1046500},{x:"Q4",y:929000}]}

    },
    getUiSchema: async function () {
      const responseUiSchema = await getUpdatedUiSchema(config, uiSchema,service);
      return responseUiSchema
    },
    getSchema: () => {
      return schema;
    },
    search: async function () {
      await this.eventHandle();
    },
    eventHandle: async function () {
      const formData = _.cloneDeep(store.formData);
      if (!validateForm(store.schema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({
          FailMessage: "Please fill all required fields",
          Fail: true,
        });
        return;
      }
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
    }
  };
};