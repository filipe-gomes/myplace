import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { UserInterests } from "./UserInterests";
import { userInterestsProps } from "../../sample-data/userInterestsProps.sample";

export default {
  title: "User Page/User Interests",
  component: UserInterests,
};

const Template = (args) => (
  <Container fluid>
    <Row>
      <Col lg={5} md={12}>
        <UserInterests {...args} />
      </Col>
    </Row>
  </Container>
);

export const UserInterestsExample = Template.bind({});
UserInterestsExample.args = {
  name: "Filipe",
  interests: userInterestsProps,
};
