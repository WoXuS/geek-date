import React from "react";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { theme } from "../../../CSS files/Themes";

export default function NameField(props) {
  //console.log(props.test)
  return (
    <Container maxWidth="xs">
      <ThemeProvider theme={theme}>
        <TextField
          id="firstName"
          label="First Name"
          value={props.value}
          onChange={props.onChange}
          variant="standard"
          margin="dense"
          fullWidth
          autoComplete="given-name"
          autoFocus
          color="backButton"
          error={props.error}
          helperText={props.error ? props.errorMessage?.message : null}
        />
      </ThemeProvider>
    </Container>
  );
}
