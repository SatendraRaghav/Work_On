import { PageMasterRecordsSchema } from "../../UiSchema/PageMasterRecords/Schema";
import { PageMasterRecordsUiSchema } from "../../UiSchema/PageMasterRecords/UiSchema";
import { myService } from "../../service/service";

export const PageMasterRecords = (store:any,dynamicData : any) => {

    const service = myService(dynamicData?.setLoading, store.navigate);
    return {
      setPage: async function () {
        var formdata = await this.getFormdata();
        var uiSchema = await this.getUiSchema();
        var schema = await this.getSchema();
        store.setFormdata(formdata);
        store.setUiSchema(uiSchema);
        store.setSchema(schema);
      },
      getFormdata: async function () {
        let formData:any = {} 
        let data = null;
        await service.get("/page/getAll").then(res => {
            data = res.data.payload.map((elem:any) => {
                return {id : elem.id , name : elem.name};
            })
            formData.PageRecords = data;
        }).catch(err => {
            console.log(err)
            return [];
        })
        return formData;
      },
      getUiSchema:   function () {
        return PageMasterRecordsUiSchema;
      },
      getSchema: () => {
        return PageMasterRecordsSchema;
      },
      newPage : () => {
        store.navigate("/PageMaster");
      },
      Edit_Records: function () {
        store.navigate(`/PageMaster?id=${dynamicData?.rowData.id}`);
      },
    }
}