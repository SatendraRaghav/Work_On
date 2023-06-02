import { Box } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../context/Context"; 
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router";
import { inputProps } from "../interface/inputfieldProps";

 function CustomDailogBox(props:inputProps ) {
  const {uischema} = props;
  const uischemaData = uischema?.config?.main;
  const { openDialogBox, setDialogBox } = useContext(DataContext);
  const navigate = useNavigate();
  const handleClose = () => {
    setDialogBox(false);
    if (openDialogBox.page === "Logout") {
      openDialogBox.setUserValue(null);
      navigate("/");
    } else {
      openDialogBox.page && navigate(`${openDialogBox.page}`);
    }
  };

  return (
    <div>
      <Dialog
        open={openDialogBox.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Session Expired</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {uischemaData?.heading||"Please Login again to continue."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDailogBox;
