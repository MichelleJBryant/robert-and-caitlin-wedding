import Container from "@mui/material/Container";
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeOptions } from "./components/theme";
import PhotoWall from "./pages/PhotoWall";
import ButtonFilled from "./components/Button";
import SendIcon from "@mui/icons-material/Send";
import { AppBar, Typography, Box, Paper } from "@mui/material";
import Travel from "./pages/Travel";
import FAQ from "./pages/FAQ";
import image9 from "./images/image9.jpg";
import img36 from "./images/img36.jpg";
import Fade from "react-reveal/Fade";
import { ParallaxBanner } from "react-scroll-parallax";
import { Slide } from "react-reveal";
import { ParallaxProvider } from "react-scroll-parallax";
import Leaves from "./images/leaves.png";
import Landing from "./pages/Landing";

import creamBackground from './images/creambackground.jpg';

const theme = createTheme(themeOptions);

// backgroundImage: `url(${Leaves})`,
// backgroundSize: "cover", backgroundImage: `url(${creamBackground})`, opacity: 0.3 
function App() {
  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <Container
          sx={{ marginBottom: "70px", padding: 0,  }}
        >
        {/* <Box zIndex={-1} height="100%" sx={{}}>
        </Box> */}
          <Home />
          <Landing />
          {/* <ParallaxBanner
            style={{ height: "100vh" }}
            layers={[
              { image: img36, speed: -20 },
              // { image: image9, speed: -10 },

              {
                // speed: -10,
                children: (
                  <Fade>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 120,
                        right: 0,
                        // paddingY: 6,
                        transform: "rotate(-30deg)",
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{ fontSize: 80 }}
                        color="neutral.main"
                      >
                        About time!{" "}
                      </Typography>
                      <Typography
                        variant="h1"
                        sx={{ fontSize: 80 }}
                        color="neutral.main"
                      >
                        XOXO
                      </Typography>
                    </Box>
                  </Fade>
                ),
              },
            ]}
            // className="aspect-[2/1]"
          ></ParallaxBanner> */}
          <Itinerary />
          <PhotoWall />
          <FAQ />
          <Travel />

          <Paper
            // elevaton={3}
            sx={{
              border: "1px solid",
              borderColor: "secondary.light",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              left: 0,
              right: 0,
              bottom: 0,
              flexGrow: 1, 
              // width: "100%",
              position: "fixed",
              // left: 0,
              // right: 0,
            }}
          >
            <ButtonFilled
              sx={{ my: 2 }}
              variant="contained"
              startIcon={<SendIcon />}
            >
              RSVP
            </ButtonFilled>
          </Paper>
     
        </Container>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
