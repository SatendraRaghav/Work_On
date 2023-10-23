export const TableIconButton:any =  {
    widget: {
      type: "Control",
      scope: "#/properties/Delete_Records",
      options: {
        widget: "IconButton",
      },
      config: {
        main: {
          color: "info",
          size: "small",
          icon: "DeleteIcon",
          onClick: "deleteFile",
        },
      },
    },
  };