export const LoginUiSchema = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/username",
      options: {
        widget: "Box",
      },
      config: {
        main: {},
        style: {
          marginTop: "4vh",
        },
      },
    },
    {
      type: "HorizontalLayout",
      layout:{xs:10,sm:8,md:7,lg:6},
      defaultStyle:true,
      elements: [
        {
          type: "Control",
          scope: "#/properties/PersonButton",
          layout:3,
    
          options: {
            widget: "IconButton",
          },
          config: {
            main: {
              icon: "PersonIcon",
              size: "small",
              funcName: "backHandler",
            },
            style: { textAlign: "center" },
            iconStyle: {
              width: "120px",
              height: "auto",
              fontSize: "100%",
              float:"left"
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "EmptyBox",
          },
          layout:8,
        },
        {
          type: "Control",
          scope: "#/properties/username",
          layout:11,
          options: {
            widget: "InputField",
          },
          config: {
            main: {
              label: "Login ID",
              variant: "outlined",
              size: "normal",
              funcName: "userLogIn",
              activeEnter: true,
              helperText: "",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "EmptyBox",
          },
        },
        {
          type: "Control",
          scope: "#/properties/password",
          layout:11,
          options: {
            widget: "PasswordInputField",
          },

          config: {
            main: {
              label: "Password",
              type: "password",
              variant: "outlined",
              funcName: "userLogIn",
              activeEnter: true,
              size: "normal",
              helperText: "",
            },
          },
          style: {
            background: "black",
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "EmptyBox",
          },
        },
        {
          type: "Control",
          scope: "#/properties/LoginButton",
          layout:11,
          options: {
            widget: "Button",
          },
          config: {
            main: {
              name: "Login",
              variant: "contained",
              color: "info",
              click: "userLogIn",
              tooltipMessage:"Click to Login",
              activeEnter: true,
              type: "text",
              size: "large",
            },
            style: {
              width: "30%",
              float: "right",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "EmptyBox",
          },
          layout: 12,
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
    },
  ],
};
