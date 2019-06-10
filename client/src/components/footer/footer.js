import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import img1 from '../../assets/images/appstore.svg';
import img2 from '../../assets/images/chplay.svg';

export default function FooterComponent() {
  const ic_facebook = <FontAwesomeIcon className="fontSize25 white " icon={faFacebook} />
  const ic_instagram = <FontAwesomeIcon className="fontSize25 white" icon={faInstagram} />
  const ic_twitter = <FontAwesomeIcon className="fontSize25 white" icon={faTwitter} />
  const ic_youtube = <FontAwesomeIcon className="fontSize25 white" icon={faYoutube} />
  const ic_mapMaker = <FontAwesomeIcon className="fontSize25 mr-2" icon={faMapMarkerAlt} />
  const ic_mobileAlt = <FontAwesomeIcon className="fontSize25 mr-2" icon={faMobileAlt} />
  const ic_envelope = <FontAwesomeIcon className="fontSize25 mr-2" icon={faEnvelope} />
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={3} sm={3} sx={3}>
            <Link to={'/about'}>
              <div className="aboutUsTitle font-weight-bold pb-2">
                Về chúng tôi
            </div>
            </Link>
            <div className="aboutUsContent">
              Nail Partner sinh ra để đáp ứng nhu cầu làm đẹp của mọi người. Bất cứ khi nào bạn muốn đôi bàn tay của mình trở nên lung linh hơn hãy nhớ đến chúng tôi. Vì Nail Partner luôn luôn 
              <div className="Slogan">ĐỒNG HÀNH CÙNG VẺ ĐẸP BẠN</div>
            </div>
            {/* <div className="font-weight-bold pt-2">Điều khoản hoạt động</div> */}
            <Link to={'/policy'}>
              <div className="font-weight-bold pt-2">Chính sách bảo mật</div>
            </Link>
          </Col>
          <Col md={3} sm={3} sx={3}>
            <form>
              <div className="font-weight-bold">
                <label htmlFor="exampleInputEmail1">Gửi Email phản hồi</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mail@example.com" />
              </div>
              <div className="form-group font-weight-bold mt-1">
                <label htmlFor="exampleFormControlTextarea1">Nội dung</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Nhập nội dung cần tư vấn" rows="1.5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary sendButton">GỬI</button>
            </form>
          </Col>
          <Col md={3} sm={3} sx={3}>
            <div className="download font-weight-bold pb-2">Tải App</div>
            <div className="chPlay pb-3">
              <img src={img2} alt="ChPlay" />
            </div>
            <div className="appStore">
              <img src={img1} alt="Appstore" />
            </div>
          </Col>
          <Col md={3} sm={3} sx={3}>
            <div className="contactTitle font-weight-bold pb-2">Thông tin liên hệ</div>
            <div className="address pb-1">
              <a href='https://www.google.com/maps' rel="noopener noreferrer" target="_blank">
                {ic_mapMaker} 38 Nail Street, New York, USA
                        	</a>
            </div>
            <div className="phoneNumber pb-1">
              <a href='tel:+84 3123 9123'>
                {ic_mobileAlt} +84 3123 9123
                            </a>
            </div>
            <div className="supportMail">
              <a href='mailto:nail.system.2019@gmail.com'>
                {ic_envelope} nail.system.2019@gmail.com
                            </a>
            </div>
            <Row className="footSocial">
              <Col md={3} sm={3} sx={3}>
                <a href="https://www.twitter.com" rel="noopener noreferrer">
                  {ic_facebook}
                </a>
              </Col>
              <Col md={3} sm={3} sx={3}>
                <a href="https://www.linkedin.com" rel="noopener noreferrer">
                  {ic_instagram}
                </a>
              </Col>
              <Col md={3} sm={3} sx={3}>
                <a href="https://www.facebook.com" rel="noopener noreferrer">
                  {ic_youtube}
                </a>
              </Col>
              <Col md={3} sm={3} sx={3}>
                <a href="https://www.skype.com" rel="noopener noreferrer">
                  {ic_twitter}
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="footBar">
        <Container>
          <div className="copywright">2019 Copyright © by Nails Partner Corp</div>
        </Container>
      </div>
    </div>
  )
}
