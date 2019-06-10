import React, { Component } from 'react';
import { Row, Form, Col } from 'react-bootstrap';

class UpdateBirthday extends Component {
  render() {
    return (
      <React.Fragment>
        <Form.Group as={Row} >
          <Form.Label column sm="6" md="6" sx="6">Ngày tháng năm sinh</Form.Label>
        </Form.Group>
        <Form.Row>
          <Col sm={4} md={4} sx={4}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>Ngày</option>
                <option>1</option>
                <option>2</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={4} md={4} sx={4}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>Tháng</option>
                <option>Tháng 1</option>
                <option>Tháng 2</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={4} md={4} sx={4}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>Năm</option>
                <option>1980</option>
                <option>1981</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
      </React.Fragment>
    );
  }
}
export default UpdateBirthday;  