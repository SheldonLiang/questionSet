import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';

import * as actionCreators from '../../store/actions/action';

class Login extends Component {
    state = {
        name: this.props.username
    }
    render() {
        return (
            <div className="Enter">
                <h1>LOG IN</h1>
                <Form>
                    <FormGroup row>
                        <Label sm={2}>e-mail:</Label>
                        <Col sm={10}>
                            <Input type="email" name="username" required onChange={(event) => this.setState({ name: event.target.value })} placeholder="e-mail" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>password:</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" required placeholder="password" />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ offset: 2 }}>
                            <Button onClick={() => {this.props.onLogIn(this.state.name, true); this.props.history.push('/home')}}>Log In</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.usr.userName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogIn: (name, isLogged) => dispatch(actionCreators.login(name, isLogged))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);