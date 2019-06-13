
import React, { Component} from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import {validate, renderField} from '../common/extensions';
import { Field, reduxForm } from 'redux-form';

class ArticleForm extends Component {

    componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
      const { article } = nextProps;
      if(article.id !== this.props.article.id) { // Initialize form only once
        this.props.initialize(article);
      }
    }
  
    
  
    render() {
      const { handleSubmit, pristine, submitting, loading, article,submitForm } = this.props;
      return (
        <Grid centered columns={2}>
          <Grid.Column>
            <h1 style={{marginTop:"1em"}}>{article.id ? 'Edit Article' : 'Add Article'}</h1>
            <Form onSubmit={handleSubmit(submitForm)} loading={loading}>
              <Field name="title" type="text" component={renderField} label="Title"/>
              <Field name="description" type="text" component={renderField} label="Description"/>
              <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
            </Form>
          </Grid.Column>
        </Grid>
      )
    }
  }
  
  export default reduxForm({form: 'article', validate })(ArticleForm);