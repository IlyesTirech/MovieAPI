import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {loadMovies} from './actions/moviesAction'
import Nav from './components/Nav'
import GlobalStyles from './GlobalStyles'
import Search from './components/Search'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  })
  return (
    <div>
      <GlobalStyles/>
     <Nav/>
     <Search/>
    </div>
  );
}

export default App;

