import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class UpdateImage extends Component {
  render() {
    const ic_star = <FontAwesomeIcon className="fontSize25 yellow " icon={faStar} />
    return (
      <React.Fragment>
        <div className='nailer-name whiteColor mt-2'>Huynh Thi B</div>
        <div className='nailer-rate mt-2 mb-2'>{ic_star}{ic_star}{ic_star}{ic_star}{ic_star}</div>
      </React.Fragment>
    );
  }
}
export default UpdateImage;      