import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import UpdateImage from './UpdateInformation/UpdateImage';
import UpdateName from './UpdateInformation/UpdateName';
import UpdatePassword from './UpdateInformation/UpdatePassword';
import UpdateGender from './UpdateInformation/UpdateGender';
import UpdateServicePrice from './UpdateInformation/UpdateServicePrice';
import UpdateBirthday from './UpdateInformation/UpdateBirthday'; 
import UpdateExperience from './UpdateInformation/UpdateExperience';
import UpdateAddress from './UpdateInformation/UpdateAddress';
import UpdateEmail from './UpdateInformation/UpdateEmail';

class NailerUpdate extends Component {
  render() {
    return (
      <div className='NailerUpdate box '>
        <UpdateImage/>       
        <UpdateName/>
        <UpdatePassword/>
        <UpdateServicePrice/>
        <Form>
          <UpdateGender/>
          <UpdateBirthday/>          
          <UpdateExperience/>
          <UpdateAddress/>
          <UpdateEmail/>
          <center><input type="submit" className="UpdateImage mt-3" value="Hoàn thành" /></center>
        </Form>        
      </div>
    );
  }
}

export default NailerUpdate;