import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

import { UserContextProvider } from "./contexts/UserContext";

import { NavBar } from "./components/nav-bar/NavBar";

import { RightPaneContainer } from "./containers/RightPaneContainer";
import { LeftPaneContainer } from './containers/LeftPaneContainer';

import styles from "./App.module.css";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Container fluid>
          <Row>
            <NavBar />
          </Row>
          <Row className={styles.appBody}>
            <Col lg={5} md={12}>
              <LeftPaneContainer />
            </Col>
            <Col lg={7} md={12}>
              <RightPaneContainer />
            </Col>
          </Row>
        </Container>
      </Router>
    </UserContextProvider>
  );
}

export default App;
