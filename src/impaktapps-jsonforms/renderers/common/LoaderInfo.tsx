import { Alert, Snackbar } from '@mui/material'

const LoaderInfo = ({id,loading}:{id:string,loading:boolean}) => {
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