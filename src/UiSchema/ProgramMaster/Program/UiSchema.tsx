export const ProgramMasterUiSchema = {
  type: "HorizontalLayout",
  stylePage:{
    background:"#eef2f6",
    // background:"#051327",
    minHeight:"100vh",
    margin:"10px 20px",
    height:"auto",
    borderRadius:"20px",
    fontFamily:"roboto"
   },
  elements: [
   
    {
      type: "Control",
      scope: "#/properties/Back_Button",
      layout: {
        xs: 6,
        sm: 4,
        md: 2,
        lg: 2,
      },
      options: {
        widget: "Button",
      },
      value: {
        content: {
          name: "\u2190",
          variant: "contained",
          color: "primary",
          type: "button",
          size: "large",
          funcName: "backHandler",
        },
        style:{
          background:"#091f3c",
          color:"white",
          width:"30px",
          height:"30px",
          paddingTop:"5px",
         fontWeight:"bold",
         fontSize:"30px",
          marginLeft:"5px"
        }
      },
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      layout: {
        xs: 5.5,
        sm: 7.5,
        md: 8,
        lg: 8,
      },
      options: {
        widget: "EmptyBox",
      },
    },
    {
      type: "Control",
      scope: "#/properties/name",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5 },
      options: {
        widget: "InputField",
      },
      value: {
        content: {
          label: "Name",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/description",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5 },
      options: {
        widget: "InputField",
      },
      value: {
        content: {
          label: "Description",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/groupList",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5 },
      options: {
        widget: "SelectInputField",
      },
      value: {
        content: {
          label: "Groups",
          type: "text",
          multiple: true,
          variant:"standard",
          options: [
            { label: "DSL", value: "DSL" },
            { label: "HL", value: "HL" },
            { label: "PL", value: "PL" },
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/cycleFrequency",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5 },
      options: {
        widget: "SelectInputField",
      },
      value: {
        content: {
          label: "Cycle Frequency",
          type: "text",
          options: [
            { label: "Year", value: "Year" },
            { label: "Month", value: "Month" },
            { label: "Week", value: "Week" },
            { label: "Day", value: "Day" },
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/cycleValue",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5 },
      options: {
        widget: "InputField",
      },
      value: {
        content: {
          label: "Cycle Value",
        },
      },
    },
    
    {
      type: "Control",
      scope: "#/properties/enabled",
      layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5 },
      options: {
        widget: "RadioInputField",
      },
      value: {
        content: {
          label: "Finalize",
          options: ["YES", "NO"]
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/EmptyBox",
      layout: {
        xs: 0,
        sm: 3,
        md: 6,
        lg: 6,
      },
      options: {
        widget: "EmptyBox",
      },
    },
    {
      type: "Control",
      scope: "#/properties/externalData",
      layout: 11,
      lable: " ",
      options: {
        detail: {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/supportedTypes",
              layout: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6,
              },
              options: {
                widget: "InputField",
              },
              value: {
                content: {
                  label: "Type",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",
              layout: {
                xs: 0,
                sm: 0,
                md: 6,
                lg: 6,
              },
              options: {
                widget: "EmptyBox",
              },
            },
          ],
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/LoginPage",
      options: {
        widget: "Button",
      },
      layout: {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
      },
      value: {
        content: {
          name: " \u2713 Submit",
          variant: "contained",
          color: "info",
          type: "text",
          funcName:"Submit_PM_Program",
          size: "large"
        },
        style: {
          background:"#091f3c",
          color:"white",
          width:"200px",
          marginRight:"50px",
          float:"right"
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/notify",
      options: {
        widget: "Notify",
      },
      layout: 6,
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ],
};
