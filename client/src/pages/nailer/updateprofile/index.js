import React from 'react';
import { Container, Col, Row, Tab, Tabs } from "react-bootstrap";
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default class UpdateProfile extends React.Component {
  render() {
    return (
      <Container>
        <Row className='mt-4 mb-4'>
          <RenderLeftContent />
          <RenderRightContent />
        </Row>
      </Container>
    )
  }
}

const RenderRightContent = () => {
  return (
    <Col sm={9} className='right-content-page-update-profile'>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <p>page1</p>
          {/* viet 1 function return layout của sản phẩm gần đây */}
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>page2</p>
          {/* viet 1 funtion return layout của đóng góp cho cộng đồng */}
        </Tab>
      </Tabs>
    </Col>
  )
}


const RenderLeftContent = () => {
  return (
    <Col sm={3} className='left-content-page-update-profile'>
      <RenderAvata />
      <RenderUserDetail />
    </Col>
  )
}

const RenderAvata = () => {
  let ic_start = <FontAwesomeIcon icon={faStar} />
  return (
    <div className="avata">
      <div className='box--avata'>
        <img src="https://picsum.photos/300" alt="avata" />
      </div>
      <div className='user--infomation'>
        <div>Huynh thi B</div>
        <div className="user--rate">
          {ic_start}
          {ic_start}
          {ic_start}
          {ic_start}
          {ic_start}
        </div>
      </div>
    </div>
  )
}
const RenderUserDetail = () => {
  return (
    <div className='user-detail'>
      <div className='user-detail--title'>Địa chỉ</div>
      <span>66/14, Nguyễn Huệ, Quận 1, TP. HCM</span>
    </div>
  )
}