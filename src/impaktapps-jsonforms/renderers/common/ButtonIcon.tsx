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

export function ButtonIcon(iconName: string, data: any) {
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
        case "ExceptionIcon":
          return  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="24px" height="24px" viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet">
         
         <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
         fill="#f76f6f" stroke="none">
         <path d="M1910 4709 c-879 -101 -1542 -868 -1507 -1744 18 -447 186 -833 497
         -1145 516 -515 1298 -646 1946 -325 l109 54 515 -513 c309 -308 533 -524 560
         -539 100 -56 234 -73 341 -41 203 60 337 274 302 480 -24 138 -19 132 -586
         701 l-520 521 45 89 c428 832 96 1857 -740 2286 -290 149 -639 213 -962 176z
         m480 -219 c192 -39 383 -118 537 -221 100 -66 120 -83 222 -182 218 -214 356
         -467 422 -777 33 -152 33 -429 0 -580 -29 -136 -72 -263 -128 -375 -391 -779
         -1345 -1065 -2097 -629 -121 70 -219 149 -331 265 -198 207 -324 447 -386 739
         -32 151 -32 429 0 580 43 202 116 377 229 550 70 106 288 327 390 394 213 141
         438 226 674 256 116 14 348 5 468 -20z"/>
         <path d="M2013 3903 c-23 -8 -58 -31 -78 -51 -34 -35 -678 -1093 -716 -1177
         -23 -50 -25 -142 -3 -193 19 -47 67 -97 119 -125 37 -21 54 -22 248 -22 l209
         0 30 34 c26 29 30 39 25 75 -4 27 -15 49 -32 63 -25 22 -34 23 -201 23 -102 0
         -183 4 -195 10 -10 6 -19 21 -19 33 0 26 659 1126 684 1142 11 7 21 7 32 0 25
         -16 684 -1116 684 -1142 0 -12 -9 -27 -19 -33 -12 -6 -93 -10 -195 -10 -167 0
         -176 -1 -201 -23 -17 -14 -28 -36 -32 -63 -5 -36 -1 -46 25 -75 l30 -34 209 0
         c194 0 211 1 248 22 52 28 100 78 119 125 22 51 20 143 -3 193 -38 84 -682
         1142 -716 1177 -61 63 -162 83 -252 51z"/>
         <path d="M2064 3441 c-12 -5 -31 -22 -43 -37 -21 -26 -21 -35 -21 -366 0 -274
         3 -344 14 -367 35 -66 137 -66 172 0 11 23 14 93 14 368 l0 341 -27 30 c-30
         32 -75 45 -109 31z"/>
         <path d="M2047 2479 c-22 -13 -47 -61 -47 -93 0 -14 13 -40 29 -58 24 -27 36
         -33 71 -33 35 0 47 6 71 33 16 18 29 44 29 58 0 33 -25 81 -49 94 -25 13 -81
         12 -104 -1z"/>
         </g>
         </svg> ;
    }
  }