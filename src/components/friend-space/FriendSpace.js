import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

import styles from "./FriendSpace.module.css";

/**
 * Builds a component to display user's friends and enemies
 * @param {Object} FriendSpaceProps
 * @param {string} FriendSpaceProps.name name of user
 * @param {Object[]} FriendSpaceProps.friends array of friend objects
 * @param {Object[]} FriendSpaceProps.enemies array of enemy objects
 * @returns {React.FC}
 */
export const FriendSpace = ({ name, friends, enemies }) => {
  const [showEnemies, setShowEnemies] = useState(false);
  const handleShowEnemies = () => setShowEnemies(!showEnemies);

  return (
    <Container className={styles.container}>
      <Card className={styles.spaceCard}>
        <Card.Header className={styles.header} data-testid="friend-space-header">
          {`${name}'s ${!showEnemies ? "Friend" : "Enemy"} Space`}
        </Card.Header>
        <Card.Body>
          <Row>
            {!showEnemies
              ? friends.map((friend) => (
                  <Col sm={3} key={friend.name}>
                    <div className={styles.name}>{friend.name}</div>
                    <div className={styles.imgContainer}>
                      <img
                        src={`${friend.image}`}
                        alt={friend.name}
                        className={styles.image}
                      />
                    </div>
                  </Col>
                ))
              : enemies.map((enemy) => (
                  <Col sm={3} key={enemy.name}>
                    <div className={styles.name}>{enemy.name}</div>
                    <div className={styles.imgContainer}>
                      <img
                        src={`${enemy.image}`}
                        alt={enemy.name}
                        className={styles.image}
                      />
                    </div>
                  </Col>
                ))}
          </Row>
        </Card.Body>
      </Card>
      <Button
        variant="link"
        className={styles.enemyBtn}
        onClick={handleShowEnemies}
        data-testid="enemy-btn"
      >
        {!showEnemies ? `View ${name}'s Enemies` : `View ${name}'s Friends`}
      </Button>
    </Container>
  );
};

FriendSpace.propTypes = {
  name: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(Object).isRequired,
  enemies: PropTypes.arrayOf(Object).isRequired,
};
