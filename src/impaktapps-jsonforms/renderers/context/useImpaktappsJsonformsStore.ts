import { useJsonForms } from "@jsonforms/react";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
//@ts-ignore
import { ImpaktAppsJsonFormsStore } from "./impaktappsJsonformsStore";
import { ValidationMode } from "@jsonforms/core";
import { ErrorObject } from "ajv";

export const useImpaktAppsJsonFormsStore = (
  ServiceHolder: any,
  validation: ValidationMode | undefined,
  pageName: string,
  theme: any,
  permissions?: any
) => {
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
  const [uiSchema, setUiSchema] = useState<any>("");
  const [additionalErrors, setAdditionalErrors] = useState<ErrorObject[]>([]);
  const [schema, setSchema] = useState<any>({});
  const [validationMode, setValidation] = useState<ValidationMode>(
    validation || "ValidateAndHide"
  );
  const [searchParams, setSearchParams] = id !== "RouterUnavailable" && useSearchParams();
  const navigate = id !== "RouterUnavailable" && useNavigate();
  const impaktappsJsonformsStoreInstance = new ImpaktAppsJsonFormsStore(
    setFormdata,
    setUiSchema,
    setSchema,
    setValidation,
    setNotify,
    setSearchParams,
    navigate,
    formData,
    uiSchema,
    schema,
    validationMode,
    openNotify,
    theme,
    permissions,
    ServiceHolder,
    id ? id : pageName,
    searchParams,
    setAdditionalErrors,
    additionalErrors
  );
  return impaktappsJsonformsStoreInstance;
};
export default useImpaktAppsJsonFormsStore;
