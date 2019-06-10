import React, { Component } from 'react';

class UpdateImage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='avatar mt-3 mb-3'></div>
        <div className="UpdateImage">
          <input type="file" className="UpdateImageInput" accept="image/*" name="Chọn ảnh" />
          Thay đổi ảnh
          </div>
        <input type="file" className="UpdateImageInput" accept="image/*" name="Chọn ảnh" />
      </React.Fragment>
    );
  }
}
export default UpdateImage;      