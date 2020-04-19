import React, { Component } from 'react';
import '../App.css';
import {Accordion, Card, Button} from 'react-bootstrap';
import BinaryAddition from './BinaryAddition';
import BinarySubtraction from './BinarySubtraction';
import BinaryMultiplication from './BinaryMultiplication';
import BinaryDivision from './BinaryDivision';

class BinaryCourseArithmeticTab extends Component{
    constructor(props) {
        super(props);
        this.state = {additionInput:'0'};
        this.oneClicked = this.oneClicked.bind(this);
        this.zeroClicked = this.zeroClicked.bind(this);
        this.plusClicked = this.plusClicked.bind(this);
        this.addClicked = this.addClicked.bind(this);
        this.clearClicked = this.clearClicked.bind(this);
    }

    oneClicked(){
        let temp = this.state.additionInput;
        (temp === '0') ? temp = '1' : temp += '1';
        this.setState({additionInput:temp});
    }

    zeroClicked(){
        let temp = this.state.additionInput;
        (temp === '0') ? temp = '0' : temp += '0';
        this.setState({additionInput:temp});
    }

    plusClicked(){
        let temp = this.state.additionInput;
        (temp.indexOf('+') === -1) ? temp += '+' : temp += '';
        this.setState({additionInput:temp});
    }

    addClicked(){
        let temp = this.state.additionInput;
        if((temp.indexOf('+1') !== -1) || (temp.indexOf('+0') !== -1)){
            let nums = temp.split('+');
            let left = parseInt(nums[0], 2);
            let right = parseInt(nums[1], 2);
            let ans = left + right;
            let result = ans.toString(2);
            this.setState({additionInput:result});
        }
    }

    clearClicked(){
        this.setState({additionInput:'0'});
    }

    render(){
        return(
            <div>
                <Accordion defaultActiveKey="">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Addition
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <BinaryAddition/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Subtraction
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <BinarySubtraction/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Multiplication
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <BinaryMultiplication/>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Division
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <BinaryDivision/>
                                <Button className={'binary-arith-next-button'} onClick={this.props.nextTab}>Next</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default BinaryCourseArithmeticTab;