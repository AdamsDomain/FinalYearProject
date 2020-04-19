import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../AppNavbar';
import {Tab, Tabs, Nav, Row, Col, Jumbotron} from 'react-bootstrap';
import BinaryCourseIntroTab from './BinaryCourseIntroTab';
import BinaryCourseArithmeticTab from './BinaryCourseArithmeticTab';
import BinaryCourseConversionsTab from './BinaryCourseConversionsTab';

class BinaryCourse extends Component{
    constructor(props) {
        super(props);
        this.state = {key: 'intro'};
        this.handleSelect = this.handleSelect.bind(this);
        this.binaryNextTab = this.binaryNextTab.bind(this);
    }

    handleSelect(key){
        this.setState({key:key});
    }

    binaryNextTab(){
        (this.state.key === "intro") ? this.setState({key:"Arithmetic"}) : this.setState({key:"Conversions"});
    }

    render() {
        return(
            <div>
                <AppNavbar/>

                    <div className="binary-course-tabs-container">

                            <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={k => this.handleSelect(k)}>
                                <Tab eventKey="intro" title="Introduction">
                                    <BinaryCourseIntroTab nextTab={this.binaryNextTab}/>
                                </Tab>
                                <Tab eventKey="Arithmetic" title="Arithmetic">
                                    <BinaryCourseArithmeticTab nextTab={this.binaryNextTab}/>
                                </Tab>
                                <Tab eventKey="Conversions" title="Conversions" >
                                    <BinaryCourseConversionsTab/>
                                </Tab>
                            </Tabs>

                    </div>

            </div>
        )
    }
}

export default BinaryCourse;