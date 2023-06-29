export const reportUiSchema = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 3,
        },
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/pageHeading",
          config: {
            main: {
              heading: "Case Status Report",
            },
            layout: 11.5,
          },
          options: {
            widget: "Box",
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      name: "search",
      config: {
        layout: 12,
        main: {
          label: "Search Program",
          divider: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/Search",
          options: {
            widget: "Button",
          },
          config: {
            main: {
              name: "Search",
              size: "large",
              type: "text",
              color: "info",
              onClick: "search",
              variant: "contained",
              startIcon: "SearchIcon",
            },
            style: {
              float: "right",
              width: {
                md: "25%",
                sm: "90%",
                xs: "100%",
              },
            },
            layout: {
              lg: 5.5,
              md: 5.5,
              sm: 11,
              xs: 11,
            },
          },
        },
      ],
    },
    {
      type: "WrapperLayout",
      name: "report",
      config: {
        main: {
          label: "Report List",
          divider: true,
        },
        layout: 12,
        defaultStyle: true,
      },
      elements: [],
    },
    {
      type: "Control",
      scope: "#/properties/notify",
      layout: 6,
      options: {
        widget: "Notify",
      },
    },
  ],
};
export const reportConfig = {
  search: {
    components: [
      {
        name: "Program",
        type: "SelectInputField",
        label: "Program Type",
        value: [],
        api: "/program/getAll",
      },
      {
        name: "StartDate",
        type: "DateInputField",
        label: "Start Date",
      },
      {
        name: "EndDate",
        type: "DateInputField",
        label: "End Date",
      }
    ],
  },
  report: {
    components: [
      {
        name: "table",
        allRowsData: [],
        type: "Table",
        api: "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=A",
        columns: {
          dataColumns: [
            {
              accessorKey: "id",
              header: "Id",
            },
            {
              accessorKey: "name",
              header: "Program Name",
            },
            {
              accessorKey: "description",
              header: "Description",
            },
            {
              accessorKey: "cycleFrequency",
              header: "Cycle Frequency",
            },
            {
              accessorKey: "cycleValue",
              header: "Cycle Value",
            },
          ],
        },
      },
    ],
  },
};
export const reportLogic: string = `({
  eventHandle : async function (store,parentObj){
    const formData = store.formData;
    const tempName: string[] = window.location.pathname.split("_");
    const paramName = tempName[tempName.length - 1];
    const body = JSON.stringify({
      payload: {
        reportName:  paramName+"_"+ "caseStatusDetailsDatatable",
        reportFormat: "grid",
        params: {
          programId: formData.programType,
          programCycleId: formData.programCycle,
          type:formData.type,
        },
      },
    })
   const headers =  {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    const Api =
    "/master/getDetails?masterName=com.act21.hyperform3.entity.program.ProgramStaging&status=A";
     const response = await parentObj.callBackendApi({method:"get",body:undefined,header:undefined,api:Api})
    formData["caseStatusDetailsDatatable"]= response;
    store.setFormdata(formData);
 
  },
})`;

// {
//   type: "Control",
//   scope: "#/properties/programType",
//   config: {
//     main: {
//       loadConfig: {
//         funcName: "getOptions",
//         optionsName: "getPrograms",
//       },
//       label: "Program",
//       options: [{}],
//     },
//     layout: {
//       lg: 5.5,
//       md: 5.5,
//       sm: 11,
//       xs: 11,
//     },
//   },
//   options: {
//     widget: "SelectInputField",
//   },
// },
// {
//   type: "Control",
//   scope: "#/properties/startDate",
//   config: {
//     main: {
//       type: "date",
//       label: "Start Date",
//       errorMessage: "Start Date is not selected",
//     },
//     layout: {
//       lg: 5.5,
//       md: 5.5,
//       sm: 11,
//       xs: 11,
//     },
//   },
//   options: {
//     widget: "DateInputField",
//   },
// },
// {
//   type: "Control",
//   scope: "#/properties/endDate",
//   config: {
//     main: {
//       type: "date",
//       label: "End Date",
//       errorMessage: "End Date is not selected",
//     },
//     layout: {
//       lg: 5.5,
//       md: 5.5,
//       sm: 11,
//       xs: 11,
//     },
//   },
//   options: {
//     widget: "DateInputField",
//   },
// },
// {
//   type: "Control",
//   scope: "#/properties/Search",
//   config: {
//     main: {
//       name: "Search",
//       size: "large",
//       type: "text",
//       color: "info",
//       onClick: "search",

//       variant: "contained",
//       startIcon: "SearchIcon",
//       additionalData: {
//         params: {
//           name: "caseStatusDetailsDatatable",
//           fotmat: "grid",
//         },
//       },
//     },
//     style: {
//       float: "right",
//       width: {
//         md: "25%",
//         sm: "90%",
//         xs: "100%",
//       },
//     },
//     layout: {
//       lg: 5.5,
//       md: 5.5,
//       sm: 11,
//       xs: 11,
//     },
//   },
//   options: {
//     widget: "Button",
//   },
// },
