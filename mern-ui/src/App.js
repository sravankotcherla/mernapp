import React from "react";
import { Container } from "@material-ui/core";

import NavBar from "./components/NavBar/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId='134161390644-cpqqhd0f3knaepuk6v7a8idr8jhtgf0c.apps.googleusercontent.com'>
      <BrowserRouter>
        <Container maxWidth="lg">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
