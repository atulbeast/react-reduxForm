import React, { Component} from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth-actions';
import { SubmissionError } from 'redux-form';
import LoginForm from '../components/login-form';
import { Redirect } from 'react-router-dom';

class LoginPage extends Component {
  state={
    redirect:false
  }
  onSubmit = (user) => {
           this.props.loginUser(user)
            .then(response => this.setState({ redirect: true }))
            .catch(err => {
               throw new SubmissionError(this.props.errors)
          });
        }

  render() {
    const renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/home' />
      }
    }
    return (
      <div>
        <h1>Login</h1>
        {renderRedirect()}
        <LoginForm user={this.props.user} onSubmit={this.onSubmit} loading={this.props.loading} errors={this.props.errors} />
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      user : state.contactStore.user,
      loading: state.contactStore.loading,
      errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {loginUser})(LoginPage);
