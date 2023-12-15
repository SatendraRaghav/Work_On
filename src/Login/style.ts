export const ButtonStyle = {
  borderRadius: "5px",
  color: "white",
  background: "#f15928",
  padding: "8px 36px",
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    background: "#f15928",
    boxShadow: "1px 1px 2px gray",
    fontWeight: 700,
  },
};
export const textStyle = {
  "& .MuiInputBase-root": {
    color: "black",
    fontWeight: 500,
    background: "white",
    fontFamily: "inherit",
    borderRadius: "20px",
  },
  "& .MuiInputBase-input": {
    fontSize: "16px",
    fontFamily: "roboto",
    padding: "14px",
  },
  "& .MuiInputLabel-root": {
    color: "white",
    fontFamily: "Roboto",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: `2.5px solid #f15928`,
    },
  },
  "& label": {
    fontSize: "14px",
    fontFamily: "inherit",
  },
  "& label.MuiInputLabel-shrink": {
    color: "#364152",
  },
};
