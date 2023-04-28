export const RoleMasterUISchema = {
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
                  heading: "Role Master",
                },
                style: {
                  fontWeight: "500",
                  fontSize: "20px",
                  background: "white",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/Back_Button",
              layout: {
                xs: 6,
                sm: 4,
                md: 5.5,
                lg: 5.5,
              },
              options: {
                widget: "Button",
              },
              value: {
                content: {
                  icon: "BackIcon",
                  styleDefault: true,
                  size: "small",
                  funcName: "backHandler",
                },
                style: {
                  float: "right",
                },
              },
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
              scope: "#/properties/name",
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
              options: {
                widget: "InputField",
              },
              value: {
                content: {
                  label: "Name",
                  type: "text",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/permissionList",
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
              options: {
                widget: "SelectInputField",
              },
              value: {
                content: {
                  label: "Permission List",
                  options: [{}],
                  multiple: true,
                  required: true,
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/active",
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
              options: {
                widget: "RadioInputField",
              },
              value: {
                content: {
                  label: "Active",
                  options: ["YES", "NO"],
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/btn",
              options: {
                widget: "Button",
              },
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
              value: {
                content: {
                  name: "Submit",
                  startIcon: "ApproveIcon",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  funcName: "Submit_Role",
                  size: "small",
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
  ],
};

// {
//   "type": "Control",
//   "scope": "#/properties/emptyBox",
//   "layout": 12,
//   "options": {
//     "widget": "EmptyBox"
//   },
//   "value": {
//     "content": {

//     }
//   }
// },
// {
//   type: "Control",
//   scope: "#/properties/Back_Button",
//   layout: {
//     xs: 6,
//     sm: 4,
//     md: 2,
//     lg: 2,
//   },
//   options: {
//     widget: "Button",
//   },
//   value: {
//     content: {
//       name: "\u2190",
//       variant: "contained",
//       color: "primary",
//       type: "button",
//       size: "large",
//       funcName: "backHandler",
//     },
//     style:{
//       background:"#091f3c",
//       color:"white",
//       width:"30px",
//       height:"50px",
//       paddingTop:"5px",
//      fontWeight:"bold",
//      fontSize:"30px",
//       marginLeft:"5px"
//     }
//   },
// },
