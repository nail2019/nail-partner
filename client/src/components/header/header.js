import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import ModalContainer from '../modal/modal'
import SignUp from '../../pages/signup'
import Login from '../../pages/signin/signin'
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class HeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.state = { modalShow: false, login: false};
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
    let ic_search = <FontAwesomeIcon className="ic_search " icon={faSearch} />
    return (
      <React.Fragment>
        <div className="App-header">
          <div className="header">
            <div className="navbar2">
              <ul>
                <li>
                  <a href='tel:084391239123'>
                    &#9990; +84 39123 9123
                </a>
                </li>
                <li>
                  <a href='mailto: nail.system.2019@gmail.com'>
                    &#9993; nail.system.2019@gmail.com
                </a>
                </li>
                <li>
                  <Row>
                    <div className='top' onClick={this.displaySignUp}>
                      Đăng ký
									</div>
                    /
									<div className='top ' onClick={this.displayLogin}>
                      Đăng nhập
									</div>
                  </Row>
                </li>
                <li> VI | EN</li>
                <li> <input type='text' className='search' />{ic_search}
                </li>

              </ul>
            </div>
            <div className="navbar justify-content-end">
              <ul>
                <li> <Link to='/' className="whiteColor"> TRANG CHỦ </Link> </li>
                <li> <Link to='/about' className="whiteColor"> GIỚI THIỆU </Link> </li>
                <li> <Link to='/service' className="whiteColor"> DỊCH VỤ </Link> </li>
                <li> <Link to='/nailer' className="whiteColor">THỢ NAIL</Link></li>
                <li> <Link to='/product/1' className="whiteColor">TÁC PHẨM</Link></li>
                <li> <Link to='/support' className="whiteColor">TRỢ GIÚP</Link></li>
                <li> <Link to='/contact' className="whiteColor"> LIÊN HỆ </Link> </li>
                <li> <Link to='/profileclient' className="whiteColor"> USER </Link> </li>
              </ul>
            </div>
          </div>
        </div>
        {!this.state.login
          ? <ModalContainer
            body={this.returnBodySignUp}
            title="Đăng ký"
            show={this.state.modalShow}
            onHide={modalClose}
            status={this.state.login}
          />
          : <ModalContainer
            body={this.returnBodyLogin}
            title="Đăng nhập"
            show={this.state.modalShow}
            onHide={modalClose}
            status={this.state.login}
          />
        }
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
