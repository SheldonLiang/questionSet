import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';

class Logon extends Component {
    render() {
        return (
            <div className="Enter">
                <h1>LOG ON</h1>
                <Form>
                    <FormGroup row>
                        <Label sm={2}>e-mail:</Label>
                        <Col sm={10}>
                            <Input type="email" name="username" required placeholder="e-mail" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>password:</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" required placeholder="password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>confirm password:</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" required placeholder="confirm password" />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ offset: 2 }}>
                            <Button>Log On</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Logon;