import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './modal.css'
class ModalComponent extends Component {
  render() {
    //let status = this.props.status;
    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
       {...this.props.status ? "" :  "size='lg'"}
      >
        {!this.props.status//!status.toString()
          ? <Modal.Header closeButton >
              <Modal.Title id="contained-modal-title-vcenter" >
                {this.props.title}
              </Modal.Title>
            </Modal.Header>
          : null}
        <Modal.Body className="ModalBody">
          <div>
            {this.props.body()}
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
export default ModalComponent
