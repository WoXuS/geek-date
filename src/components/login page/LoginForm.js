import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Redirect, useHistory } from "react-router-dom";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";

const theme = createTheme({
  palette: {
    button: {
      main: "#f26665",
      contrastText: "#fff",
    },
  },
});

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [validCredentials, setValidCredentials] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    history.push("/home");
  };
  const handleSubmit = () => {
    // console.log("Username:", username, "Password: ", password);
    for (var i = 0; i < props.data.length; i++) {
      if (
        props.data[i].password === password &&
        props.data[i].username === username
      ) {
        console.log("logged in");
        setInvalidCredentials(false);
        setValidCredentials(true);
      } else setInvalidCredentials(true);
    }
  };
  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogActions>
        <ThemeProvider theme={theme}>
          <Button onClick={handleClose} color="button">
            <FontAwesomeIcon icon={faTimesCircle} size="lg" />
          </Button>
        </ThemeProvider>
      </DialogActions>
      <DialogTitle>Welcome back!</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ pb: 4 }}>
          Please enter your username and password to continue
        </DialogContentText>
        <ThemeProvider theme={theme}>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            color="button"
            value={username}
            onInput={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            color="button"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </ThemeProvider>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center", pb: 3 }}>
        <ThemeProvider theme={theme}>
          <Button color="button" variant="contained" onClick={handleSubmit}>
            Log In
          </Button>
        </ThemeProvider>
      </DialogActions>
      {invalidCredentials === true && (
        <Alert variant="filled" severity="error">
          Invalid username or password
        </Alert>
      )}
      {validCredentials === true && <Redirect to="/discover" />}
    </Dialog>
  );
}
export default LoginForm;
