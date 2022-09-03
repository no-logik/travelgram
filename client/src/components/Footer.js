import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body2" color="whitesmoke" align="center">
      {"Copyright © "}
      <Link color="inherit" href="localhost:3000/">
        TravelGram
      </Link>
      {"  "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          bgcolor: "#000 ",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align="center" color="white">
            <GitHubIcon /> &nbsp;
            <TwitterIcon />
            &nbsp;
            <FacebookIcon />
            &nbsp;
            <LinkedInIcon />
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
