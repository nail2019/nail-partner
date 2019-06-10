import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './policy.css';

class policy4Page extends Component {
  render() {
    return (
      <div className="dataSecurity">
        <Container>
          <Row className="mt-5">
            <Col md={3}></Col>
            <Col md={6} className="title">THÔNG TIN CHI TIẾT</Col>
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
                    Dịch vụ phân tích và quảng cáo được cung cấp bởi bên thứ 3:
                                    </li><br />
                  <div>
                    Với sự cho phép của bạn, chúng tôi có thể cho phép bên thứ 3 sử dụng cookies, web beacons, device ID
                                        và các công nghệ khác để thu thập thông tin về việc bạn sử dụng ứng dụng và các trang web của chúng tôi. <br />
                    Qua đó chúng tôi sẽ cải thiện trang web và các dịch vụ chúng tôi cung cấp, hoặc giúp chúng tôi cung cấp
                    dịch vụ và tính năng mới. "Cookies" là những định danh mà chúng tôi chuyển đến máy tính hoặc thiết bị di động
                    của bạn cho phép chúng tôi nhận ra máy tính hoặc thiết bị của bạn và cho chúng tôi biết làm thế nào và
                    khi nào các dịch vụ hoặc trang web của chúng tôi được sử dụng hay truy cập, bởi bao nhiều người và theo dõi
                    các thao tác được thực hiện trên trang web của chúng tôi. Chúng tôi có thể liên kết các thông tin cookie đến
                                        các dữ liệu cá nhân. Cookies cũng thu thập thông tin liên quan đến các trang bạn đã xem.<br />
                    Khi bạn xem nội dung quảng cáo, truy cập trang web hoặc thông qua các dịch vụ của chúng tôi, hầu hết các
                    thông tin sẽ được gửi cho chúng tôi (bao gồm địa chỉ IP, hệ điều hành...); tuy nhiên, thay vì số lượt truy cập,
                    máy tính hay các thiết bị di động của bạn sẽ gửi cho chúng tôi thông tin về nội dung, quảng cáo đã xem
                    và/hoặc phần mềm được cài đặt bởi trang web và ứng dụng của chúng tôi.
                                    </div><br />
                  <li>
                    Bảo mật:
                                    </li>
                  <div>
                    Chúng tôi sử dụng các biện pháp kỹ thuật và tổ chức được thiết kế để bảo vệ một cách thích hợp thông tin của bạn
                    dưới sự kiểm soát của chúng tôi và chúng tôi xử lý thay mặt bạn khỏi việc thu thập, sử dụng, tiết lộ, sao chép,
                    sửa đổi hoặc xử lý trái phép, trong khi truyền và khi chúng tôi nhận được. Chúng tôi lưu trữ tất cả thông tin mà
                    bạn cung cấp cho chúng tôi trên các máy chủ an toàn. Chúng tôi đào tạo nhân viên về các chính sách và quy trình
                    bảo mật dữ liệu của mình và cho phép nhân viên được ủy quyền truy cập thông tin theo nhu cầu cần thiết, theo
                    yêu cầu cho vai trò của họ. Chúng tôi sử dụng tường lửa được thiết kế để bảo vệ chống lại kẻ xâm nhập và kiểm tra
                    các lỗ hổng mạng. Tuy nhiên, không có phương thức truyền qua internet hoặc phương pháp lưu trữ điện tử nào là
                    hoàn toàn an toàn. Chúng tôi không thể đảm bảo một cách chắn chắn rằng hệ thống của chúng tôi hoàn toàn không thể
                    bị xâm nhập bởi virus, phần mềm độc hại, sự gián đoạn và các sự kiện bất thường khác bao gồm cả sự truy cập
                    trái phép bởi một bên thứ ba. Trường hợp bạn có mật khẩu, cho phép bạn sử dụng các dịch vụ của chúng tôi,
                    bạn có trách nhiệm giữ mật khẩu này phức tạp, an toàn và bảo mật. Nếu bạn muốn cập nhật hoặc thay đổi mật khẩu
                    của mình, bạn có thể chọn liên kết quên mật khẩu của mình trên trang đăng nhập. Bạn sẽ được gửi một mã xác nhận
                    cho phép bạn đặt lại mật khẩu của mình.
                                    </div><br />
                  <li>
                    Phạm vi chính sách:
                                    </li><br />
                  <div>
                    Chính sách bảo mật này không áp dụng cho thông tin mà bạn cung cấp cho bên thứ ba, chẳng hạn như các thành viên khác,
                    bao gồm nhà cung cấp dịch vụ và những người khác mà bạn có thể chia sẻ thông tin về bạn. Việc tiết lộ thông tin
                    cho các bên thứ ba này tuân theo chính sách quyền riêng tư của bên thứ ba có liên quan. Chúng tôi không chịu
                    trách nhiệm về chính sách hoặc nội dung bảo mật của bên thứ ba, ngay cả khi chúng tôi liên kết với các dịch vụ đó
                    từ  ứng dụng của chúng tôi hoặc nếu chúng tôi chia sẻ thông tin với các bên thứ ba này.
                                    </div><br />
                  <li>
                    Sửa đổi chính sách này:
                                    </li><br />
                  <div>
                    Thỉnh thoảng chúng tôi có thể sửa đổi Chính sách bảo mật này. Khi chúng tôi làm, chúng tôi sẽ cung cấp thông báo
                    cho bạn bằng cách xuất bản phiên bản mới nhất và sửa đổi ngày ở đầu trang này. Nếu chúng tôi thực hiện bất kỳ
                    thay đổi quan trọng nào đối với chính sách này, chúng tôi sẽ cung cấp thông báo bổ sung cho bạn, chẳng hạn như
                    bằng cách gửi email cho bạn hoặc hiển thị thông báo nổi bật trên web của chúng tôi.
                                    </div><br />
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default policy4Page;