const Cormorant =  "'Cormorant', serif";
const Bellota = "'Bellota Text', sans-serif";
const Angella = "'Angella White', sans-serif";

export const themeOptions = {
  palette: {
    secondary: {
      main: '#676D5F',
      light: '#E6E7D5',
      superLight: '#F3F3EA',
    },
    primary: {
      main: '#DD8C6F',
      light: '#FFE8D6',
      contrastText: '#FFFFFF',
    },
    neutral: {
      main: "#FFFFFF",
      light: '#D1A166'
    }
  },
  typography: {
    button: {
      fontFamily: Bellota,
      fontWeight: 700,  
    },
    h1: {
      fontFamily: Angella,
      fontSize: 48
    },
    h2: {
      fontFamily: Angella,
      fontSize: 32,
    },
    h3: {
      fontFamily: Cormorant,
      fontSize: 32,
      fontWeight: 300,
    },
    h4: {
      fontFamily: Bellota,
      fontSize: 24,
      fontWeight: 300,
      letterSpacing: '.1rem', 
    },
    h6: {
      fontFamily: Bellota,
      fontSize: 16,
      fontWeight: 300, 
      letterSpacing: '.1rem',
    },
    body2: {
      fontFamily: Cormorant,
      fontSize: 16,
      fontWeight: 300,      
    },
    body1: {
      fontFamily: Bellota,
      fontSize: 14,
      fontWeight: 300,
      letterSpacing: '.1rem',
    },
  },
};