import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";
import { myService } from "../service/service";
import { GroupMasterUISchema } from "../UiSchema/GroupMaster/UISchema";
import { GroupMasterSchema } from "../UiSchema/GroupMaster/Schema";
import { validateForm } from "../utils/validateForm";
export const GroupMasterForm = (
  ctx?: JsonFormsStateContext,
  setFormdata?: any,
  setUiSchema?: any,
  setSchema?: any,
  navigate?: any,
  otherData?: any,
  schema?: any,
  setConfig?: any,
  setAdditionalErrors?: any,
  setNotify?: any
) => {
  const serviceApi = myService(otherData.setLoading, otherData.setDialogBox, navigate);
  return {
    setPage: async function () {
      setFormdata({})
      const schema = this.getSchema();
      setSchema(schema);
      const formData = await this.getFormData();
      setFormdata(formData);
      const UiSchema = await this.getUiSchema();
      setUiSchema(UiSchema);

    },
    getFormData: async function () {
      const action = otherData.searchParams?.get("id")
      let formdata = {}
      if (action) {
        const Api =
          "/master/getDetailById?masterName=com.act21.hyperform3.entity.group.GroupStaging&id=" + action;
        await serviceApi
          .get(Api)
          .then((res) => {
            if (res.data.payload.positionList) {
              let result = res.data.payload.positionList.map((a: any) => {
                return { label: a.name, value: a.id }
              });
              console.log({ ...res.data.payload, positionList: result })
              formdata = { ...res.data.payload, positionList: result };

            }
            else {
              console.log(res.data);
              formdata = res.data.payload;

            }


          })
          .catch(() => { });
      }

      return formdata;
    },
    getUiSchema: async function () {
      const updatedRoleUiSchema = await this.pageLoad();
      return updatedRoleUiSchema
    },
    getSchema: () => {
      return GroupMasterSchema;
    },
    backHandler: function () {
      navigate("/GroupMasterRecords")
    },
    Submit: async function () {
      if (
        ! validateForm(schema, ctx.core.errors)
      ) {
        setConfig("ValidateAndShow")
        setNotify({FailMessage:"Please fill all required fields",Fail:true,})
        return;
      } 
      let permList: any;
      const idlist:any = ctx.core.data.positionList.map((a: any) => a.value);
      
     ;
       
      serviceApi.post("/master/getDetailsById", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.master.position.PositionNewStaging", entityValue: idlist } }).then((rest) => {

        permList = rest.data.payload;

      }).then(() => {
        console.log(ctx.core.data)
        serviceApi.post("/master/save", { id: 1, payload: { entityName: "com.act21.hyperform3.entity.group.GroupStaging", entityValue: { ...ctx.core.data, positionList: permList } } }).then((res) => {
          console.log("save")
          setFormdata({ ...ctx.core.data});
          setNotify({SuccessMessage:"Submitted Successfully",Success:true,})
          navigate("/GroupMasterRecords")
        })
      }).catch(() => { });
    },
    pageLoad: async () => {
      const Ui = GroupMasterUISchema;
      let selectOption: any[] = [];
      await serviceApi
        .get('/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNewStaging&status=A'
        )
        .then((res) => {
          selectOption = res.data.payload.map((e: any) => {
            return { label: e.name, value: e.id }
          });
          //@ts-ignore
          Ui.elements[1].elements[1].value.content.options = selectOption;
        });
      console.log(Ui)
      return Ui;
    },


  };
};
