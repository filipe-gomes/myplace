import React from "react";
import PropTypes from "prop-types";
import { Container, Card } from "react-bootstrap";

import { createMarkup } from "../../utils/createMarkup";
import styles from "./Blurbs.module.css";

/**
 * 
 * @param {Object} BlurbsProps
 * @param {string} BlurbsProps.name name of user
 * @param {string} BlurbsProps.about about section of blurb
 * @param {string} BlurbsProps.peopleInterest Who I'd Like To Meet section of blurb 
 * @returns {React.FC}
 */
export const Blurbs = ({ name, about, peopleInterest }) => {
  return (
    <Container className={styles.container}>
      <Card className={styles.blurbCard}>
        <Card.Header className={styles.header}>{name}'s Blurbs</Card.Header>
        <Card.Body className={styles.blurbBody}>
          <div className={styles.title}>About me:</div>
          <div dangerouslySetInnerHTML={createMarkup(about)} />
          <div className={styles.title}>Who I'd like to meet:</div>
          <div dangerouslySetInnerHTML={createMarkup(peopleInterest)} />
        </Card.Body>
      </Card>
    </Container>
  );
};

Blurbs.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  peopleInterest: PropTypes.string.isRequired,
};
