export const LoginUiSchema = {
  type: "HorizontalLayout",
  elements: [ 
    {
      type: "HorizontalLayout",
       
      config: {
        defaultStyle: true,
        layout: { xs: 10, sm: 8, md: 7, lg: 6 },
      },
     
      elements: [
        {
          type: "Control",
          scope: "#/properties/PersonButton",
          layout: 3,

          options: {
            widget: "IconButton",
          },
          config: {
            main: {
              icon: "PersonIcon",
              size: "small",
             color:"none"
            },
            style: { textAlign: "center" },
            iconStyle: {
              width: "120px",
              height: "auto",
              fontSize: "100%",
              float: "left",
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/EmptyBox",
          options: {
            widget: "EmptyBox",
          },
          layout: 8,
        },
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
              onKeyDown:"onKeyPress",
              activeEnter: true,
              helperText: "",
              errorMessage:"Login ID is required"
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

          options: {
            widget: "PasswordInputField",
          },

          config: {
            layout: 11,
            main: {
              label: "Password",
              type: "password",
              variant: "outlined",
              onKeyDown:"onKeyPress",
              activeEnter: true,
              size: "normal",
              helperText: "",
              errorMessage:"Password is required"
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

          options: {
            widget: "Button",
          },
          config: {
            layout: 11,
            main: {
              name: "Login",
              variant: "contained",
              color: "info",
              onClick: "userLogIn",
              onKeyDown: "onKeyPress",
              tooltipMessage: "Click to Login",
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
