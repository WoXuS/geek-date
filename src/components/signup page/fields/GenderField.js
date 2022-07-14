import * as React from "react";
import { Container, Autocomplete, TextField } from "@mui/material";
import { theme } from "../../../CSS files/Themes";
import { ThemeProvider } from "@mui/material/styles";
import { Controller } from "react-hook-form";

export default function CityField(props) {
  return (
    <Container maxWidth="xs">
      <ThemeProvider theme={theme}>
        <Controller
          name="gender"
          control={props.control}
          defaultValue={null}
          render={({
            field: { ref, ...field },
            fieldState: { error, invalid },
          }) => (
            <Autocomplete
              {...field}
              clearOnEscape
              disablePortal
              disableClearable
              filterSelectedOptions
              id="gender-autocomplete"
              onChange={(event, value) => field.onChange(value)}
              options={genders}
              renderInput={(params) => (
                <TextField
                  error={invalid}
                  helperText={invalid ? error.message : null}
                  id="gender"
                  label="Gender"
                  inputRef={ref}
                  variant="standard"
                  margin="dense"
                  fullWidth
                  color="backButton"
                  autoComplete="off"
                  {...params}
                />
              )}
            />
          )}
        />
      </ThemeProvider>
    </Container>
  );
}
const genders = ["Male", "Female"];
