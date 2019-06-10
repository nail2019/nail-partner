import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './policy.css';

class policy6Page extends Component {
  render() {
    return (
      <div className="dataSecurity">
        <Container>
          <Row className="mt-5">
            <Col md={3}></Col>
            <Col md={6} className="title">NHỮNG SỰ LỰA CHỌN CỦA BẠN</Col>
          </Row>
          <Row className="mt-4 mb-5">
            <Col md={4} className="leftContent">
              <Link to={'/policy1'}><div className="tag">Thông tin chúng tôi thu thập</div></Link>
              <Link to={'/policy2'}><div className="tag">Mục đích sử dụng thông tin</div></Link>
              <Link to={'/policy3'}><div className="tag">Mục đích chia sẻ thông tin</div></Link>
              <Link to={'/policy4'}><div className="tag">Thông tin chi tiết</div></Link>
              <Link to={'/policy5'}><div className="tag">Cộng đồng hỗ trợ</div></Link>
              <Link to={'/policy6'}><div className="tag">Những sự lựa chọn của bạn</div></Link>
              <Link to={'/policy7'}><div className="tag">Quyền dữ liệu</div></Link>
            </Col>
            <Col md={8}>
              <div className="contentBox">
                <ol>
                  <li>
                    Thông tin tài khoản:
                                    </li><br />
                  <div>
                    Bạn có thể cập nhật hoặc chỉnh sửa thông tin tài khoản của mình bằng cách vào trang thông tin tài khoản của bạn.
                    Bạn cũng sẽ có thể chọn thông tin mà người khác có thể nhìn thấy về bạn.
                                    </div><br />
                  <li>
                    Thông tin vị trí:
                                    </li><br />
                  <div>
                    Khi bạn truy cập ứng dụng, chúng tôi sẽ thu thập thông tin về vị trí của bạn, nơi chúng tôi sử dụng để đưa ra
                                        các đề xuất tốt hơn trong khu vực của bạn và để cải thiện  ứng dụng của chúng tôi.<br />
                    Nếu sử dụng trang web của chúng tôi, dữ liệu vị trí của bạn sẽ được lấy thông qua cookie. <br />
                    Nếu bạn không muốn chúng tôi thu thập thông tin về vị trí của bạn, thì bạn có thể ngăn điều này: Nếu sử dụng
                                        ứng dụng dành cho thiết bị di động, bằng cách thay đổi cài đặt trên thiết bị của bạn.<br />
                    Lưu ý rằng ứng dụng của chúng tôi hoặc các tính năng của nó có thể không còn hoạt động đúng nếu bạn làm như vậy.<br />
                    Cách cài đặt thiết bị di động của bạn cũng có thể cung cấp cho bạn các tùy chọn để cho phép chúng tôi xem
                    vị trí của bạn một cách liên tục khi bạn sử dụng ứng dụng hoặc không bao giờ. Vui lòng tham khảo hướng dẫn
                    trên thiết bị của bạn để biết thêm thông tin về cách điều chỉnh dịch vụ định vị.
                                    </div><br />
                  <li>
                    Cookies:
                                    </li><br />
                  <div>
                    Chúng tôi có thể sử dụng và cho phép người khác sử dụng cookie, web beacons, device ID và các công nghệ khác
                    để thu thập thông tin về việc bạn sử dụng ứng dụng và các trang web và dịch vụ trực tuyến khác.
                                    </div><br />
                </ol>
                <div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default policy6Page;