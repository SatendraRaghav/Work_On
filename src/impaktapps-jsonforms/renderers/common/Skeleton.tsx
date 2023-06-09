import {
    Box,
    LinearProgress,
    Skeleton,
    Typography,
    TypographyProps,
  } from "@mui/material";
 const variants = [
    "h1",
    "h3",
    "body1",
    "body1",
    "h3",
    "caption",
  ] as readonly TypographyProps["variant"][];
const CommonSkeleton = () => {
  return (
    <>
            <LinearProgress />
            <Box sx={{ width: "60vw", height: "100vh", margin: "auto auto" }}>
              {variants.map((variant, i) => (
                <Typography component="div" key={variant} variant={variant}>
                  <Skeleton height={120} />
                </Typography>
              ))}
            </Box>
          </>
  )
}

export default CommonSkeleton;