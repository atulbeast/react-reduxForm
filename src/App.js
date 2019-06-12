import React, { Component } from 'react';
import { NavLink, } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import MyRoutes from './routes';
class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <h1>Demo Site</h1>
        </div>
        <MyRoutes/>
      </Container>
    );
  }
}

export default App;
