export const SimulationUiSchema:any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config:{
        main:{
          rowSpacing:3,
          header:true,
        },
        defaultStyle:true
      },
      elements: [
            {
              type: "Control",
              scope: "#/properties/programType",

              options: {
                widget: "Box",
              },
              config: {
                layout: 8.5,
                main: {
                  heading:"Simulation",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/New_Record",

              options: {
                widget: "IconButton",
              },
              config: {
                layout: 3,
                main: {
                  name: "New Records",
                  icon: "AddIcon",
                  size: "small",
                  styleDefault: true,
                  tooltipMessage: "Add New Record",
                  onClick: "createSimulation",
                },
                style: {
                  float: "right",
                },
              },
            },
          ],
    },
    {
      type: "WrapperLayout",
      config:{
        main:{
        label:"Search Simulation",
        divider:true,
        },
        defaultStyle:true
      },
      elements: [
            {
              type: "Control",
              scope: "#/properties/program",

              options: {
                widget: "SelectInputField",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5},
                main: {
                  label: "Program",
                  options: [],
                  color: "secondary",
                  required: true,
                  onClick: "loadCycle",
                },
              },
            },
            // {
            //   type: "Control",
            //   scope: "#/properties/load",
            //   options: {
            //     widget: "EmptyBox",
            //   },
            //   config: {
            //     layout: {
            //       xs: 11,
            //       sm: 11,
            //       md: 8.5,
            //       lg: 9,
            //     },
            //   },
            // },
            {
              type: "Control",
              scope: "#/properties/startDate",
              options: {
                widget: "DateInputField",
              },
  
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5},
                main: {
                  label: "Start Date",
                  onClick: "verifyStartDate",
                  // onChange: "verifyStartDate",
                  type: "date",
                  errorMessage: "Start Date is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/endDate",
              options: {
                widget: "DateInputField",
              },
  
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5},
                main: {
                  label: "End Date",
                  type: "date",
                  onClick: "verifyEndDate",
                  // onChange: "verifyEndDate",
                  errorMessage: "End Date is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/load",
              options: {
                widget: "Button",
              },

              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 5.5,
                  lg: 5.5,
                },
                main: {
                  name: "Search",
                  startIcon: "SearchIcon",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  onClick: "searchData",
                  size: "large",
                },
                style: {
                 float: {xs:"none",md:"right"},
                 width: {xs:"none",md:"25%"},
                },
              },
            },
          ],
    },
    {
      type: "WrapperLayout",
      config: {
        main: {
          label: "Simulation List",
          divider:true
        },
        defaultStyle:true
      },
      elements:[
            {
              type: "Control",
              scope: "#/properties/SimulationList",
              options: {
                widget: "Table",
              },
              config: {
                layout: 12,
                main: {
                  allRowsData: [],
                },
              },
              elements:[
                {
                  accessorKey: "id",
                  header: "Id",
                  width: "40",
                },
                {
                  accessorKey: "name",

                  header: "Name",
                },
                {
                  accessorKey: "status",
                  header: "Status",
                },
                {
                  accessorKey: "startedOn",
                  header: "Started on",
                },
                {
                  accessorKey: "completedOn",
                  header: "Completed on",
                },
                {
                  accessorKey: "Edit_Approve_Records",
                  header: "Edit Records",
                  width: 150,
                  widget: {
                    type: "Control",
                    scope: "#/properties/Edit_Records",
                    options: {
                      widget: "IconButton",
                    },
                    config: {
                      main: {
                        color: "info",
                        size: "small",
                        tooltipMessage: "Edit This Record",
                        onClick: "editRecords",
                        icon: "EditIcon",
                      },
                      style: {
                        color: "#3949ab",
                      },
                    },
                  },
                },
              ]
            },
          ],
        },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
  ],
};
