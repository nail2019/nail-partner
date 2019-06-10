import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SignUp from '../../pages/signup'
import Login from '../../pages/signin/signin'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Dropdown.css';
import AVT from '../../assets/images/AVT.svg'
class HeaderDropdown extends Component {
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
    // let modalClose = () => this.setState({ modalShow: false });
    // let ic_search = <FontAwesomeIcon className="ic_search " icon={faSearch} />
    return (
      <Dropdown >
        <Dropdown.Toggle className='Ava' id="dropdown-custom-components">
          <div className="ahaha">
            <img src={AVT} alt=""/>
          </div>
        </Dropdown.Toggle>
        <div className="abc">
          <Dropdown.Menu>
            <div className="ono">
              <Dropdown.Item eventKey="1">
                <img src={AVT} alt=""/>
              </Dropdown.Item>
            </div>
            <div className="ava1">
               Chào 0903235671
            </div>
            <Dropdown.Item eventKey="2"><Link to={'/ProfileClient'}>Thông tin cá nhân</Link> </Dropdown.Item>
            <Dropdown.Item eventKey="3">
              <Link to={'/ChangePassword'}>Đổi mật khẩu</Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">
              <Link to={'/home'}>Đăng xuất </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </div>
      </Dropdown>


    );
  }
}

export default HeaderDropdown;
