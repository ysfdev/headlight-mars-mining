import React, { Component } from 'react';
import {Header, Container, Message} from 'semantic-ui-react';
import './styles.css';

class App extends Component {
  render() {
    return (
      <Container className="App_container">
        <div>
          <Header as='h1' textAlign='center' className='App_header'>
            Headlight Mass Service
          </Header>
          <Message
            className="infoMessage"
            icon='info'
            header='Service Under Construction'
            content="The Mass Service Data UI it's on development. Please check back later..."
          />
        </div>
      </Container>
    );
  }
}

export default App;
