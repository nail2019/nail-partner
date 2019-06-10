import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap'
import './header-m.css';
import { Link } from 'react-router-dom';
//import ModalContainer from '../modal/modal'
import SignUp from '../../pages/signup'
import Login from '../../pages/signin/signin'
//import { Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

class HeaderComponentM extends Component {
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
            <React.Fragment>
                <div className="App-header-m">
                    <div className='bars-box'>
                    <Dropdown>
                        <Dropdown.Toggle>
                            <div className='hamburger-menu'></div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item> <Link to='/' className="blackColor nav-m-lish"> TRANG CHỦ </Link> </Dropdown.Item>
                            <Dropdown.Item> <Link to='/about' className="blackColor nav-m-lish"> GIỚI THIỆU </Link> </Dropdown.Item>
                            <Dropdown.Item> <Link to='/service' className="blackColor nav-m-lish"> DỊCH VỤ </Link> </Dropdown.Item>
                            <Dropdown.Item> <Link to='/nailer' className="blackColor nav-m-lish">THỢ NAIL</Link></Dropdown.Item>
                            <Dropdown.Item> <Link to='/product/123' className="blackColor nav-m-lish">TÁC PHẨM</Link></Dropdown.Item>
                            <Dropdown.Item> <Link to='/support' className="blackColor nav-m-lish">TRỢ GIÚP</Link></Dropdown.Item>
                            <Dropdown.Item> <Link to='/contact' className="blackColor nav-m-lish"> LIÊN HỆ </Link> </Dropdown.Item>
                            <Dropdown.Item> <Link to='/profileclient' className="blackColor nav-m-lish"> USER </Link> </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div className='whiteColor Corp'>Nail Partner</div>
        </div>
            </React.Fragment>
        );
    }
}

export default HeaderComponentM;
