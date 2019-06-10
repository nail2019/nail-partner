import React from 'react';
import { Col, Button, Row, Container, Alert } from 'react-bootstrap';


export default class Step2 extends React.Component {
    state = {
        code: '',
        isLoading: false,
        listError: []
    }
    simulateNetworkRequest = () => {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

    handleOnChange = (e) => {
        this.setState({
            code: e.target.value
        })
    }
    verifySMS() {
        let listError = []
        let phone = `84${this.props.phoneNumber}`
        if (this.state.code.length < 4) {
            listError.push("sms code phải có 4 ký tự");
            this.setState({ listError, isLoading: false })
            return listError
        }
        else {
            fetch('/api/account/verifySmsCode', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    smsCode: this.state.code,
                    to: phone //nhận 1 props chứa phone number từ step 1 truyền vào
                })
            }).then((data) => {
                data.json()
                    .then((data) => {
                        if (data.success === true) {
                            this.props.nextStep();
                        }
                        else {
                            listError.push('Mã xác nhận không đúng')
                            this.setState({ listError, isLoading: false })
                            return listError
                        }
                    })
            })
        }
    }
    Continue = () => {
        this.setState({ isLoading: true }, () => {
            this.simulateNetworkRequest()
                .then(() => {
                    this.verifySMS();
                })
        })
    }
    componentWillUnmount() {
        clearTimeout(this.simulateNetworkRequest)
    }
    render() {
        let { phone, isLoading, listError } = this.state
        return (
            <Container className='box-content'>
                {listError.length > 0
                    ? <div>
                        {listError.map((item, index) => {
                            return <Alert key={index + "err"} variant="danger">{item}</Alert>
                        })}
                    </div>
                    : null}
                <Row>
                    <Col sm={12} md={12} sx={12} className="center" >
                        <b style={{ userSelect: 'none' }}>MÃ XÁC THỰC</b>
                        <input type='text' placeholder='Nhập mã xác thực' className='mr-3' autoFocus onChange={this.handleOnChange} />
                        <Button variant="warning" onClick={() => this.Continue(phone)} >
                            {isLoading ? "Đang xác thực..." : "Tiếp tục"}
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}