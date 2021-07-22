import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faEnvelope } from '@fortawesome/free-solid-svg-icons'


import "./contact.css";

library.add(
    fas,
    faEnvelope
);

export const Contact = () => {
  return (
    <Container>
      <Card>
        <Card.Header className="title">Contacting Filipe</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={6}>
              <a
                className="float-left p-2 nav-link"
                style={{ color: "#212529" }}
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:filipegomes404@gmail.com"
              >
                <FontAwesomeIcon className="icon" icon={['fas', 'envelope']} />
                Send Message
              </a>
            </Col>
            <Col sm={6}></Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
