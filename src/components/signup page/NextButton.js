import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { theme, sx_button } from "../../CSS files/Themes";

const BottomButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3px;
  padding-top: 5px;
`;

export default function NextButton(props) {
  return (
    <BottomButton>
      <ThemeProvider theme={theme}>
        {props.loading ? (
          <CircularProgress color="secondary" sx={{mt: 5}}/>
        ) : (
          <Button
            color="button"
            variant="contained"
            type="submit"
            sx={sx_button}
          >
            {props.step < 4 && <>NEXT</>}
            {props.step === 4 && <>SUBMIT</>}
          </Button>
        )}
      </ThemeProvider>
    </BottomButton>
  );
}