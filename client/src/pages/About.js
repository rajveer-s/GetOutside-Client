import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './singlePost.css';

const theme = createTheme();

export default function Aboutus() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "84vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={5}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "bold",
                fontFamily: "Sen",
              }}
              component="h1"
              variant="h5"
            >
              ABOUT US
            </Typography>
            <Typography component="p" variant="p"
              sx={{
                fontSize: "20px",
                fontFamily: "Sen",
                lineHeight: '2.6rem',
                marginTop: '2rem'
              }} >
              Get Outside is a blog for people who love to be active outdoors.
              Our community of users can post about their latest adventure and
              comment on other users posts. Share and be inspired to Get
              Outside!
            </Typography>
          </Box>
          <Box class="button-block">
            <Box class="social"><a href="https://github.com/Lexi-Diamond/get-outside" target="_blank"><i class="fab fa-facebook"></i></a></Box>
            <Box class="social"><a href="https://github.com/Lexi-Diamond/get-outside" target="_blank"> <i class="fab fa-twitter"></i></a></Box>
            <Box class="social"><a href="https://github.com/Lexi-Diamond/get-outside" target="_blank"> <i class="fab fa-instagram"></i></a></Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
