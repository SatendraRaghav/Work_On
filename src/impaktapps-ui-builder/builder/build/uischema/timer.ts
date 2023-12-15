export default {
        type : "Control",
        scope : "#/properties/timer",
        options : {
          widget : "Timer"
        },
        config : {
          layout: {
            xs: 12,
            sm: 12,
            md: 12,
            lg: 12,
          },
          main : {},
          style : {
            digitContainer : {
              borderRadius : "4px",
              textShawdow : 'none',
              width : "22%"
            },
            container : {
              // backgroundColor : "rgb(249 249 249)",
              backgroundColor : "#FFFFFF",
              borderRadius : "18px"
            },

            containerLabelColor : {
              color : "red"
            }
          }
        }
}