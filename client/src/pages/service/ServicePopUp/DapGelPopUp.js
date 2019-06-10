import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../service.css';
import { Row, Col, Container } from 'react-bootstrap';

export default function DapGelPopUp() {
  const ic_check = <FontAwesomeIcon className="IconCheck " icon={faCheck} />
  return (
    <Container>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Làm vệ sinh cho móng, nhặt da và giữa móng theo form. Lưu ý cần giũa bề mặt móng sần nhẹ để bám gel</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Sơn một lớp sơn liên kết để giữ màu</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Đắp gel bằng cọ. Lấy lượng gel vừa đủ phủ lên phần đầu móng để tạo khuôn móng trước, sau đó đẩy sao cho móng vừa tạo theo khuôn nhất định, chú ý để không bị lem.</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Hơ móng dưới đèn led hoặc đèn UV cho móng khô</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Tiếp tục giũa móng mịn theo form tùy chỉnh</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Sơn màu tạo kiểu như bình thường</div>
        </Col>
      </Row>
      <Row>
        <Col sm={1} md={1} sx={1}>
          {ic_check}
        </Col>
        <Col sm={11} md={11} sx={11}>
          <div className="text1">Sơn bóng và hoàn thành</div>
        </Col>
      </Row>
    </Container>
  )
}    