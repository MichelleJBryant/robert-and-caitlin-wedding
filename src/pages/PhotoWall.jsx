import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container, Typography, Box } from "@mui/material";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import { Fade } from "react-reveal";
import { useTrail, a } from "@react-spring/web";
import { useState } from "react";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const [open, set] = useState(true);

  const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };
  return (
    <Container sx={{ position: "relative", height: "100vh" }}>
      <Box
        // backgroundColor="primary.light"
        height="100%"
        position="absolute"
        // left={0}
      justifyContent="center"
      alignItems="center"
        width="100%"
      
        zIndex={1}
        sx={{
          mixBlendMode: "overlay",
        }}
      >
        <Typography
          variant="h3"
          color="secondary.light"
          // sx={{ position: "absolute", top: 0, zIndex: 10 }}
        >
          Ten
        </Typography>
        <Typography
          variant="h3"
          color="neutral.main"
          // sx={{ position: "absolute", top: 0, zIndex: 10 }}
        >
          years
        </Typography>
        <Typography
          variant="h3"
          color="neutral.main"
          // sx={{ position: "absolute", top: 0, zIndex: 10 }}
        >
          in the
        </Typography>
        <Typography
          variant="h3"
          color="transparent"
          sx={{ backgroundBlendMode: "screen", opacity: 0.5 }}
          // sx={{ position: "absolute", top: 0, zIndex: 10 }}
        >
          making
        </Typography>
      </Box>

      <ImageList
        sx={{ width: "100%", height: 750,   mixBlendMode: "multiply", }}
        variant="quilted"
        cols={4}
        rowHeight={120}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: image1,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: image2,
    title: "Burger",
  },
  {
    img: image3,
    title: "Camera",
  },
  {
    img: image4,
    title: "Coffee",
    cols: 2,
  },
  {
    img: image5,
    title: "Hats",
    cols: 2,
  },
  {
    img: image6,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: image7,
    title: "Basketball",
  },
  {
    img: image8,
    title: "Fern",
  },
  {
    img: image10,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: image11,
    title: "Tomato basil",
  },
  {
    img: image12,
    title: "Sea star",
  },
  {
    img: image13,
    title: "Bike",
    cols: 2,
  },
];
