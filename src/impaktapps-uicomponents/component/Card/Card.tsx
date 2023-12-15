import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";

import { CardActionArea } from "@mui/material";

export default function ImpaktAppsCard({ value }) {

  const { uischema } = value;
  const uischemaData:any = uischema?.config?.main;
  const uischemaStyle:any = uischema?.config?.style; 

  const rankStyle = {position: "absolute",top: "0px",right: "0px",color: "#0DF3C2",backgroundColor: "#333333",padding: "4px 8px",borderRadius: "3px 12px 4px 14px",fontWeight: "bold",...uischemaStyle?.rank};
  const descriptionStyle = {paddingBottom : "10px",textAlign: 'center' ,maxHeight: 100,fontSize: "15px",fontWeight: "400",color: "gray",overflow: "auto",wordWrap: "break-word","&::-webkit-scrollbar": { display: "none" }, ...uischemaStyle?.description };
  const nameStyle = {color: "#3747A6", backgroundColor: "#eae9e9",marginTop : "8px",padding: "0px 12px",textAlign: "center",borderRadius: "8px",fontWeight : "700", ...uischemaStyle?.name};
  const cardStyle = { boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',minWidth:280,maxWidth: 280,minHeight : 290,maxHeight:290, position: "relative",borderRadius: "12px",...uischemaStyle?.card};
  const containerStyle = {backgroundColor: "#ebebff",display: "flex",justifyContent: "center",alignItems : "center", gap: "10px",padding : "5px" }

return (
  <>
    <Box sx={containerStyle}>
          <Card
              sx={cardStyle}
            >
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
                    sx={rankStyle}
                  >
                    {"# " + uischemaData?.rank ||"#"}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={nameStyle}
                  >
                    {uischemaData?.name}
                  </Typography>
                  <Typography
                  
                    variant="body2"
                    color="text.secondary"
                    sx={descriptionStyle}
                  >
                    {uischemaData?.description}
                  </Typography>
                </CardContent>

              </CardActionArea>
            </Card>         
          </Box>
    </>
  )
}
