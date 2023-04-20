import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { Box } from "@mui/system";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { actions, DataContext } from "../../../Context";
import Logo from "../../../assets/Act21-logo.png";
import { useJsonForms } from "@jsonforms/react";
import { setSchema } from "@jsonforms/core";

export const CustomAppbar = ({ Data }: any) => {
  const ctx = useJsonForms();
  const { dispatch, state, objFunc, setFormdata, setUiSchema, setSchema } =
    useContext(DataContext);
    const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2vh", ...Data.style }}>
      <AppBar position="static" color={Data.content.color || "primary"}>
        <Toolbar>
          <IconButton
            size="large"
            color={"inherit"}
            sx={{ width: "20vw", paddingLeft: "150px", mr: 2 }}
          >
            <img src={Logo} alt="company Image" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {Data.content.page ? (
            <Link
              to={`/${Data.content.page}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color={Data.content.color || "primary"}
                sx={{ display: { xs: "none", sm: "inline-block" } }}
                onClick={() => {
                  objFunc
                    .getServices(
                      Data.content?.page,
                      ctx,
                      setFormdata,
                      setUiSchema,
                      setSchema,
                      navigate,
                      [searchParams,setSearchParams]
                    )
                    [Data.content.funcName]();
                }}
              >
                {Data.content.ButtonName}
              </Button>
            </Link>
          ) : (
            <Button
              variant="contained"
              color={Data.content.color || "primary"}
              sx={{ display: { xs: "none", sm: "inline-block" } }}
              onClick={() => {
                objFunc
                  .getServices(
                    Data.content?.page,
                    ctx,
                    setFormdata,
                    setUiSchema,
                    setSchema,
                    navigate,
                    [searchParams,setSearchParams]
                  )
                  [Data.content.funcName]();
              }}
            >
              {Data.content.ButtonName}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
