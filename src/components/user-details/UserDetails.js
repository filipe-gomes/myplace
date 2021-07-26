import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./UserDetails.module.css";
import AndreDevito from "../../assets/images/AndreDevito.jpeg";

/**
 * Build UserDetails. Displays user details on profile page
 * @param {Object} UserDetailsProps
 * @param {string} UserDetailsProps.name name of user
 * @param {string} UserDetailsProps.description description entered by user
 * @param {string} UserDetailsProps.gender user gender
 * @param {number} UserDetailsProps.age user age in years
 * @param {Object} UserDetailsProps.location location object includes city, state, country
 * @param {string} UserDetailsProps.lastLogin date of user's last login in MM/DD/YYYY format
 * @returns {React.FC}
 */
export const UserDetails = ({
  name,
  description,
  gender,
  age,
  location,
  lastLogin,
}) => {
  return (
  <Container>
    <Row>
      <Col sm={12}>
        <p className={styles.username} align="justify">
          {name}
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={6} sm={6}>
        <img
          className={`${styles.profilePic} ${styles.rounded}`}
          src={AndreDevito}
          alt={AndreDevito}
        />
      </Col>
      <Col xs={6} sm={6}>
        <div className={styles.profileInfo}>
          <p align="justify">{description}</p>
          <br />
          <p align="justify">{gender}</p>
          <p align="justify">{age} years old</p>
          <p align="justify">{location.city},</p>
          <p align="justify">{location.state}</p>
          <p align="justify">{location.country}</p>
          <br />
          <p align="justify">Last Login:</p>
          <p align="justify">{lastLogin}</p>
        </div>
      </Col>
    </Row>
  </Container>
)};

UserDetails.propTypes = {
  description: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
};
