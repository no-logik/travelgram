import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { useSelector } from "react-redux";
// import "./signupform.css";
import { postData } from "../api";

//////////////////////////////////////////////////////////////////////////////////////////////////////

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  background: {
    paper: "#000",
  },
  text: {
    primary: "#fff",
  },
  action: {
    active: "#111",
  },
  success: {
    dark: "#000",
  },
});

export default function Signupform() {
  const [userData, setUserData] = useState({
    name: "",
    userid: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      postData(userData);
      // console.log(userData);
      console.log("data has been sent");
    } catch (error) {
      console.log(error.message);
    }
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="userId"
                  label="User Id"
                  name="userId"
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Signupform() {
//   // const users = useSelector((state) => state);

//   const [userData, setUserData] = useState({
//     name: "",
//     userid: "",
//     emailid: "",
//     password: "",
//     age: "",
//   });

//   useEffect(() => {
//     console.log(userData);
//   }, [userData]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       postData(userData);
//       console.log("data has been sent");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   return (
//     <>
//       <div className="signupform">
//         <Form className="" onSubmit={handleSubmit}>
//           <Form.Group className="mb-3 bg-light" controlId="Name">
//             <Form.Label className="label">Name</Form.Label>
//             <Form.Control
//               className="control"
//               type="text"
//               placeholder="Enter Name"
//               value={userData.name}
// onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//             />
//           </Form.Group>
//           <hr />
//           <Form.Group className="mb-3 bg-light" controlId="Email">
//             <Form.Label className="label">Email ID</Form.Label>
//             <Form.Control
//               className="control"
//               type="email"
//               placeholder="Enter Email ID"
//               value={userData.emailid}
//               onChange={(e) => setUserData({ ...userData, emailid: e.target.value })}
//             />
//           </Form.Group>
//           <hr />
//           <Form.Group className="mb-3 bg-light" controlId="Age">
//             <Form.Label className="label">Age</Form.Label>
//             <Form.Control
//               className="control"
//               type="number"
//               placeholder="Enter Age"
//               value={userData.age}
//               onChange={(e) => setUserData({ ...userData, age: e.target.value })}
//             />
//           </Form.Group>
//           <hr />
//           <Form.Group className="mb-3 bg-light" controlId="Userid">
//             <Form.Label className="label">User ID</Form.Label>
//             <Form.Control
//               className="control"
//               type="text"
//               placeholder="Enter User ID"
//               value={userData.userid}
//               onChange={(e) => setUserData({ ...userData, userid: e.target.value })}
//             />
//           </Form.Group>
//           <hr />
//           <Form.Group className="mb-3 bg-light" controlId="Password">
//             <Form.Label className="label">Password</Form.Label>
//             <Form.Control
//               className="control"
//               type="password"
//               placeholder="Enter Password"
//               value={userData.password}
//               onChange={(e) => setUserData({ ...userData, password: e.target.value })}
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     </>
//   );
// }

// export default Signupform;
