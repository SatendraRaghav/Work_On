import { useJsonForms } from "@jsonforms/react";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { impaktappsJsonformsStore } from "./impaktappsJsonformsStore";
import {  ValidationMode } from "@jsonforms/core";

export const useImpaktappsJsonformsStore = (ServiceHolder: any, validation:ValidationMode|undefined,pageName:string,theme: any, permissions?: any,) => {
  const [openNotify, setNotify] = React.useState({
    Fail: false,
    FailMessage: "Error",
    Success: false,
    SuccessMessage: "Success",
    Info: false,
    InfoMessage: "",
  });
  const { id } = useParams();
  const [formData, setFormdata] = useState({});
  const [uiSchema, setUiSchema] = useState< any>("");
  const [schema, setSchema] = useState<any>({});
  const [updatedValidation, setValidation] = useState<ValidationMode >(validation||"ValidateAndHide");
  const [searchParams, setSearchParams] =
    id !== "RouterUnavailable" && useSearchParams();
  const navigate = id !== "RouterUnavailable" && useNavigate();
  const impaktappsJsonformsStoreInstance =  new impaktappsJsonformsStore(
    setFormdata,
    setUiSchema,
    setSchema,
    setValidation,
    setNotify,
    setSearchParams,
    navigate,
    formData,uiSchema,schema,updatedValidation,openNotify,theme,permissions,ServiceHolder,id?id:pageName,searchParams
  )
  return impaktappsJsonformsStoreInstance;
};
export default useImpaktappsJsonformsStore;
