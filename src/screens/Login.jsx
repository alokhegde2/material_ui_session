import {
  Button,
  CircularProgress,
  Fab,
  TextField,
  Typography,
  experimentalStyled,
} from "@mui/material";
import Box from "@mui/material/Box";
import "@fontsource/roboto/500.css";
import { useState } from "react";

export default function Login(params) {
  //Hooks,
  // useState, useEffect
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  //State Variable
  //Normal Variable
  var count = 1;
  const handleSubmit = () => {
    setIsloading(true);
    console.log("Email" + email);
    console.log("Password" + password);
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
    //api call
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", //row-> x axis, column- y axis
        alignItems: "center", // row - y axis, column -> x axis
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "orange",
          height: "70vh",
          width: "30vw",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" my={5} textAlign={"center"}>
          Login.
        </Typography>

        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          sx={{
            width: "80%",
            alignSelf: "center",
            mb: 4,
            mt: 4,
          }}
        />

        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          sx={{
            width: "80%",
            alignSelf: "center",
            mb: 4,
          }}
        />

        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          type="submit"
          sx={{
            width: "80%",
            alignSelf: "center",
            backgroundColor: "purple",
            "&:hover": {
              backgroundColor: "orange",
            },
          }}
        >
          {isLoading ? <CircularProgress color="secondary" /> : "Submit"}
        </Button>
      </Box>
    </Box>
  );
}