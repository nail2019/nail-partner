import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container } from 'react-bootstrap';
import '../service.css';

export default function DapBotPopUp() {
  const ic_check = <FontAwesomeIcon className="IconCheck " icon={faCheck} />
  return (
    <Container>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Cắt móng sát, dán móng giả nối thêm ở đầu móng, cắt tỉa  và dũa lại độ dài mong muốn.</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Đắp bột phủ lên trên móng giả + móng thật</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Dùng máy mài bớt để lớp bột không bị dày cộm lên mà nhìn rất tự nhiên</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Dùng miếng nhám chà xát lên mặt bột để tạo độ nhám cho móng giúp lớp sơn gel bám vào móng tốt hơn, giữ được bền hơn.</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Sơn gel màu tùy chọn, hơ đèn chiếu giữa các lớp sơn cho khô, thường là sơn 2 lớp màu và 1 lớp bóng.</div>
        </Col>
      </Row>
    </Container>
  )
}        