import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { navigator } from "./serviceHolder";

export function DailogBox({ open, setOpen,setUserValue }: any) {
  const handleClose = () => {
    setOpen(false);
    setUserValue(null);
    navigator("/");
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{padding:"20px"}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{
            // textAlign: "le",
            color: "#f15928",
            fontSize: "16px",
            fontWeight: 900,
            marginBottom: "-6px",
          }}
          id="alert-dialog-title"
        >
          Session Expired
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: "center", color: "#697586" }} id="alert-dialog-description">
            Please Login again to continue.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{color:"#1c2455",}} autoFocus>
            Login Again
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DailogBox;
