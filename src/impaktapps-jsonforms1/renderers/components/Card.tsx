import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardHeader } from "@mui/material";
import { inputProps } from "../interface/inputfieldProps";

export default function ImpaktAppsCard(props:inputProps) {
    const { data, handleChange, uischema, path, errors, required } = props;
    const uischemaData:any = uischema?.config?.main;
  return (
    <>
     
      <div
        style={{
          backgroundColor: "#ebebff",
          display: "flex",
          justifyContent: "flex-start",
          gap: "6px",
        }}
      >
        
        <Card
          sx={{
            maxWidth: 300,
            position: "relative",
          
            borderRadius: "12px",
            boxShadow: "5px 5px 10px grey",
            background:"#eef2f6",
            ...uischema?.config?.style 
          }}
        >
            {/* <CardHeader>
     {uischemaData?.label||"Rewards :"} 
            </CardHeader> */}
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.onlinewebfonts.com/svg/img_296570.png"
              style={{ objectFit: "contain",paddingTop:"15px" }}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                sx={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  backgroundColor: "rgb(57, 73, 171)",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px 12px 4px 25px",
                //   borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                {"#"+uischemaData?.rank||"#"}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  color: "white",
                  backgroundColor: "rgb(57, 73, 171)",
                  padding: "0px 12px",
                  display: "inline-block",
                  borderRadius: "8px",
                }}
              >
                {uischemaData?.name}
              </Typography>
              <Typography
              
                variant="body2"
                color="text.secondary"
                sx={{
                  maxHeight: 100,
                  fontSize: "15px",
                 fontWeight:500,
                //   padding: "4px 4px",
                  color: "gray",
                  overflow: "auto",
                  wordWrap: "break-word",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {uischemaData.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
