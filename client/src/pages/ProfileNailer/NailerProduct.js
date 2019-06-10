import React, { Component } from 'react';
import { Tab, Tabs, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

class NailerProduct1 extends Component {
  render() {
    const ic_PlusSquare = <FontAwesomeIcon className="ic_PlusSquare" icon={faPlusSquare} />
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="product" title="Tác phẩm gần đây" tabClassName="col-sm-6 TitleNailerUpdate ">
          <Col sm={3} md={3} sx={3}>
            <Link to={'/upproducts'}>{ic_PlusSquare}</Link>
          </Col>
          {/* viet 1 function return layout của sản phẩm gần đây */}
        </Tab>
        <Tab eventKey="comunity" title="Đóng góp cho cộng đồng" tabClassName="col-sm-6 TitleNailerUpdate ">
          <Col sm={3} md={3} sx={3}>
            <Link to={'/upproducts'}>{ic_PlusSquare}</Link>
          </Col>
          {/* viet 1 funtion return layout của đóng góp cho cộng đồng */}
        </Tab>
      </Tabs>
    );
  }
}

export default NailerProduct1;