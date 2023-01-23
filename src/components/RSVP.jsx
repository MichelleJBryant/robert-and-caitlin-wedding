import { Box, Typography, Divider, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ButtonFilled from "./Button";
import { ChevronRight } from "@mui/icons-material";
const RSVP = () => {
  return (
    <Box
      onClick={() => window.open("www.google.com")}
      padding={1}
      borderColor="secondary.light"
      borderRadius={4}
    >
      <Box display="flex" flexDirection="row">
        <Box
          sx={{
            width: 88,
            height: 88,
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "secondary.light",
            marginRight: 2,
            opacity: 0.8,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: 32,
              fontWeight: 400,
              padding: 0,
              margin: 0,
              lineHeight: 0.8,
            }}
          >
            4
          </Typography>
          <Typography
            variant="body2"
            fontSize={12}
            sx={{ textAlign: "center" }}
          >
            AUGUST
          </Typography>
          <Typography
            variant="body2"
            fontSize={12}
            sx={{ textAlign: "center", padding: 0 }}
          >
            2023
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          // width="100%"
          alignItems="center"
          flexDirection="row"
          flexGrow={1}
        >
          <Box>
            <Typography variant="h3" fontSize={24}>
              The Creek
            </Typography>
            <Typography variant="h6">Whitsundays</Typography>
            <Divider color="primary.light" />
            <Typography variant="h6">10:00am</Typography>
          </Box>

          <ChevronRight />
        </Box>
      </Box>
    </Box>
  );
};
export default RSVP;
