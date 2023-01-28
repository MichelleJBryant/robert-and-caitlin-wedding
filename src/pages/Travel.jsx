import * as React from "react";
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Typography from '@mui/joy/Typography';
import {
  Card,
  CardMedia,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  Box,
  Container,
  Link,
} from "@mui/material";
import Carousel from "../components/Carousel";
import fire from "../images/fire.png";
import Leaves from '../images/leaves.png'
import lavender from "../images/lavenderbg.png"
import greenBackground from "../images/greenbackground.png"
const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Airlie Beach Lagoon",
    description: "Man made lagoon in the heart of Airlie Beach",
    link: "https://www.tripadvisor.com.au/Attractions-g261596-Activities-Airlie_Beach_Queensland.html",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Heart Reef",
    description: "4.74M views",
    link: "",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
    link: "",
  },
];
// backgroundSize: "cover", backgroundImage: `url(${Leaves})`
// https://www.tripadvisor.com.au/Attractions-g261596-Activities-Airlie_Beach_Queensland.html
export default function Travel() {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin:0 }}
      // backgroundColor="secondary.light"
    >
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
          backgroundImage: `url(${greenBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // transform: "rotate(180deg)",
          opacity: 0.5,
        }}
      ></Box>
      <Box
        height={500}
        width={"100%"}
        zIndex={1}
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
        <img src={fire} height={150} />
      <Typography variant="h1">Stay + Do</Typography>
      <Typography variant="body1" sx={{py: 4}}>
        There will be some things to do in airlie beach
      </Typography>

      <Box
        sx={{
          paddingBottom: 3,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: 24 }}>Stay</Typography>
        <Link href="https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaA-IAQGYAQm4AQfIAQzYAQHoAQGIAgGoAgO4At38kp4GwAIB0gIkNmEzMTcyNTItMjhjYi00YTAwLWI1N2EtZDdhYjJiYTNmNmM52AIF4AIB&sid=d52ec9a678a710b10a2dbd2d9e750c46&keep_landing=1&sb_price_type=total&" target="_blank" underline="always">
        More
      </Link>
      </Box>

      <Carousel data={data} />

      <Box
       paddingBottom={3}

        sx={{
          paddingTop: 4,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: 24 }}>
          Do
        </Typography>
        <Link href="https://www.tripadvisor.com.au/Attractions-g261596-Activities-Airlie_Beach_Queensland.html" target="_blank" underline="always">
          More
        </Link>
      </Box>
      <Carousel data={data} />
    </Container>
  );
}
