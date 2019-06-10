import React from 'react'
import './home.css';
import Banner from '../../components/Banner/banner';
import LoiIch from '../../components/loiich/loiich';
import DownloadApp from '../../components/download/download'
import UseApp from '../../components/useapp/useapp'
import Posts from '../../components/posts/posts'
import Testimonials from '../../components/testimonials/Testimonials';

const HomePage = () => (
  <div className=''>
    <Banner />
    <div className='container'>
      <div className='register-title'>
      </div>
    </div>
    <LoiIch />
    <DownloadApp />
    <UseApp />
    <Posts />
    <Testimonials />
  </div>
)

export default HomePage
