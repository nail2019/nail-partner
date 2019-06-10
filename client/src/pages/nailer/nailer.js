import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nailer.css'
import NailerID from '../../components/nailer-id/nailer-id'
import NailerFilterRate from '../../components/nailer-id/nailer-filter-rate'
import NailerFilterLocation from '../../components/nailer-id/nailer-filter-location'

class NailerPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <NailerFilterRate />
          <NailerFilterLocation />
        </Row>
        <Row>
          <Col sm={2} md={2} sx={2}>
            <Link to={'/nailer-new'}><NailerID /></Link>
          </Col>
        </Row>
        <Row>
          <Col sm={2} md={2} sx={2} className='center mt-3 mb-3'>
            <button type="button" class="btn btn-primary btn-block">Xem thêm </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NailerPage;
