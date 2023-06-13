import { JsonFormsStateContext, useJsonForms } from "@jsonforms/react";
import React, { useReducer, createContext, useMemo, useState } from "react";
import { additionalDataProps } from "../interface/inputfieldProps";

export const DataContext = createContext<any>({});
export const DataProvider = ({ children, impaktappsJsonformsStore }: any) => {
  const serviceProvider = (
    ctx: JsonFormsStateContext,
    componentUiSchema: any,
    additionalData: additionalDataProps
  ) => {
    if (componentUiSchema[additionalData.event._reactName]) {
      impaktappsJsonformsStore.serviceHolder
        .getService({ ...impaktappsJsonformsStore, ctx }, additionalData)
        .then((res: any) => {
          return res[componentUiSchema[additionalData.event._reactName]](
          );
        });
    }
  };
  return (
    <DataContext.Provider
      value={{ ...impaktappsJsonformsStore, serviceProvider: serviceProvider }}
    >
      {children}
    </DataContext.Provider>
  );
};
