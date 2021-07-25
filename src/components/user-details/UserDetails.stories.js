import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { UserContextProvider } from "../../contexts/UserContext";
import { UserDetails } from "./UserDetails";
import { userDetailsProps } from "../../sample-data/userDetailsProps.sample";

export default {
  title: "User Page/User Details",
  component: UserDetails,
};

const {
  name,
  description,
  gender,
  age,
  location,
  lastLogin,
} = userDetailsProps;

const Template = (args) => (
  <UserContextProvider>
    <Container fluid>
      <Row>
        <Col lg={5} md={12}>
          <UserDetails {...args} />
        </Col>
      </Row>
    </Container>
  </UserContextProvider>
);

export const UserExample = Template.bind({});
UserExample.args = {
  name: name,
  description: description,
  gender: gender,
  age: age,
  location: location,
  lastLogin: lastLogin,
};
