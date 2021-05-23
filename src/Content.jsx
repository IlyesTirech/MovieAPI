import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"

const Content = () => {
    // Pages will go here
    
    return (
        <div>
            <Switch>
                
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}

export default Content
