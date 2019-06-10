import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class NailerInfor extends Component {
  
  render() {
    const ic_star = <FontAwesomeIcon className="fontSize25 yellow " icon={faStar} />
    return (
    <div className='nailer-box-infor-left box mt-3'>
      <div className='nailer-avatar center rounded-circle mt-3'></div>
      <div className='nailer-name whiteColor mt-3'>Huynh Thi B</div>
      <div className='nailer-rate mt-2'>{ic_star}{ic_star}{ic_star}{ic_star}{ic_star}</div>
    </div>
    );
  }
}

export default NailerInfor;