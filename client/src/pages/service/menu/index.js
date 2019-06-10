import React, { Component } from "react";

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let data  = this.props.data;
        console.log(data)
        let ele = data.map((item, index) => {
            return (<div key={index}>
                 {item}
            </div>
            )
        })
        return (
            <div id='left-service'>
                <div className='title'>Danh sách dịch vụ</div>
                <div className="MenuService">
                    {
                        ele
                    }
                </div>
            </div>
        );
    }

}
export default Menu;