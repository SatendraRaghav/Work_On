export const RankProvider = (store:any,dynamicData:any)=>{
    const uiSchema = JSON.parse(JSON.stringify((store.uiSchema)));
    const newWrapper =   {
      type: "WrapperLayout",
      name: dynamicData.path,
      config: {
        style: {
          wrapperStyle: {
            width: "auto",
            height: 290,
            position: "relative",
            background: "#333333",
            borderRadius: "12px",
            boxShadow: "2px 2px 5px grey",
            // margin: "none"
          },
        },
        main: {},
        layout: 12,
      },
      elements: [
        {
          type: "Control",
          scope: `#/properties/raneee`,
          config: {
            style: {
              color: "white",
              height: 300,
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              marginTop: "-20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 12px",
              backgroundRepeat: 'no-repeat',
              backgroundImage: "url('https://media0.giphy.com/media/oVC14esV3dKehcBkT4/giphy.gif?cid=ecf05e47vv4p7czphyk7mnyu6uwho7r1g8da0lwyceacljoe&ep=v1_stickers_search&rid=giphy.gif&ct=s')",
              borderRadius: "45%",
            },
            main: {
              heading: "25",
            },
          },
          options: {
            widget: "Box",
          },
        },
        {
          type: "Control",
          scope:`#/properties/${dynamicData.path}`,
          config: {
            style: {
              color: "white",
              height: 190,
              width: 190,
              backgroundSize: 'contain',
              fontWeight: "bolder",
              backgroundPosition: 'center',
              display: "flex",
              alignItems: "center",
              marginTop: "40px",
              justifyContent: "center",
              position: "absolute",
              top: 10,
              left: 'calc(50% - 90px)',
              zIndex: 10,
              fontSize: "85px",
              padding: "0px 12px",
              textShadow: "2px 2px 5px rgb(57, 73, 171)",
              background: "#13142B",
              '@keyframes rotateAnimation': {
                from: {
                  transform: 'rotate(0deg)',
                },
                to: {
                  transform: 'rotate(360deg)',
                },
              },
              animation: 'rotateAnimation 4s infinite',
              borderRadius: "55%",
            },
            main: {
              heading: "25",
            },
          },
          options: {
            widget: "Box",
          },
        },
        {
          type: "Control",
          scope: `#/properties/rankee`,
          config: {
            style: {
              color: "white",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundSize: 'contain',
              position: "absolute",
              bottom: 10,
              backgroundPosition: 'center',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 12px",

            },
            main: {
              heading: "Your Rank",
            },
          },
          options: {
            widget: "Box",
          },
        }
      ],
    };
    let index:number ;
    uiSchema.elements[2].elements.map((e,i)=>{
     if(e.name === dynamicData.path){
      index = i;
     }
    })
    //@ts-ignore
    newWrapper.config.layout = uiSchema.elements[2].elements[index].config.layout;
      //@ts-ignore
    uiSchema.elements[2].elements[index] = newWrapper;
    store.setUiSchema(uiSchema)
  }