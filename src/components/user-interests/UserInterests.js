import React from "react";
import PropTypes from "prop-types";
import { Container, Card, Table } from "react-bootstrap";

import { useUserContext } from "../../contexts/UserContext";

import styles from "./UserInterests.module.css";

/**
 * Component used to show user's interests on myplace
 * @param {Object[]} interests array of strings represetings user's interests
 */
export const UserInterests = ({ interests }) => {
  const { name } = useUserContext();
  return (
    <Container className={styles.container}>
      <Card className={styles.interestCard}>
        <Card.Header className={styles.title}>{name}'s Interests</Card.Header>
        {interests.map((item) => (
          <div key={item.type}>
            <Table className={styles.interestTable}>
              <tbody>
                <tr className={styles.tableRow}>
                  <td className={styles.interestType}>{item.type}</td>
                  <td>
                    <p>{item.interests.join(", ")}</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </Card>
    </Container>
  );
};

UserInterests.propTypes = {
  interests: PropTypes.arrayOf(Object).isRequired,
};
