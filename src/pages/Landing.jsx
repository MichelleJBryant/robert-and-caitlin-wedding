import { ParallaxBanner } from "react-scroll-parallax";
import img36 from "../images/img36.jpg";
import pinkleaves from "../images/pinkleaves.jpeg";
import { Typography, Box } from "@mui/material";
import Fade from "react-reveal";
import flower from "../images/flower.png";

const Landing = () => {
  const background = {
    image: img36,
    translateY: [0, 100],
    opacity: [1, 0.8],
    scale: [1.05, 1.5, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 50],
    opacity: [0.5, 1],
    scale: [0.5, 2, "easeOutCubic"],
    // shouldAlwaysCompleteAnimation: true,
    // expanded: false,
    children: (
      <Box display="flex" alignItems='center' height="100%" justifyContent="center" sx={{ backgroundBlendMode: 'screen'}}>
        <Typography variant="h1" sx={{ fontSize: 48 }} color="neutral.main" >
         Finally
        </Typography>
        {/* <Typography variant="h1" sx={{ fontSize: 48 }} color="neutral.main">
          XOXO
        </Typography> */}
      </Box>
    ),
  };

  const foreground = {
    image: flower,
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-white-900"  />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline ]}
      style={{ height: "100vh" }}
    />
  );
};

export default Landing;
