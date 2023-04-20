import { makeStyles } from "@mui/styles"

export const InputFieldStyle = {
        '& .MuiInputBase-root': {
          // background: 'white',
          background:"#f8fafc",
          color: 'black',
          fontFamily:"inherit",
          borderRadius:"20px",
        },
        '& .MuiInputBase-input': {
          fontSize: '16px',
          // fontFamily:"cursive",
          fontFamily:"inherit",
          padding: '14px'
        },
        '& .MuiInputLabel-root': {
          color: '#828f9f',
          fontFamily:"roboto",
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '0.8px solid #e3e8ef'
          },
          '&:hover fieldset': {
            borderColor: '#364152'
          },
          '&.Mui-focused fieldset': {
            border: '1.5px solid black',
          }
        }
}
export const RadioStyle = {
   borderRadius:"20px",
   padding:"6px",
   border:"0.8px solid #e3e8ef",
   backgroundColor:"white",
   color: '#828f9f',
   fontFamily:"roboto",
  '& .MuiTypography-body1': {
    fontSize: '14px', // custom label font size
    padding:"4px",
  },
  '& .MuiRadio-root': {
    color: '#828f9f'
  },
  '&.Mui-focused': {
    borderColor: 'green',
  }
}
export const InputLabelStyle = {
  marginTop:"1px",
  "width":"90%",
  marginLeft:"auto",
  marginRight:"auto",
  paddingLeft:"10px",
  backgroundColor:"white",
  fontSize:"12px",
  '&.Mui-focused': {
    color: '#828f9f',
  },
}
export const AutoCompleteStyle = {

  borderRadius:"20px",
  border:"0.8px solid #e3e8ef",
  backgroundColor:"white",
  // paddingLeft: '14px',
  inputRoot: {
    '& .MuiInputBase-root': {
      background: 'white',
      color: 'black',
      borderRadius:"20px",
    },
    '& .MuiInputBase-input': {
      fontSize: '16px',
      padding: '14px'
    },
    '& .MuiInputLabel-root': {
      color: '#828f9f'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '0.8px solid #e3e8ef'
      },
      '&:hover fieldset': {
        borderColor: '#364152'
      },
      '&.Mui-focused fieldset': {
        border: '1.5px solid black',
      }
    }
    }
}
export const Buttonstyle={
  fontFamily:"inter",
  background:"#091f3c",
  color:"white",
  // width:"30px",
  height:"30px",
  padding:"8px 10px",
//  fontWeight:"bold",
//  fontSize:"30px",
  marginLeft:"5px",
  '&:hover': {
    backgroundColor: '#0d2e59',
  },
}
export const TableStyle = {
  root: {
    backgroundColor: 'black',
    color: 'black',
  },
  header: {
    backgroundColor: 'gray',
    color: 'white',
    
  },
  row: {
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}
export const useStyles = makeStyles({
  input:InputFieldStyle,
  radioStyle:RadioStyle,
  inputLabelStyle:InputLabelStyle,
  autoCompleteStyle:AutoCompleteStyle,
  buttonStyle:Buttonstyle,
  tableStyle:TableStyle
})