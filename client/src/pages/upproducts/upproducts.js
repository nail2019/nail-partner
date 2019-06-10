import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Row, Col, Container } from 'react-bootstrap';
import './upproducts.css';
import ImageUpload from './imageupload';
import './imageupload.css'

class upProductsPage extends Component {
  constructor() {
    super()
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Chọn ảnh để đăng lên</div>
      );
    }

    return (
      <div className='uploadProduct'>
        <Container>
          <Row className="mt-5">
            <Col md={3}></Col>
            <Col md={6}className="callText textSize1">
              Đăng sản phẩm độc đáo theo phong cách riêng của bạn
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col md={1}></Col>
            <Col md={4}>
              <form>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Tên sản phẩm" />
                </div>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="customFile" accept="image/*" name="Chọn ảnh" onChange={e => this._handleImageChange(e)}/>
                  <label className="custom-file-label" htmlFor="customFile">Tải tác phẩm lên...</label>
                </div>
                <div className="form-group mt-3">
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>Loại dịch vụ</option>
                    <option>Trọn gói cho tay và chân</option>
                    <option>Chăm sóc móng tay hoặc chân</option>
                    <option>Đắp bột</option>
                    <option>Đắp móng gel</option>
                    <option>Vẽ trang trí</option>
                    <option>Đính đá</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Mô tả tác phẩm"></textarea>
                </div>
              </form>
            </Col>
            <Col md={6}>
              <div className="imgPreview">{$imagePreview}</div>
              {/* <ImageUpload /> */}
            </Col>
          </Row>
          <Row>
            <Col md={5}></Col>
            <Col md={2}>
              <input className="btn btn-primary saveButton" type="submit" value="Đăng ảnh" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default upProductsPage;