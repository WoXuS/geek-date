import ReactDOM from "react-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </BrowserRouter>,
  document.getElementById("root")
);
