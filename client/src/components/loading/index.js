import React from 'react';
import ReactLoading from 'react-loading';
import './index.css'

const Loading = ({ type }) => (
    <div className='loading'>
        <ReactLoading type={type} color="#3399FF" height={667} width={375} />
    </div>
);

export default Loading;