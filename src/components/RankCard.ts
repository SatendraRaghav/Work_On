import userSVG from "../../public/user.svg";

export const RankCard: any = {
  type: "WrapperLayout",
  config: {
    wrapperStyle: {
      width: 295,
      height: 300,
      position: "relative",
      background: "white",
      borderRadius: "12px",
      boxShadow: "2px 2px 5px grey",
    },
    main: {},
    layout: 4,
  },
  elements: [
    {
      type: "Control",
      scope: "#/properties/image",
      config: {
        main: {
          url: "http://localhost:8080/file/getById/3",
        },
        style: {
          objectFit: "cover",
          paddingTop: "15px",
        },
        layout: 6,
      },
      options: {
        widget: "Box",
      },
    },

    {
      type: "Control",
      scope: "#/properties/name",
      config: {
        style: {
          color: "white",
          backgroundColor: "rgb(57, 73, 171)",
          padding: "0px 12px",
          display: "inline-block",
          borderRadius: "8px",
        },
        main: {
          heading: "Prakhar",
        },
      },
      options: {
        widget: "Box",
      },
    },
    {
      type: "Control",
      scope: "#/properties/description",
      config: {
        style: {
          maxHeight: 100,
          fontSize: "15px",
          fontWeight: "400",
          //   padding: "4px 4px",
          color: "gray",
          overflow: "auto",
          wordWrap: "break-word",
          "&::-webkit-scrollbar": { display: "none" },
        },
        main: {
          heading: "sadnfikudfojbsvdjnblokvnjsdnvlkjm nlskjdnv",
        },
      },
      options: {
        widget: "Box",
      },
    },
    {
      type: "Control",
      scope: "#/properties/rank",
      config: {
        style: {
          position: "absolute",
          top: "0px",
          right: "0px",
          width: "15%",
          backgroundColor: "rgb(57, 73, 171)",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px 12px 4px 25px",
          fontWeight: "bold",
        },
        main: {
          heading: "#1",
        },
      },
      options: {
        widget: "Box",
      },
    },
  ],
};

export const RollAndDice =  {
  type: "WrapperLayout",
  name: "Rank",
  config: {
    style: {
      wrapperStyle: {
        width: "auto",
        height: 270,
        position: "relative",
        background: "#131633",
        borderRadius: "12px",
        boxShadow: "2px 2px 5px grey",
        margin: "none"
      },
    },
    main: {},
    layout: 8,
  },
  elements: [
    {
      type: "Control",
      scope: "#/properties/name",
      config: {
        style: {
          color: "white",
          height: 190,
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          justifyContent: "center",
          backgroundRepeat: 'no-repeat',
          padding: "0px 12px",
          backgroundImage: "url('https://media0.giphy.com/media/oVC14esV3dKehcBkT4/giphy.gif?cid=ecf05e47vv4p7czphyk7mnyu6uwho7r1g8da0lwyceacljoe&ep=v1_stickers_search&rid=giphy.gif&ct=s')",
          borderRadius: "50%",
        },
        main: {
          heading: "",
        },
      },
      options: {
        widget: "Box",
      },
    },
    {
      type: "Control",
      scope: "#/properties/button",
      config: {
        layout: 4,
        style: {
        },
        main: {
          name: "Rank",
          onClick:"rankProvider",
        },
      },
      options: {
        widget: "Button",

      },
    },

  ],
};