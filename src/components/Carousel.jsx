import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Carousel = ({ data }) => {
  return (
    <Box
      // backgroundColor="neutral.light"
    
      marginX={3}
      sx={{
        display: "flex",
        gap: 3,
        padding: 4,
   
        overflow: "auto",
        width: "100%",
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {data.map((item) => (
        <Card sx={{ minWidth: 200, width: 200, borderRadius: 4 }}>
          <CardActionArea onClick={() => window.open(item.link)}>
            <CardMedia component="img" height="140" image={item.src} />
            <CardContent>
              <Typography gutterBottom variant="body1">
                {item.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Carousel;
