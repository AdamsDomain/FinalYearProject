import React, { Component } from 'react';
import '../App.css';
import {Card, Form, Row, Col, Button} from 'react-bootstrap';
import LTab from '../LTab'

class BinaryDivision extends Component {
    constructor(props) {
        super(props);
        this.state={divisionInput:'0'};
        this.oneClicked = this.oneClicked.bind(this);
        this.zeroClicked = this.zeroClicked.bind(this);
        this.dClicked = this.dClicked.bind(this);
        this.divideClicked = this.divideClicked.bind(this);
        this.clearClicked = this.clearClicked.bind(this);
    }

    oneClicked() {
        let temp = this.state.divisionInput;
        (temp === '0') ? temp = '1' : temp += '1';
        this.setState({divisionInput: temp});
    }

    zeroClicked() {
        let temp = this.state.divisionInput;
        (temp === '0') ? temp = '0' : temp += '0';
        this.setState({divisionInput: temp});
    }

    dClicked() {
        let temp = this.state.divisionInput;
        (temp.indexOf('/') === -1) ? temp += '/' : temp += '';
        this.setState({divisionInput: temp});
    }

    divideClicked() {
        let temp = this.state.divisionInput;
        if ((temp.indexOf('/1') !== -1) || (temp.indexOf('/0') !== -1)) {
            let nums = temp.split('/');
            let left = parseInt(nums[0], 2);
            let right = parseInt(nums[1], 2);
            let ans = left / right;
            let result = ans.toString(2);
            this.setState({divisionInput: result});
        }
    }

    clearClicked() {
        this.setState({divisionInput: '0'});
    }

    render(){
        return(
            <div className={'binary-arith-subtraction-wrapper'}>
                <div>
                    Binary division is very similar to division in decimal.<br/>
                    We don't have any set rules for Binary division.<br/>
                    It consists of both division and subtraction.<br/>
                    Let's look at two examples, the first one is more straightfoward:<br/>
                    Dividing 101101 by 101:<br/><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&emsp;&nbsp;001001<br/>
                    <LTab size={'L'}/><LTab size={'L'}/><span className={'leftDivision'}>101 </span><span className={'rightDivision'}>&nbsp;101101</span><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&nbsp;&nbsp;&nbsp;<u>-101</u><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&emsp;&nbsp;000101<br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&emsp;<u>&emsp;&nbsp;&nbsp;-101</u><br/>
                    <LTab size={'L'}/><LTab size={'L'}/><LTab size={'S'}/>&emsp;000<br/><br/>
                    We can see that in this example, 101101/101 = 1001 with no remainder.<br/><br/>
                    This next example we look at is a bit more tricky as the first substitution leaves a remainder:<br/>
                    For this example we are dividing 100111 by 11:<br/><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&emsp;0 0 1 1 0 1<br/>
                    <LTab size={'L'}/><LTab size={'L'}/><span className={'leftDivision'}>11 </span><span className={'rightDivision'}>&nbsp;<s>1</s><span className={'power'}>1</span><s>0</s><span className={'power'}>1</span>0 1 1 1</span><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&nbsp;<u>-0 &thinsp;1&thinsp; 1&emsp;&nbsp;&nbsp;</u><br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&emsp;&nbsp;&nbsp;&nbsp;0&thinsp; 1&thinsp; 1<br/>
                    <LTab size={'L'}/><LTab size={'L'}/>&emsp;&emsp;&nbsp;<u>&nbsp;- &nbsp;&nbsp;1&nbsp;&nbsp;1&nbsp;</u><br/>
                    <LTab size={'L'}/><LTab size={'L'}/><LTab size={'S'}/>&nbsp;&nbsp;&nbsp;0 &nbsp;0<br/>
                    So, 100111/11 = 1101 with no remainder.
                </div>
                <Card body>
                    <span>Try this Binary division calculator:<br/><br/>&nbsp;</span>
                    <Form className={'binary-subtraction-calculator'}>
                        <Row>
                            <Col>
                                <Form.Control className={'binary-sub-display'} readOnly value={this.state.divisionInput} />
                            </Col>
                            <Button className={'binary-sub-calc-1-btn'} variant="outline-secondary" onClick={()=> this.oneClicked()}>1</Button>
                            <Button className={'binary-sub-calc-0-btn'} variant="outline-secondary" onClick={()=> this.zeroClicked()}>0</Button>
                            <Button variant="outline-secondary" onClick={()=> this.dClicked()}>/</Button>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Button variant="outline-secondary" onClick={()=>this.divideClicked()}>Divide</Button>
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

export default BinaryDivision;