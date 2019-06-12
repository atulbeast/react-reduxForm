import {Form} from 'semantic-ui-react'
import React from 'react'
import classnames from 'classnames';
export const validate = (values) => {
    const errors = {};
    if(!values.name) {
      errors.name = {
        message: 'You need to provide First Name'
      }
    }
    if(!values.phone) {
      errors.phone = {
        message: 'You need to provide a Phone number'
      }
    } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
      errors.phone = {
        message: 'Phone number must be in International format'
      }
    }
    if(!values.password_confirmation){
      errors.password_confirmation = {
        message: "Confirm Password field empty"
      }
    }
    else if( values.password!=values.password_confirmation) {
      errors.password_confirmation = {
        message: "Password doesn't match"
      }
    }
    
    if(!values.password) {
      errors.password = {
        message: 'You need to provide a Password'
      }
    } else if(!/^(?=.*\d).{4,15}$/.test(values.password)) {
      errors.password = {
        message: 'Password must be between 4 and 15 digits long and include at least one numeric digit.'
      }
    }
    if(!values.email) {
      errors.email = {
        message: 'You need to provide an Email address'
      }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = {
        message: 'Invalid email address'
      }
    }
    return errors;
  }



  export const  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )