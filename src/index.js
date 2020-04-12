import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* State Imports */
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
/* State Imports */

/*
1.Import
2.Create Store
3.Create Reducer, Pass Reducer to Store => (reducer has action and payload)
4. Wrap App with Provider and pass Store
5.In component use "connect" to connect HOC export default connect(mapStateToProps)(component)
mapStateToProps = (state) => {
  //object returns state
return {
    obj:state.obj
  }
}
5a.State can be accessible via props now
*/
const store = createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
