import _ from "lodash";

export const buildDynamicTabs = (elements: any) => {
  const tabs = [];

  for (let elem of elements) {
    if (elem.type !== "Control" && elem.name !== "heading") {
      //code for positive scenarios like elem.type = wrapperLayout
      tabs.push(elem.name);
    }
  }

  return tabs;
};

export const buildConfigSection = (uiSchema: any) => {
  const tabs = buildDynamicTabs(uiSchema.elements);
  const tables = [];
  let i = 0;

  while (i < tabs.length) {
    if (tabs[i] !== undefined) {
      const TableUiSchema = _.cloneDeep(Table);
      TableUiSchema.elements[0].scope = `#/properties/${tabs[i]}`;
      TableUiSchema.elements[2].scope = `#/properties/${tabs[i]}`;
      tables.push(TableUiSchema);
    }
    i++;
  }
  console.log(tables);
  ConfigTabs.config.main.tabLabels = tabs;
  ConfigTabs.elements = tables;

  return ConfigTabs;
};

export const mainTable = {
  enableDrag: true,
  columns: {
    dataColumns: [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "label",
        header: "Label",
      },
      {
        accessorKey: "type",
        header: "Type",
      },
    ],
    actionColumns: [
      {
        accessorKey: "Edit_Page",
        header: "Edit",

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
              icon: "EditIcon",
              onClick: "EditRecords",
              tooltipMessage: "Edit This Record",
              enableDrag: true,
            },
            style: {
              color: "#3949ab",
            },
          },
        },
      },
      {
        accessorKey: "Delete_Record",
        header: "Delete",

        widget: {
          type: "Control",
          scope: "#/properties/DeleteBtn",
          options: {
            widget: "IconButton",
          },
          config: {
            main: {
              icon: "RejectIcon",
              color: "error",
              onClick: "DeleteRecord",
              tooltipMessage: "Delete This Record",
            },
          },
        },
      },
    ],
  },
};

const Table = {
  type: "WrapperLayout",
  config: {
    main: {
      rowSpacing: 3,
    },
  },
  elements: [
    {
      type: "Control",
      scope: `#/properties/config`,
      options: {
        widget: "Table",
      },
      config: {
        main: mainTable,
      },
    },
    {
      type: "Control",
      scope: "#/properties/proc",
      config: {
        layout: { xs: 11, sm: 11, md: 8, lg: 8 },
      },
      options: {
        widget: "EmptyBox",
      },
    },
    {
      type: "Control",
      scope: `#/properties/btn`,
      options: {
        widget: "Button",
      },

      config: {
        layout: {
          xs: 11,
          sm: 11,
          md: 3,
          lg: 3,
        },
        main: {
          name: "Add",
          startIcon: "ApproveIcon",
          variant: "contained",
          color: "info",
          type: "text",
          onClick: "onAddClickHandler",
          size: "small",
        },
        style: {
          marginBottom: "8px",
          float: "right",
        },
      },
    },
  ],
};

const ComponentTable = {
  type: "WrapperLayout",
  config: {
    main: {
      rowSpacing: 3,
    },
  },
  elements: [
    {
      type: "Control",
      scope: `#/properties/report`,
      options: {
        widget: "Table",
      },
      config: {
        main: mainTable,
      },
    },
    {
      type: "Control",
      scope: "#/properties/proc",
      config: {
        layout: { xs: 11, sm: 11, md: 8, lg: 8 },
      },
      options: {
        widget: "EmptyBox",
      },
    },
    {
      type: "Control",
      scope: "#/properties/btn",
      options: {
        widget: "Button",
      },

      config: {
        layout: {
          xs: 11,
          sm: 11,
          md: 3,
          lg: 3,
        },
        main: {
          name: "Add",
          startIcon: "ApproveIcon",
          variant: "contained",
          color: "info",
          type: "text",
          onClick: "addReport",
          size: "small",
        },
        style: {
          marginBottom: "8px",
          float: "right",
        },
      },
    },
  ],
};
export const ReportTabs = {
  type: "TabLayout",
  config: {
    layout: 12,
    main: {
      id: "report",
      tabLabels: ["Search", "Report"],
    },
  },
  elements: [Table, ComponentTable],
};
export const ConfigTabs = {
  type: "TabLayout",
  config: {
    layout: 12,
    main: {
      id: "config",
      tabLabels: [],
    },
  },
  elements: [],
};

export const DashboardTabs = {
  type: "TabLayout",
  config: {
    layout: 12,
    main: {
      id: "dashboard",
      tabLabels: ["Search", "Graph"],
    },
  },
  elements: [Table, ComponentTable],
};
