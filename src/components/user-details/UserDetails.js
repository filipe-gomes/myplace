import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./user-details.css";
import AndreDevito from "../../assets/images/AndreDevito.jpeg";

export const UserDetails = () => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <p className="username" align="justify">
            Filipe
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <img
            className="profile-pic rounded"
            src={AndreDevito}
            alt={AndreDevito}
          />
          <div className="profile-info">
            <p align="justify">"Web Sorcerer"</p>
            <br />
            <p align="justify">Male</p>
            <p align="justify">29 years old</p>
            <p align="justify">Merriam,</p>
            <p align="justify">KANSAS</p>
            <p align="justify">United States</p>
            <br />
            <p align="justify">Last Login:</p>
            <p align="justify">7/21/2021</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
