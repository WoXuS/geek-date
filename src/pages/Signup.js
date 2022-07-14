import styled from "styled-components";
import SignupForm from "../components/signup page/SignupForm";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Signup(props) {
  return (
    <AppContainer>
      <SignupForm />
    </AppContainer>
  );
}

export default Signup;
