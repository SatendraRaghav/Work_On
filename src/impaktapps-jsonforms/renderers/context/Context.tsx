import { useJsonForms } from "@jsonforms/react";
import React, { useReducer, createContext, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
export const DataContext = createContext<any>({});
interface additionalDataProps {
  path: string;
  event: any;
  paramValue?: unknown;
  uischemaData?:unknown;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
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
  const [searchParams, setSearchParams] = id !== "RouterUnavailable" && useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const navigate = id !== "RouterUnavailable" && useNavigate();
  const serviceProvider = (
    ctx: any,
    uischemaData: unknown,
    additionalData: additionalDataProps
  ) => {
    if (uischemaData[additionalData.event.type]) {
      objFunc
        .getService(
          id,
          ctx,
          setFormdata,
          setUiSchema,
          setSchema,
          navigate,
          {
            setDialogBox,
            searchParams,
            setSearchParams,
            ...additionalData,
          },
          schema,
          setConfig,
          setAdditionalErrors,
          setNotify
        )
        .then((res: any) => {
          return res[uischemaData[additionalData.event.type]](
            additionalData?.paramValue
          );
        });
    }
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
