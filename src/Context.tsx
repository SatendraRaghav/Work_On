import { JsonFormsStateContext, useJsonForms } from "@jsonforms/react";
import React, { useReducer, createContext, useMemo, ChangeEvent, FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
export const DataContext = createContext<any>({});

export const DataProvider = ({
  children,
  objFunc,
  setFormdata,
  setUiSchema,
  setSchema,
  id = "Home",
  schema,
  setAdditionalErrors,
  setConfig,
  permissions,
  theme,
  formData,
}: any) => {
  const [openDialogBox, setDialogBox] = React.useState({
    open: false,
    page: "",
  });
  const [openNotify, setNotify] = React.useState({
    Fail: false,
    FailMessage: "Error",
    Success: false,
    SuccessMessage: "Success",
    Info: false,
    InfoMessage: "",
  });
  const [searchParams, setSearchParams] =
    id === "RouterUnavailable"
      ? ["NotAvailable", "NotAvailable"]
      : useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const navigate = id === "RouterUnavailable" ? "NotAvailable" : useNavigate();
  const serviceProvider = (
    ctx: JsonFormsStateContext,
    uischemaData: { content: any },
    otherValues?: {
      additionalData?: {event:ChangeEvent|KeyboardEvent|MouseEvent|FormEvent,path:string};
      paramValue?: unknown;
      funcName?: string;
    }
  ) => {
    objFunc
      .getService(
        id,
        ctx,
        setFormdata,
        setUiSchema,
        setSchema,
        navigate,
        {
          searchParams,
          setSearchParams,
          setDialogBox,
          ...otherValues?.additionalData,
        },
        schema,
        setConfig,
        setAdditionalErrors,
        setNotify
      )
      .then((res: any) => {
        return res[
          uischemaData.content[otherValues?.additionalData?.event.type]
        ](otherValues?.paramValue);
      });
  };
  return (
    <DataContext.Provider
      value={{
        objFunc,
        openDialogBox,
        setDialogBox,
        setFormdata,
        setUiSchema,
        setSchema,
        id,
        serviceProvider,
        schema,
        setAdditionalErrors,
        setConfig,
        permissions,
        theme,
        openNotify,
        setNotify,
        formData,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
