import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Login';
import Logon from './Logon';
import Home from '../Questions/Home';
import Questions from '../Questions/Questions';
import Welcome from '../../components/Welcome/Welcome';
import Head from '../../components/Head/Head';
import QuestionDetail from '../../containers/QuestionDetail/QuestionDetail';
import Logout from './Logout';

class Main extends Component {
    state = {
        collapsed: true
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div className="Main">
                <Head loggedIn={this.props.isLoggedIn} clicked={this.toggleNavbar} isOpen={!this.state.collapsed} tech={this.props.tech} />
                <Route path="/" exact component={Welcome} />
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/logon" component={Logon} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/questions/*/*" component={QuestionDetail} />
                    <Route path="/questions/*" exact component={Questions} />
                    <Route path="/logout" exact component={Logout} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.usr.isLoggedIn,
        username: state.usr.userName,
        tech: state.qus.techStack
    };
};

export default withRouter(connect(mapStateToProps)(Main));
