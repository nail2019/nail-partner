import React, { Component } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import './banggiadichvu.css';
//import datlich from '../../assets/images/plus-circle-solid.svg';
//import datlich1 from '../../assets/images/minus-circle-solid.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Col, Container} from 'react-bootstrap/'

class BangGiaDichVu extends Component {

  render() {
    let ic_plus = <FontAwesomeIcon className="ic_plus " icon={faPlusCircle} />
    let ic_minus = <FontAwesomeIcon className="ic_minus" icon={faMinusCircle} />
    return (
      <div className="BangGiaDichVu">
        
          <div><h4 className="text-title">Bang Gia Dich Vu</h4></div>
          <Container className="container">

            <div className="text-title1">Loai Hinh</div>
            <div className="text-title2">Gia Tham Khao VND</div>


            <Form>

             
               <Row>
                <Col className="col-canh" sm={4}>
                  <Form.Group size="sm" type="text" placeholder="Small text" controlId="exampleForm.ControlSelect1">
                    <Form.Control size="sm" type="text" placeholder="Small text" as="select">
                      <option>Tron goi tay hoac chan</option>
                      <option>Cham soc mong tay hoac mong chan</option>
                      <option>Dap bot</option>
                      <option>Dap mong gel</option>
                      <option>Ve trang tri</option>
                      <option>Dinh da</option>
                    </Form.Control>
                  </Form.Group>

                </Col>
                <Col ><h4 className="gia">Tu</h4></Col>
                <Col className="col-nhap-gia" sm={2}>
                  <Form.Control size="sm" type="text" placeholder="nhap gia" />
                </Col>
                <Col sm={2}><h4 className="gia1">~</h4></Col>
                <Col className="col-nhap-gia1" sm={2}>
                  <Form.Control size="sm" type="text" placeholder="nhap gia" />
                </Col>
                <Col><Button size="sm" variant="suscess" className="button1">{ic_plus}</Button> </Col>
               </Row>
               <Row>
                <Col className="col-canh" sm={4}>
                  <Form.Group size="sm" type="text" placeholder="Small text" controlId="exampleForm.ControlSelect1">
                    <Form.Control size="sm" type="text" placeholder="Small text" as="select">
                      <option>Tron goi tay hoac chan</option>
                      <option>Cham soc mong tay hoac mong chan</option>
                      <option>Dap bot</option>
                      <option>Dap mong gel</option>
                      <option>Ve trang tri</option>
                      <option>Dinh da</option>
                    </Form.Control>
                  </Form.Group>

                </Col>
                <Col ><h4 className="gia">Tu</h4></Col>
                <Col className="col-nhap-gia" sm={2}>
                  <Form.Control size="sm" type="text" placeholder="nhap gia" />
                </Col>
                <Col sm={2}><h4 className="gia1">~</h4></Col>
                <Col className="col-nhap-gia1" sm={2}>
                  <Form.Control size="sm" type="text" placeholder="nhap gia" />
                </Col>
                               
                <Col><Button size="sm" variant="suscess" className="button1">{ic_plus}</Button>
                <Button size ="sm" variant="suscess" className="button2">{ic_minus}</Button>
                </Col>                
               </Row>
               <Row>
                <Col className="col-canh" sm={4}>
                  <Form.Group size="sm" type="text" placeholder="Small text" controlId="exampleForm.ControlSelect1">
                    <Form.Control size="sm" type="text" placeholder="Small text" as="select">
                      <option>Tron goi tay hoac chan</option>
                      <option>Cham soc mong tay hoac mong chan</option>
                      <option>Dap bot</option>
                      <option>Dap mong gel</option>
                      <option>Ve trang tri</option>
                      <option>Dinh da</option>
                    </Form.Control>
                  </Form.Group>

                </Col>
                <Col ><h4 className="gia">Tu</h4></Col>
                <Col className="col-nhap-gia" sm={2}>
                  <Form.Control size="sm" type="text" placeholder="nhap gia" />
                </Col>
                <Col sm={2}><h4 className="gia1">~</h4></Col>
                <Col className="col-nhap-gia1" sm={2}>
                  <Form.Control size="sm" type="text" placeholder="nhap gia" />
                </Col>
                               
                <Col><Button size="sm" variant="suscess" className="button1">{ic_plus}</Button>
                <Button size ="sm" variant="suscess" className="button2">{ic_minus}</Button>
                </Col>                
               </Row>
            </Form>
            <Row>

              <div className="button-dang-ky1">
                <ButtonToolbar className="button-dang-ky">
                  <Button variant size="lg" className="button-dang-ky">Hoan Thanh</Button>
                </ButtonToolbar>
              </div>


            </Row>
          </Container>
        
      </div >
    );
  }
}

export default BangGiaDichVu;
