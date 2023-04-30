import React from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext, actions } from "../../../Context";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
// //@ts-ignore
// import EditNoteIcon from "@mui/icons-material/EditNote";
import DownloadIcon from "@mui/icons-material/Download";
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from "@mui/icons-material/Edit";
import AddNoteIcon from "@mui/icons-material/PlaylistAdd";
import ApproveIcon from "@mui/icons-material/TaskAltOutlined";
import RejectIcon from "@mui/icons-material/ClearTwoTone";
import BackIcon from "@mui/icons-material/ReplyTwoTone";
import BackIcon2 from "@mui/icons-material/ArrowBackIosNewTwoTone";
import { useJsonForms } from "@jsonforms/react";
import { IconButton } from "@mui/material";
import { IconStyle } from "../../../Styles/InputField";
import { useStyles } from "../../../Styles/InputField";
import { Buttonstyle } from "../../../Styles/InputField";

export const CustomButton = ({ data, path }: any) => {
  const { setFormdata, objFunc, setUiSchema, setSchema, id } =
    useContext(DataContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const ctx = useJsonForms();
  const myIconComponent = myIcon(data.content.icon,data);
  const myStyle = data.content.styleDefault ? IconStyle : {};
  const MyButton = data.content.icon ? (
    <IconButton
      sx={{ ...myStyle, ...data.style }}
      size={data.content.size || "medium"}
      color={data.content.color}
      onClick={(e) => {
        objFunc
          .getServices(id, ctx, setFormdata, setUiSchema, setSchema, navigate, [
            searchParams,
            setSearchParams,
          ])
          .then((res: any) => {
            res[data.content.funcName]();
          });
      }}
    >
      {myIconComponent}
    </IconButton>
  ) : (
    <Button
      fullWidth={true}
      endIcon={data.content.endIcon ? myIcon(data.content.endIcon) : false}
      startIcon={
        data.content.startIcon ? myIcon(data.content.startIcon) : false
      }
      sx={{ ...Buttonstyle, ...data.style }}
      variant={data.content.variant || "contained"}
      size={data.content.size || "medium"}
      onClick={(e) => {
        objFunc
          .getServices(id, ctx, setFormdata, setUiSchema, setSchema, navigate, [
            searchParams,
            setSearchParams,
          ])
          .then((res: any) => {
            res[data.content.funcName]();
          });
      }}
    >
      {data.content.name}
    </Button>
  );
  return (
    <>
      {data.content.page ? (
        <Link to={`/${data.content.page}`} style={{ textDecoration: "none" }}>
          {MyButton}
        </Link>
      ) : (
        <>{MyButton}</>
      )}
    </>
  );
};

export function myIcon(iconName: string,data:any) {
  switch (iconName) {
    case "DeleteIcon":
      return <DeleteIcon />;
    case "SendIcon":
      return <SendIcon />;
    case "AddIcon":
      return <AddNoteIcon />;
    case "EditIcon":
      return <EditIcon />;
    case "ApproveIcon":
      return <ApproveIcon />;
    case "RejectIcon":
      return <RejectIcon />;
    case "BackIcon":
      return <BackIcon />;
    case "BackIcon2":
      return <BackIcon2 />;
      case "PersonIcon":
        return <PersonIcon sx={{...data?.iconStyle}}/>;
        case "DownloadIcon":
        return <DownloadIcon />;
  }
}
