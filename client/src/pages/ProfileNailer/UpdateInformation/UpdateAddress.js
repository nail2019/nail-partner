import React, { Component } from 'react';
import { Row, Form, Col } from 'react-bootstrap';

class UpdateAddress extends Component {
  render() {
    return (
      <React.Fragment>
        <Form.Group as={Row} controlId="exampleForm.ControlSelect1" >
          <Form.Label column sm="6" md="6" sx="6">Địa chỉ</Form.Label>
        </Form.Group>
        <Row>
          <Col sm={12} md={12} sx={12}  >
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Số nhà, Đường, Phường, Quận, Thành phố" rows="2"></textarea>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default UpdateAddress;  