import { getUiSchema } from "@jsonforms/core";
import { JsonFormsStateContext } from "@jsonforms/react";

import { handleErrors } from "@/utils/handleErrors";
import { userValue } from "@/App";

import { RoleMasterSchema } from "@/UiSchema/RoleMaster/Schema";
import { myService } from "@/service/service";
import { ProfileDetailsUiSchema } from "@/UiSchema/profileDetail/UiSchema";
export const ProfileDetails = (store: any, dynamicData: any) => {
  const serviceApi = myService(
    dynamicData?.setLoading,

    store.navigate,
    store
  );
  return {
    setPage: async function () {
      store.setFormdata({});
      const UiSchema = await this.getUiSchema();
      store.setUiSchema(UiSchema);
      const formData = await this.getFormData();
      store.setFormdata(formData);
    },
    getFormData: async function () {
      let formdata = {};
      return formdata;
    },
    getUiSchema: async function () {
      return ProfileDetailsUiSchema;
    },

    Submit: async function () {
      return serviceApi
        .post("/password/reset", {
          ...store.ctx.core.data,
          userId: userValue.payload.userId,
          userName: userValue?.payload?.username,
          token: userValue?.payload?.token,
          currentPasswordRequired: true,
        })
        .then((res2) => {
          store.navigate("/home");

          store.setNotify({
            SuccessMessage: "Submitted Successfully",
            Success: true,
          });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data); // => the response payload
            let errorData = error.response.data.payload;

            if (errorData) {
              errorData.map((er) => {
                if (er.message === "Confirm Password doesn't match") {
                  er.param.componentName = "confirmPassword";
                } else if (
                  er.message ===
                  "Current Password is incorrect or same as New Passoword"
                ) {
                  er.param.componentName = "currentPassword";
                }

                return er;
              });
            }

            handleErrors(errorData, store);
          }
        });
    },
  };
};
