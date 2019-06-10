import React, { Component } from 'react';
import { Row, Form, Col } from 'react-bootstrap';

class UpdateExperience extends Component {
  render() {
    return (
      <React.Fragment>
        <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
          <Form.Label column sm="6" md="6" sx="6">Kinh nghiệm</Form.Label>
        </Form.Group>
        <Form.Row  >
          <Col sm={4} md={4} sx={4} className="ml-0 mb-3">
            <Form.Control type="text" />
          </Col>
          <Col sm={4} md={4} sx={4} className=" mb-3">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>Tháng</option>
                <option>Năm</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
      </React.Fragment>
    );
  }
}
export default UpdateExperience;  