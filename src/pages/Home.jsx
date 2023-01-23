import { Typography, Container, Box } from "@mui/material";
import RSVP from "../components/RSVP";
import backgroundImage from "../images/background.jpg";
import { Slide, Fade } from "react-reveal";
import { useParallax } from "react-scroll-parallax";
import img36 from "../images/img36.jpg";
import lavender from "../images/lavenderbg.png";
import heartRope from "../images/heartrope.png";

const Home = () => {
  const guestOne = "Vincent";
  const guestTwo = "Michelle";
  // const moon = useParallax({
  //   scale: [1, 1.5, "easeInQuad"],
  // });
  // const sun = useParallax({
  //   scale: [1.5, 1, "easeInQuad"],
  // });

  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* <img src={img36} width="100%" /> */}
      <Box
        height={400}
        width={"100%"}
        // zIndex={-1}
        top={0}
        right={0}
        position="absolute"
        // backgroundBlendMode="screen"
        // top={0}
        sx={{
          backgroundImage: `url(${lavender})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: "rotate(180deg)",
          opacity: 0.8,
        }}
      ></Box>
      <Box sx={{ transform: "rotate(-10deg)" }}>
        <Fade duration={5000}>
          <Typography variant="h1" color="neutral.light" fontSize={96}>
            Robert
          </Typography>
          <Box display="flex" flexDirection="row" justifyContent={"center"}>
            <Typography marginLeft={4} variant="h1" fontSize={88}>
              +
            </Typography>
            <Typography
              color="neutral.light"
              variant="h1"
              marginLeft={4}
              fontSize={96}
            >
              Caitlin
            </Typography>
          </Box>
        </Fade>
      </Box>
      {/* <Typography variant="h3">Are getting married</Typography> */}

      {/* <Box position="relative">
      <Typography position="absolute" right={'25%'} top={'25%'}>are tying the knot</Typography>
        <Box
          width={'100%'}
          height={150}
          sx={{
            backgroundImage: `url(${heartRope})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: 0.8
          }}
        ></Box>
     
      </Box> */}
      <Box paddingTop={4}>
        <Fade delay={8000}>
          <Typography variant="body1" sx={{ py: 2 }} textAlign="center">
            {" "}
            INVITE YOU TO CELEBRATE THEIR LOVE AND LIFE TOGETHER IN MARRIAGE ON
          </Typography>
        </Fade>
        <Box>
          <RSVP />
        </Box>
      </Box>

      <Box
        height={400}
        width={"100%"}
        zIndex={-1}
        bottom={0}
        position="absolute"
        // backgroundBlendMode="screen"
        // top={0}
        sx={{
          backgroundImage: `url(${lavender})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      ></Box>
    </Container>
  );
};
export default Home;
