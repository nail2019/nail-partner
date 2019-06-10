import React, { Component } from 'react';
import { Row, Form, Col } from 'react-bootstrap';

class UpdateEmail extends Component {
  render() {
    return (
      <React.Fragment>
        <Form.Group as={Row} >
          <Form.Label column sm="6" md="6" sx="6">Email</Form.Label>
        </Form.Group>
        <Row>
          <Col sm={12} md={12} sx={12}  >
            <Form.Control type="email" />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default UpdateEmail;  