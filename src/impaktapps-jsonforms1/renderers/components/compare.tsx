import React from "react";
import { Avatar, Box, Button, Grid, Table, TableBody, TableHead, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Crown from "../../../assets/crown.gif";
import Anjali from "../../../assets/anjali.png";
import { Stack } from "@mui/system";
import Raghav from "../../../assets/ragha2.jpg"
const CompareYourself = ({ uischema}: any) => {
  const uischemaData = uischema?.config?.main;
  const StyledTypography = styled(Typography)(({ theme }) => ({
    backgroundColor:"#272953",
    textAlign:"center",
    borderRadius:"10px",
    padding:"5px"
  }));
function createData(
  Name: string,
  Rank: number,
  Policy: number,
  Compare:any,
  polic:any
) {
  return { Name, Rank, Policy, Compare,polic };
}

const rows = [
  createData('Vivek', 159, 6.0, <Button fullWidth >Compare</Button>,3),
  createData('Sidd', 237, 9.0, <Button >Compare</Button>,4),
createData('Vikas Tomar', 262, 16.0,<Button >Compare</Button>,9),
  createData('Sattu', 305, 3.7, <Button >Compare</Button>,7),
  createData('Lalit', 356, 16.0, <Button >Compare</Button>,1),
  createData('Lalit', 356, 16.0, <Button >Compare</Button>,6),
  createData('Lalit', 356, 16.0, <Button >Compare</Button>,6),
  createData('Lalit', 356, 16.0, <Button >Compare</Button>,4),
  createData('Lalit', 356, 16.0, <Button >Compare</Button>,5),
  createData('Lalit', 356, 16.0, <Button >Compare</Button>,4),
];
  return (
    <Grid2
      container
      justifyContent={"space-between"}
      sx={{
        borderRadius: "18px",
        background: "#272953",
        color: "white",
        margin: "auto",
        paddingTop: "none",
        backgroundSize:"100% 100%",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ margin: "auto" }}
      >
        <Box
          sx={{
            mb: "50px",
            position: "relative",
            display: { xs: "block", sm: "none" },
            width: 220,
            height: 300,
          }}
        >
          <img
            src={"/Images/crown.gif"}
            style={{ position: "absolute", top: 0, zIndex: 4 }}
            alt="crown"
            width={220}
            height={100}
          />

          <Avatar
            alt="Satendra_Raghav"
            src={Raghav}
            sx={{
              border: "10px solid #F0B213",
              width: 120,
              height: 120,
              position: "absolute",
              top: 55,
              right: 42,
            }}
          />
          <Avatar
            sx={{
              backgroundColor: "#F0B213",
              fontSize: "25px",
              fontWeight: "bolder",
              color: "white",
              width: 40,
              height: 40,
              position: "absolute",
              top: 170,
              right: 95,
            }}
          >
            1
          </Avatar>
          <Box
            sx={{
              position: "absolute",

              top: 220,
              textAlign: "center",
              width: "100%",
            }}
          >
            <Typography sx={{ fontWeight: "bolder", fontSize: "20px" }}>
              Satendra Raghav
            </Typography>
            <Typography sx={{}}>Policy Comp. : 120 </Typography>
            <Button variant="contained" sx={{borderRadius:"10px"}}>Compare</Button>
          </Box>
        </Box>
        <Box
          sx={{
            pt: { xs: "none", sm: "130px" },
            width: { xs: 220, sm: 150, md: 220 },
          }}
        >
          <Box
            sx={{
              height: 240,
              position: "relative",
              width: { xs: 220, sm: 150, md: 220 },
            }}
          >
            <Avatar
              alt=""
              src={Raghav}
              sx={{
                border: "10px solid #F0B213",
                width: 100,
                height: 100,
                position: "absolute",
                top: 0,
                right: { xs: 60, sm: 25, md: 60 },
              }}
            />
            <Avatar
              sx={{
                backgroundColor: "#F0B213",
                fontSize: "15px",
                fontWeight: "bolder",
                color: "white",
                width: 30,
                height: 30,
                position: "absolute",
                top: 80,
                right: { xs: 101, sm: 67, md: 91 },
              }}
            >
              2
            </Avatar>
            <Box
              sx={{
                position: "absolute",
                top: 130,
                textAlign: "center",
                width: "100%",
              }}
            >
              <Typography sx={{ fontWeight: "bolder", fontSize: "20px" }}>
                Anajli Gupta
              </Typography>
              <Typography sx={{}}>Policy Comp. : 120 </Typography>
              <Button variant="contained" sx={{borderRadius:"10px"}}>Compare</Button>
            </Box>
          </Box>
          </Box>
          <Box
          sx={{
            // mt: "50px",
            position: "relative",
            display: { xs: "none", sm: "block" },
            width: 220,
            height: 300,
          }}
        >
          <img
            src={Crown}
            style={{ position: "absolute", top: 0,left:10, zIndex: 4 }}
            alt="crown"
            width={220}
            height={100}
          />

          <Avatar
            alt="Satendra_Raghav"
            src={Raghav}
            sx={{
              border: "10px solid #F0B213",
              width: 120,
              height: 120,
              position: "absolute",
              top: 55,
              right: 42,
            }}
          />
          <Avatar
            sx={{
              backgroundColor: "#F0B213",
              fontSize: "25px",
              fontWeight: "bolder",
              color: "white",
              width: 40,
              height: 40,
              position: "absolute",
              top: 150,
              right: 85,
            }}
          >
            1
          </Avatar>
          <Box
            sx={{
              position: "absolute",

              top: 220,
              textAlign: "center",
              width: "100%",
            }}
          >
            <Typography sx={{ fontWeight: "bolder", fontSize: "20px" }}>
              Satendra Raghav
            </Typography>
            <Typography sx={{}}>Policy Comp. : 120 </Typography>
            <Button variant="contained" sx={{borderRadius:"10px"}}>Compare</Button>
          </Box>
        </Box>

        <Box
          sx={{
            pt: { xs: "none", sm: "150px" },
            width: { xs: 220, sm: 150, md: 220 },
          }}
        >
          <Box
            sx={{
              height:240,
              position: "relative",
              width: { xs: 220, sm: 150, md: 220 },
            }}
          >
            <Avatar
              alt=""
              src={Anjali}
              sx={{
                border: "10px solid #F0B213",
                width: 100,
                height: 100,
                position: "absolute",
                top: 0,
                right: { xs: 60, sm: 25, md: 60 },
              }}
            />
            <Avatar
              sx={{
                backgroundColor: "#F0B213",
                fontSize: "15px",
                fontWeight: "bolder",
                color: "white",
                width: 30,
                height: 30,
                position: "absolute",
                top: 80,
                right: { xs: 101, sm: 67, md: 91 },
              }}
            >
              3
            </Avatar>
            <Box
              sx={{
                position: "absolute",
                top: 130,
                textAlign: "center",
                width: "100%",
              }}
            >
              <Typography sx={{ fontWeight: "bolder", fontSize: "20px" }}>
                Anjali Sharma
              </Typography>
              <Typography sx={{}}>Policy Comp. : 120 </Typography>
              <Button variant="contained" sx={{borderRadius:"10px"}}>Compare</Button>
            </Box>
          </Box>
        </Box>
      </Stack>
      <TableContainer  component={Paper} sx={{borderRadius:"30px",margin:"auto",maxWidth:800,maxHeight:500 }}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
         
          <TableRow sx={{borderBottom:"none",backgroundColor:"#3FB4F9",borderRadius:"20px"}}>
            <TableCell sx={{color:"#3FB4F9"}}><StyledTypography>Name</StyledTypography></TableCell>
            <TableCell sx={{color:"#3FB4F9"}}><StyledTypography>Rank</StyledTypography></TableCell>
            <TableCell sx={{color:"#3FB4F9"}}>
            <StyledTypography>Policy</StyledTypography>
            </TableCell>
            <TableCell sx={{color:"#3FB4F9"}}>
            <StyledTypography>Compare</StyledTypography>
            {/* <Button variant="contained" sx={{borderRadius:"10px"}}>Compare</Button> */}
              </TableCell>
              <TableCell sx={{color:"#3FB4F9"}}>
            <StyledTypography>Polic</StyledTypography>
            </TableCell>
            <TableCell sx={{color:"#3FB4F9"}}>
            <StyledTypography>Policy</StyledTypography>
            </TableCell>
            <TableCell sx={{color:"#3FB4F9"}}>
            <StyledTypography>Policy</StyledTypography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{
                // "&:last-child td, &:last-child th": { border: 0 },
                // border: 0,
                border:"1px solid gray",
                backgroundColor:"#16113A",
                borderRadius:"20px"
              }}
            >
              <TableCell component="th" sx={{color:"white",fontWeight:"bolder"}} scope="row">
             <Stack direction="row" spacing={4}>
              <Box>
              <Avatar
                sx={{
                backgroundColor:"#3FB4F9",
                }}
                >
                  {row.Name[0]}
                </Avatar>
                </Box>
                <StyledTypography sx={{paddingX:"20px"}}> {row.Name}</StyledTypography>
                </Stack>
              </TableCell>
              <TableCell sx={{color:"white"}}><StyledTypography>{row.Rank}</StyledTypography></TableCell>
              <TableCell sx={{color:"white"}}><StyledTypography>{row.Policy}</StyledTypography></TableCell>
              <TableCell sx={{color:"white"}}><StyledTypography>{row.Compare}</StyledTypography></TableCell>
              <TableCell sx={{color:"white"}}><StyledTypography>{row.polic}</StyledTypography></TableCell>
              <TableCell sx={{color:"white"}}><StyledTypography>{row.Policy}</StyledTypography></TableCell>
              <TableCell sx={{color:"white"}}><StyledTypography>{row.Policy}</StyledTypography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid2>
  );
};

export default CompareYourself;
