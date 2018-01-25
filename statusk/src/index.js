import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';


const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));


ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
