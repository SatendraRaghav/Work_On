export const ProfileDetailsUiSchema: any = {
  type: "HorizontalLayout",
  elements: [
    {
      type: "WrapperLayout",
      config: {
        main: {
          rowSpacing: 3,
          header: true,
        },
        defaultStyle: true,
      },
      elements: [
        {
          type: "Control",
          scope: "#/properties/profileHeader",

          options: {
            widget: "Box",
          },
          config: {
            layout: 8,
            main: {
              heading: "Profile Details",
            },
          },
        },
      ],
    },
    {
      type: "TabLayout",
      config: {
        main: {
          tabLabels: ["Profile", "Manage Password"],
          defaultStyle: true,
        },
      },

      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/name",

              options: {
                widget: "Box",
              },
              config: {
                layout: {
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 6,
                },
                main: {
                  label: "Cycle Name",
                  errorMessage: "Cycle Name is empty or invalid",
                },
              },
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/currentPassword",

              options: {
                widget: "InputField",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
                main: {
                  label: "Current Password",
                  errorMessage: "Current Password is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/proc",
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
              },
              options: {
                widget: "EmptyBox",
              },
            },
            {
              type: "Control",
              scope: "#/properties/newPassword",

              options: {
                widget: "InputField",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
                main: {
                  label: "New Password",
                  errorMessage: "New Password is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/confirmPassword",

              options: {
                widget: "InputField",
              },
              config: {
                layout: { xs: 11, sm: 11, md: 5.5, lg: 5.5 },
                main: {
                  label: "Confirm Password",
                  errorMessage: "Current Password is empty or invalid",
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/EmptyBox",

              options: {
                widget: "EmptyBox",
              },
              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 5.5,
                  lg: 5.5,
                },
              },
            },
            {
              type: "Control",
              scope: "#/properties/SubmitButton",
              options: {
                widget: "Button",
              },

              config: {
                layout: {
                  xs: 11,
                  sm: 11,
                  md: 2.5,
                  lg: 1.5,
                },
                main: {
                  name: "Submit",
                  startIcon: "ApproveIcon",
                  variant: "contained",
                  color: "info",
                  type: "text",
                  onClick: "Submit",
                  size: "small",
                },
                style: {
                  marginBottom: "8px",
                },
              },
            },
          ],
        },
      ],
    },
  ],
};
