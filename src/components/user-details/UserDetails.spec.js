import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { UserDetails } from "./UserDetails";
import { UserContextProvider } from "../../contexts/UserContext";
import { userDetailsProps } from "../../sample-data/userDetailsProps.sample";

const {
  name,
  description,
  gender,
  age,
  location,
  lastLogin,
} = userDetailsProps;

describe("UserDetails", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <UserContextProvider>
        <Container fluid>
          <Row>
            <Col lg={5} md={12}>
              <UserDetails
                name={name}
                description={description}
                gender={gender}
                age={age}
                location={location}
                lastLogin={lastLogin}
              />
            </Col>
          </Row>
        </Container>
      </UserContextProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should contain all the text information provided by the props", () => {
    const { baseElement } = render(
      <UserContextProvider>
        <Container fluid>
          <Row>
            <Col lg={5} md={12}>
              <UserDetails
                name={name}
                description={description}
                gender={gender}
                age={age}
                location={location}
                lastLogin={lastLogin}
              />
            </Col>
          </Row>
        </Container>
      </UserContextProvider>
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement).toHaveTextContent(name, description, gender, age, location, lastLogin);
  });
});
