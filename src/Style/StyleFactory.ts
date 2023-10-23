export const getTheme = (mode: string, custom?: boolean) => {
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#eef2f6",
            },
            secondary: {
              main: "#ffffff",
            },
            text: {
              primary: "#000000",
              button: "white",
              input: "#000000",
              iconButton: "#3949ab",
            },
            background: {
              paper: "white",
              button: "#3949ab",
              input: "white",
              heading: "#ffffff",
              default: "#eef2f6",
              iconButton: "#ede7f6",
            },
            action: {
              active: "#3949ab",
              //   active: "white",
              hover: "#364152",
              focus: "#3949ab",
              focusBackground: "#dae3e8",
              filledInputLabelColor: "#364152",
              iconButtonHoverColor: "#ffffff",
              buttonHover: "#152585",
            },
            shape: {
              borderRadius: "20px",
              paddingInput: "14px",
            },
            typography: {
              fontFamily: "Roboto",
              fontSize: "14px",
              autoCompleteFontSize: "12.5px",
              labelFontSize: "16px",
              FontWeightlight: 300,
              fontWeightRegular: 400,
              fontWeightMedium: 500,
              fontWeightBold: 700,
            },
          }
        : mode === "dark" && custom
        ? {
            primary: {
              main: "#121212",
            },
            secondary: {
              main: "#262525",
            },
            text: {
              primary: "#fff",
              button: "#fff",
              input: "#bdc8f0",
              inputLabel: "rgba(255, 255, 255, 0.7)",
              // "#8190c4",
              radioBorder: "#030408",
              iconButton: "#bdc8f0",
            },
            background: {
              heading: "#000000",
              button: "#586580",
              input: "#121212",

              default: "#121212",
              iconButton: "#262525",
            },
            action: {
              active: "#bdc8f0",
              hover: "#1a223f",
              focus: "rgba(255, 255, 255, 0.7)",
              focusBackground: "#1c1b1b",
              filledInputLabelColor: "#71768a",
              iconButtonHoverColor: "#ffffff",
              buttonHover: "#343c4d",
            },
            shape: {
              borderRadius: "20px",
              paddingInput: "14px",
            },
            typography: {
              fontFamily: "Roboto",
              fontSize: "14px",
              autoCompleteFontSize: "12.5px",
              labelFontSize: "16px",
              FontWeightlight: 300,
              fontWeightRegular: 400,
              fontWeightMedium: 500,
              fontWeightBold: 700,
            },
          }
        : {
            primary: {
              main: "#1a223f",
            },
            secondary: {
              main: "#212946",
            },
            text: {
              // primary: "#d7dcec",
              primary: "#fff",
              button: "#ffffff",
              input: "#bdc8f0",
              inputLabel: "#8190c4",
              radioBorder: "#030408",
              iconButton: "#ffffff",
            },
            background: {
              heading: "#111936",
              button: "#6a5fed",
              input: "#1a223f",

              default: "#1a223f",
              iconButton: "#212946",
            },
            action: {
              active: "#6a5fee",
              hover: "#6a5fee",
              focus: "#6a5fee",
              focusBackground: "#1c1b1b",
              //    "#6743d8",
              filledInputLabelColor: "#bdc8f0",
              iconButtonHoverColor: "#ffffff",
              buttonHover: "#152585",
            },
            shape: {
              borderRadius: "20px",
              paddingInput: "14px",
            },
            typography: {
              fontFamily: "Roboto",
              fontSize: "14px",
              autoCompleteFontSize: "12.5px",
              labelFontSize: "16px",
              FontWeightlight: 300,
              fontWeightRegular: 400,
              fontWeightMedium: 500,
              fontWeightBold: 700,
            },
          }),
    },
  };
};
