export const GroupMasterRecordsUISchema:any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/GroupApproveRecords",
      options: {
        widget: "Table",

      },
      config: {
        main: {
          columns:  [
              {
                accessorKey: "id",
                header: "id",
                widget:{
                  type: "Control",
                  scope: "#/properties/id",
                  options: {
                    widget: "InputField",
                  },
                  config: {
                    main: {
                     label:"New"
                     
                    },
                  },
                },
              },
              {
                accessorKey: "name",
                // widgetWithData:true,
                header: "Name",
                widget:{
                  type: "Control",
                  scope: "#/properties/name",
                  accessorKeyName: "RoleApprover",
                  options: {
                    widget: "InputField",
                  },
                  config: {
                    main: {
                     label:"name"
                     
                    },
                  },
                }
              },
            ]
          },
      },
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      options: {
        widget: "Button",
      },
      config:{
    main:{
      name:"Click",
      onClick:"Edit_Approve_Records"
    }
      },
      layout: 6,
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
