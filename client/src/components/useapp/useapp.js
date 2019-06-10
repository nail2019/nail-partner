import React from 'react';
import { Row, Container, } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap/'
import './useapp.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// import img1 from '../../assets/images/appstore.svg';
// import img2 from '../../assets/images/chplay.svg';

export default function UseApp() {

  return (
    <Container>
      <Row><div className='useapp-title'>Dễ dàng đặt lịch với Nail Partner</div></Row>
      <Carousel>
        <Carousel.Item>
          <div className='useapp'>
            <div className='useapp-1'></div>
          </div>
          <Carousel.Caption>
            <div className='useapp-title-once'>Bước 1</div>
            <div className='useapp-desc'>Chọn dịch vụ</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='useapp'>
            <div className='useapp-1'></div>
          </div>
          <Carousel.Caption>
            <div className='useapp-title-once'>Bước 2</div>
            <div className='useapp-desc'>Chọn vị trí</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='useapp'>
            <div className='useapp-1'></div>
          </div>
          <Carousel.Caption>
            <div className='useapp-title-once'>Bước 3</div>
            <div className='useapp-desc'>Chọn thợ Nail</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='useapp'>
            <div className='useapp-1'></div>
          </div>
          <Carousel.Caption>
            <div className='useapp-title-once'>Bước 4</div>
            <div className='useapp-desc'>Trao đổi giá cả & Hoàn tất</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}