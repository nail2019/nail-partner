import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './nailer.css'
// import NailerID from '../../components/nailer-id/nailer-id'
// import NailerFilterRate from '../../components/nailer-id/nailer-filter-rate'
// import NailerFilterLocation from '../../components/nailer-id/nailer-filter-location'
import NailerInfor from '../../components/nailer-id/nailer-infor'
import NailerNewRight from '../../components/nailer-id/nailer-new-right'

class NailerPageNew extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={4} md={4} sx={4}>
            <NailerInfor />
          </Col>
          <Col sm={8} md={8} sx={8}>
            <NailerNewRight />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NailerPageNew;
