import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Label, Input, Collapse, Button, CardBody, Card } from 'reactstrap';

import * as actionCreators from '../../store/actions/action';

class QuestionDetail extends Component {
    state = {
        collapse: false
    }

    toggle = () => this.setState({ collapse: !this.state.collapse });

    clicked = (changeId) => {
        this.props.onClickOtherQuestion(changeId);
        this.props.history.push('/questions/' + this.props.tech + '/' + (this.props.id+changeId));
    }

    render() {
        if(!this.props.loggedIn) {
            return (
                <h1>Please Log In</h1>
            );
        }
        const question = this.props.questions[this.props.id - 1];
        return (
            <div>
                <h1>{question.questionID}. {question.question}</h1>
                <Label>Answer here:</Label>
                <Input type="textarea" />
                <Button disabled={question.questionID === 1} color="secondary" onClick={() => this.clicked(-1)} style={{ margin: '1rem' }}>Previous</Button>
                <Button color="primary" onClick={this.toggle} style={{ margin: '1rem' }}>Suggested Answer</Button>
                <Button disabled={question.questionID === this.props.questions.length} color="secondary" onClick={() => this.clicked(1)} style={{ margin: '1rem' }}>Next</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>{question.answer}</CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.usr.isLoggedIn,
        tech: state.qus.techStack,
        questions: state.qus.questions,
        id: state.qus.questionId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickOtherQuestion: (changeId) => dispatch(actionCreators.clickOtherQuestion(changeId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);