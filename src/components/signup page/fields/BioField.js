import * as React from "react";
import { TextField } from "@mui/material";
import { theme } from "../../../CSS files/Themes";
import { ThemeProvider } from "@mui/material/styles";
import { Controller } from "react-hook-form";

const sx_bio = {
  width: {
    xs: 300,
    sm: 400,
    md: 400,
    lg: 400,
    xl: 400,
  },
};

export default function CityField(props) {
  return (
    <ThemeProvider theme={theme}>
      <Controller
        name="bio"
        control={props.control}
        defaultValue={""}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
          <TextField
            inputProps={{ style: { fontSize: 17 } }}
            sx={sx_bio}
            onChange={onChange}
            value={value}
            fullWidth
            error={invalid}
            helperText={invalid ? error.message : null}
            multiline
            rows={8}
            id="bio"
            label="Write something about yourself"
            variant="outlined"
            margin="dense"
            color="backButton"
            //autoComplete="off"
          />
        )}
      />
    </ThemeProvider>
  );
}
