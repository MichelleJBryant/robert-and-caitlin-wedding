import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import {
  NightlifeRounded,
  AirportShuttleRounded,
  ChurchRounded,
  SportsCricketRounded,
  Title,
} from "@mui/icons-material";
import { Container, ListItemSecondaryAction, Typography, Box } from "@mui/material";

const TimelineSection = ({ icon, text, colored, title, time }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto" }}
        // align="right"
        variant="body2"
        color="text.secondary"
      >
        {time}
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector />
        {/* <TimelineDot color={colored ? "primary" : "secondary"} variant={colored ? "filled" : 'outlined'}>{icon} </TimelineDot> */}
        {/* <TimelineConnector /> */}
      </TimelineSeparator>

      <TimelineContent  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 0}}>
        <Box sx={{ backgroundColor: colored && "secondary.light", padding: 3, }}>
        <Typography variant={colored ? "h2" : "body2"}>
          {title}
        </Typography>
      
        <Typography>{text}</Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineSection;
