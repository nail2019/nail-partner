import React, { Component } from 'react';
import './product.css'
class ProductPage extends Component {
  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params;
    console.log(id);
  }
  render() {
    return (
      <div className="product">
        <div className="bgimg">
          <div className="topleft">
            <p>Logo</p>
          </div>
          <div className="middle">
            <h1>COMING SOON</h1>
              <p>15 days left</p>
          </div>
          <div className="bottomleft">
            <p>Coming soon</p>
          </div>
        </div>
      </div>
    );
  }
}    

export default ProductPage;
