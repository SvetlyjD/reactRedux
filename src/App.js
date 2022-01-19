import React from 'react';
import './App.css';
import Main from './Pages/Main';
import Slider from './Pages/Slider';
import { Route, Routes } from "react-router-dom"
import { createStore } from 'redux';               //создаем хранилище
import { Provider } from 'react-redux';          //

const store = createStore(rootReducer, initialState);

export default class App extends React.Component {

  render() {

    return (
      < div >
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/Slider" element={<Slider />} />
        </Routes>

      </div >
    )
  }
}


