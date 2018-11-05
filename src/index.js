import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

store.subscribe(renderApp);
renderApp();

serviceWorker.unregister();
