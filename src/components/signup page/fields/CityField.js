import * as React from "react";
import { Container, Autocomplete, TextField } from "@mui/material";
import { theme, cities } from "../../../CSS files/Themes";
import { ThemeProvider } from "@mui/material/styles";
import { Controller } from "react-hook-form";

export default function CityField(props) {
  return (
    <Container maxWidth="xs">
      <ThemeProvider theme={theme}>
        <Controller
          name="city"
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
              filterSelectedOptions
              //getOptionDisabled={(option) => option.disabled}
              //getOptionLabel={(option) => option.label}
              id="city-autocomplete"
              onChange={(event, value) => field.onChange(value)}
              options={cities}
              renderInput={(params) => (
                <TextField
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="city"
                  label="City"
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
