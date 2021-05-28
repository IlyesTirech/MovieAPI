import React from 'react'
import { Switch, Route } from "react-router-dom";

// Comps
import Home from "./pages/Home"
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Popular from "./pages/PopularPage";
import TopRated from "./pages/TopRatedPage";
import UpComing from "./pages/UpComingPage";
import MovieDetails from './components/MovieDetails';
import SearchedPage from './pages/SearchedPage';



const Content = () => {
        
    return (
        <div>
            <Switch>
                
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route  path="/contact">
                    <Contact/>
                </Route>
                <Route  path="/details/:id">
                    <MovieDetails/>
                </Route>
                <Route  path="/popular">
                    <Popular/>
                </Route>
                <Route  path="/toprated">
                    <TopRated/>
                </Route>
                <Route  path="/upcoming">
                    <UpComing/>
                </Route>
                <Route  path="/searched">
                    <SearchedPage/>
                </Route>

            </Switch>
        </div>
    )
}

export default Content
