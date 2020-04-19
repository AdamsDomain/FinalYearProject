import React, { Component } from 'react';
import '../App.css';
import {Accordion, Card, Form, Row, Col, Button} from 'react-bootstrap';
import LTab from '../LTab'

class BinarySubtraction extends Component {
    constructor(props) {
        super(props);
        this.state={subtractionInput:'0'};
        this.oneClicked = this.oneClicked.bind(this);
        this.zeroClicked = this.zeroClicked.bind(this);
        this.minusClicked = this.minusClicked.bind(this);
        this.subtractClicked = this.subtractClicked.bind(this);
        this.clearClicked = this.clearClicked.bind(this);
    }

    oneClicked() {
        let temp = this.state.subtractionInput;
        (temp === '0') ? temp = '1' : temp += '1';
        this.setState({subtractionInput: temp});
    }

    zeroClicked() {
        let temp = this.state.subtractionInput;
        (temp === '0') ? temp = '0' : temp += '0';
        this.setState({subtractionInput: temp});
    }

    minusClicked() {
        let temp = this.state.subtractionInput;
        (temp.indexOf('-') === -1) ? temp += '-' : temp += '';
        this.setState({subtractionInput: temp});
    }

    subtractClicked() {
        let temp = this.state.subtractionInput;
        if ((temp.indexOf('-1') !== -1) || (temp.indexOf('-0') !== -1)) {
            let nums = temp.split('-');
            let left = parseInt(nums[0], 2);
            let right = parseInt(nums[1], 2);
            let ans = left - right;
            let result = ans.toString(2);
            this.setState({subtractionInput: result});
        }
    }

    clearClicked() {
        this.setState({subtractionInput: '0'});
    }

    render(){
        return(
            <div className={'binary-arith-subtraction-wrapper'}>
                <div>
                    We can also split subtraction in Binary into four steps:<br/><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>0 - 0 = 0 <br/>
                    <LTab size={'L'}/><LTab size={'L'}/>0 - 1 = 1 &nbsp;&nbsp;(borrow 1 from next significant bit)<br/>
                    <LTab size={'L'}/><LTab size={'L'}/>1 - 0 = 1 <br/>
                    <LTab size={'L'}/><LTab size={'L'}/>1 - 1 = 0 <br/><br/>
                    Let's look at an example. We will subtract 100101 from 110110: <br/><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&emsp;110110<br/>
                    <LTab size={'L'}/><LTab size={'L'}/><u>&emsp;&nbsp;- 100101</u><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&nbsp;&nbsp;&nbsp;&thinsp;010001<br/><br/>
                    So, in binary subtraction remember: 10 - 1 is essentially two 1s - 1, so there will be 1 left over.
                </div>
                <Card body>
                    <span>Try this Binary subtraction calculator:<br/><br/>&nbsp;</span>
                    <Form className={'binary-subtraction-calculator'}>
                        <Row>
                            <Col>
                                <Form.Control className={'binary-sub-display'} readOnly value={this.state.subtractionInput} />
                            </Col>
                            <Button className={'binary-sub-calc-1-btn'} variant="outline-secondary" onClick={()=> this.oneClicked()}>1</Button>
                            <Button className={'binary-sub-calc-0-btn'} variant="outline-secondary" onClick={()=> this.zeroClicked()}>0</Button>
                            <Button variant="outline-secondary" onClick={()=> this.minusClicked()}>-</Button>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Button variant="outline-secondary" onClick={()=>this.subtractClicked()}>Subtract</Button>
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

export default BinarySubtraction;