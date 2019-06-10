import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import NailerUpdate from "./NailerUpdate";
import NailerPruduct from "./NailerProduct"
import './ProfileNailer.css';

class ProfileNailer extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-3 mb-3">
          <Col sm={4} md={4} sx={4} >
            <NailerUpdate />
          </Col>
          <Col sm={8} md={8} sx={8}>
            <NailerPruduct />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfileNailer;