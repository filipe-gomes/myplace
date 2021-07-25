import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Blurbs } from "./Blurbs";
import { blurbsProps } from "../../sample-data/blurbsProps.sample";

export default {
  title: "User Page/Blurbs",
  component: Blurbs,
};

const Template = (args) => (
  <Container fluid>
    <Row>
      <Col lg={7} md={12}>
        <Blurbs {...args} />
      </Col>
    </Row>
  </Container>
);

const { about, peopleInterest } = blurbsProps;

export const BlurbsExample = Template.bind({});
BlurbsExample.args = {
  name: "Filipe",
  about: about,
  peopleInterest: peopleInterest,
};
