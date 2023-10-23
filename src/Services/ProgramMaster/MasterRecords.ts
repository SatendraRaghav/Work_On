import { myService } from "../../service/service";
import { ProgramMasterRecordUiSchema } from "../../UiSchema/ProgramMaster/ProgramRecord/UiSchema";
import { dynamicDataType } from "../../utils/dynamicDataType";

export const MasterRecords = (store: any,dynamicData?:dynamicDataType) => {
  const serviceApi = myService(
    dynamicData?.setLoading,
    
    store.navigate
  );
  return {
    setPage: async function () {
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const schema = await this.getSchema();
      store.setSchema(schema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
    },
    getFormData: async () => {
      const fomData:any = {};
      const Api =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=A";
    const ApiPending =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=N";
    const ApiReject =
      "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=R";
    const data = await serviceApi
      .get(Api)
      .then((res) => {
        fomData.ProgramApproveRecords=  res.data.payload;

        return serviceApi.get(ApiPending);
      })
      .then((res) => {
      
        fomData.PendingRecords=  res.data.payload;
        return serviceApi.get(ApiReject);
      })
      .then((res) => {
        fomData.RejectRecords=  res.data.payload;
        console.log(fomData)
      })
      .catch((err) => {
        fomData.ApproveRecords=  [];
        fomData.PendingRecords=  [];
        fomData.RejectRecords=  [];
      });
      return fomData;
    },
    getUiSchema: async () => {
   
      return ProgramMasterRecordUiSchema;
    },
    getSchema: async () => {
      return {};
    },
    Approve_Records: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName: "com.act21.hyperform3.entity.program.ProgramStaging",
            entityValue: dynamicData?.rowData,
            action: "A",
          },
        })
        .then(async (res) => {
          const data =   await this.getFormData();
          store.setFormdata(data)
          store.setNotify({
            SuccessMessage: "Approved successfully",
            Success: true,
          });
        });
    },
    Reject_Records: function () {
      serviceApi
        .post("/master/action", {
          id: 1,
          payload: {
            entityName: "com.act21.hyperform3.entity.program.ProgramStaging",
            entityValue: dynamicData?.rowData,
            action: "R",
          },
        })
        .then(async (res) => {
          const data =   await this.getFormData();
         store.setFormdata(data)
          store.setNotify({
            SuccessMessage: "Rejected successfully",
            Success: true,
          });
        });
    },
    Edit_Approve_Records: function () {
      store.navigate(`/MasterForm?id=${dynamicData?.rowData.id}`);
    },
    addNewRecords: function () {
      store.navigate("/MasterForm");
    },
  };
};
