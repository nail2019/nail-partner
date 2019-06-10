import React, { Component } from 'react';
import { Form,  } from 'react-bootstrap'

class NailerFilterLocation extends Component {
  render() {
    return (
        <Form.Group controlId="exampleForm.ControlSelect1">
        <label className="Nailer--Filter--Location"></label>
        <Form.Control as="select">
            <option>Quận 1</option>
            <option>Quận 2</option>
            <option>Quận 3</option>
            <option>Quận 4</option>
            <option>Quận 5</option>
            <option>Quận 6</option>
            <option>Quận 7</option>
            <option>Quận 8</option>
            <option>Quận 9</option>
            <option>Quận 10</option>
            <option>Quận 11</option>
            <option>Quận 12</option>
            <option>Quận Thủ Đức</option>
            <option>Quận Gò Vấp</option>
        </Form.Control>
    </Form.Group>
    );
  }
}


export default NailerFilterLocation;
