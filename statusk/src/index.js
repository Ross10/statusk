import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware   } from 'redux';
import rootReducer from './reducers/index';
import ReduxThunk from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
store.subscribe(() => console.log('store', store.getState()));


ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
