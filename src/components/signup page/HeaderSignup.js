import React from "react";
import { Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../CSS files/Themes";
import styled from "styled-components";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5em;
  color: #f26665;
`;
const SmallerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
  position: relative;
  margin-bottom: 1em;
`;

export default function HeaderSignup(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SmallerHeader>
          <Button
            onClick={props.handleBack}
            color="backButton"
            sx={{mr: 4}}
          >
            <FontAwesomeIcon icon={faStepBackward} />
          </Button>
          <Typography variant="h6" sx={{mr: 15}}>About You</Typography>
        </SmallerHeader>
      </ThemeProvider>
      <Header>
        <Typography variant="h3">SignUp</Typography>
      </Header>
    </>
  );
}
