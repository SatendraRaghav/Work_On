import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import HttpsIcon from "@mui/icons-material/Https";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import { loginService } from "../service/service";
import { ButtonStyle } from "./style";
import { textStyle } from "./style";
import "../App.css";
import { CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { handleErrors } from "@/utils/handleErrors";
import PasswordReset from "@/PasswordReset";

const ProgressBar = (
  <CircularProgress
    size={24}
    sx={{
      color: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: "-12px",
      marginLeft: "-12px",
    }}
  />
);
const Login = ({ setUserValue }: any) => {
  const [loginID, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");
  const myLoginService = loginService();
  const userLogIn = async function () {
    setLoading(true);
    const data = JSON.stringify({
      payload: {
        username: loginID,
        password: password,
      },
    });
    myLoginService
      .post("/auth/authenticate", data)
      .then((res) => {
        setUserValue(res.data);
        if (window.localStorage.getItem("visitedBefore") !== "true") {
          window.localStorage.setItem("visitedBefore", "true");
        }
        window.history.pushState(100, "", "/Home");
        setLoading(false);
      })
      .catch((er) => {
        setAlert(true);
        setLoading(false);
      });
  };

  const forgotPasswordHandler = async function () {
    if (emailId.length === 0) {
      setMessage("Email Field can't be empty");
      setAlert(true);
      return;
    }

    const data = JSON.stringify({
      emailId: emailId,
      redirectUrl: window.location.href,
    });
    myLoginService
      .post("/password/forgot", data)
      .then((res) => {
        setMessage("Reset Link Sent To Email Id");

        setEmailId("");
        setLoading(false);
        setAlert(true);
      })
      .catch((er) => {
        if (er.response.data.payload) {
          for (const [index, element] of er.response.data.payload.entries()) {
            setMessage(element.message);
            setAlert(true);
          }
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
      }}
    >
      {window.location.pathname.startsWith("/reset") ? (
        <div style={{ marginTop: "10vh", textAlign: "center" }}>
          <PasswordReset url={window.location.href.toString()} />
        </div>
      ) : forgotPassword ? (
        <Grid2
          container
          sx={{
            textAlign: "center",
            background: "white",
            // width: "50%",
            borderRadius: "20px",
            padding: "50px 10px",
            margin: "auto",
          }}
          xs={11}
          sm={6}
          justifyContent={"space-around"}
          gap={4}
        >
          <Typography
            sx={{ textAlign: "center", color: "#403c3b", fontWeight: "bold" }}
          >
            Enter Your Registered Email ID To Continue
          </Typography>
          <Grid2 xs={11} sm={11}>
            <TextField
              required={true}
              autoFocus={true}
              sx={{ ...textStyle, width: { xs: "100%", sm: "80%" } }}
              value={emailId}
              onChange={(event) => setEmailId(event.target.value)}
              type="text"
              fullWidth
              label={"Email Id"}
              size={"medium"}
              variant={"outlined"}
            />
          </Grid2>
          <Grid2
            container
            // spacing={12}
            sx={{
              textAlign: "center",
              width: "80%",
              margin: "auto",
              padding: "0 10px",
            }}
            xs={11}
            justifyContent={"space-around"}
            gap={4}
          >
            <Grid2 xs={5.5} sm={7.5}>
              <Typography
                sx={{
                  textAlign: "right",
                  color: "#f15928",
                  fontSize: "12px",
                  fontWeight: 900,
                  cursor: "pointer",
                  margin: "10px ",
                }}
                onClick={() => {
                  setForgotPassword(false);
                }}
              >
                Back To Login Page
              </Typography>
            </Grid2>
            <Grid2 xs={5} sm={3.5}>
              <Button
                sx={{
                  ...ButtonStyle,
                  width: "90%",
                  height: "36px",
                }}
                onClick={forgotPasswordHandler}
              >
                PROCEED
              </Button>
            </Grid2>
          </Grid2>

          <Snackbar
            open={alert}
            autoHideDuration={4000}
            onClose={() => setAlert(false)}
            action={action}
          >
            <Alert
              onClose={() => setAlert(false)}
              severity="info"
              sx={{ width: "100%" }}
              action={action}
            >
              {message}
            </Alert>
          </Snackbar>
        </Grid2>
      ) : (
        <Box
          sx={{
            width: { xs: "80%", sm: "80%", md: "45%", lg: "35%" },
            margin: "auto",
            borderRadius: "20px",
            background: "white",
          }}
        >
          <Grid2
            sx={{ maxWidth: "100%", margin: "auto auto", padding: "40px auto" }}
            rowSpacing={6}
            justifyContent="center"
            container
          >
            <Grid2
              xs={8}
              justifyContent="center"
              sx={{
                borderRadius: "20px 20px 0 0",
                padding: "none",
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
              xs={8}
              justifyContent="center"
              sx={{
                borderRadius: "20px 20px 0 0",
                padding: "none",
                marginTop: "-20px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#f15928",
                  fontSize: "24px",
                  fontWeight: 900,
                  marginBottom: "10px",
                }}
              >
                {window.localStorage.getItem("visitedBefore")
                  ? "Hi, Welcome Back"
                  : "Hi, Welcome"}
              </Typography>
              <Typography sx={{ textAlign: "center", color: "#697586" }}>
                Enter your credentials to continue
              </Typography>
            </Grid2>
            <Grid2 xs={10}>
              <TextField
                required={true}
                autoFocus={true}
                fullWidth
                sx={textStyle}
                value={loginID}
                onChange={(event) => setLoginId(event.target.value)}
                label={"Login Id"}
                size={"medium"}
                variant={"outlined"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid2>
            <Grid2 xs={10}>
              <TextField
                required={true}
                autoFocus={true}
                sx={{ ...textStyle }}
                type={showPassword ? "text" : "password"}
                fullWidth
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip
                        title={showPassword ? "Hide Password" : "Show Password"}
                      >
                        <IconButton
                          onClick={() => setShowPassword((pre) => !pre)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                  startAdornment: (
                    <InputAdornment position="start">
                      <HttpsIcon />
                    </InputAdornment>
                  ),
                }}
                label={"Password"}
                size={"medium"}
                variant={"outlined"}
              />
            </Grid2>

            <Grid2 xs={10}>
              <Button
                sx={{ ...ButtonStyle, width: "100%", height: "36px" }}
                onClick={userLogIn}
              >
                {loading ? ProgressBar : "LOGIN"}
              </Button>
            </Grid2>
            <Grid2 xs={10}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#f15928",
                  fontSize: "12px",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setForgotPassword(true);
                }}
              >
                Forgot Password
              </Typography>
            </Grid2>
          </Grid2>
          <Snackbar
            open={alert}
            autoHideDuration={2000}
            onClose={() => setAlert(false)}
            action={action}
          >
            <Alert
              onClose={() => setAlert(false)}
              severity="error"
              sx={{ width: "100%" }}
              action={action}
            >
              Invalid username or password / Account Locked.
            </Alert>
          </Snackbar>
        </Box>
      )}
    </Box>
  );
};
export default Login;
