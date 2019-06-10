import React from 'react';
import './body-loi-ich.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'react-bootstrap';

export default function bodyloiichComponent() {
  const ic_check = <FontAwesomeIcon className="IconCheck" icon={faCheck} />
  return (
    <div className='body-loi-ich mt-3'>
      <div className='text-tieu-de'>Nails Partner sẽ mang đến cho </div>
      <div id='card-1'>
        <div className='text-tieu-de '>Khách hàng </div>
        <Row>
          {ic_check}
          <div className='ContentLoiIch'>Làm đẹp tại mọi lúc, mọi nơi</div></Row>
        <Row>
          {ic_check}
          <div className='ContentLoiIch'>Nhanh chóng cập nhật xu hướng làm đẹp mới nhất</div></Row>
        <Row>
          {ic_check}
          <div className='ContentLoiIch'>Thuận tiện trao đổi với mọi người về những tác phẩm đẹp</div></Row>
      </div>
      <div id='card-2'>
        <div className='text-tieu-de '>Thợ Nails </div>
        <Row>{ic_check}
          <div className='ContentLoiIch'>Dễ dàng tiếp cận các khách hàng mới</div></Row>
        <Row>{ic_check}
          <div className='ContentLoiIch'>Giới thiệu bản thân miễn phí</div></Row>
        <Row>{ic_check}
          <div className='ContentLoiIch'>Thoải mái chia sẻ kinh nghiệm làm đẹp với mọi người</div></Row>
      </div>
    </div>)
}

