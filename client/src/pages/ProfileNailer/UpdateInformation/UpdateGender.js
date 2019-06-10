import React, { Component } from 'react';
import { Row, Form, Col } from 'react-bootstrap';

class UpdateGender extends Component {
  render() {
    return (
      <React.Fragment>
        <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
          <Form.Label column sm="7" md="7" sx="7">Giới tính</Form.Label>
        </Form.Group>
        <Form.Row>
          <Col sm={4} md={4} sx={4}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>Nam</option>
                <option>Nữ</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
      </React.Fragment>
    );
  }
}
export default UpdateGender;  