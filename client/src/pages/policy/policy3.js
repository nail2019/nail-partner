import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './policy.css';

class policy3Page extends Component {
  render() {
    return (
      <div className="dataSecurity">
        <Container>
          <Row className="mt-5">
            <Col md={3}></Col>
            <Col md={6} className="title">MỤC ĐÍCH CHIA SẺ THÔNG TIN</Col>
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
                    Thông qua ứng dụng của chúng tôi:
                                    </li><br />
                  <div>
                    Chúng tôi chia sẻ một số thông tin mà chúng tôi thu thập bằng cách hiển thị nó trên ứng dụng của chúng tôi
                    theo cài đặt tài khoản của bạn. Một số thông tin, chẳng hạn như tên người dùng, luôn được công khai.
                    Một số thông tin, chẳng hạn như ngày tháng năm sinh được công khai theo mặc định, nhưng có thể bị ẩn
                    trên ứng dụng của chúng tôi. Chúng tôi khuyên bạn nên kiểm tra cài đặt thông tin để đảm bảo rằng
                    bạn hài lòng với thông tin hiển thị cho người khác.
                                    </div><br />
                  <li>
                    Với các nhà cung cấp dịch vụ của chúng tôi:
                                    </li><br />
                  <div>
                    Nếu bạn là một khách hàng, sau khi nhận được yêu cầu của bạn, chúng tôi sẽ chia sẻ thông tin về bạn như tên,
                    số điện thoại, địa chỉ, vị trí, dịch vụ được yêu cầu và/hoặc phí giao dịch để nhà cung cấp dịch vụ nhận được
                    yêu cầu của bạn đối với dịch vụ. Thông tin này là cần thiết để nhà cung cấp dịch vụ có thể liên lạc và/hoặc
                    tìm kiếm bạn và/hoặc hoàn thành yêu cầu của bạn. Chúng tôi cũng sẽ gửi số điện thoại của bên mà có thể được
                                        liên lạc, do bạn cung cấp cho chúng tôi, cho nhà cung cấp dịch vụ khi bạn dùng ứng dụng để đặt lịch.<br />
                    Nếu bạn là một  nhà cung cấp dịch vụ, sau khi nhận được yêu cầu từ khách hàng, chúng tôi sẽ trao các thông tin
                    như tên, số điện thoại, địa chỉ, vị trí, mã số xác định bạn hoặc của người cung cấp dịch vụ nằm dưới sự quản lý
                    của bạn cho khách hàng yêu cầu dịch vụ của bạn. Thông tin này là cần thiết cho khách hàng để liên lạc bạn
                                        và/hoặc theo dõi việc đặt lịch được cung cấp bởi khách hàng.<br />
                    Bạn, theo đây, đồng ý và trao cho chúng tôi quyền được chia sẻ thông tin cá nhân cho nhà cung cấp dịch vụ
                    (nếu bạn là một khách hàng) hoặc khách hàng (nếu bạn là một nhà cung cấp dịch vụ). Thông tin cá nhân của bạn
                    sẽ được xóa bỏ một cách tự động khỏi ứng dụng được sử dụng bởi nhà cung cấp dịch vụ (nếu bạn là một khách hàng)
                    hoặc ứng dụng được sử dụng bởi khách hàng (nếu bạn là một nhà cung cấp dịch vụ) sau khi giao dịch liên quan
                    đến dịch vụ được hoàn tất. Tuy nhiên, có khả năng rằng nhà cung cấp dịch vụ/khách hàng (có liên quan) có thể
                    lưu trữ dữ liệu của bạn trong thiết bị của họ dưới bất kỳ cách thức nào. Liên lạc giữa khách hàng và nhà cung cấp
                    dịch vụ nằm ngoài ứng dụng (ví dụ như liên lạc thông qua điện thoại di động hoặc tin nhắn ngắn hoặc các loại hình
                    liên lạc khác ngoài ứng dụng của NAIL PARTNER và/hoặc các đơn vị liên kết của NAIL PARTNER) cũng có thể được
                    lưu trữ trên các thiết bị có liên quan. Chúng tôi không chịu trách nhiệm cho bất cứ dữ liệu nào được lưu lại
                    ở ngoài ứng dụng theo các cách thức trên. Bạn đồng ý miễn trừ và giữ chúng tôi khỏi bất cứ trách nhiệm nào
                    phát sinh liên quan tới sự lạm dụng thông tin cá nhân của bạn bởi nhà cung cấp dịch vụ/khách hàng (có liên quan)
                                        sau khi dịch vụ hoàn tất.<br />
                    Chúng tôi có thể sử dụng hoặc hợp tác với các công ty hoặc cá nhân, dưới tư cách một bên thứ ba, để tạo điều kiện
                    hoặc cung cấp sự hỗ trợ đối với việc phát triển ứng dụng và những dịch vụ nhất định cho chúng tôi và/hoặc
                    thay mặt chúng tôi, để thực hiện ngoài những việc khác: cung cấp sự hỗ trợ cho khách hàng, cung cấp thông tin
                    vị trí, thực hiện các dịch vụ có liên quan đến ứng dụng (không chỉ giới hạn ở bảo trì, xử lý dữ liệu,
                    phân tích ứng dụng và các dịch vụ để hoàn thiện tính năng của ứng dụng), hỗ trợ chúng tôi trong việc
                    phân tích cách mà ứng dụng và dịch vụ được sử dụng cũng như sự phát triển của chúng, hỗ trợ nhà tư vấn hoặc
                    kiểm toán của chúng tôi, bao gồm tư vấn pháp lý, tư vấn tài chính và tư vấn khác. Bạn đồng ý rằng những
                    bên thứ ba này sẽ có quyền truy cập vào thông tin cá nhân của bạn để thực hiện những công việc cho chúng tôi
                    và/hoặc với tư cách đại diện cho chúng tôi và những bên thứ ba này được ràng buộc bởi các hợp đồng về việc
                                        không tiết lộ cũng như sử dụng thông tin cá nhân của  bạn cho bất kỳ mục đích nào khác.<br />
                    Chúng tôi có thể xóa bỏ một phần nhất định của các thông tin cá nhân của bạn mà có thể xác định bạn
                    (để thông tin cá nhân của bạn trở thành ẩn danh) và tiết lộ các dữ liệu ẩn danh cho các bên thứ ba nhằm mục đích
                    phát triển ứng dụng, quản lý cơ sở dữ liệu, phân tích cũng như cải thiện ứng dụng. Chúng tôi có thể kết hợp
                    thông tin cá nhân của bạn với thông tin khác theo cách mà những thông tin này sẽ không còn liên quan tới bạn,
                    và sau đó tiết lộ những thông tin được kết hợp này cho bên thứ ba cho mục đích được nhắc tới ở trên.
                                    </div><br />
                  <li>
                    Về luật pháp:
                                    </li><br />
                  <div>
                    Chúng tôi sẽ không chia sẻ thông  tin cá nhân của bạn cho bất cứ bên nào khác ngoài nhà cung cấp dịch vụ
                    có liên quan (nếu bạn là khách hàng) hoặc khách hàng (nếu bạn là nhà cung cấp dịch vụ) và những bên thứ ba
                    mà chưa có sự đồng ý của bạn. Tuy nhiên, chúng tôi sẽ tiết lộ thông tin cá nhân của bạn trong chừng mực
                    mà pháp luật quy định hoặc nhằm tuân thủ các điều khoản của luật và quy định, các thiết chế nhà nước,
                    hoặc trong trường hợp của một tranh chấp, hoặc dưới bất cứ quy trình tố tụng nào giữa bạn và chúng tôi,
                    hoặc giữa bạn và những người dùng khác có liên quan đến dịch vụ, hoặc trong điều kiện cấp thiết liên quan
                                        đến sức khỏe và/hoặc an toàn của bạn. <br />
                    Thông tin cá nhân của bạn có thể được chuyển, lưu trữ, sử dụng và xử lý trong các khu vực tài phán khác
                    ngoài Việt Nam nơi mà các máy chủ của chúng tôi được đặt.
                                    </div><br />
                  <li>
                    Công cụ chia sẻ lên các trang mạng xã hội khác:
                                    </li><br />
                  <div>
                    Chúng tôi sẽ không chia sẻ thông  tin cá nhân của bạn cho bất cứ bên nào khác ngoài nhà cung cấp dịch vụ
                    có liên quan (nếu bạn là khách hàng) hoặc khách hàng (nếu bạn là nhà cung cấp dịch vụ) và những bên thứ ba
                    mà chưa có sự đồng ý của bạn. Tuy nhiên, chúng tôi sẽ tiết lộ thông tin cá nhân của bạn trong chừng mực
                    mà pháp luật quy định hoặc nhằm tuân thủ các điều khoản của luật và quy định, các thiết chế nhà nước,
                    hoặc trong trường hợp của một tranh chấp, hoặc dưới bất cứ quy trình tố tụng nào giữa bạn và chúng tôi,
                    hoặc giữa bạn và những người dùng khác có liên quan đến dịch vụ, hoặc trong điều kiện cấp thiết liên quan
                                        đến sức khỏe và/hoặc an toàn của bạn. <br />
                    Thông tin cá nhân của bạn có thể được chuyển, lưu trữ, sử dụng và xử lý trong các khu vực tài phán khác
                    ngoài Việt Nam nơi mà các máy chủ của chúng tôi được đặt.
                                    </div><br />
                  <li>
                    Chia sẻ và sáp nhập liên kết, bán, hoặc chuyển nhượng khác:
                                    </li><br />
                  <div>
                    Nếu Nail Partner có liên quan đến việc sáp nhập, đầu tư, mua lại, tài trợ, tổ chức lại, phá sản hoặc
                    bán tài sản của chúng tôi, thông tin về bạn có thể được chia sẻ, bán hoặc chuyển nhượng như một phần
                    của giao dịch đó. Chúng tôi cũng có thể chia sẻ thông tin về bạn với cha mẹ, công ty con hoặc chi nhánh
                    hiện tại hoặc tương lai.
                                    </div><br />
                  <li>
                    Các tình huống khác
                                    </li><br />
                  <div>
                    Chúng tôi có thể hủy nhận dạng hoặc tổng hợp thông tin về bạn và chia sẻ thông tin một cách tự do,
                    để bạn không còn được nhận dạng. Chúng tôi cũng có thể chia sẻ thông tin về bạn với sự đồng ý của bạn
                    hoặc theo hướng dẫn của bạn hoặc nơi chúng tôi có quyền hợp pháp để làm như vậy.
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

export default policy3Page;