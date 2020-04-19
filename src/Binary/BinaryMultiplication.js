import React, { Component } from 'react';
import '../App.css';
import {Card, Form, Row, Col, Button} from 'react-bootstrap';
import LTab from '../LTab'

class BinaryMultiplication extends Component {
    constructor(props) {
        super(props);
        this.state={multiplyInput:'0'};
        this.oneClicked = this.oneClicked.bind(this);
        this.zeroClicked = this.zeroClicked.bind(this);
        this.xClicked = this.xClicked.bind(this);
        this.multiplyClicked = this.multiplyClicked.bind(this);
        this.clearClicked = this.clearClicked.bind(this);
    }

    oneClicked() {
        let temp = this.state.multiplyInput;
        (temp === '0') ? temp = '1' : temp += '1';
        this.setState({multiplyInput: temp});
    }

    zeroClicked() {
        let temp = this.state.multiplyInput;
        (temp === '0') ? temp = '0' : temp += '0';
        this.setState({multiplyInput: temp});
    }

    xClicked() {
        let temp = this.state.multiplyInput;
        (temp.indexOf('x') === -1) ? temp += 'x' : temp += '';
        this.setState({multiplyInput: temp});
    }

    multiplyClicked() {
        let temp = this.state.multiplyInput;
        if ((temp.indexOf('x1') !== -1) || (temp.indexOf('x0') !== -1)) {
            let nums = temp.split('x');
            let left = parseInt(nums[0], 2);
            let right = parseInt(nums[1], 2);
            let ans = left * right;
            let result = ans.toString(2);
            this.setState({multiplyInput: result});
        }
    }

    clearClicked() {
        this.setState({multiplyInput: '0'});
    }

    render(){
        return(
            <div className={'binary-arith-subtraction-wrapper'}>
                <div>
                    Here are the steps for Binary multiplication:<br/><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>0 x 0 = 0<br/>
                    <LTab size={'L'}/><LTab size={'L'}/>1 x 0 = 0<br/>
                    <LTab size={'L'}/><LTab size={'L'}/>0 x 1 = 0<br/>
                    <LTab size={'L'}/><LTab size={'L'}/>1 x 1 = 1<br/><br/>
                    Binary multiplication is similar to decimal.<br/>
                    Here we are multiplying 110 by 101:<br/><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&nbsp;&nbsp;&nbsp;110<br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&thinsp;<u>x 101</u><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&nbsp;&nbsp;&nbsp;110 &nbsp;&nbsp;(right-most digit x all above digits)<br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&nbsp;000 &nbsp;&nbsp;&nbsp; (next digit x all about digits)<br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&nbsp;&nbsp;&thinsp;<u>110&emsp;&nbsp;</u>&nbsp;&nbsp;(next digit x all about digits)<br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&nbsp;&nbsp;&thinsp;11110 &nbsp;&nbsp;(add all together)
                </div>
                <Card body>
                    <span>Try this Binary multiplication calculator:<br/><br/>&nbsp;</span>
                    <Form className={'binary-subtraction-calculator'}>
                        <Row>
                            <Col>
                                <Form.Control className={'binary-sub-display'} readOnly value={this.state.multiplyInput} />
                            </Col>
                            <Button className={'binary-sub-calc-1-btn'} variant="outline-secondary" onClick={()=> this.oneClicked()}>1</Button>
                            <Button className={'binary-sub-calc-0-btn'} variant="outline-secondary" onClick={()=> this.zeroClicked()}>0</Button>
                            <Button variant="outline-secondary" onClick={()=> this.xClicked()}>X</Button>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Button variant="outline-secondary" onClick={()=>this.multiplyClicked()}>Multiply</Button>
                            </Col>
                            <Col>
                                <Button className={'binary-sub-clear-btn'} variant="outline-secondary" onClick={()=>this.clearClicked()}>Clear</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>

        )
    }
}

export default BinaryMultiplication;