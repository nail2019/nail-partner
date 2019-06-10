import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Row, Col, Container, InputGroup, FormControl, Collapse } from 'react-bootstrap/'
// import Collapse from 'react-bootstrap/Collapse';
import './support-menu.css';
//import Card from 'react-bootstrap/Card'

import datlich from '../../assets/images/ic_datlich.svg';
import kythuat from '../../assets/images/ic_.svg';
import taikhoan from '../../assets/images/ic_taikhoan.svg';
import tho from '../../assets/images/ic_tho.svg';



class menu_datlich extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }
    render() {

        const { open } = this.state;
        let ic_search = <FontAwesomeIcon className="ic-search " icon={faSearch} />
        return (
            <Container className='text-center mt-4' id="support-menu">

                {/* Welcome text */}

                <Row >
                    <Col>
                        <div className='slo'>Xin chào, Nail Partner có thể giúp gì cho bạn?</div>
                    </Col>
                </Row>
                {/* Search Bar */}
                <Row className="justify-content-center m-3">
                    <Col sm={6}>
                        <InputGroup className="mb-3" size='sm'>
                            <FormControl className='menu-form-input'
                                placeholder="Bạn có thắc mắc gì về Nail Partner"
                            />
                            <InputGroup.Append>
                                <Button type='button' className='menu-search-sp'>{ic_search}</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>

                {/* Menu */}

                <Row>
                    <Col sm={3}>
                        <div className='support-menu'>
                            <img src={datlich} alt="dl" />
                            <div className='support-menu-title'>
                                Đặt Lịch
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className='questions'>
                            <ol>
                                <li className='direct-quest'  onClick={() => this.setState({ open: !open })}>Tại sao chúng tôi chỉ có 30 phút đặt mua vé?</li>
                                <Collapse in={this.state.open}>
                                    <div className='answers'>
                                    Chúng tôi mong muốn mang lại cơ hội đặt lịch cho tất cả mọi người là như nhau, vì vậy nếu bạn không hoàn thành việc đặt mua vé trong vòng 30 phút, cơ hội sẽ dành cho những người khác.
                                    </div>
                                </Collapse>
                                <li className='direct-quest'  onClick={() => this.setState({ open: !open })}>Tôi có được đặt lịch với nhiều thợ trong cùng một đơn giao dịch không?</li>
                                
                            </ol>
                            {/* <Cauhoi/> */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <div className='support-menu'>
                            <img src={kythuat} alt="kt" />
                            <div className='support-menu-title'>
                                Kỹ thuật
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <div className='support-menu'>
                            <img src={taikhoan} alt="tk" />
                            <div className='support-menu-title'>
                                Tài khoản
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <div className='support-menu'>
                            <img src={tho} alt="th" />
                            <div className='support-menu-title'>
                                Từ người thợ
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Questions */}

                {/* Support Contact */}

                <Row className="m-4">
                    <Col>
                        <div className="mb-2 menu-btn-slo">Liên hệ với chúng tôi!</div>
                        <Button type='button' className='p-3 menu-contact-btn'>Trò chuyện ngay</Button>
                    </Col>
                </Row>
            </Container >
        );
    }
}
// questions = [
//     {
//         id: 1,
//         name: 'Tại sao chúng tôi chỉ có 30 phút đặt mua vé?',
//         answers: 'Chúng tôi mong muốn mang lại cơ hội đặt lịch cho tất cả mọi người là như nhau, vì vậy nếu bạn không hoàn thành việc đặt mua vé trong vòng 30 phút, cơ hội sẽ dành cho những người khác.'
//     },
//     {
//         id: 2,
//         name: 'sTại sao chúng tôi chỉ có 30 phút đặt mua vé?',
//         answers: 'Chúng tôi mong muốn mang lại cơ hội đặt lịch cho tất cả mọi người là như nhau, vì vậy nếu bạn không hoàn thành việc đặt mua vé trong vòng 30 phút, cơ hội sẽ dành cho những người khác.'
//     },
// ];
// var Cauhoi = (props) => {
//     let cauhoi = props.cauhoi;
//     let element = cauhoi.map((questions) => {
//         return (
//             <ol>
//                 <li onClick={() => this.setState({ open: !open })} key={element.id}>{element.name}</li>
//                 <Collapse in={this.state.open}><div>{element.answers}</div></Collapse>
//             </ol>
//         );
//     })

// }
export default menu_datlich;