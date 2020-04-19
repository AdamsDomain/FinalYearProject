import React, { Component } from 'react';
import '../App.css';
import {Accordion, Card, Table, Form, Row, Col, Button} from 'react-bootstrap';
import LTab from '../LTab';

class BinaryCourseIntroTab extends Component{
    constructor(props) {
        super(props);
        this.state={binaryValue:0, decimalValue:0}
        //this.addBinaryNumber = this.addBinaryNumber.bind(this);
        this.subtractBinaryNumber = this.subtractBinaryNumber.bind(this);
    }

    addBinaryNumber(){
        var dVal = this.state.decimalValue;
        dVal++;
        this.setState({decimalValue:dVal});
        var str = dVal.toString();
        var binary = (+str).toString(2);
        this.setState({binaryValue:binary});
    }

    subtractBinaryNumber(){
        var dVal = this.state.decimalValue;
        (dVal !== 0) ? dVal-- : dVal=0;
        this.setState({decimalValue:dVal});
        var str = dVal.toString();
        var binary = (+str).toString(2);
        this.setState({binaryValue:binary});
    }

    render(){
        return(
            <div>
                <Accordion defaultActiveKey="">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Decimal
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <span>To understand the different number systems that are present throughout computer science we must first
                                be aware of a number system we all know: Decimal!<br/>
                                    Decimal is a base 10 number system: There are only 10 digits used in decimal: 0 -> 9
                                    and each position of a number in decimal represents a power to the base 10<br/><br/>
                                    Let's look at an example: 2468<br/><br/>
                                    2  &nbsp;->  &nbsp;Thousands position &emsp;->&emsp;2 x 10<span className={'power'}>3</span> &emsp;&emsp;&emsp;->&emsp;&emsp;&emsp;2000 <br/>
                                    <LTab size={'L'}/><LTab size={'M'}/><LTab size={'S'}/>&emsp;&nbsp;&nbsp;&emsp;&emsp;+<br/>
                                    4  &nbsp;->  &nbsp;Hundreds position &emsp;&nbsp;&thinsp;->&emsp;4 x 10<span className={'power'}>2</span> &emsp;&emsp;&emsp;->&emsp;&emsp;&emsp;&nbsp;&thinsp;400<br/>
                                    <LTab size={'L'}/><LTab size={'M'}/><LTab size={'S'}/>&emsp;&nbsp;&nbsp;&emsp;&emsp;+ <LTab size={'S'}/>=<LTab size={'S'}/> 2468 <br/>
                                    6  &nbsp;->  &nbsp;Tens position <LTab size={'S'}/>&nbsp;&nbsp;&nbsp;->&emsp;6 x 10<span className={'power'}>1</span> &emsp;&emsp;&emsp;->&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&thinsp;60<br/>
                                    <LTab size={'L'}/><LTab size={'M'}/><LTab size={'S'}/>&emsp;&nbsp;&nbsp;&emsp;&emsp;+<br/>
                                    8  &nbsp;->  &nbsp;Units position <LTab size={'S'}/>&nbsp;&nbsp;->&emsp;8 x 10<span className={'power'}>0</span> &emsp;&emsp;&emsp;->&emsp;&emsp;&emsp;&emsp;&nbsp;&thinsp;8 <br/>
                                </span>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Binary
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <span>
                                    The first number system we will learn about is Binary!<br/>
                                    It is a base 2 number system. There are only 2 digits in the system: 0 and 1. &nbsp;&nbsp;Example of a Binary number: 110010<br/>
                                    Each position of a number in Binary represents a power to the base 2. &emsp;First digit is 2<span className={'power'}>0</span>&emsp;Second digit is 2
                                    <span className={'power'}>1</span>&emsp;Third digit is 2<span className={'power'}>2</span>&emsp;...and so on.<br/>
                                    <br/>
                                    <Table striped bordered size="sm">
                                        <thead>
                                            <tr>
                                                <th>Position</th>
                                                <th>5</th>
                                                <th>4</th>
                                                <th>3</th>
                                                <th>2</th>
                                                <th>1</th>
                                                <th>0</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Power</td>
                                                <td>2<span className={'power'}>5</span></td>
                                                <td>2<span className={'power'}>4</span></td>
                                                <td>2<span className={'power'}>3</span></td>
                                                <td>2<span className={'power'}>2</span></td>
                                                <td>2<span className={'power'}>1</span></td>
                                                <td>2<span className={'power'}>0</span></td>
                                            </tr>
                                            <tr>
                                                <td>Value</td>
                                                <td>32</td>
                                                <td>16</td>
                                                <td>8</td>
                                                <td>4</td>
                                                <td>2</td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                </span>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Counting in Binary
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <span>
                                    Because Binary only has two digits: 0 and 1, counting is a simple process.<br/>
                                    A 0 goes to a 1 and a 1 goes to a 10<br/>
                                    0 &emsp;&nbsp;&nbsp; -> &emsp;&emsp;1 <br/>
                                    1 &emsp;&nbsp;&nbsp; -> &emsp;&nbsp;&nbsp;10 &nbsp; The 1 goes to a 0 and a 1 is added on the left<br/>
                                    10 &emsp; -> &emsp;&nbsp;&nbsp;11 <br/>
                                    11 &emsp; -> &emsp;100 &nbsp; The right 1 goes to 0, adding a 1 to the left, which is already a 1, so that goes to 0 and adds 1 on its left.<br/>&nbsp;
                                    <br/>Use this incrementor to see how Binary increases and decreases:<br/>&nbsp;
                                    <div className={'binary-end-wrapper'}>
                                        <Form className={'binary-incrementor'}>
                                            <Row>
                                                <Col>
                                                    <Form.Control className={'binary-form'} readOnly value={this.state.binaryValue } />
                                                </Col>
                                            </Row>
                                            <br/>
                                            <Row>
                                                <Col>
                                                    <Button variant="outline-secondary" onClick={()=>this.addBinaryNumber()}>Add</Button>
                                                </Col>
                                                <Col>
                                                    <Button className={'binary-incrementor-sub'} variant="outline-secondary" onClick={()=>this.subtractBinaryNumber()}>Subtract</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                        <Button className={'binary-next-button'} onClick={this.props.nextTab}>Next</Button>
                                    </div>
                                </span>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default BinaryCourseIntroTab;