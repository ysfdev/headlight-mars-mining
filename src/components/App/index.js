import React, { Component } from 'react';
import {Header, Container} from 'semantic-ui-react';
import MineralTracker from '../../containers/MineralTracker';
import './styles.css';

class App extends Component {
  render() {
    return (
      <Container fluid className="App_container">
        <Header as='h1' textAlign='center' className='App_header'>
          Headlight Mars Mining Monitor
        </Header>
        <MineralTracker></MineralTracker>
      </Container>
    );
  }
}

export default App;
