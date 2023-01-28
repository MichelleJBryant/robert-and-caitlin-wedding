import { Container, Typography, Box, Button, Divider } from "@mui/material";
import hay from "../images/hay.png";
import ButtonFilled from "../components/Button";
import Leaves from "../images/leaves.png";
import PinkLeaves from "../images/pinkleaves.jpeg";
import greenBackground from "../images/greenbackground.png"
const FAQ = () => {
  return (
    <Container
    sx={{ padding: 0, margin: 0, position: 'relative', backgroundSize: "cover", backgroundImage: `url(${greenBackground})` }}
 
      // backgroundColor="secondary.light"
  
    >
  
      <Box
   
        display="flex"
        flexDirection="column"
        justifyContent="center"
        padding={2}
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
              just your precense for the day. If you do feel like you want to
              give a gift, then please send either cash or gift cards.{" "}
            </Typography>
          </Box>
     
          <Box sx={{ py: 2 }}>
            <Typography variant="body2" py={2} fontSize={18}>
              Can I bring my car and park at the venue?{" "}
            </Typography>
            <Typography variant="body1">
              There is no parking at the venue. We have provided a shuttle bus
              to and from the venue. Please indicate what address you need
              pickup from.{" "}
            </Typography>
          </Box>
        </Box>




        <Box backgroundColor="primary.light" borderRadius={4} marginTop={4} padding={3}>
        <Typography variant="h2" textAlign="center">
          Have more questions?
        </Typography>
        <Box
          display="flex"
          flexDirection={"row"}
          alignItems="center"
          justifyContent="flex-start"
        >
   
            <Typography variant="body1" width={'60%'}>
              Don't bail out just ask your question here!
            </Typography>
    
          <Box sx={{ mixBlendMode: 'multiply'}} position="absolute" right={0} marginTop={4}>
          <img src={hay} height={150} />
          </Box>
          
        </Box>
        <Button
          onClick={() => window.open("http://m.me/3567020143372417")}
          sx={{ borderRadius: 4 }}
          variant="outlined"
          width="100%"
          // color="neutral.main"
        >
          Contact
        </Button>
      </Box>
    
      </Box>


    </Container>
  );
};

export default FAQ;
