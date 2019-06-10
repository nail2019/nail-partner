import React, { Component } from 'react';
import { Row} from 'react-bootstrap';

import TronGoi from "./TronGoi";
import ChamSoc from "./ChamSoc";
import DapBot from "./DapBot";
import DapGel from "./DapGel";
import Ve from "./Ve";
import DinhDa from "./DinhDa";

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id="right-service">
                <div className="title1">Danh sách dịch vụ</div>
                <Row>
                    <TronGoi />
                    <ChamSoc />
                    <DapBot />
                    <DapGel />
                    <Ve />
                    <DinhDa />
                </Row>
            </div>
        );
    }
}


    

export default Content;