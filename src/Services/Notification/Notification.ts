import { userValue } from "@/App";
import { NotificationSchema } from "@/UiSchema/NotificationMaster/Schema";
import { NotificationUiSchema } from "@/UiSchema/NotificationMaster/UiSchema";
import { myService } from "@/service/service";

export const Notification : any = (store: any, dynamicData: any) => {

    const service = myService(dynamicData?.setLoading, store.navigate);

    return {
      setPage: async function () {
        const formData = await this.getFormData();
        const uiSchema = await this.getUiSchema();
        const schema = await this.getSchema();

        store.setUiSchema(uiSchema);
        store.setFormdata(formData);
        store.setSchema(schema);
      },
      getFormData:async function () {
        const action =  store.searchParams?.get("id")
      let formdata = {};
      if (action) {
        const Api = `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.notification.NotificationStaging&id=${action}`;
        await service
          .get(`${Api}&id=${action}`)
          .then((res : any) => {
           

            const body = [];
           for (let key in res.data.data) {
             const myObj = { key: key, value: res.data.data[key] };
             body.push(myObj);
           }
            formdata = {
              name: res.data.name,
              type: res.data.type,
              body: body,
            };
          })
          .catch(() => {});
      }
      return formdata;
      },
      getUiSchema: () => {
        return NotificationUiSchema;
      },
      getSchema: () => {
        let schema = NotificationSchema;
        const disabled = store.searchParams?.get("disabled");
        schema["disabled"] = disabled === "true" ? true : false;
        return schema;
      },
      saveConfig: async () => {
        let data = {};
        const action = store.searchParams?.get("id");
        const obj = store?.formData?.body?.map((elem) => {
          return (data[elem.key] = elem.value);
        });

        const body =  {
            id : action ? action : null,
            name: store?.formData?.name,
            type: store?.formData?.type,
            data: data,
          }
       

        await service
          .post(
            "/master/save",
            {
              id: 1,
              payload : {
              entityName:
                "com.act21.hyperform3.entity.master.notification.NotificationStaging",
                entityValue : {...body},
                userId : userValue.payload.userId
              }
            },
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            store.navigate("/NotificationRecords");
          })
          .catch((err) => {
            console.log(err);
          });
      },
      backHandler : () => {
        store.navigate("/NotificationRecords")
      },
    };
};