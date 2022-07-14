import { Route, Redirect } from "react-router-dom";
import Discover from "../pages/Discover";
import Likes from "../pages/Likes";
import Login from "../pages/Login";
import Header from "./Header";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import styled from "styled-components";
import { useState, useEffect } from "react";

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Content(props) {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ContentContainer>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/discover">
        <Header />
        {data.length > 0 && <Discover data={data} />}
      </Route>
      <Route path="/likes">
        <Header />
        <Likes />
      </Route>
      <Route path="/profile">
        <Header />
        <Profile />
      </Route>
      <Route path="/login">{data.length > 0 && <Login data={data} />}</Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </ContentContainer>
  );
}

export default Content;
