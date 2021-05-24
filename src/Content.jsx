import React from 'react'
import { Switch, Route } from "react-router-dom";

// Comps
import Home from "./pages/Home"
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Details from "./pages/DetailsPage";
import Popular from "./pages/PopularPage";
import TopRated from "./pages/TopRatedPage";
import UpComing from "./pages/UpComingPage";



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
                <Route  path="/details">
                    <Details/>
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

            </Switch>
        </div>
    )
}

export default Content
