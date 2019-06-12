import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form';
import {validate, renderField} from '../common/extensions';

import { Link } from 'react-router-dom';

class RegisterForm extends React.Component{
  
  
  
  
  render(){
 
    const {  pristine, submitting, loading }=this.props;
  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
  


    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h1' color='teal' textAlign='center'>
        <Image src='/user.jpeg' /> <h2 style={{marginTop:"1em"}}>Register</h2>
         
      </Header>
      <Form size='large' onSubmit={this.props.handleSubmit(this.props.onSubmit)} loading={loading}>
        <Segment stacked>
        <Field fluid icon='user' type="text" iconPosition='left' name="name" component={renderField} label='Name' />
          <Field  type="text" name="email" component={renderField} label='E-mail address' />
          <Field
            name="password"
            label='Password'
            type='password'
            component={renderField}
          />
          <Field
            name="password_confirmation"
            label='Confirm Password'
            type='password'
            component={renderField}
          />

          <Button color='teal' fluid size='large'  primary type='submit' disabled={pristine || submitting}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        already registered? <Link to={`/login`} >Login</Link> 
      </Message>
    </Grid.Column>
  </Grid>
);
}
}

export default reduxForm({form: 'user', validate})(RegisterForm);