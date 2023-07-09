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
//@ts-ignore
import HyperformLogo from "../assets/hyperformLogo.jpg";
import Grid2 from "@mui/material/Unstable_Grid2";
import HttpsIcon from "@mui/icons-material/Https";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import { loginService } from "../service/service";
import { ButtonStyle } from "./style";
import { textStyle } from "./style";
import "../App.css";

const Login = ({setUserValue}:any) => {
  const [loginID, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const myLoginService = loginService();
  const userLogIn = async function () {
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
      })
      .catch((er) => {});
  };

  return (
    <Box
      sx={{
        paddingTop: { xs: "15vh", sm: "20vh", md: "10vh" },
        paddingBottom: "60px",
      }}
    >
      <Box
        sx={{
          width: { xs: "80%", sm: "80%", md: "45%",lg:"35%" },
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
              src={HyperformLogo}
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
            <Button sx={{ ...ButtonStyle, width: "100%" }} onClick={userLogIn}>
              LOGIN
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};
export default Login;
