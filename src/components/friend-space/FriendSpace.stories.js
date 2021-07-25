import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FriendSpace } from "./FriendSpace";
import { friendSpaceProps } from "../../sample-data/friendSpaceProps.sample";

export default {
  title: "User Page/Friend Space",
  component: FriendSpace,
};

const { friends, enemies } = friendSpaceProps;

const Template = (args) => (
  <Container fluid>
    <Row>
      <Col lg={7} md={12}>
        <FriendSpace {...args} />
      </Col>
    </Row>
  </Container>
);

export const FriendSpaceExample = Template.bind({});
FriendSpaceExample.args = {
  name: "Filipe",
  friends: friends,
  enemies: enemies,
};
