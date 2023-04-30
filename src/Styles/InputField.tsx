import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#eef2f6",
    //   contrastText: "black",

    //   light: "",
    //   dark: "",
    // },
    // secondary: {
    //   main: "#f50057",
    //   contrastText: "#fff",
    // },
    //@ts-ignore
    customColor: {
      main: "#eef2f6",
      icon: "",
      fontfamily: "Roboto",
      borderRadius: "20px",
      input: {
        color: "#828f9f",
        bgColor: "#f8fafc",
        labelColor: "#e3e8ef",
        labelColorHover: "#364152",
        labelColorFocused: "#3949ab",
        padding: "14px",
        fontSize: "16px",
      },
      button:{
        color:"white",
        bgColor:"#3949ab",
        hoverBgColor:"",
        focuseBgcolor:"",
        hoverColor:"",
      }
    },
  },
});
// const myTheme = useTheme();

export const InputFieldStyle = {
  "& .MuiInputBase-root": {
    background: theme.palette.customColor.input.bgColor,
    fontFamily: "inherit",
    borderRadius: theme.palette.customColor.borderRadius,
  },
  "& .MuiInputBase-input": {
    fontSize: theme.palette.customColor.input.fontSize,
    fontFamily: "inherit",
    padding: theme.palette.customColor.input.padding,
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.customColor.input.color,
    fontFamily: theme.palette.customColor.fontfamily,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: `1.5px solid ${theme.palette.customColor.input.labelColorFocused}`,

      // border: '1.5px solid #2f445e'
    },
  },
};
export const RadioStyle = {
  borderRadius: theme.palette.customColor.borderRadius,
  padding: "6px",
  //  border:"1.6px solid rgb(227, 232, 239)",
  background: theme.palette.customColor.input.bgColor,
  color: theme.palette.customColor.input.color,
  fontFamily: "inherit",
  "& .MuiTypography-body1": {
    fontSize: "14px", // custom label font size
    padding: "4px",
  },
  "& .MuiRadio-root": {
    color: theme.palette.customColor.input.color,
  },
  border: "0.8px solid #BFC1C7",
  "&:hover": {
    border: "0.8px solid black",
  },
  "&:active": {
    border: "1.5px solid black",
  },
};
export const InputLabelStyle = {
  marginTop: "1px",
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "10px",
  backgroundColor: "white",
  fontSize: "12px",
  "&.Mui-focused": {
    color: "#3949ab",
  },
};
export const AutoCompleteStyle = {
  borderRadius: "20px",
  border: "0.8px solid #e3e8ef",
  backgroundColor: "white",
  // paddingLeft: '14px',
  inputRoot: {
    "& .MuiInputBase-root": {
      background: "white",
      color: "black",
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
        borderColor: "#364152",
      },
      "&.Mui-focused fieldset": {
        border: "1.5px solid black",
      },
    },
  },
};
export const BoxStyle = {
  fontFamily: "inherit",
  width: "100%",
  margin: "auto",
  fontWeight: "500",
  fontSize: "20px",
  background: "white",
  color:"black"
};
export const Buttonstyle = {
  // fontFamily:"roboto",
  background: theme.palette.customColor.button.bgColor,
  // background:"#3e5470",
  color:theme.palette.customColor.button.color,
  padding: "8px 10px",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;",
  textTransform: "none",
  // marginLeft:"5px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#3949ab",
    // backgroundColor: '#2f445e'
  },
  "&.Mui-focused": {
    color: "#3949ab",
  },
};
export const TableStyle = {
  root: {
    backgroundColor: "black",
    color: "black",
  },
  header: {
    backgroundColor: "gray",
    color: "white",
  },
  row: {
    "&:hover": {
      backgroundColor: "white",
    },
  },
};
export const IconStyle = {
  fontWeight: "bolder",
  color: "#3949ab",
  background: "#ede7f6",
  borderRadius: "10px",
  "&:hover": {
    color: "white",
    background: "#3949ab",
  },
};
export const TabStyle = {
  fontWeight: "500",
  fontFamily: "inherit",
  color: "black",
  "&:hover": {
    color: "#3949ab",
  },
  "&.Mui-selected": {
    color: "#3949ab",
  },
};
export const DataGridStyle = {
  fontFamily: "roboto",
  width: "100%",
  borderRadius: "20px",
  padding: "10px 15px",
  height: 500,
  background: "white",
};
export const pageStyle = {
  background:  theme.palette.customColor.main,
  minHeight: "100vh",
  margin: "10px 20px",
  height: "auto",
  borderRadius: "20px",
  fontFamily: "roboto",
};
export const useStyles = makeStyles({
  dateStyle:InputFieldStyle
});

export const InputFieldStyledark = {
  "& .MuiInputBase-root": {
    // background: 'white',
    // background:"#f8fafc",
    background: "#091f3c",
    color: "black",
    fontFamily: "inherit",
    borderRadius: "20px",
  },
  "& .MuiInputBase-input": {
    fontSize: "16px",
    // fontFamily:"cursive",
    fontFamily: "inherit",
    padding: "14px",
  },
  "& .MuiInputLabel-root": {
    color: "#828f9f",
    fontFamily: "roboto",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      // borderColor: '0.8px solid #e3e8ef'
      border: "0.8px solid #bdc8f0",
    },
    "&:hover fieldset": {},
    "&.Mui-focused fieldset": {
      border: "1.5px solid #364152",
    },
  },
};
