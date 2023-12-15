export const StyleSection = {
    type: "HorizontalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/style",
  
        options: {
          widget: "TextArea",
        },
        config: {
          layout: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
          },
          style:{
            containerStyle:{
              // background:"gray"
              borderRadius:"20px"
            },
            headerContainerStyle:{
              
            },
            textAreaStyle:{
             borderRadius:"20px",
             padding:"20px"
            }
          },
          main: {
            heading:"JSON Style",
            minRows:8,
            hideButton:true
          },
        },
      }]};