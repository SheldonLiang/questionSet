import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button } from 'reactstrap';

import * as actionCreators from '../../store/actions/action';

class Logout extends Component {
    render() {
        if(!this.props.loggedIn) {
            return (
                <h1>Please Log In</h1>
            );
        }
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Log Out</h1>
                    <p className="lead">Are you sure to log out?</p>
                    <hr className="my-2" />
                    <p className="lead">
                        <Button color="primary" onClick={() => {this.props.onLogOut(); this.props.history.push('/');}}>Log Out</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.usr.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(actionCreators.logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);