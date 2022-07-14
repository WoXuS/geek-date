import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../images/Logo.png";
import bgnd from "../images/HomeBgnd.jpg";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    login: {
      main: "#f26665",
      contrastText: "#fff",
    },
    register: {
      main: "#212429",
      contrastText: "#fff",
    },
  },
});
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgnd});
`;
const Header = styled.div`
  background-color: #212429;
  color: #fff;
  padding: 2rem;
  border-radius: 1rem 1rem 0 0;
`;
const Logo = styled.img`
  width: 15rem;
  padding-left: 2rem;
`;
const HeaderWelcome = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;
const HeaderText = styled.div`
  font-size: inherit;
  font-weight: bold;
  color: #212429;
  margin: 0 2rem 0 2rem;
  padding: 2rem 0 2rem 0;
  font-family: "Roboto";
  border-bottom: 2px solid #f26665;
`;

const sx_buttons = {
  width: {
    xs: 100,
    sm: 200,
    md: 300,
    lg: 300,
    xl: 300,
  },
  height: 70,
  fontSize: {
    xs: 15,
    sm: 20,
    md: 30,
    lg: 30,
    xl: 30,
  },
};
const sx_box = {
  fontSize: {
    xs: 15,
    sm: 20,
    md: 30,
    lg: 30,
    xl: 30,
  },
  bgcolor: "#ffff",
  boxShadow: 5,
  borderRadius: 5,
};

function Home(props) {
  return (
    <AppContainer>
      <Box sx={sx_box}>
        <Header>
          <HeaderWelcome>
            Welcome to
            <Logo src={logo} alt="GeekDate"></Logo>
          </HeaderWelcome>
        </Header>
        <HeaderText>
          <p>
            Find people to <span style={{ color: "#f26665" }}>PLAY</span>.
            <br />
            Make long-lasting{" "}
            <span style={{ color: "#f26665" }}>FRIENDSHIPS</span>.
          </p>
        </HeaderText>
        <Stack
          direction="row"
          spacing={10}
          sx={{ pl: 10, pr: 10, pb: 10, pt: 5 }}
        >
          <ThemeProvider theme={theme}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                color="login"
                variant="contained"
                size="large"
                sx={sx_buttons}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="register"
              size="large"
              sx={sx_buttons}
            >
              Join GeekDate
            </Button>
            </Link>
          </ThemeProvider>
        </Stack>
      </Box>
    </AppContainer>
  );
}

export default Home;
