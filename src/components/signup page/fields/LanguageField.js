import * as React from "react";
import { Container, Autocomplete, TextField } from "@mui/material";
import { theme } from "../../../CSS files/Themes";
import { ThemeProvider } from "@mui/material/styles";
import { Controller } from "react-hook-form";

export default function LanguageField(props) {
  return (
    <Container maxWidth="xs">
      <ThemeProvider theme={theme}>
        <Controller
          name="languages"
          control={props.control}
          defaultValue={[]}
          render={({
            field: { ref, ...field },
            fieldState: { error, invalid },
          }) => (
            <Autocomplete
              {...field}
              disableClearable
              disablePortal
              filterSelectedOptions
              multiple
              getOptionDisabled={(option) => option.disabled}
              getOptionLabel={(option) => option.lang}
              isOptionEqualToValue={(option, value) =>
                option.lang === value.lang
              }
              id="city-autocomplete"
              onChange={(event, value) => field.onChange(value)}
              options={languages}
              renderInput={(params) => (
                <TextField
                  error={invalid}
                  helperText={invalid ? error.message : null}
                  id="languages"
                  label="Spoken languages"
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
const languages = [
  { lang: "Polish" },
  { lang: "English" },
  { lang: "German" },
  { lang: "French" },
  { lang: "Spanish" },
  { lang: "Croatian" },
  { lang: "Czech" },
  { lang: "Danish" },
  { lang: "Dutch" },
  { lang: "Afrikaans" },
  { lang: "Albanian" },
  { lang: "Arabic" },
  { lang: "Armenian" },
  { lang: "Basque" },
  { lang: "Bengali" },
  { lang: "Bulgarian" },
  { lang: "Catalan" },
  { lang: "Cambodian" },
  { lang: "Chinese (Mandarin)" },
  { lang: "Estonian" },
  { lang: "Fiji" },
  { lang: "Finnish" },
  { lang: "Georgian" },
  { lang: "Greek" },
  { lang: "Gujarati" },
  { lang: "Hebrew" },
  { lang: "Hindi" },
  { lang: "Hungarian" },
  { lang: "Icelandic" },
  { lang: "Indonesian" },
  { lang: "Irish" },
  { lang: "Italian" },
  { lang: "Japanese" },
  { lang: "Javanese" },
  { lang: "Korean" },
  { lang: "Latin" },
  { lang: "Latvian" },
  { lang: "Lithuanian" },
  { lang: "Macedonian" },
  { lang: "Malay" },
  { lang: "Malayalam" },
  { lang: "Maltese" },
  { lang: "Maori" },
  { lang: "Marathi" },
  { lang: "Mongolian" },
  { lang: "Nepali" },
  { lang: "Norwegian" },
  { lang: "Persian" },
  { lang: "Portuguese" },
  { lang: "Punjabi" },
  { lang: "Quechua" },
  { lang: "Romanian" },
  { lang: "Russian" },
  { lang: "Samoan" },
  { lang: "Serbian" },
  { lang: "Slovak" },
  { lang: "Slovenian" },
  { lang: "Swahili" },
  { lang: "Swedish" },
  { lang: "Tamil" },
  { lang: "Tatar" },
  { lang: "Telugu" },
  { lang: "Thai" },
  { lang: "Tibetan" },
  { lang: "Tonga" },
  { lang: "Turkish" },
  { lang: "Ukrainian" },
  { lang: "Urdu" },
  { lang: "Uzbek" },
  { lang: "Vietnamese" },
  { lang: "Welsh" },
  { lang: "Xhosa" },
];
