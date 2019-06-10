import React from 'react';
import { Row, Col, Form, Container, Button } from 'react-bootstrap';
import './ChangePassword.css';

export default class ChangePassword extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <div className='avatar'>
          </div>
        </Row>
        <Row>
          <div className='Title'>
            Đổi mật khẩu
          </div>
        </Row>
        <Row>
          <div className="Content-Password">
            <Form>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4" md="4" sx="4" className="Left-Password">
                  Mật khẩu hiện tại
                </Form.Label>
                <Col sm="8" md="8" sx="8">
                  <Form.Control type="password" placeholder="Vui lòng nhập mật khẩu đang dùng" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4" md="4" sx="4" className="Left-Password" minLength="6">
                  Mật khẩu mới
                </Form.Label>
                <Col sm="8" md="8" sx="8">
                  <Form.Control type="password" placeholder="Dài ít nhất 6 ký tự" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="4" md="4" sx="4" className="Left-Password">
                  Xác nhận mật khẩu mới
                </Form.Label>
                <Col sm="8" md="8" sx="8">
                  <Form.Control type="password" placeholder="Vui lòng xác nhận mật khẩu mới" />
                </Col>
              </Form.Group>
            </Form>
            <Row>
            <Col sm="4" md="4" sx="4"></Col>  
            <Col sm="8" md="8" sx="8">
            <Button variant="success">Hoàn thành</Button>
            </Col>
            </Row>
          </div>
        </Row>
      </Container>
    )
  }
}