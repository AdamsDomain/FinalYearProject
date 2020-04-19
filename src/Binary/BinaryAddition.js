import React, { Component } from 'react';
import '../App.css';
import {Accordion, Card, Form, Row, Col, Button} from 'react-bootstrap';
import LTab from '../LTab'

class BinaryAddition extends Component {
    constructor(props) {
        super(props);
        this.state = {additionInput: '0'};
        this.oneClicked = this.oneClicked.bind(this);
        this.zeroClicked = this.zeroClicked.bind(this);
        this.plusClicked = this.plusClicked.bind(this);
        this.addClicked = this.addClicked.bind(this);
        this.clearClicked = this.clearClicked.bind(this);
    }

    oneClicked() {
        var temp = this.state.additionInput;
        (temp === '0') ? temp = '1' : temp += '1';
        this.setState({additionInput: temp});
    }

    zeroClicked() {
        let temp = this.state.additionInput;
        (temp === '0') ? temp = '0' : temp += '0';
        this.setState({additionInput: temp});
    }

    plusClicked() {
        let temp = this.state.additionInput;
        (temp.indexOf('+') === -1) ? temp += '+' : temp += '';
        this.setState({additionInput: temp});
    }

    addClicked() {
        let temp = this.state.additionInput;
        if ((temp.indexOf('+1') !== -1) || (temp.indexOf('+0') !== -1)) {
            let nums = temp.split('+');
            let left = parseInt(nums[0], 2);
            let right = parseInt(nums[1], 2);
            let ans = left + right;
            let result = ans.toString(2);
            this.setState({additionInput: result});
        }
    }

    clearClicked() {
        this.setState({additionInput: '0'});
    }

    render() {
        return (

                <div className={'binary-arith-addition-wrapper'}>
                    <div>
                        In this section we will cover the arithmetic, addition, subtraction, multiplication and division of Binary.<br/><br/>
                        Addition in Binary is split into four steps:<br/><br/>
                        <LTab size={'L'}/><LTab size={'L'}/>0 + 0 = 0<br/>
                        <LTab size={'L'}/><LTab size={'L'}/>0 + 1 = 1 <br/>
                        <LTab size={'L'}/><LTab size={'L'}/>1 + 0 = 1 <br/>
                        <LTab size={'L'}/><LTab size={'L'}/>1 + 1 = 0 &nbsp;&nbsp;(carry the 1 to next significant bit) <br/><br/>
                        Let's look an an example. We will add the binary numbers 100101 and 110110:<br/><br/>
                        <LTab size={'L'}/><LTab size={'L'}/>&emsp;&emsp;100101<br/>
                        <LTab size={'L'}/><LTab size={'L'}/><u>&emsp;+ 110110</u><br/>
                        <LTab size={'L'}/><LTab size={'L'}/>&emsp;&nbsp;&nbsp;1011011
                    </div>
                    <Card body>
                        <span>Try this Binary addidtion calculator:<br/><br/>&nbsp;</span>
                        <Form className={'binary-addition-calculator'}>
                            <Row>
                                <Col>
                                    <Form.Control className={'binary-add-display'} readOnly value={this.state.additionInput} />
                                </Col>
                                <Button className={'binary-add-calc-1-btn'} variant="outline-secondary" onClick={()=> this.oneClicked()}>1</Button>
                                <Button className={'binary-add-calc-0-btn'} variant="outline-secondary" onClick={()=> this.zeroClicked()}>0</Button>
                                <Button variant="outline-secondary" onClick={()=> this.plusClicked()}>+</Button>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Button variant="outline-secondary" onClick={()=>this.addClicked()}>Add</Button>
                                </Col>
                                <Col>
                                    <Button className={'binary-add-clear-btn'} variant="outline-secondary" onClick={()=>this.clearClicked()}>Clear</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </div>
            )
    }
}

export default BinaryAddition;
