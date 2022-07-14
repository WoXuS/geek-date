import * as React from "react";
import { Container, TextField } from "@mui/material";
import { theme } from "../../../CSS files/Themes";
import { ThemeProvider } from "@mui/material/styles";
import { Controller } from "react-hook-form";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import moment from "moment";

export default function AgeField(props) {
  return (
    <Container maxWidth="xs">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Controller
            name="dateOfBirth"
            control={props.control}
            defaultValue={null}
            render={({
              field: { onChange, value },
              fieldState: { error, invalid },
            }) => (
              <DatePicker
                label="Date of birth"
                disableFuture
                openTo="year"
                value={value}
                onChange={(value) =>
                  onChange(moment(value).format("YYYY-MM-DD"))
                }
                renderInput={(params) => (
                  //console.log(invalid),
                  <TextField
                    helperText={invalid ? error.message : null}
                    id="dateOfBirth"
                    variant="standard"
                    margin="dense"
                    fullWidth
                    color="backButton"
                    autoComplete="bday"
                    {...params}
                    error={invalid}
                  />
                )}
              />
            )}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </Container>
  );
}
