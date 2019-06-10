import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class NailerNewRight extends Component {
  render() {
    return (

      <div className='nailer-box-infor-right box mt-3 pt-3'>
        <div className=' float-left col-sm-6 center'>
          <Link to={'/nailer-new'}>Sản phẩm gần đây</Link>
        </div>
        <div className=' float-left col-sm-6 center'>
          <Link to={'/nailer-social'}>Đóng góp cho cộng đồng</Link>
        </div>
        <h2>San pham gan day</h2>
      </div>


    );
  }
}

export default NailerNewRight;