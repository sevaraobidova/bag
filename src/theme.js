import { createTheme } from "@mui/material";

export const theme = createTheme({
    body: {
        opacity: 1
    },
    palette: {
        primary:{
            main: 'rgba(245, 155, 0, 1)'
        },
        secondary: {
            main: 'rgba(47, 47, 47, 1)'
        },
        otherColor: {
            main: 'rgba(255, 255, 255, 1)'
        },
    },
    typography: {
        htmlFontSize: 10,
        body1:{
            fontSize: '1.6rem',
            color: 'rgba(255, 255, 255, 0.6)',
            opacity: '60%',
            lineHeight: '2.56rem',
            '&:active': {
                opacity: '100%',
              },
        },
        h1: {
            fontSize: '6.1rem',
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: '7.93rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '3.1rem',
            lineHeight: '4.34rem',
            fontWeight: 700,
        },
        h5: {
            fontSize: '2rem',
            lineHeight: '3rem',
            fontWeight: 500,
            opacity: '80%',
            '&:active': {
                fontWeight: 700,
                opacity: '100%',
                borderBottom: '5px solid rgba(245, 155, 0, 1)',
              },
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: "2rem",
            lineHeight: "3rem",
            textTransform: "uppercase",
            color: "rgba(245, 155, 0, 1)",
            paddingBottom: '3rem',
            borderBottom: '5px solid white',
        },

      },
})