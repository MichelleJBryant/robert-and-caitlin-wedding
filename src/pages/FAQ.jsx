import { Container, Typography, Box, Button, Divider } from "@mui/material";
import hay from "../images/hay.png";
import ButtonFilled from "../components/Button";
import Leaves from "../images/leaves.png";
import PinkLeaves from "../images/pinkleaves.jpeg";

const FAQ = () => {
  return (
    <Container
      // backgroundColor="secondary.light"
      sx={{
        // py: 6,
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
        // justifyContent: "center",
        // backgroundColor: 'secondary.light'
      }}
    >
      <Box
        backgroundColor="secondary.light"
        width="100%"
        height={200}
        margin={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundSize: "cover", backgroundImage: `url(${Leaves})` }}
      >
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Q + A
        </Typography>
      </Box>
      <Box padding={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ py: 2 }}>
            <Typography variant="body2" fontSize={18} py={2}>
              What is the gifty registry?
            </Typography>
            <Typography variant="body1">
              We appreciate you wanting to give gifts, but all we require is
              just your precense at the day. If you do feel like you want to
              give a gift, then please send either cash or gift cards.{" "}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ py: 2 }}>
            <Typography variant="body2" py={2} fontSize={18}>
              Can I bring my car and park at the venue?{" "}
            </Typography>
            <Typography variant="body1">
              There is no parking at the venue, so we have provided a shuttle
              bus to and from the venue. Please indicate what address you need
              pickup from.{" "}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection={"row"} alignItems="center">
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h2" margin={0}>
              Don't see your question?
            </Typography>
            <Typography variant="body1">
              Don't bail out just ask your question here!
            </Typography>
            {/* <Button onClick={() => window.open('http://m.me/3567020143372417')} sx={{ borderRadius: 4}} variant="outlined">Contact Catilin</Button> */}
          </Box>
          <img src={hay} height={160} />
        </Box>
      </Box>
    </Container>
  );
};

export default FAQ;
