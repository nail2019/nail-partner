import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './policy.css';

class policy1Page extends Component {
  render() {
    return (
      <div className="dataSecurity">
        <Container>
          <Row className="mt-5">
            <Col md={3}></Col>
            <Col md={6} className="title">THÔNG TIN CHÚNG TÔI THU THẬP</Col>
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
                Chúng  tôi thu thập một lượng thông tin cá nhân nhất định từ bạn để ứng dụng thực hiện các chức năng nhẳm phục vụ cho mục đích sử dụng dịch vụ
                                (nếu bạn là một khách hàng) hoặc thợ nail (nếu bạn là một nhà cung cấp dịch vụ) hoặc các chức năng cần thiết khác để hỗ trợ hệ sinh thái của dịch vụ. <br /><br />
                <ol>
                  <li>
                    Chúng tôi thu thập thông tin mà bạn cung cấp trực tiếp cho chúng tôi:<br />
                    Ví dụ: chúng  tôi thu thập thông tin mà bạn cung cấp khi bạn tạo tài khoản, điền vào biểu mẫu hoặc liên hệ với chúng tôi.
                    Các loại thông tin mà chúng tôi có thể thu thập bao gồm tên, mật khẩu, địa chỉ email, địa chỉ nơi ở hiện tại, số điện thoại, ảnh.
                    Thông tin về giới tính của bạn là tùy chọn. Đôi khi, thông tin mà bạn cung cấp cho chúng có thể ngụ ý về tín ngưỡng, quan điểm chính trị,
                    tình trạng sức khỏe của bạn. Điều này và các loại thông tin nhạy cảm khác sẽ được bảo vệ đặc biệt.
                    Việc đăng thông tin nhạy cảm về cá nhân hoặc người khác là trái với nguyên tắc cộng đồng của chúng tôi.
                                    </li><br />
                  <li>
                    Khi bạn sử dụng ứng dụng của chúng tôi, chúng  tôi sẽ tự động thu thập thông tin về bạn, bao gồm:
                                        <ul>
                      <li>
                        Thông tin nhật ký: Chúng  tôi thu thập thông tin nhật ký về việc bạn sử dụng ứng dụng, bao gồm loại trình duyệt bạn sử dụng; thời gian,
                        thời lượng và tần suất truy cập của bạn; Các trang ứng dụng được xem; địa chỉ IP của bạn; và trang bạn đã truy cập trước khi truy cập ứng dụng của chúng tôi.
                                            </li>
                      <li>
                        Thông tin thiết bị: Chúng tôi thu thập thông tin về máy tính hoặc thiết bị di động mà bạn sử dụng để truy cập ứng dụng của chúng tôi, bao gồm mô hình phần cứng,
                        hệ điều hành và phiên bản, số nhận dạng thiết bị duy nhất và thông tin mạng di động.
                                            </li>
                      <li>
                        Thông tin vị trí: Chúng tôi có thể thu thập thông tin về vị trí của thiết bị của bạn mỗi khi bạn sử dụng ứng dụng của chúng tôi dựa trên sự đồng ý của
                        bạn đối với việc thu thập thông tin này.
                                            </li>
                      <li>
                        Thông tin được thu thập bởi Cookies và các công nghệ theo dõi khác: Chúng  tôi thu thập thông tin bằng nhiều công nghệ khác nhau, bao gồm cookie và thẻ pixel
                        (còn được gọi là GIF rõ ràng, đèn hiệu web hoặc pixel). Cookie là các tệp dữ liệu nhỏ được lưu trữ trên ổ cứng hoặc trong bộ nhớ thiết bị giúp chúng tôi cải
                        thiện ứng dụng và trải nghiệm của bạn cũng như theo dõi việc sử dụng ứng dụng của chúng tôi. Thẻ pixel là hình ảnh điện tử có thể được sử dụng trong ứng dụng
                        hoặc email của chúng tôi và theo dõi việc sử dụng   ứng dụng của chúng tôi và hiệu quả của truyền thông.
                                            </li>
                      <li>
                        Thông tin khác: Với sự cho phép của bạn, chúng tôi có thể thu thập thông tin khác từ thiết bị của bạn, chẳng hạn như ảnh từ cuộn camera.
                                            </li>
                    </ul>
                  </li><br />
                  <li>
                    Chúng  tôi có thể thu thập thông tin về bạn từ các nguồn khác:<br />
                    Chẳng hạn như thông qua một số tính năng nhất định trên ứng dụng bạn chọn để sử dụng, nhưng chỉ khi các bên thứ ba này có sự đồng ý của bạn hoặc được
                    cho phép về mặt pháp lý hoặc được yêu cầu tiết lộ thông tin của bạn cho chúng tôi. Những ví dụ bao gồm:
                                        <ul>
                      <li>
                        Dịch vụ truyền thông xã hội: Nếu bạn đăng ký hoặc đăng nhập vào tài khoản của mình thông qua dịch vụ truyền thông xã hội của bên thứ ba,
                        chúng tôi sẽ có quyền truy cập vào một số thông tin tài khoản của bên thứ ba từ dịch vụ đó như tên của bạn và thông tin khác trong tài khoản đó và được sử dụng cho
                        các mục đích như cải thiện các tính năng  ứng dụng của bạn. Chúng  tôi cũng có thể có quyền truy cập vào thông tin tài khoản của bên thứ ba nếu bạn sử dụng
                        tính năng ứng dụng để chia sẻ liên kết.
                                            </li>
                      <li>
                        Nội dung thành viên: Chúng tôi có thể nhận thông tin về bạn khi bạn hoặc thành viên khác tải ảnh hoặc đăng nội dung lên ứng dụng.
                                            </li>
                      <li>
                        Thông tin từ các nguồn của bên thứ ba khác: Để cung cấp cho bạn các tính năng phù hợp hơn, chúng tôi có thể lấy thông tin về bạn từ các nguồn công khai và
                        các bên thứ ba khác theo luật cho phép.
                                            </li>
                    </ul>
                  </li>
                </ol>
                <div>
                  Bạn đồng ý bảo đảm cho chúng tôi không bị tổn hại và được miễn trừ khỏi mọi trách nhiệm phát sinh từ thông tin mà bạn cung cấp ngoài ứng dụng cho các thợ nail
                  hoặc bất kỳ bên thứ ba nào khác.
                            </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default policy1Page;