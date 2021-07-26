import React from "react";
import PropTypes from "prop-types";
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

import { useUserContext } from "../../contexts/UserContext";

import styles from "./ContactControls.module.css";

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

/**
 * Component used to display options for interacting with/contacting user.
 * @param {Object} ContactControlsProps
 * @param {string} ContactControlsProps.name name of user
 * @param {string} ContactControlsProps.email email of user
 * @returns {React.FC}
 */
export const ContactControls = ({ name, email }) => {
  const { isInNetwork, setIsInNetwork } = useUserContext();
  const changeFriendStatus = () => setIsInNetwork(!isInNetwork);
  return (
    <Container>
      <Card className={styles.contactCard}>
        <Card.Header className={styles.title}>Contacting {name}</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Button
                variant="link"
                className={styles.contactBtn}
                href={`mailto:${email}`}
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fas", "envelope"]}
                />
                Send Message
              </Button>
              <Button
                variant="link"
                className={styles.contactBtn}
                onClick={changeFriendStatus}
                href="#"
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fas", "user-friends"]}
                />
                {isInNetwork ? "Unfriend" : "Add to Friends"}
              </Button>
              <Button variant="link" className={styles.contactBtn} href="#">
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fas", "comments"]}
                />
                Instant Message
              </Button>
              <Button variant="link" className={styles.contactBtn} href="#">
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fas", "users"]}
                />
                Add to Group
              </Button>
            </Col>
            <Col sm={6}>
              <Button variant="link" className={styles.contactBtn} href="#">
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fas", "paper-plane"]}
                />
                Forward to Friend
              </Button>
              <Button variant="link" className={styles.contactBtn} href="#">
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fas", "star"]}
                />
                Add to Favorites
              </Button>
              <Button variant="link" className={styles.contactBtn} href="#">
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fas", "user-lock"]}
                />
                Block User
              </Button>
              <Button variant="link" className={styles.contactBtn} href="#">
                <FontAwesomeIcon
                  className={styles.icon}
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

ContactControls.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
