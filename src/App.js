import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./App.css";
import { UserDetails } from "./components/user-details/UserDetails";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Navbar
            className="border-bottom navbar-dark"
            bg="primary"
            expand="lg"
          >
            <Navbar.Brand>myplace</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="m-auto">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://filipeloves.tech"
                >
                  Home
                </a>
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:filipegomes404@gmail.com"
                >
                  Send Message
                </a>
                <Link className="nav-link" to="#">
                  Browse
                </Link>
                <Link className="nav-link" to="#">
                  Search
                </Link>
                <Link className="nav-link" to="#">
                  Invite
                </Link>
                <Link className="nav-link" to="#">
                  Film
                </Link>
                <Link className="nav-link" to="#">
                  Mail
                </Link>
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bloggr.tech"
                >
                  Blog
                </a>
                <Link className="nav-link" to="#">
                  Favorites
                </Link>
                <Link className="nav-link" to="#">
                  Forum
                </Link>
                <Link className="nav-link" to="#">
                  Groups
                </Link>
                <Link className="nav-link" to="#">
                  Events
                </Link>
                <Link className="nav-link" to="#">
                  Videos
                </Link>
                <Link className="nav-link" to="#">
                  Music
                </Link>
                <Link className="nav-link" to="#">
                  Classifieds
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row>
          <Col md={5}>
            <UserDetails />
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <Contact />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
