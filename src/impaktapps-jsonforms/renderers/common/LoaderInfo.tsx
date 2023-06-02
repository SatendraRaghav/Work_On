import { Alert, Snackbar } from '@mui/material'
import React, { useContext } from 'react'
import { DataContext } from '../context/Context';

const LoaderInfo = ({id,loading}:{id:string,loading:boolean}) => {
    // const {
    //   loading
    //   } = useContext(DataContext);
  return (
    <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    id={id}
    open={loading}
  >
    <Alert severity="info" sx={{ width: "100%" }}>
      Please wait
    </Alert>
  </Snackbar>
  )
}

export default LoaderInfo