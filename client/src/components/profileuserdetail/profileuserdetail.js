import React, { Component } from 'react';
import { Row, Form } from 'react-bootstrap';
import "./profileuserdetail.css";
import {Link} from 'react-router-dom';

class ProfileUserdetail extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = { modalShow: false };
  // }
  // displaySignUp = () => {
  //   this.setState({
  //     modalShow: true,

  //   })
  // }
  // returnBodySignUp = () => {
  //   return (
  //     <ChangePassword />
  //   )
  // }
    render() {
      // let modalClose = () => this.setState({ modalShow: false });
      return (
        <div id='profile-user-detail'>
          <Row> <div className=' mr-0 ml-0 mt-1 pu-title'>Cập nhật thông tin tài khoản </div></Row>

          <Row className='mt-1 mr-0 ml-0' id='line'></Row>

          <Row className=' mr-0 ml-0 mt-1'><div className='body-avt avt'></div>  </Row>

          <Row className=' mr-0 ml-0'>
            <button className="button mt-1 button-avt button3"  > Cập nhật ảnh </button>
          </Row>
          {/* card hovaten */}
          <Row className='mt-3 card-profile'>
            <div className='col-sm-4 text-card'> Họ và tên  </div>

            <input className='col-sm-8 height-50 border-card' placeholder='Vui lòng điền thông tin đầy đủ' />
          </Row>

          {/* Card so dien thoai */}
          <Row className='mt-3 card-profile'>
            <div className='col-sm-4 text-card'> Số điện thoại  </div>

            <input className='col-sm-8 height-50 border-card' placeholder='039 **** ****' />
          </Row>

          {/* card mật khẩu */}
          <Row className='mt-3 card-profile'>
            <div className='col-sm-4 text-card'> Mật khẩu  </div>

            <input type="password" className='col-sm-4 height-50 border-card' placeholder='*********' />
            <button className='col-sm-3 button button-mat-khau ' ><Link to={'/ChangePassword'} className='color-white-mk'>  Đổi mật khẩu</Link></button>
          </Row>

          {/* card ngày sinh */}
          <Row className='mt-3 card-profile'>
            <div className='col-sm-4 text-card'> Ngày sinh  </div>

            <div className="col-sm-8 margin--15 input-group date">
              <input type="text" className="form-control border-card" placeholder="12-02-2012" />
              <div className="input-group-addon">
                <span className="glyphicon glyphicon-th"></span>
              </div>
            </div>
          </Row>

          {/* card giới tính*/}
          <Row className='mt-3 card-profile'>
            <div className='col-sm-4 text-card'> Giới tính  </div>

            <div className='col-sm-3 margin--15'>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>Nam</option>
                  <option>Nữ</option>
                </Form.Control>
              </Form.Group>
            </div>
          </Row>

          {/* card Địa chỉ */}
          <Row className='mt-3 card-profile'>
            <div className='col-sm-4 text-card'> Địa chỉ  </div>

            <input className='col-sm-8 height-50 border-card' placeholder='Số nhà, đường, phường, quận, thành phố' />
          </Row>

          {/* card Email */}
          <Row className='mt-3 card-profile'>
            <div className='col-sm-4 text-card'> Email  </div>

            <input className='col-sm-8 height-50 border-card' placeholder='abc@gmail.com' />
          </Row>

          {/* card cap nhat */}
          <Row className='mt-4 '>
            <button class="button col-sm-4 button-cap-nhat">Cập nhật</button>

          </Row>

        </div>
      );
    }
  }

  export default ProfileUserdetail;