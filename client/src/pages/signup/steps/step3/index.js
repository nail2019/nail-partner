import React, { Component } from 'react';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Loading from '../../../../components/loading'

export default class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordAgain: "",
      isRedirect: false,
      isLoading: false
    }
  }

  simulateNetworkRequest = () => {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  renderRedirect = () => {
    if (this.state.isRedirect) {
      return <Redirect to='/about' />
    }
  }


  prevStep = () => {
    this.props.prevStep();
  }
  verify = () => {
    let phone = `+84${this.props.phoneNumber}`
    fetch('/api/account/createUser', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: this.state.password,
        to: phone //nhận 1 props chứa phone number từ step 1 truyền vào
      })
    })
      .then((data) => {
        data.json()
          .then(data => {
            if (data.success === true) {
              this.setState({
                isRedirect: true
              })
            }
          })
      })
  }
  loading = () => {
    return <div>loading....</div>
  }
  getPasswordValue = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    })
  }
  finish = () => {
    let { password, passwordAgain } = this.state;
    this.setState({ isLoading: true }, () => {
      this.simulateNetworkRequest()
        .then(() => {
          if (password === passwordAgain) {
            this.verify();
            this.simulateNetworkRequest().then(() => {
              this.setState({ isLoading: false })
            })
          }
        })


        .catch(e => console.log(e))
    })
  }
  componentWillMount() {
    clearTimeout(this.simulateNetworkRequest)
  }
  render() {
    let { isLoading } = this.state;
    return (
      <React.Fragment>
        <Container className='box-content'>
          {this.renderRedirect()}
          <div className="Content-Password">
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm="4" md="4" sx="4" className="Left-Password">
                  Mật khẩu mới
              </Form.Label>
                <Col sm="8" md="8" sx="8">
                  <Form.Control
                    type="password"
                    placeholder="Dài ít nhất 6 ký tự"
                    className='password'
                    minLength="6"
                    name="password"
                    onChange={this.getPasswordValue}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="4" md="4" sx="4" className="Left-Password">
                  Xác nhận mật khẩu
                </Form.Label>
                <Col sm="8" md="8" sx="8">
                  <Form.Control
                    type="password"
                    placeholder="Vui lòng xác nhận mật khẩu mới"
                    className='password'
                    name="passwordAgain"
                    onChange={this.getPasswordValue}
                  />
                </Col>
              </Form.Group>
              <Row>
                <Col sm="4" md="4" sx="4"></Col>
                <Col sm="8" md="8" sx="8">
                  <Button variant="warning" className='button-success ' onClick={this.finish}>
                    {isLoading ? "Đang tạo tài khoản" : "Hoàn Thành"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
        {isLoading ? <Loading type="spin" /> : null}
      </React.Fragment>
    )
  }
}