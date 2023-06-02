import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider,ThemeOptions} from "@mui/material/styles";



 export const myTheme = (objProvidedStyle:any) =>
 {
  const myTheme:any = objProvidedStyle?.theme||createTheme({
    palette: {
      primary: {
        main: "#eef2f6",
      },
      secondary: {
        main: "#828f9f",
      },
      text: {
        primary: "#0a0a0a",
        button: "white",
        input: "#0a0a0a",
        iconButton:"#3949ab"
      },
      background: {
        paper: "white",
        button: "#3949ab",
        input: "#f8fafc",
        default: "#eef2f6",
        iconButton:"#ede7f6"
      },
      action: {
        active: "#364152",
        hover: "#364152",
        selected: "",
        focus: "#3949ab",
        focusBackground:"#e8f0fe",
        filledInputLabelColor:"#364152",
        iconButtonHoverColor:"white",
        buttonHover:"#152585"
      },
      shape: {
        borderRadius: "20px",
        paddingInput:"14px"
      },
      typography: {
        fontFamily: "Roboto",
        fontSize: "14px",
        autoCompleteFontSize:"12.5px",
        labelFontSize:"16px",
        FontWeightlight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
      },
    }} as any);
    const InputFieldStyle = objProvidedStyle?.InputFieldStyle||{
      "& .MuiInputBase-root": {
        color:myTheme.palette.text.input,
        fontWeight:myTheme.palette.typography.fontWeightMedium,
        background: myTheme.palette.background.input,
        fontFamily: "inherit",
        borderRadius: myTheme.palette.shape.borderRadius,
      },
      "& .MuiInputBase-input": {
       bgColor: myTheme.palette.action.focusBackground,
      
        fontSize: myTheme.palette.typography.fontSize,
        fontFamily: "inherit",
        padding: myTheme.palette.shape.paddingInput,
      },
      "& .MuiInputLabel-root": {
        color: myTheme.palette.text.filledInputLabelColor,
        fontFamily: myTheme.palette.typography.fontFamily,
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          border: `1.5px solid ${myTheme.palette.action.focus}`,
        },
      },
      '& label': {
        fontSize: myTheme.palette.typography.fontSize,
        marginBotton:"5px",
        fontFamily: "inherit",
      },
      "& label.MuiInputLabel-shrink":{
       color:myTheme.palette.action.filledInputLabelColor,
      },
      "& label.Mui-focused":{
        color:myTheme.palette.action.focus,
        fontSize:"bolder"
      }
    
    };
  return {
    myTheme:myTheme,
  RadioStyle : objProvidedStyle?.RadioStyle||{
      borderRadius:myTheme.palette.shape.borderRadius,
      padding: "4px",
      //  border:"1.6px solid rgb(227, 232, 239)",
      background:  myTheme.palette.background.input,
      color: myTheme.palette.secondary.color,
      fontFamily: "inherit",
      "& .MuiTypography-body1": {
        fontSize: "14px", // custom label font size
        padding: "4px",
      },
      "& .MuiRadio-root": {
    
        color: myTheme.palette.secondary.color,
      },
      border: "0.8px solid #BFC1C7",
      "&:hover": {
        border: "0.8px solid #0a0a0a",
      },
      "&:active": {
        border: `0.8px solid ${myTheme.palette.action.focus}`,
      },
    },
    InputLabelStyle:objProvidedStyle?.InputLabelStyle||{
      marginTop: "1px",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "10px",
      backgroundColor: myTheme.palette.background.input,
      fontSize:  myTheme.palette.typography.labelFontSize,
      "&.Mui-focused": {
        color:  myTheme.palette.action.focus,
      },
    },
    DateStyleLocal:objProvidedStyle?.DateStyleLocal||{
      "& .MuiInputBase-input": {
        fontSize: "56px",
      },
      "& .MuiButtonBase-root": {
        padding: "5px",
      "& .MuiPickersDay-current": {
        backgroundColor: "#FFC107", 
        color: "#000000",
      },
      "& .MuiPickersDay-daySelected": {
        backgroundColor: "#FFA000",
        color: "#FFFFFF", 
      },
    }},
    AutoCompleteStyle :objProvidedStyle?.AutoCompleteStyle|| {
      borderRadius:myTheme.palette.shape.borderRadius,
      border: "0.8px solid #e3e8ef",
      backgroundColor: "white",
      // paddingLeft: '14px',
      inputRoot: {
        "& .MuiInputBase-root": {
          background: "white",
          color: "#0a0a0a",
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
            border: "1.5px solid #0a0a0a",
          },
        },
      },
    },
    BoxStyle :objProvidedStyle?.BoxStyle|| {
      fontFamily: "inherit",
      width: "100%",
      margin: "auto",
      fontWeight: "500",
      fontSize: "20px",
      background: "white",
      color: "#0a0a0a",
    },
  Buttonstyle :objProvidedStyle?.Buttonstyle|| {
      // background:"#3e5470",
      borderRadius:"5px",
      color: myTheme.palette.text.button,
      background:myTheme.palette.background.button,
      padding: "8px 10px",
      boxShadow:
        "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;",
      textTransform: "none",
      fontWeight:myTheme.palette.typography.fontWeightMedium, 
      "&:hover": {
        // backgroundColor: myTheme.palette.action.hover,
        background:myTheme.palette.action.buttonHover,
        fontWeight:myTheme.palette.typography.fontWeightBold,
        // backgroundColor: '#2f445e'
      },
      "&.Mui-focused": {
        color:myTheme.palette.action.focus,
      },
    },
    TableStyle:objProvidedStyle?.TableStyle||{
      root: {
        backgroundColor: "#0a0a0a",
        color: "#0a0a0a",
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
    },
   IconStyle:objProvidedStyle?.IconStyle|| {
      fontWeight: myTheme.palette.typography.fontWeightBold,
      color: myTheme.palette.text.iconButton,
      background: myTheme.palette.background.iconButton,
      borderRadius: "10px",
      "&:hover": {
        color: myTheme.palette.action.iconButtonHoverColor,
        background: myTheme.palette.text.iconButton,
      },
    },
    WrapperStyle:{
      height: "auto",
      width:"98%",
      margin: "15px auto ",
      background:"white",
      borderRadius:"20px",
    },
 TabStyle:objProvidedStyle?.TabStyle||{
      fontWeight: myTheme.palette.typography.fontWeightMedium,
      fontFamily: "inherit",
      color: "#0a0a0a",
      "&:hover": {
        color: myTheme.palette.text.iconButton,
      },
      "&.Mui-selected": {
        color: myTheme.palette.text.iconButton,
      },
    },
    TabsStyle:objProvidedStyle?.TabsStyle||{
      fontFamily:"roboto" ,
      borderRadius:"20px 20px 0 0",
      '& .MuiTabs-flexContainer': {
        flexWrap: 'wrap',
      },
    },
    TabContainerStyle:objProvidedStyle?.TabContainerStyle||{
      fontFamily:"roboto",borderRadius:"20px",width:"98%",marginRight:"auto",marginLeft:"auto", background:"white",
    },
 DataGridStyle:objProvidedStyle?.DataGridStyle||{
      fontFamily: "roboto",
      width: "100%",
      borderRadius:myTheme.palette.shape.borderRadius,
      padding: "10px 15px",
      height: myTheme.palette.typography.fontWeightMedium,
      background: "white",
    },
    pageStyle: objProvidedStyle?.pageStyle||{
      background: myTheme.palette.primary.main,
      minHeight: "100vh",
      margin: "10px 20px",
      height: "auto",
      borderRadius:myTheme.palette.shape.borderRadius,
      fontFamily:myTheme.palette.typography.fontFamily,
    },
    BoxDividerStyle: objProvidedStyle?.BoxDividerStyle||{
      width:"100%", paddingTop:"20px",
    },
    InputFieldStyle: objProvidedStyle?.InputFieldStyle||InputFieldStyle,
    useStyles : makeStyles({
      dateStyle: InputFieldStyle,
    })
  }}