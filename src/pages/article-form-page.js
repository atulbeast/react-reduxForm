import React, { Component} from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { saveArticle,updateArticle,editArticle } from '../actions/article-actions';
import { Redirect } from 'react-router-dom';
import ArticleForm from '../components/article-form';



class ArticleFormPage extends React.Component{
    state={
        redirect:false
      }
    componentDidMount(){
        const {id}=this.props.match.params;
        if(id)
        this.props.editArticle(id);
    }

    handleSubmit=(data)=>{
        (!data.id)? this.props.saveArticle(data).then(response => this.setState({ redirect: true }))
        .catch(err => {
           throw new SubmissionError (this.props.errors)
      }) : this.props.updateArticle(data).then(response => this.setState({ redirect: true }))
      .catch(err => {
         throw new SubmissionError(this.props.errors)
    });
    }
    render(){
        const {article,loading,errors}= this.props;
        let data={}
        if( !(Object.keys(article).length === 0 && article.constructor === Object))
        {
            data={id: article.id, description: article.attributes.description, title: article.attributes.title}
        }
        else
        data={id: 0, description: '', title: ''}
        const renderRedirect = () => {
            if (this.state.redirect) {
              return <Redirect to='/articles' />
            }
          }
        return(<div>
              {renderRedirect()}
              <ArticleForm article={data} submitForm={this.handleSubmit} loading={loading} errors={errors} />
            </div>);
    }
}
function mapStateToProps(state) {
    return {
        article: state.articleStore.article,
        loading: state.articleStore.loading,
        errors: state.articleStore.errors
    }
  }
export default connect(mapStateToProps, {saveArticle,updateArticle,editArticle})(ArticleFormPage);
