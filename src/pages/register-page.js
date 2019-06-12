import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchContacts, saveContact,newContact } from '../actions/user-actions';
import { SubmissionError } from 'redux-form';
import RegisterForm from '../components/register-form';

class RegisterPage extends Component {

    componentDidMount = () => {
        const { _id } = this.props.match.params;
        if(_id){
          this.props.fetchContact(_id)
        } else {
          this.props.newContact();
        }
      }
    
      handleSubmit = (contact) => {
        
        if(!contact._id) {
          return this.props.saveContact(contact)
            .then(response => this.setState({ redirect:true }))
            .catch(err => {
               throw new SubmissionError(this.props.errors)
             })
        } else {
          return this.props.updateContact(contact)
            .then(response => this.setState({ redirect:true }))
            .catch(err => {
               throw new SubmissionError(this.props.errors)
             })
        }
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

export default connect(mapStateToProps, {fetchContacts, saveContact,newContact})(RegisterPage);
