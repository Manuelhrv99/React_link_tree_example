import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Provider } from 'react-redux';

/*let store;

if (window.__REDUX_DEVTOOLS_EXTENSION__) 
{
  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__());
} 
else 
{
  store = createStore(rootReducer);
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();