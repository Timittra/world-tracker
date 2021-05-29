import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Landings from './components/Home/Landings';
import store from './store'; 
import Country from './components/Home/Country';


// function App() {
class App extends Component {
    render() {
  return (
    <Provider store={store}>
    <Router>
    <div>
      <Header />
      <Route exact path="/" component={Landings} />
      <Route exact path="/country/:id" component={Country} />
      <Footer />
    </div>
  </Router>
  </Provider>
  );
}
}

export default App;
