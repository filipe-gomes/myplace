import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faEnvelope,
  faPaperPlane,
  faUserFriends,
  faComments,
  faUsers,
  faStar,
  faUserLock,
  faSortNumericUp,
} from "@fortawesome/free-solid-svg-icons";

import "./contact.css";

library.add(
  fas,
  faEnvelope,
  faPaperPlane,
  faUserFriends,
  faComments,
  faUsers,
  faStar,
  faUserLock,
  faSortNumericUp
);

export const Contact = () => {
  return (
    <Container>
      <Card>
        <Card.Header className="title">Contacting Filipe</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Button
                variant="link"
                className="contact-btn"
                href="mailto:filipegomes404@gmail.com"
              >
                <FontAwesomeIcon className="icon" icon={["fas", "envelope"]} />
                Send Message
              </Button>
              <Button variant="link" className="contact-btn">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fas", "user-friends"]}
                />
                Add to Friends
              </Button>
              <Button variant="link" className="contact-btn">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fas", "comments"]}
                />
                Instant Message
              </Button>
              <Button variant="link" className="contact-btn">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fas", "users"]}
                />
                Add to Group
              </Button>
            </Col>
            <Col sm={6}>
              <Button variant="link" className="contact-btn">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fas", "paper-plane"]}
                />
                Forward to Friend
              </Button>
              <Button variant="link" className="contact-btn">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fas", "star"]}
                />
                Add to Favorites
              </Button>
              <Button variant="link" className="contact-btn">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fas", "user-lock"]}
                />
                Block User
              </Button>
              <Button variant="link" className="contact-btn">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fas", "sort-numeric-up"]}
                />
                Rank User
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
