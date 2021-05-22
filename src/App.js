import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {loadMovies} from './actions/moviesAction'
import Nav from './components/Nav'
import GlobalStyles from './GlobalStyles'
import Search from './components/Search'
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Content"



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  })
  return (
    <Router>
      <div>
        <GlobalStyles/>
        <Nav/>
        <Search/>
        <Content/>
      </div>
    </Router>
  );
}

export default App;

