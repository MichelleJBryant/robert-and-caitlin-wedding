import { useRef } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { timelineContentClasses } from "@mui/lab/TimelineContent";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import creamBackground from "../images/creambackground.jpg";
import brownCircle from '../images/browncircle.png';
import {
  NightlifeRounded,
  AirportShuttleRounded,
  ChurchRounded,
  SportsCricketRounded,
  NightlightRound,
  NightlightRounded,
} from "@mui/icons-material";
import {
  Container,
  ListItemSecondaryAction,
  Typography,
  Grow,
  Box,
} from "@mui/material";
import { useIsVisible } from "../hooks/helpers";
import TimelineSection from "../components/TimelineSection";
import { Fade } from "react-reveal";
import { useParallax } from "react-scroll-parallax";
import boots from "../images/boots.png";
import cow from "../images/cow.png";
// const parallax = useParallax<HTMLDivElement>({
//   easing: 'easeOutQuad',
//   translateX: [0, 100],
// });
// return <div ref={parallax.ref} />;
// return (
//   <div ref={ref}>
//     <p>{isVisible ? "Visible" : "Not visible"}</p>
//   </div>
// );

const Itinerary = () => {
  // const ref = useRef();
  // const isVisible = useIsVisible(ref);
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      easing: "easeOutQuad",
      translateY: [0, 100],
    };
  return (
    <Container
      sx={{
        // height: "100vh",
        py: 4,
        display: "flex",
        flexDirection: "column",

        // alignItems: "center",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={"row"}
      >
        <Typography variant="h1" fontSize={64}>
          On the day
        </Typography>
        <img src={cow} width={150} />
      </Box>

      <Timeline
        sx={{
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'flex-start',
          [`& .${timelineContentClasses.root}`]: {
            flex: 100,
          },
        }}
      >
        <Fade top>
          <TimelineSection
            //  ref={parallax.ref}
            icon={<AirportShuttleRounded />}
            title={"Pickup from bus stop"}
            text={
              "There is no parking at the venue. We are providing a shuttle bus pickup and drop off from either the Mantra or from Location B."
            }
            time={"10:00pm"}
          />

          <TimelineSection
            //  ref={parallax.ref}
            icon={<ChurchRounded />}
            title={"Ceremony"}
            // text={"The ceremony"}
            time={"12:00pm"}
            colored
          />

          <TimelineSection
            icon={<SportsCricketRounded />}
            title={"Break"}
            text={"Play some games, have a nap etc"}
            time={"12:00pm"}
          />
          <TimelineSection
            icon={<NightlightRounded />}
            title={"Reception"}
            text={
              "The reception will be held at the same venue as the cermenoy"
            }
            time={"12:00pm"}
            colored
          />
          <TimelineSection
            icon={<AirportShuttleRounded />}
            title={"End of night"}
            text={"There is strict cut off time for 11:00pm"}
            time={"11:00pm"}
          />
        </Fade>
      </Timeline>
      
      <Box
        display="flex"
        py={6}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
      <Box
        // height={400}
        // width={"100%"}
        zIndex={-1}
        // // top={0}
        // // right={0}
        position="absolute"
        left={0}
        // opacity={0.5}
        // // backgroundBlendMode="screen"
        // // top={0}
        sx={{
          // backgroundImage: `url(${brownCircle})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // transform: "rotate(90deg)",
        
          opacity: 0.5,
        }}
      ><img src={brownCircle} height={250}/></Box>
      <Box sx={{mixBlendMode: 'multiply'}} padding={3}>
        <img src={boots} height={120} />
        </Box>
        <Typography variant="h2" fontSize={48}>
          Don't forget your dancing boots!
        </Typography>
      </Box>
    </Container>
  );
};

export default Itinerary;
