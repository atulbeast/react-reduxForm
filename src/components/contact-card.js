import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function ContactCard({article, id, deleteArticle}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
         
          <Icon name='user outline'/> {article.title}
        </Card.Header>
        <Card.Description>
          <p><Icon name='book'/> {article.description}</p>
         
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/article/edit/${id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteArticle(id)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ContactCard.propTypes = {
  article: React.PropTypes.object.isRequired
}
