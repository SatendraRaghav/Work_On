import React, { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { textStyle, ButtonStyle } from "./Login/style";
import Button from "@mui/material/Button";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import { loginService } from "./service/service";

function PasswordReset(props) {
  const token = props.url.match(/token=([^&]+)/);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const myLoginService = loginService();

  const getUserDetail = async function (): Promise<any> {
    return await myLoginService
      .get("/password/userDetail?token=" + token[1])
      .then((res) => {
        return { username: res.data.username, userId: res.data.userId };
      })
      .catch((er) => {
        if (er.response.data.payload) {
          for (const [index, element] of er.response.data.payload.entries()) {
            setMessage(element.message);
            setAlert(true);
          }
        }
        setAlert(true);
      });
  };

  const resetPasswordHandler = async function () {
    await getUserDetail().then((res) => {
      if (res.username) {
        const data = {
          userName: res.username,
          userId: res.userId,
          newPassword: newPassword,
          token: token[1],
          confirmPassword: confirmPassword,
          currentPasswordRequired: false,
        };

        myLoginService
          .post("/password/reset", data)
          .then((res) => {
            setAlert(true);
            setMessage("Password Reset Successfull");
            window.history.pushState(100, "", "/home");
          })
          .catch((er) => {
            if (er.response.data.payload) {
              for (const [
                index,
                element,
              ] of er.response.data.payload.entries()) {
                setMessage(element.message);
                setAlert(true);
              }
            }
            setAlert(true);
          });
      } else {
        setAlert(true);
        setMessage("Reset Token Expired Or Already Used");
        window.history.pushState(100, "", "/home");
      }
    });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setAlert(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Box
      sx={{
        paddingTop: { xs: "15vh", sm: "20vh", md: "10vh" },
        paddingBottom: "60px",
        background: "white",
        width: "60%",
        margin: "auto",
      }}
    >
      <Grid2
        xs={8}
        justifyContent="center"
        sx={{
          borderRadius: "20px 20px 0 0",
          paddingBottom: "70px",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <img
          src={"hyperformLogo.jpg"}
          alt="Hyperform-Logo"
          width={280}
          height={40}
          style={{ margin: "auto" }}
        />
      </Grid2>
      <Grid2
        sx={{ maxWidth: "50%", margin: "auto auto", padding: "40px auto" }}
        rowSpacing={6}
        justifyContent="center"
        container
        alignItems="center"
      >
        <Grid2 xs={10}>
          <TextField
            required={true}
            autoFocus={true}
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            type="password"
            fullWidth
            label={"New Password"}
            size={"medium"}
            variant={"outlined"}
          />
        </Grid2>
        <Grid2 xs={10}>
          <TextField
            required={true}
            autoFocus={true}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="password"
            fullWidth
            label={"Confirm Password"}
            size={"medium"}
          />
        </Grid2>
        <Grid2 xs={10}>
          <Button
            sx={{ ...ButtonStyle, width: "40%", height: "36px" }}
            onClick={resetPasswordHandler}
          >
            CONTINUE
          </Button>

          <Snackbar
            open={alert}
            autoHideDuration={4000}
            onClose={() => setAlert(false)}
            action={action}
          >
            <Alert
              onClose={() => setAlert(false)}
              severity="info"
              action={action}
            >
              {message}
            </Alert>
          </Snackbar>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default PasswordReset;
