import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

 function CustomCard({Data}:any) {
  return (
    <Card sx={{padding:"20px",paddingTop:"30px",display:"flex",msFlexDirection:"column",flexDirection:"column",backgroundColor:"#272953",color:"white",...Data.style.cardStyle}}>
      <div style={{marginBottom:"20px",backgroundColor:"#16113a",color:"white",width:"70%",margin:"auto",borderRadius:"50%",padding:"10px auto",boxShadow:"2px 2px 5px gray",...Data.style.titleContianerStyle}}>
     
          <Typography component={"div"} sx={{fontSize:"85px",marginBottom:"-30px",textAlign:"center",...Data.style.titleStyle}}>{Data.content.cardTitle}</Typography>
          <Typography component={"div"} sx={{fontSize:"20px",textAlign:"center",...Data.style.subTitleStyle}}>{Data.content.cardSubtitle}</Typography>
          {Data.content.comparePrevious&&
        <div style={{float:'right',marginTop:"-20px"}}>
              <Typography component={"div"} sx={{fontSize:"20px",textAlign:"center",...Data.style.subTitleStyle}}>
              <span style={{color:"green",paddingLeft:"10px"}}>
               &#8593;5
            </span>
              </Typography>
        </div>
      }
      </div>
      
      <Box sx={{flexgrow:1}}></Box>
      <div style={{...Data.style.contentContainerStyle}}>
        <Typography sx={{marginBottom:"10px"}}>{Data.content.cardContentSectionName}</Typography>
        <Typography component={"div"} sx={{width:"auto",maxWidth:"45%",backgroundColor:"rgb(63, 180, 249)",color:"black",paddingLeft:"10px",marginBottom:"10px",...Data.style.cardContentHeaderStyle}}>{Data.content.cardContentHeader}</Typography>
        <Typography component={"div"} sx={{...Data.style.cardContentDetailStyle}} variant="caption">{Data.content.cardContentDetail}</Typography>

      </div>  
    </Card>
  );
}
export default CustomCard;

// {
  // const isGain = stock[stock.length-1].close-stock[stock.length-2].close
//   isGain>0?
//   (<span style={{color:"green",paddingLeft:"10px",fontSize:value.style.labelFontSize/4}}>
//   &#8593;  {isGain.toFixed(2)} {value.content.customConditionheading?value.content.customConditionheading:" "}</span>)
//   :(
//  <span style={{color:"red",paddingLeft:"10px",fontSize:value.style.labelFontSize/4}}>
//     &#8595; {isGain.toFixed(2)} {value.content.customConditionheading?value.content.customConditionheading:" "}</span>)
//  }