import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './posts.css'
import Post from './post.js'

export default function Posts() {

    return (
        <div className='background-main mb-5'>
        <Container className=''>
        <Row><div className='download-title'>Bài viết</div></Row>
            <Row>
                <Col sm={4}><Post/></Col>
                <Col sm={4}><Post/></Col>
                <Col sm={4}><Post/></Col>
            </Row>
        </Container>
        </div>
    )
}