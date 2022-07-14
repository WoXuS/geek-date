import React from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { theme } from "../../../CSS files/Themes";

export default function EmailField(props) {
  //console.log(props)
  return (
    <Container maxWidth="xs">
      <ThemeProvider theme={theme}>
        <TextField
          id="email"
          label="Email Address"
          value={props.value}
          onChange={props.onChange}
          variant="standard"
          margin="dense"
          fullWidth
          autoComplete="email"
          autoFocus
          color="backButton"
          error={props.error}
          helperText={props.error ? props.errorMessage?.message : null}
        />
      </ThemeProvider>
    </Container>
  );
}
