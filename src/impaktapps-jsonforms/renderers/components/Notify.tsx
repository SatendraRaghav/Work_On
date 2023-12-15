import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useJsonForms } from "@jsonforms/react";
import { inputProps } from "../interface/inputfieldProps";

function Notify(props:inputProps) {
  const {path} = props;
  const ctx = useJsonForms();
  const { setNotify, openNotify } = useContext(DataContext);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setNotify({ Fail: false, Success: false, Info: false });
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={openNotify.Success || false}
        autoHideDuration={2000}
        onClose={handleClose}
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
          action={action}
        >
          {openNotify.SuccessMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openNotify.Fail || false}
        autoHideDuration={2000}
        onClose={handleClose}
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%" }}
          action={action}
        >
          {openNotify.FailMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openNotify.Info || false}
        autoHideDuration={2000}
        onClose={handleClose}
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          sx={{ width: "100%" }}
          action={action}
        >
          {openNotify.InfoMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Notify;
