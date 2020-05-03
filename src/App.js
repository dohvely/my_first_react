import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Main from './views/Main'
import MovieList from './views/MovieList'
import './App.css';


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/movieList" component={MovieList} />
    </HashRouter>
  );
}

export default App;
