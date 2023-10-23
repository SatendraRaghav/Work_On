export interface dynamicDataType{
    path: string;
    event: any;
    paramValue?: unknown;
    componentUiSchema?: unknown;
    rowData?:any
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>
    changeEvent?:any
  }