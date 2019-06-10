import React, { Component } from 'react';
import './App.css';
import HeaderComponent from '../components/header/header';
import HeaderComponentM from '../components/header/header-m';
import FooterComponent from '../components/footer/footer';
import MainRoute from '../routers/routers';
// import fireBase from '../js/firebase';
import { Redirect } from 'react-router-dom';

import Loading from '../components/loading'

class App extends Component {
  state = {
    redirect: false,
    isLoading: false,
  }
  simulateNetworkRequest = () => {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }


  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      this.simulateNetworkRequest()
        .then(() => {
          this.setState({
            isLoading: false
          })
        })
    })
  }

  componentWillUnmount() {
    clearTimeout(this.simulateNetworkRequest)
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          {this.renderRedirect()}
          <HeaderComponent />
          <HeaderComponentM />
          <MainRoute />
          <FooterComponent />
        </div>
        {this.state.isLoading ? <Loading type="spin" /> : null}
      </React.Fragment>
    );
  }
}

export default App;
