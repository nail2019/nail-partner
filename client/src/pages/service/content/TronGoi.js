import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalContainer from '../../../components/modal/modal';
import TronGoiPopUp from '../ServicePopUp/TronGoiPopUp'

export default class TronGoi extends React.Component {
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
      <TronGoiPopUp />
    )
  }
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <React.Fragment>
        <Col sm={4} md={4} sx={4} >
          <Col sm={12} md={12} sx={12} className='box-service'>
            <div className="AnhTronGoi"></div>
            <div className="TitleService">Trọn gói cho tay hoặc chân</div>
            <Row >
              <Col sm={12} md={12} sx={12} >
                <div id='square2' onClick={this.displaySignUp}> Thông tin thêm</div>
              </Col>
              <Col sm={12} md={12} sx={12} >
                <Link to={'/nailer'}>
                  <div id='square2'>Gợi ý thợ</div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Col>
        {this.state.modalShow
          ? <ModalContainer
            body={this.returnBodySignUp}
            title="Bạn sẽ được tận hưởng"
            show={this.state.modalShow}
            onHide={modalClose}
          />
          : null}
      </React.Fragment>
    )
  }

}




