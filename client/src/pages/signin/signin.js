import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import './signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import icZalo from '../../assets/images/Logo_Zalo.svg'
import icGoogle from '../../assets/images/google.svg'


class SignIn extends Component {
  render() {
    let ic_facebook = <FontAwesomeIcon className="icFacebook " icon={faFacebook} />
    return (
      <div className="SignInComponent--Nailer">
        <Row>
          <Col>
            <h4 className="text-center m-0">đăng nhập bằng</h4>
          </Col>
        </Row>
        <Row className="my-4">
          <Col >
            <div className="box-icon google">
              <button className="p-0 btn">
                <div className="icZalo">
                  <img src={icGoogle} alt="" />
                </div>
                <span>Google</span>
              </button>
            </div>
          </Col>
          <Col >
            <div className="box-icon facebook">
              <button className="p-0 btn">
                {ic_facebook}<span>Facebook</span>
              </button>
            </div>
          </Col>
          <Col >
            <div className="box-icon zalo">
              <button className="p-0 btn">
                <div className="icZalo">
                  <img src={icZalo} alt="" />
                </div><span>Zalo</span>
              </button>
            </div>
          </Col>
        </Row >
        <Row className='justify-content-center'>
          <Col >
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="4">
                  <b>Số điện thoại</b>
                </Form.Label>
                <Col sm={8} md={8} sx={8}>
                  <Form.Control type="text" className="input" placeholder="Nhập số điện thoại" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="signin-password" >
                <Form.Label column sm="4" >
                  <b>Mật khẩu</b>
                </Form.Label>
                <Col sm={8} md={8} sx={8} className="d-flex">
                  <Form.Control type="password" placeholder="Nhập mật khẩu" />
                  <Button variant="outline-dark" >Quên mật khẩu</Button>
                </Col>
              </Form.Group>
              <Row className="justify-content-center">
              <Col sm={4} md={4} sx={4}></Col>
                <Col sm={8} md={8} sx={8}>
                  <Button className="btnLogin">Đăng nhập</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div >
    );
  }
}
export default SignIn;

