import { Box, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import { useStyles } from '../../../Styles/InputField';
import { actions, DataContext } from '../../../Context';
import { useJsonForms } from '@jsonforms/react';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CustomFile = ({ data, value, updateValue,path }: any) => {
  const {  state,objFunc,dispatch,id,setUiSchema,setSchema,setFormdata } = useContext(DataContext);
  const ctx = useJsonForms();
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate();
  const saveData = (event: any) => {
      const callApi= async(event)=>{
         objFunc.getServices(id,ctx,setFormdata,setUiSchema,setSchema,navigate,[data,event,searchParams,setSearchParams])[data.content.funcName]()
         updateValue(event.target.value)
        }
      callApi(event)
  }
  //@ts-ignore
  const classes = useStyles();
  return (
  <Stack direction={"row"} 
   className={classes.input}
  
  >
  <TextField
        required={data.content.required}
        fullWidth
        onChange={(e) => {
          //@ts-ignore
          updateValue(e.target.files[0].name)
          saveData(e)

        }}
        value={value}
      //  className={classes.input}
       sx={{color:"red",border:"none"}}
        // color='primary'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" >
              <IconButton onClick={()=>updateValue("")}>
                
              <DeleteIcon sx={{marginRight:"10px"}}  />
              </IconButton>
              <IconButton onClick={()=>updateValue("")}>
              <DownloadIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={data.content.helperText}
        size={data.content.size || "medium"}
        type={"file"}
      />
{/* 
        <IconButton color="error" onClick={() => updateValue("")}><DeleteIcon /></IconButton>
        
        <IconButton sx={{color:"gray"}} onClick={() => updateValue("")}><DownloadIcon /></IconButton> */}
        
    
   </Stack>
  )

}

export default CustomFile
   {/* </TextField>
      {value &&
        <IconButton color="error" onClick={() => updateValue("")}><DeleteIcon /></IconButton>
        
      }
      {value &&
        <Typography>{value}</Typography>
      }
     </> */}
    //  )} 
    // </Paper>