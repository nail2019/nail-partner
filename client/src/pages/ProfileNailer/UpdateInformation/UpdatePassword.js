import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import ModalContainer from '../../../components/modal/modal';
import ChangePassword from '../../../components/ChangePassword/ChangePassword';

class UpdatePassword extends Component {
  constructor(props) {
    super(props)

    this.state = { modalShow: false };
  }
  displaySignUp = () => {
    this.setState({
      modalShow: true,

    })
  }
  returnBodySignUp = () => {
    return (
      <ChangePassword />
    )
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <React.Fragment>
        <Row >
          <Col sm={12} md={12} sx={12}> Mật khẩu</Col>
        </Row>
        <Row className="mb-3">
          <Col sm={6} md={6} sx={6}>
            <input type="password" name="firstname" value="********XX" className="password" readonly />
          </Col>
          <Col sm={6} md={6} sx={6}>
            <div className="UpdateImage" onClick={this.displaySignUp}>Đổi mật khẩu</div>            
          </Col>
        </Row>
        {this.state.modalShow
          ? <ModalContainer
            body={this.returnBodySignUp}            
            show={this.state.modalShow}
            onHide={modalClose}
          />
          : null}
      </React.Fragment>
    );
  }
}
export default UpdatePassword;      