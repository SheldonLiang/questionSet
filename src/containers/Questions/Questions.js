import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import LocalQuestionSet from '../../assets/API/questionSet';
import Question from '../../components/Question/Question';
import QuestionTab from '../../components/Question/QuestionTab';
import * as actionCreators from '../../store/actions/action';

class Questions extends Component {
    state = {
        questionsObj: null
    };

    componentDidMount() {
        axios.get('link') // Get data from server or local
            .then(response => {
                // Get the questions data from server
                const serverQuestions = response.data.html;
                this.props.onLoadQuestions(serverQuestions);
            })
            .catch(error => {
                console.log(error);
                // Get the questions data from local fake api
                const localQuestions = LocalQuestionSet;
                this.setState({ questionsObj: localQuestions });
                this.props.onLoadQuestions(localQuestions[this.props.tech]);
            });
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps", nextProps);
        this.props.onLoadQuestions(this.state.questionsObj[nextProps.tech]);
    }

    questionSelectedHandler = (id) => {
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push('/questions/' + this.props.tech + '/' + id);
        this.props.onSelectQuestion(id);
    }

    tabSelectedHandler = (tabId) => {
        this.props.history.push('/questions/' + tabId);
        this.props.onSelectTech(tabId);
    }

    render() {
        if(!this.props.loggedIn) {
            return (
                <h1>Please Log In</h1>
            );
        }
        let questions = this.props.questions.map(question =>
            <Question
                key={question.questionID}
                id={question.questionID}
                question={question.question}
                clicked={() => this.questionSelectedHandler(question.questionID)}
            />
        );
        console.log("current techstack: ", this.props.tech);
        console.log("current questions: ", this.props.questions);

        return (
            <div className="Html">
                <QuestionTab
                    activeTab={this.props.tech}
                    clicked={this.tabSelectedHandler}
                >{questions}</QuestionTab>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.usr.isLoggedIn,
        tech: state.qus.techStack,
        questions: state.qus.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectTech: (tech) => dispatch(actionCreators.selectTech(tech)),
        onLoadQuestions: (questions) => dispatch(actionCreators.loadQuestions(questions)),
        onSelectQuestion: (id) => dispatch(actionCreators.selectQuestion(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
