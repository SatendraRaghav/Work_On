import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export const useTheme = (objProvidedStyle: any) => {
  const myTheme: any =
    objProvidedStyle?.theme ||
    createTheme({
      palette: {
        primary: {
          main: "#eef2f6",
        
        },
        secondary: {
          main: "#ffffff",
        },
       
        text: {
          primary: "#000000",
          button: "#ffffff",
          input: "#000000",
          iconButton: "#3949ab",
        },
        background: {
          paper: "#ffffff",
          button: "#3949ab",
          input: "#ffffff",
          default: "#eef2f6",
          iconButton: "#ede7f6",
        },
        action: {
          active: "#364152",
          hover: "#364152",
          selected: "",
          focus: "#3949ab",
          focusBackground: "#e8f0fe",
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
      },
    } as any);
  const InputFieldStyle = objProvidedStyle?.InputFieldStyle || {
    "& .MuiInputBase-root": {
      color: myTheme.palette.text.input,
      fontWeight: myTheme.palette.typography.fontWeightMedium,
      background: myTheme.palette.background.input,
      fontFamily: "inherit",
      borderRadius: myTheme.palette.shape.borderRadius,
    },
    "& .MuiInputBase-input": {
      fontSize: myTheme.palette.typography.fontSize,
      fontFamily: "inherit",
      fontWeight: myTheme.palette.typography.fontWeightMedium,
      padding: myTheme.palette.shape.paddingInput,
    },
    "& .MuiInputLabel-root": {
      color:  myTheme.palette.text.inputLabel,
      fontWeight: myTheme.palette.typography.FontWeightlight,
      fontFamily: myTheme.palette.typography.fontFamily,
      fontSize: myTheme.palette.typography.fontSize,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        border: `2.5px solid ${myTheme.palette.action.focus}`,
      },
    },
    "& label.Mui-hover": {
      color: myTheme.palette.action.hover,
    },
    "& label.Mui-focused": {
      color: myTheme.palette.action.focus,
    },
  };
  return {
    myTheme: myTheme,
    RadioStyle: objProvidedStyle?.RadioStyle || {
      borderRadius: myTheme.palette.shape.borderRadius,
      padding: "4px",
      border: `0.5px solid ${ myTheme.palette.text.radioBorder}`,
      background: myTheme.palette.background.input,
      color:myTheme.palette.text.input,
      fontFamily: "inherit",
      "& .MuiTypography-body1": {
        fontSize: "14px", // custom label font size
        padding: "4px",
      },
      "& .MuiRadio-root": {
        color: myTheme.palette.text.primary,
      },
  
      "&:hover": {
        border: `0.8px solid ${ myTheme.palette.action.hover}`,
      },
      "&:active": {
        border: `2.5px solid ${myTheme.palette.action.focus}`,
      },
    },
    InputLabelStyle: objProvidedStyle?.InputLabelStyle || {
      marginTop: "1px",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      color: myTheme.palette.text.primary,
      paddingLeft: "10px",
      backgroundColor: myTheme.palette.background.input,
      fontSize: myTheme.palette.typography.labelFontSize,
      "&.Mui-focused": {
        color: myTheme.palette.action.focus,
      },
    },
    AutoCompleteStyle: objProvidedStyle?.AutoCompleteStyle || {
      borderRadius: myTheme.palette.shape.borderRadius,
      border: "0.8px solid #e3e8ef",
      // backgroundColor: "white",
      backgroundColor: myTheme.palette.background.inputLabel,
      // paddingLeft: '14px',
      inputRoot: {
        "& .MuiInputBase-root": {
          background: "##e6e9ff",
          color: "#ffffff",
          borderRadius: "20px",
        },
        "& .MuiInputBase-input": {
          fontSize: "16px",
          padding: "14px",
        },
        "& .MuiInputLabel-root": {
          color: "#828f9f",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "0.8px solid #e3e8ef",
          },
          "&:hover fieldset": {
            borderColor: "rga(20,200,1)",
          },
          "&.Mui-focused fieldset": {
            border: "1.5px solid red",
          },
        },
      },
    },
    BoxStyle: objProvidedStyle?.BoxStyle || {
      fontFamily: "inherit",
      width: "100%",
      margin: "auto",
      fontWeight: "500",
      fontSize: "20px",
      background: "inherit",
      color:  myTheme.palette.text.primary,
    },
    Buttonstyle: objProvidedStyle?.Buttonstyle || {
      borderRadius: "5px",
      color: myTheme.palette.text.button,
      background: myTheme.palette.background.button,
      padding: "8px 10px",
      boxShadow:
        "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;",
      textTransform: "none",
      fontWeight: myTheme.palette.typography.fontWeightMedium,
      "&:hover": {
        background: myTheme.palette.action.buttonHover,
        fontWeight: myTheme.palette.typography.fontWeightBold,
      },
      "&.Mui-focused": {
        color: myTheme.palette.action.focus,
      },
    },
    IconStyle: objProvidedStyle?.IconStyle || {
      fontWeight: myTheme.palette.typography.fontWeightBold,
      color: myTheme.palette.text.iconButton,
      background: myTheme.palette.background.iconButton,
      borderRadius: "10px",
      "&:hover": {
        color:myTheme.palette.action.iconButtonHoverColor,
        background: myTheme.palette.action.focusBackground
      },
    },
    WrapperStyle: {
      height: "auto",
      width: "98%",
      margin: "15px auto ",
      color:myTheme.palette.text.primary,
      background:myTheme.palette.secondary.main,
      borderRadius: "20px",
    },
    TabStyle: objProvidedStyle?.TabStyle || {
      fontWeight: myTheme.palette.typography.fontWeightMedium,
      fontFamily: "inherit",
      color:  myTheme.palette.text.input,
      background:myTheme.palette.background.heading,
      "&:hover": {
        color: myTheme.palette.action.hover,
      },
      "&.Mui-selected": {
        color: myTheme.palette.action.active,
      },
    },
    TabsStyle: objProvidedStyle?.TabsStyle || {
      background:myTheme.palette.background.heading,
      fontFamily: "roboto",
      borderRadius: "20px 20px 0 0",
      "& .MuiTabs-flexContainer": {
        flexWrap: "wrap",
      },
    },
    TabContainerStyle: objProvidedStyle?.TabContainerStyle || {
      background:myTheme.palette.secondary.main,
      fontFamily: "roboto",
      borderRadius: "20px",
      width: "98%",
      marginRight: "auto",
      marginLeft: "auto",
    },
    DataGridStyle: objProvidedStyle?.DataGridStyle || {
      fontFamily: "roboto",
      borderRadius: myTheme.palette.shape.borderRadius,
      background:myTheme.palette.secondary.main,
    },
    pageStyle: objProvidedStyle?.pageStyle || {
      boxSizing:"border-box",
      background: myTheme.palette.primary.main,
      minHeight: "100vh",
      margin: "1px 20px 20px 10px",
      height: "auto",
      padding:"10px 20px 20px 10px",
      borderRadius: myTheme.palette.shape.borderRadius,
      fontFamily: myTheme.palette.typography.fontFamily,
    },
    BoxDividerStyle: objProvidedStyle?.BoxDividerStyle || {
      width: "100%",
      paddingTop: "20px",
    },
    InputFieldStyle: objProvidedStyle?.InputFieldStyle || InputFieldStyle,
    useStyles: makeStyles({
      dateStyle: InputFieldStyle,
    }),
  };
};
