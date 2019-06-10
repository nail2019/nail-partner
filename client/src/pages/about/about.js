import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import './about.css'

class AboutPage extends Component {
  render() {
    return (
      <Container>
        <div className='about-main'>
          <div className='about-logo'></div>
          <div className='about-title'>Vào một ngày đẹp trời năm 2019, Nail Partner
  xuất hiện như là ứng dụng cung cấp giải pháp
  tìm kiếm dịch vụ làm móng gần nơi bạn đang
  sinh sống hoặc du lịch tại Việt Nam.
</div>
          <div className='about-content ac1'>
            <div>Sứ mệnh</div>
            <p>Chúng tôi luôn muốn mọi người có thể dễ dàng làm đẹp cho chính
    bản thân mình. Chỉ với vài thao tác đơn giản trên máy tính và thiết
    bị di động thông minh, bạn sẽ tìm được dịch vụ phù hợp với đầy
    đủ các dịch vụ làm đẹp như đắp bột, đắp gel,... gần bạn nhất, với
    chất lượng tối ưu nhất.
</p>
          </div>
          <div className='about-content ac2'>
            <div>Triết lý</div>
            <p>
              Chúng tôi tin vào một xã hội mà ở đó, mọi cá nhân đều tiến tới chân thiện mỹ. Chỉ cần trở thành thành viên của Nail Partner, người dùng có thể tham gia vào cộng đồng mê làm đẹp của chúng tôi tại hàng trăm cửa tiệm hoặc với các freelancer khác nhau.
              
</p>
          </div>

          <div className='aboutbg'></div>
        </div>
        <Row><div className='useapp-title'>Các nhà đồng sáng lập</div></Row>

      </Container>
    );
  }
}

export default AboutPage;
