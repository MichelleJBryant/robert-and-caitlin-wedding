import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonFilled = styled(Button)(({ theme }) => ({
  width: 300,
  color: theme.palette.secondary.light,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 24,
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "theme.palette.secondary.light",
    boxShadow: "none",
    opacity: 0.9,
  },
}));

export default ButtonFilled;
