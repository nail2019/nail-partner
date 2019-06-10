import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../service.css';
import { Row, Col, Container } from 'react-bootstrap';

export default function DinhDaPopUp() {
  const ic_check = <FontAwesomeIcon className="IconCheck " icon={faCheck} />
  return (
    <Container>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Làm sạch móng.</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Cắt và dũa móng.</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Phủ lớp sơn lót (lớp nền).</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Sơn móng tay.</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Đính đá.</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Quét lớp sơn bóng.</div>
        </Col>
      </Row>
    </Container>
  )
}