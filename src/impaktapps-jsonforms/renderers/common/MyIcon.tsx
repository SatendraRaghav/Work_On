import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import AddNoteIcon from "@mui/icons-material/PlaylistAdd";
import ApproveIcon from "@mui/icons-material/TaskAltOutlined";
import RejectIcon from "@mui/icons-material/ClearTwoTone";
import BackIcon from "@mui/icons-material/ReplyTwoTone";
import BackIcon2 from "@mui/icons-material/ArrowBackIosNewTwoTone";
import SearchIcon from '@mui/icons-material/Search';


export function myIcon(iconName: string, data: any) {
    switch (iconName) {
      case "DeleteIcon":
        return <DeleteIcon  sx={{ ...data?.iconStyle }} />;
      case "SendIcon":
        return <SendIcon sx={{ ...data?.iconStyle }} />;
      case "AddIcon":
        return <AddNoteIcon sx={{ ...data?.iconStyle }}/>;
      case "EditIcon":
        return <EditIcon sx={{ ...data?.iconStyle }} />;
      case "ApproveIcon":
        return <ApproveIcon sx={{ ...data?.iconStyle }}/>;
      case "RejectIcon":
        return <RejectIcon sx={{ ...data?.iconStyle }} />;
      case "BackIcon":
        return <BackIcon sx={{ ...data?.iconStyle }} />;
      case "BackIcon2":
        return <BackIcon2 sx={{ ...data?.iconStyle }} />;
      case "PersonIcon":
        return <PersonIcon sx={{ ...data?.iconStyle }} />;
      case "DownloadIcon":
        return <DownloadIcon sx={{ ...data?.iconStyle }} />;
        case "SearchIcon":
        return <SearchIcon sx={{ ...data?.iconStyle }} />;
    }
  }