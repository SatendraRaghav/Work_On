import { myService } from "../service/service";

import { UserMasterUISchema } from "../UiSchema/UserMaster/UISchema";
import { UserMasterSchema } from "../UiSchema/UserMaster/Schema";
import { isErrorsExist } from "../utils/isErrorsExist";
import { downloadFile } from "../utils/downloadFile";
import { userValue } from "@/App";
import _ from "lodash";


export const UserMasterForm = (store: any, dynamicData: any) => {
  const serviceApi = myService(dynamicData?.setLoading, store.navigate, store);
  return {
    setPage: async function () {
      const formData = await this.getFormData();
      store.setFormdata(formData);
      const schema = await this.getSchema();
      const UiSchema =  this.getUiSchema();
     
      store.setUiSchema(UiSchema);
      store.setSchema(schema);
    },
    getFormData: async function () {
      const action = store.searchParams?.get("id");
      let formdata = {};
      let result = {};
      if (action) {
        const Api = `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.user.UserStaging&id=${action}`;

        await serviceApi
          .get(Api)
          .then((res) => {
            if (res.data.role && res.data.position) {
              formdata = {
                ...res.data,
                role: res.data.role.id,
                position: res.data.position.id,
              };
            } else if (res.data.role) {
              formdata = { ...res.data, role: res.data.role.id };
            } else if (res.data.position) {
              formdata = { ...res.data, position: res.data.position.id };
            } else {
              formdata =res.data
            }

            if (res.data?.avatarExternalDataId != null) {
              return serviceApi.get(
                `/externalData/getById?id=${res.data?.avatarExternalDataId}&withData=false`
              );
            } else {
              return null;
            }
          })
          .then((res) => {
            if (res != null) {
              formdata["downloadAvatarFile"] = res.data.name;
              formdata["uploadAvatarFileId"] = res.data.id;
            }
          })
          .catch(() => {});
      }

      return formdata;
    },

    getUiSchema:  function () {
      return UserMasterUISchema;
    },
    getSchema: async function() {
      let schema = await this.pageLoad();
      const disabled = localStorage.getItem("disabled");
      schema["disabled"] = disabled === "true" ? true : false;
      return schema;
    },
    backHandler: function () {
      store.navigate("/UserMasterRecords");
    },

    uploadAvatarSaveFunction: async () => {
      const formData = new FormData();

      const event = dynamicData.changeEvent;
      const tempArr = event.target.files[0].name.split(".");

      formData.append(
        "metadata",
        JSON.stringify({
          payload: {
            name: event.target.files[0].name,
            type: tempArr[tempArr - 1],
          },
        })
      );

      formData.append("file", event?.target?.files[0]);

      serviceApi
        .post("/externalData/save", formData)
        .then((response: any) => {
          const data = { ...store.ctx.core.data };
          data[`${dynamicData.path}Id`] = response.data.payload;
          data[`${dynamicData.path}Name`] = event.target.files[0].name;
          store.setFormdata({
            ...data,
            downloadAvatarFile: event.target.files[0].name,
          });
          store.setNotify({
            SuccessMessage: "File Uploaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          store.setNotify({ FailMessage: "File Uploading Failed", Fail: true });
        });
    },

    Download_Avatar_File: () => {
      serviceApi
        .get(
          `/externalData/getById?id=${store.ctx.core.data.uploadAvatarFileId}&withData=true`
        )
        .then((response) => {
          downloadFile(response.data.payload);
          store.setNotify({
            SuccessMessage: "File Downloaded Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          store.setNotify({
            FailMessage: "File Downloading Failed",
            Fail: true,
          });
        });
    },

    Submit_User: async function () {
      if (!isErrorsExist(UserMasterSchema, store.ctx.core.errors)) {
        store.setValidation("ValidateAndShow");
        store.setNotify({ FailMessage: "Errors on page", Fail: true });
      } else {
        let role: any;
        let position: any;
        let avatarExternalDataId: any;
        if (store.ctx.core.data.role) {
          role = await this.getRole();
        }
        if (store.ctx.core.data.position) {
          position = await this.getPosition();
        }

        delete store.ctx.core.data["downloadAvatarFile"];
        delete store.ctx.core.data["uploadAvatarFile"];
        delete store.ctx.core.data["uploadAvatarFileName"];
        store.ctx.core.data["avatarExternalDataId"] =
          store.ctx.core.data["uploadAvatarFileId"];
        delete store.ctx.core.data["uploadAvatarFileId"];

        console.log({ ...store.ctx.core.data, role: role, position: position });
        serviceApi
          .post("/master/save", {
            id: 1,
              entityName: "com.act21.hyperform3.entity.master.user.UserStaging",
              entityValue: {
                ...store.ctx.core.data,
                role: role,
                position: position,
              },
              userId: userValue.payload.userId,
          
          })
          .then((res) => {
            if (res.status == 200) {
              // <-- check response OK here
              store.setFormdata({ ...store.ctx.core.data });
              store.navigate("/UserMasterRecords");
              store.setNotify({
                SuccessMessage: "Submitted Successfully",
                Success: true,
              });
            }
          })
          .catch((error) => {});
      }
    },
    onChange: async function (value: any) {
      if (store?.newData?.active && store?.newData?.active === "YES") {
        store.newData.reasonForInactiveMarking = "";
        store.formData.reasonForInactiveMarking = "";
      }
    },
    pageLoad: async () => {
      const schemaClone:any = _.cloneDeep(UserMasterSchema);
      await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.master.role.Role&status=A"
        )
        .then((res) => {
          const selectOption = res.data.map((e: any) => {
            return { title: e.name, const: e.id };
          });
          if(!(_.isEmpty(selectOption))){
            schemaClone.properties.role = {
              ...schemaClone.properties?.role,
              oneOf:selectOption,
            }}
        });
      await serviceApi
        .get(
          "/master/getDetails?masterName=com.act21.hyperform3.entity.master.position.PositionNew&status=A"
        )
        .then((res) => {
         const selectPositionData = res.data?.map((e: any) => {
            return { title: e.name, const: e.id };
          });
          if(!(_.isEmpty(selectPositionData))){
          schemaClone.properties.position = {
            ...schemaClone.properties?.position,
            oneOf:selectPositionData,
          }}

        });
     
      return schemaClone;
    },
    getRole: async () => {
      return serviceApi
        .get(
          `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.role.Role&id=${store.ctx.core.data.role}`
        )
        .then((rest) => {
          return rest.data;
        });
    },
    getPosition: async () => {
      return await serviceApi
        .get(
          `/master/getDetailById?masterName=com.act21.hyperform3.entity.master.position.PositionNew&id=${store.ctx.core.data.position}`
        )
        .then((rest1) => {
          return rest1.data;
        });
    },
  };
};
