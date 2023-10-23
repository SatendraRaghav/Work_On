export const HomeUiSchema: any = {
  "type": "HorizontalLayout",
  "elements": [
    {
      type: "Control",
      scope: "#/properties/slider",

      options: {
        widget: "Slider",
      },
      elements:[
        {
          type: "Control",
          scope: "#/properties/username",

          options: {
            widget: "InputField",
          },
          config: {
            layout: 11,
            main: {
              label: "Login ID",
              variant: "outlined",
              size: "normal",
              activeEnter: true,
              helperText: "",
              errorMessage:"Login ID is required"
            },
          },
        },
      ],
      config: {
        layout: 12,
        main: {
          label: "Program",
          options: [{label:"a",value:1}],
          color: "secondary",
          required: true,
          onClick: "loadCycle",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/b",

      options: {
        widget: "RollAndDice",
      },
      config: {
        layout: 12,
        main: {
          label: "Program",
          options: [{label:"a",value:1}],
          color: "secondary",
          required: true,
          onClick: "loadCycle",
        },
      }},
    {
      type: "Control",
      scope: "#/properties/progress",

      options: {
        widget: "RunningBoyProgressBar",
      },
      config: {
        layout: 12,
        main: {
          label: "Program",
          options: [{label:"a",value:1}],
          color: "secondary",
          required: true,
          onClick: "loadCycle",
        },
      },
    }
  ]
}
