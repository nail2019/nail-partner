import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UpdateServicePrice extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
            <Col sm={5} md={5} sx={5}>
              <div >
                <div className='UpdateServicePrice'>Bảng giá dịch vụ</div>
              </div>
            </Col>
            <Col sm={7} md={7} sx={7}>
              <Link to={'/banggiadichvu'} ><div className="UpdateImage">Cập nhật</div>
              </Link>
            </Col>
          </Row>
      </React.Fragment>
    );
  }
}
export default UpdateServicePrice;      