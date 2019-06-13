import React, { Component} from 'react';
import { connect } from 'react-redux';
import ArticleList from '../components/article-list';
import { allArticles, deleteArticle } from '../actions/article-actions';
import {Icon, Header} from 'semantic-ui-react';





class ArticlePage extends React.Component{
    componentDidMount(){
        this.props.allArticles();
    }

    deleteArticle=(id)=>{
        this.props.deleteArticle(id);
    }
    addPage=()=>{
        this.props.history.push('/article/add');
    }
    render(){

        const {articles,loading,errors}= this.props;
        return(<div>
         <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular onClick={this.addPage} />
            <Header.Content>Click above to add article</Header.Content>
         </Header>
        <ArticleList articles={articles} deleteArticle={this.deleteArticle} loading={loading} errors={errors} />
        </div>);
    }
}
function mapStateToProps(state) {
    return {
        articles : state.articleStore.articles,
        loading: state.articleStore.loading,
        errors: state.articleStore.errors
    }
  }
export default connect(mapStateToProps, {allArticles,deleteArticle})(ArticlePage);
