import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UncontrolledAlert, Button, Col, Row } from 'reactstrap';

import * as actionCreators from '../../store/actions/action';

class Home extends Component {
    clicked = (tech) => {
        this.props.onSelectTech(tech);
        this.props.history.push('/questions/' + tech);
    };

    render() {
        return (
            (!this.props.loggedIn && <h1>Please Log In</h1>)
            ||
            <div className="Home">
                <UncontrolledAlert color="info">Welcom {this.props.username}</UncontrolledAlert>
                <Row>
                    <Col xl="3" lg="2" md="2" sm="2" xs="0" ></Col>
                    <Col xl="6" lg="8" md="8" sm="8" xs="12" id="btns" >
                        <Button onClick={() => { this.clicked('html') }} color="primary" size="lg">HTML</Button>{' '}
                        <Button onClick={() => { this.clicked('css') }} color="secondary" size="lg">CSS</Button>{' '}
                        <Button onClick={() => { this.clicked('javascript') }} color="success" size="lg">JAVASCRIPT</Button>{' '}
                        <Button onClick={() => { this.clicked('react') }} color="info" size="lg">REACT</Button>{' '}
                    </Col>
                    <Col xl="3" lg="2" md="2" sm="2" xs="0" ></Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.usr.isLoggedIn,
        username: state.usr.userName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectTech: (tech) => dispatch(actionCreators.selectTech(tech))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);