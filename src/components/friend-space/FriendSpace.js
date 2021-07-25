import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

import styles from "./FriendSpace.module.css";

export const FriendSpace = ({ name, friends, enemies }) => {
  const [showEnemies, setShowEnemies] = useState(false);
  const handleShowEnemies = () => setShowEnemies(!showEnemies);

  return (
    <Container className={styles.container}>
      <Card className={styles.spaceCard}>
        <Card.Header className={styles.header}>
          {`${name}'s ${!showEnemies ? 'Friend' : 'Enemy'} Space`}
        </Card.Header>
        <Card.Body>
          <Row>
            {!showEnemies
              ? friends.map((friend) => (
                  <Col sm={3} key={friend.name} className={styles.column}>
                    <div className={styles.name}>{friend.name}</div>
                    <img
                      src={`${friend.image}`}
                      alt={friend.name}
                      className={styles.image}
                    />
                  </Col>
                ))
              : enemies.map((enemy) => (
                  <Col sm={3} key={enemy.name} className={styles.column}>
                    <div className={styles.name}>{enemy.name}</div>
                    <img
                      src={`${enemy.image}`}
                      alt={enemy.name}
                      className={styles.image}
                    />
                  </Col>
                ))}
          </Row>
        </Card.Body>
      </Card>
      <Button variant="link" className={styles.enemyBtn} onClick={handleShowEnemies}>
        {!showEnemies ? `View ${name}'s Enemies` : `View ${name}'s Friends`}
      </Button>
    </Container>
  );
};
