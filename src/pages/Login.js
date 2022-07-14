import Home from "./Home";
import LoginForm from "../components/login page/LoginForm";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

function Login(props) {
  return (
    <AppContainer>
      <Home />
      <LoginForm data={props.data} />
    </AppContainer>
  );
}

export default Login;
