export const ProfileUiSchema:any= {
  "type": "HorizontalLayout",
  "elements": [
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
          md: 2.5,
          lg: 1.5,
        },
        main: {
          name: "Add",
          startIcon: "ApproveIcon",
          variant: "contained",
          color: "info",
          type: "text",
          onClick: "add",
          size: "small",
        },
        style: {
          marginBottom: "8px",
        },
      },
    },
    {
      type: "Control",
      scope: "#/properties/table/properties/rows",
      options: {
        widget: "Table",
      },
      config:{main:{}},
      elements:[
        {
          accessorKey: "id",
          header: "id",
          widget:{
            type: "Control",
            scope: "#/properties/name",
  
            options: {
              widget: "InputField",
            },
            config: {
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
              main: {
                label: "Name",
                type: "text",
                errorMessage: "Name is empty or invalid",
              },
            },
          }
        },
        {
          accessorKey: "name",
          header: "Name",
          widget:{
            type: "Control",
            scope: "#/properties/name2",
  
            options: {
              widget: "InputField",
            },
            config: {
              layout: { xs: 11, sm: 5.5, md: 5.5, lg: 5.5 },
              main: {
                label: "Name",
                type: "text",
                errorMessage: "Name is empty or invalid",
              },
            },
          }
        },
      ]
    },
  ]
}

// export const ProfileUiSchema:any= {
//     "type": "HorizontalLayout",
//     "elements": [
//       {
//         "type": "Control",
//         "scope": "#/properties/username",
//         "layout": {xs:12,sm:8,md:6,lg:5},
//         "options": {
//           "widget": "Box"
//         },
//         "config": {
//           "main": {
//             "heading": "Profile",
//           },
//           style:{
//             margin:"auto",
//              marginTop:"20%",
//             textAlign:"center",
           
//             borderRadius:"20px",
           
//             fontWeight:"bolder",
//             width:"40%",
         
//           }
//         }
//       }
//     ]
//   }
  