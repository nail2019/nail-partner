import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './policy.css';

class policy7Page extends Component {
  render() {
    return (
      <div className="dataSecurity">
        <Container>
          <Row className="mt-5">
            <Col md={3}></Col>
            <Col md={6} className="title">QUYỀN DỮ LIỆU</Col>
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
                <div>
                  Chúng tôi sẽ trả lời tất cả các yêu cầu mà chúng tôi nhận được từ các cá nhân muốn thực hiện quyền bảo vệ
                                    dữ liệu của mình theo luật bảo vệ dữ liệu hiện hành. Bạn có thể liên hệ với chúng tôi bằng cách gửi email đến <a href='mailto:nail.system.2019@gmail.com'>nail.system.2019@gmail.com.</a> Các quyền mà bạn có thể có, tùy thuộc
vào quốc gia bạn sống, bao gồm:
                                </div><br />
                <ol>
                  <li>
                    Truy cập, sửa chữa, cập nhật hoặc yêu cầu xóa thông tin của bạn.
                                    </li>
                  <li>
                    Phản đối việc xử lý thông tin của bạn, yêu cầu chúng tôi hạn chế xử lý thông tin của bạn.
                                    </li>
                  <li>
                    Từ chối nhận thông tin tiếp thị mà chúng tôi gửi cho bạn bất cứ lúc nào. Bạn có thể thực hiện quyền này
                    bằng cách từ chối trong các email tiếp thị mà chúng tôi gửi cho bạn. Ngoài ra, bạn có thể cập nhật tùy chọn
                    email của mình bằng cách thay đổi cài đặt trong thông tin tài khoản của bạn.
                                    </li>
                  <li>
                    Rút lại sự đồng ý của bạn bất cứ lúc nào nếu chúng tôi đã thu thập và xử lý thông tin của bạn với sự đồng ý
                    của bạn. Việc rút lại sự đồng ý của bạn sẽ không ảnh hưởng đến tính hợp pháp của bất kỳ quy trình xử lý nào
                    mà chúng tôi đã tiến hành trước khi bạn rút, cũng sẽ không ảnh hưởng đến việc xử lý thông tin của bạn
                    được thực hiện dựa trên các cơ sở xử lý hợp pháp ngoài sự đồng ý.
                                    </li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default policy7Page;