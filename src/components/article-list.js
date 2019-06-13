import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ContactCard from './contact-card';

const ArticleList=({articles, loading, errors,deleteArticle})=>{
   
  const loadingMessage = (
      <Message icon info>
        <Icon name='circle notched' loading />
        <Message.Content>
           <Message.Header>Just one second</Message.Header>
           We are fetching that content for you.
       </Message.Content>
      </Message>
    )

    const emptyMessage = (
      <Message icon info>
        <Icon name='warning circle' />
        <Message.Content>
           <Message.Header>No Contacts Found</Message.Header>
           <p>Add some new contacts to get started.</p>
           <Link to={'/articles/new'} className="ui button primary">Add New Contact</Link>
       </Message.Content>
      </Message>
    )

    const timeoutMessage = (
      <Message icon negative>
        <Icon name='wait' />
        <Message.Content>
           <Message.Header>{errors.global}</Message.Header>
           Is the backend server running?
       </Message.Content>
      </Message>
    )
    
  const cards = () => {
    return articles.map(contact => {
      return (
        <ContactCard key={contact.id} deleteArticle={deleteArticle} id={contact.id} article={contact.attributes} />
      )
    });
  }

  const articleList = (
    <Card.Group>
      { cards() }
    </Card.Group>
  );

return(
  <div>
    { loading && loadingMessage }
    { articles.length === 0 && !loading  && !errors.global && emptyMessage }
    { errors.global && timeoutMessage }
    { articles.length > 0 && articleList }
  </div>
);
}

export default ArticleList;
