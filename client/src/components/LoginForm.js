import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./loginform.css";
import { getData } from "../api";

///////////////////////////////////////////////////////////////////////////////

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignIn() {
  const [userData, setUserData] = useState({
    userid: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getData().then((response) => {
      console.log(response);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userid"
              label="User ID"
              name="userid"
              autoComplete="user id"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

///////////////////////////////////////////////////////////////////////////////

// function Loginform() {
//   const [userDetail, setUserDetail] = useState({
//     userid: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <Form className="" onSubmit={handleSubmit}>
//       <Form.Group>
//         <Form.Label className="mb-3 bg-light" controlId="userid">
//           User Name
//         </Form.Label>
//         <Form.Control
//           className="control"
//           type="text"
//           placeholder="Enter Username"
//           value={userDetail.userid}
//           onChange={(e) => setUserDetail({ ...userDetail, userid: e.target.value })}
//         ></Form.Control>
//       </Form.Group>
//       <Form.Group>
//         <Form.Label className="mb-3 bg-light" controlId="password">
//           Password
//         </Form.Label>
//         <Form.Control
//           className="control"
//           type="password"
//           placeholder="Enter Password"
//           value={userDetail.password}
//           onChange={(e) => setUserDetail({ ...userDetail, password: e.target.value })}
//         ></Form.Control>
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Loginform;
