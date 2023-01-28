// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { ImageListItemBar } from "@mui/material";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ParallaxBanner } from 'react-scroll-parallax';
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
import Fade from 'react-reveal';
export const Text = () => {
  return (
 
      <Box
    
        position="absolute"
// top={0}
my={2}
        display="flex"
        flexDirection={"column"}
        justifyContent="space-around"
        alignItems="center"
        width="100%"
        height="200%"
        zIndex={100}
        sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, ' +
                  'rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 100%)',
              }}
        // sx={{
        //   mixBlendMode: "overlay",
        // }}
      >
       <Fade>
          <Typography
            variant="h3"
            fontSize={64}
            color="neutral.main"
            // sx={{ position: "absolute", top: 0, zIndex: 10 }}
          >
            Ten
          </Typography>
          <Typography
            variant="h3"
            fontSize={64}
            color="neutral.main"
            // sx={{ position: "absolute", top: 0, zIndex: 10 }}
          >
            years
          </Typography>
          <Typography
            variant="h3"
            fontSize={64}
            color="neutral.main"
            // sx={{ position: "absolute", top: 0, zIndex: 10 }}
          >
            in the
          </Typography>
          <Typography
            variant="h3"
            fontSize={64}
            color="neutral.main"
            sx={{ backgroundBlendMode: "screen" }}
            // sx={{ position: "absolute", top: 0, zIndex: 10 }}
          >
            making
          </Typography>
          </Fade>
      </Box>
  
  )
  };

//  function photowall() {
//     return (
//       <ImageList
//         sx={{
//           width: '100%',
//           height: '100%',
//           // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
//           transform: 'translateZ(0)',
//         }}
//         rowHeight={200}
//         gap={1}
//       >
//         {itemData.map((item) => {
//           const cols = item.featured ? 2 : 1;
//           const rows = item.featured ? 2 : 1;
  
//           return (
//             <ImageListItem key={item.img} cols={cols} rows={rows}>
//               <img
//                 {...srcset(item.img, 250, 200, rows, cols)}
//                 alt={item.title}
//                 loading="lazy"
//               />
//               <ImageListItemBar
//                 sx={{
//                   background:
//                     'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
//                     'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//                 }}
//                 title={item.title}
//                 position="top"
//                 actionPosition="left"
//               />
//             </ImageListItem>
//           );
//         })}
//       </ImageList>
//     );
//   }

//   return (
//     <Container>
//     {photowall()}
//       {/* <ParallaxBanner layers={[title, photowall]} style={{ height: "100vh" }} /> */}
//     </Container>
//   );
// }

// const itemData = [
//   {
//     img: image1,
//     title: "Breakfast",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: image2,
//     title: "Burger",
//   },
//   {
//     img: image3,
//     title: "Camera",
//   },
//   {
//     img: image4,
//     title: "Coffee",
//     cols: 2,
//   },
//   {
//     img: image5,
//     title: "Hats",
//     cols: 2,
//   },
//   {
//     img: image6,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: image7,
//     title: "Basketball",
//   },
//   {
//     img: image8,
//     title: "Fern",
//   },
//   {
//     img: image10,
//     title: "Mushrooms",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: image11,
//     title: "Tomato basil",
//   },
//   {
//     img: image12,
//     title: "Sea star",
//   },
//   {
//     img: image13,
//     title: "Bike",
//     cols: 2,
//   },
// ];


function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const CustomImageList = () => {
  return (
<>
    {Text()}

    <ImageList
      sx={{
        width: '100%',
        height: '100%',
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        // transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
    {/* {Text()} */}
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
        
          <ImageListItem key={item.img} cols={cols} rows={rows}>
          
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            {/* <ImageListItemBar
              // sx={{
              //   background:
              //     'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
              //     'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              // }}
              // title={item.title}
              // position="top"
        
         
            /> */}
            {/* <Typography>Ten years in the making</Typography> */}
          </ImageListItem>
        );
      })}
    </ImageList>
 
    </>
  );
}

export default function PhotoWall() {
  return (
    <>
      {/* {Text()} */}
      {CustomImageList()}
 
    {/* <ParallaxBanner
    layers={[Text]}
    style={{ height: "100%" }}
  /> */}
   </>
  )

}

const itemData = [
  {
    img: image1,
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: image2,
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: image3,
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: image4,
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: image5,
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: image6,
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: image7,
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: image8,
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: image11,
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: image10,
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: image12,
    title: 'Sea star',
    author: '@peterlaster',
    featured: true
  },
  // {
  //   img: image13,
  //   title: 'Bike',
  //   author: '@southside_customs',
  // },
];
