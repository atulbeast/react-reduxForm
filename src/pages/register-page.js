import React, { Component} from 'react';
import { connect } from 'react-redux';
import {  saveUser } from '../actions/user-actions';
import { SubmissionError } from 'redux-form';
import RegisterForm from '../components/register-form';

class RegisterPage extends Component {

 
      handleSubmit = (contact) => {
        
       
          return this.props.saveUser(contact)
            .then(response => this.setState({ redirect:true }))
            .catch(err => {
               throw new SubmissionError(this.props.errors)
             })
       
      }

  render() {
    return (
      <div>
        <h1>Create new account</h1>
        <RegisterForm user={this.props.user} onSubmit={this.handleSubmit} loading={this.props.loading} errors={this.props.errors} />
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      contacts : state.contactStore.contacts,
      loading: state.contactStore.loading,
      errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, { saveUser})(RegisterPage);
