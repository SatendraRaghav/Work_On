import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { setUserValue } from "./Apple";
import { navigator } from "./serviceHolder";

export function DailogBox({ open, setOpen }) {
  const handleClose = (event) => {
    setOpen(false);
    setUserValue(null);
    navigator("/");
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Session Expired</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please Login again to continue.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Login Page
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DailogBox;
