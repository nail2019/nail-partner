import React, { Component } from 'react';
import {  Form,  } from 'react-bootstrap'

class NailerFilterRate extends Component {
  render() {
    return (
      <div className='mr-3'>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <label className="Nailer--Filter--Location"></label>
          <Form.Control as="select">
            <option>Từ thấp đến cao</option>
            <option>Từ cao đến thấp</option>
          </Form.Control>
        </Form.Group>
      </div>
    );
  }
}

export default NailerFilterRate;