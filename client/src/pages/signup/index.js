import React, { Component } from "react";

import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';

import './signup.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            phone:''
        }
    }
    //nhận 1 props là phone number từ step 1 lưu vào state sau đó truyền cái state này cho step 2
    OnRecivePhoneNumber =(param)=> {
        this.setState({
            phone: param
        })

    }
    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    prevStep = () => {
        this.setState({
            step: this.state.step - 1
        })
    }
    render() {
        const { step, phone } = this.state
        switch (step) {
            case 1:
                return (
                    <Step1 nextStep={this.nextStep} 
                        OnRecivePhone ={this.OnRecivePhoneNumber}
                    />
                )
            case 2:
                return (
                    <Step2 nextStep={this.nextStep} 
                        prevStep={this.prevStep}
                        phoneNumber ={phone} 
                    />
                )
            case 3:
                return (
                    <Step3 prevStep={this.prevStep} 
                        phoneNumber ={phone}
                    />
                )
            default:
                return null;
        }
    }
}