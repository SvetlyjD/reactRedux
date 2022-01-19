import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Header from './Component/Header';
import { createStore } from "redux";
import { Provider } from 'react-redux';

// const defaultState = {
//   cash: 0,
// }

// const reducer = (state = defaultState, action) => {                       // функция, которую передаем в стор
//   switch (action.type) {
//     case "ADD_CASH":
//       return { ...state, cach: state.cach + action.payload }
//     case "GET_CASH":
//       return { ...state, cach: state.cach - action.payload }
//     default:
//       return state
//   }
// }

// const store = createStore(reducer);                                    // создаем стор



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Header></Header>
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
