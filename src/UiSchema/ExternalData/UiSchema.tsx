export const ExternalDataUiSchema = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/reportListWrapper",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/programType",
              layout: 5.5,
              options: {
                widget: "Box",
              },
              value: {
                content: {
                  heading: "External Data",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              options: {
                widget: "EmptyBox",
              },
              layout: 5.5,
            },
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/reportListWrapper",
      options: {
        widget: "Wrapper",
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/programType",
              layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
                  label: "Program",
                  // variant:"standard",
                  options: [{}],
                  color: "secondary",
                  conditionalLoadFunc: "typeLoadFunction",
                },
                style: {
                  background: "white",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/agencyType",
              layout: {
                xs: 11,
                sm: 11,
                md: 5.5,
                lg: 5.5,
              },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
                  label: "Type",
                  options: [{}],
                },
                style: {
                  marginTop: "35px",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/docAggrementCopy",
              options: {
                widget: "FileInputField",
              },
              layout: {
                xs: 11,
                sm: 11,
                md: 5.5,
                lg: 5.5,
              },
              value: {
                content: {
                  label: "Upload File",
                  required: false,
                  funcName: "uploadFile",
                },
                style: {
                  backgroundColor: "none",
                },
              },
            },

            {
              type: "Control",
              scope: "#/properties/LoginPage",
              options: {
                widget: "Button",
              },
              layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
              value: {
                content: {
                  name: "Load",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  funcName: "loadData",
                  size: "large",
                },
                style: {
                  float: "right",
                  width: "20%",
                },
              },
            },
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
    {
      type: "Control",
      scope: "#/properties/reportListWrapper",
      label: "External Data List",
      options: {
        widget: "Wrapper",
        // label:"External Data List",
        detail: {
          // label:"External Data List",
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/LoadRecords",
              layout: 11,
              options: {
                widget: "Table",
                loadFunction: "tableLoadFunction",
                tableStyle: {
                  backgroundColor: "#F5F5F5",
                },
                buttonInStarting: false,
                ApiDetails: {
                  DataApi: "",
                  DataApiBody: {},
                },
                columns: [
                  {
                    field: "id",
                    headerName: "Id",
                    width: "40",
                    widget: "api",
                  },
                  {
                    field: "name",
                    flex: 1,
                    headerName: "Name",
                    widget: "api",
                  },
                  {
                    field: "type",
                    headerName: "Type",
                    flex: 1,
                    widget: "api",
                  },
                  {
                    field: "createdOn",
                    width: "240",
                    headerName: "Updated Time",
                    widget: "api",
                  },
                  {
                    headerName: "Download_File",
                    field: "Download_File",
                    width: "120",
                    widget: {
                      type: "Control",
                      scope: "#/properties/Edit_Records",
                      options: {
                        widget: "Button",
                      },
                      value: {
                        content: {
                          color:"info",
                          size:"small",
                          icon: "DownloadIcon",
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  ],
};
