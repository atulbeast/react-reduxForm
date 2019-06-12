import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form';
import {validate, renderField} from '../common/extensions';
import { Link } from 'react-router-dom';

 const LoginForm=({ pristine, submitting, loading, user,error ,onSubmit,handleSubmit})=> 
{  

 
  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
  <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h1' color='teal' textAlign='center'>
        <Image src='/user.jpeg' /> <h2 style={{marginTop:"1em"}}>Login</h2>
         
      </Header>
      <Form size='large' onSubmit={handleSubmit(onSubmit)} loading={loading}>
        <Segment stacked>
          <Field fluid icon='user' type="text" iconPosition='left' name="email" component={renderField} label='E-mail address' />
          <Field
            fluid
            icon='lock'
            iconPosition='left'
            name="password"
            label='Password'
            type='password'
            component={renderField}
          />
          <Button color='teal' fluid size='large'  primary type='submit' disabled={pristine || submitting}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to={`/register`} >Sign Up</Link> 
      </Message>
    </Grid.Column>
  </Grid>
);
}


export default reduxForm({form: 'user', validate})(LoginForm);