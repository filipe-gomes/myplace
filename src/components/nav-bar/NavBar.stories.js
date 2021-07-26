import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import { NavBar } from "./NavBar";
import { UserContextProvider } from "../../contexts/UserContext";

export default {
  title: "Nav Bar/Nav Bar",
  component: NavBar,
};

const Template = () => (
  <UserContextProvider>
    <Router>
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
      </Container>
    </Router>
  </UserContextProvider>
);

export const NavBarExample = Template;