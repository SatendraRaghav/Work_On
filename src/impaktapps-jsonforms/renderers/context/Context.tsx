import { JsonFormsStateContext, useJsonForms } from "@jsonforms/react";
import React, { useReducer, createContext, useMemo, useState } from "react";
import { additionalDataProps } from "../interface/inputfieldProps";

export const DataContext = createContext<any>({});
export const DataProvider = ({ children, impaktAppsJsonFormsStore }: any) => {
  const serviceProvider = async (
    ctx: JsonFormsStateContext,
    componentUiSchema: any,
    additionalData: additionalDataProps
  ) => {
    if (componentUiSchema[additionalData.event._reactName]) {
   const data =   impaktAppsJsonFormsStore.serviceHolder
        .getService({ ...impaktAppsJsonFormsStore, ctx }, additionalData)
        .then((res: any) => {
          return res[componentUiSchema[additionalData.event._reactName]](
            additionalData?.paramValue
          );
        });
        return data;
    }
  };
  return (
    <DataContext.Provider
      value={{ ...impaktAppsJsonFormsStore, serviceProvider: serviceProvider }}
    >
      {children}
    </DataContext.Provider>
  );
};
