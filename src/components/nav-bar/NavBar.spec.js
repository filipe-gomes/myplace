import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { NavBar } from "./NavBar";
import { UserContextProvider } from "../../contexts/UserContext";

describe("NavBar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
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
    expect(baseElement).toBeTruthy();
  });

  it("should contain link to portfolio site in home button", () => {
    const { baseElement, getByTestId } = render(
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
    expect(baseElement).toBeTruthy();
    expect(getByTestId('home-button').getAttribute("href")).toBe("https://filipeloves.tech");
  });

  it("should contain link to blog site in blog button", () => {
    const { baseElement, getByTestId } = render(
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
    expect(baseElement).toBeTruthy();
    expect(getByTestId('blog-button').getAttribute("href")).toBe("https://bloggr.tech");
  });
});
