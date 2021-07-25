import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { UserContextProvider } from "../../contexts/UserContext";
import { ContactControls } from "./ContactControls";
import { userDetailsProps } from "../../sample-data/userDetailsProps.sample";

export default {
  title: "User Page/Contact Controls",
  component: ContactControls,
};

const { name, email } = userDetailsProps;

const Template = (args) => (
  <UserContextProvider>
    <Container fluid>
      <Row>
        <Col lg={6} md={12}>
          <ContactControls {...args} />
        </Col>
      </Row>
    </Container>
  </UserContextProvider>
);

export const ContactControlsExample = Template.bind({});
ContactControlsExample.args = {
  name: name,
  email: email,
};
