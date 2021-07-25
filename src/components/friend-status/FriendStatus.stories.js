import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FriendStatus } from "./FriendStatus";

export default {
  title: "User Page/Friend Status",
  component: FriendStatus,
};

const Template = (args) => (
  <Container fluid>
    <Row>
      <Col lg={7} md={12}>
        <FriendStatus {...args} />
      </Col>
    </Row>
  </Container>
);

export const FriendStatusExample = Template.bind({});
FriendStatusExample.args = {
  name: "Filipe",
  isInNetwork: false,
};
