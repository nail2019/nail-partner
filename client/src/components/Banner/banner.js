import React, { Component } from 'react';
import './banner.css'
import { Row } from 'react-bootstrap';
import ModalContainer from '../modal/modal'
import SignUp from '../../pages/signup'
import Login from '../../pages/signin/signin'
class Background extends Component {
  constructor(props) {
    super(props)

    this.state = { modalShow: false, login: false };
  }

  displaySignUp = () => {
    this.setState({
      modalShow: true,
      login: false
    })
  }
  displayLogin = () => {
    this.setState({
      modalShow: true,
      login: true
    })
  }
  returnBodySignUp = () => {
    return (
      <SignUp />
    )
  }
  returnBodyLogin = () => {
    return <Login />
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <React.Fragment>
        <Row className="banner">
          <div className='banner__content'>
            <p>Tham gia ngay</p>
            <button className="btn btn-signup mb-2" onClick={this.displaySignUp}>
              Đăng ký
                        </button>
            <button className="btn btn-login mb-2" onClick={this.displayLogin}>
              Đăng nhập
                        </button>
          </div>
        </Row>
        {!this.state.login
          ? <ModalContainer
            body={this.returnBodySignUp}
            title="Đăng ký"
            show={this.state.modalShow}
            onHide={modalClose}
            status={this.state.login.toString()}
          />
          : <ModalContainer
            body={this.returnBodyLogin}
            title="Đăng nhập"
            show={this.state.modalShow}
            onHide={modalClose}
            status={this.state.login.toString()}
          />
        }
      </React.Fragment>
    );
  }
}

export default Background;
